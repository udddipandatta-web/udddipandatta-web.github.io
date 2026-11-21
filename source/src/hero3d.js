import * as THREE from 'three';

const VERT = /* glsl */ `
  uniform float uBend;
  uniform float uLift;
  uniform float uReflect;
  varying vec2 vUv;
  void main() {
    vUv = uv;
    vec3 p = position;
    // gentle concave bend toward the viewer, like a sheet of glass
    p.z -= (p.x * p.x) * uBend;
    p.y += uLift * (1.0 - uReflect * 2.0);
    gl_Position = projectionMatrix * modelViewMatrix * vec4(p, 1.0);
  }
`;

const FRAG = /* glsl */ `
  uniform sampler2D uTex;
  uniform vec2 uPlane;
  uniform vec2 uImage;
  uniform float uOpacity;
  uniform float uDim;
  uniform float uRadius;
  uniform float uReflect;
  uniform float uActive;
  uniform vec3 uMood;
  varying vec2 vUv;

  float roundedBox(vec2 p, vec2 b, float r) {
    vec2 q = abs(p) - b + r;
    return length(max(q, 0.0)) + min(max(q.x, q.y), 0.0) - r;
  }

  void main() {
    vec2 uv = vUv;
    if (uReflect > 0.5) uv.y = 1.0 - uv.y;

    // object-fit: cover
    float pr = uPlane.x / uPlane.y;
    float ir = uImage.x / uImage.y;
    vec2 s = pr > ir ? vec2(1.0, ir / pr) : vec2(pr / ir, 1.0);
    vec2 tuv = (uv - 0.5) * s + 0.5;
    vec3 col = texture2D(uTex, tuv).rgb;

    // rounded corners with soft edge
    vec2 p = (vUv - 0.5) * uPlane;
    float d = roundedBox(p, uPlane * 0.5, uRadius);
    float mask = 1.0 - smoothstep(-0.006, 0.006, d);

    // thin luminous rim on the active card
    float rim = (1.0 - smoothstep(0.0, 0.018, abs(d + 0.012))) * uActive;
    col = mix(col, uMood, rim * 0.85);

    // fade neighbours toward the dark stage
    col *= mix(1.0, 0.32, uDim);

    float a = mask * uOpacity;
    if (uReflect > 0.5) {
      // reflection: fade out quickly away from the floor line
      float f = smoothstep(0.55, 1.0, vUv.y);
      a *= f * 0.22;
    }
    if (a < 0.002) discard;
    gl_FragColor = vec4(col, a);
  }
`;

const lerp = (a, b, t) => a + (b - a) * t;
const damp = (a, b, lambda, dt) => lerp(a, b, 1 - Math.exp(-lambda * dt));

export function createRing(canvas, dishes, { mediaUrl, onChange, onOpen, onProgress }) {
  const renderer = new THREE.WebGLRenderer({ canvas, antialias: true, alpha: true, powerPreference: 'high-performance' });
  renderer.setClearColor(0x000000, 0);
  renderer.outputColorSpace = THREE.SRGBColorSpace;

  const scene = new THREE.Scene();
  const camera = new THREE.PerspectiveCamera(32, 1, 0.1, 100);
  const stage = new THREE.Group();
  const ring = new THREE.Group();
  stage.add(ring);
  scene.add(stage);

  const N = dishes.length;
  const STEP = (Math.PI * 2) / N;
  let R = 4.2;
  let CW = 1.62, CH = 2.16;

  const loader = new THREE.TextureLoader();
  const mood = new THREE.Color(dishes[0].mood.accent);
  const cards = [];
  let loaded = 0;

  const geo = new THREE.PlaneGeometry(1, 1, 40, 1);

  dishes.forEach((dish, i) => {
    const uniforms = {
      uTex: { value: null },
      uPlane: { value: new THREE.Vector2(CW, CH) },
      uImage: { value: new THREE.Vector2(1, 1) },
      uOpacity: { value: 0 },
      uDim: { value: 1 },
      uRadius: { value: 0.12 },
      uReflect: { value: 0 },
      uActive: { value: 0 },
      uBend: { value: 0.05 },
      uLift: { value: 0 },
      uMood: { value: new THREE.Color(dish.mood.accent) },
    };
    const mat = new THREE.ShaderMaterial({ vertexShader: VERT, fragmentShader: FRAG, uniforms, transparent: true, depthWrite: false });
    const mesh = new THREE.Mesh(geo, mat);
    mesh.userData.index = i;

    const refUniforms = THREE.UniformsUtils.clone(uniforms);
    refUniforms.uReflect.value = 1;
    const refMat = new THREE.ShaderMaterial({ vertexShader: VERT, fragmentShader: FRAG, uniforms: refUniforms, transparent: true, depthWrite: false });
    const refl = new THREE.Mesh(geo, refMat);

    const holder = new THREE.Group();
    holder.add(mesh, refl);
    ring.add(holder);

    const img = dish.images[0];
    loader.load(mediaUrl(`sm/${img}.webp`), (tex) => {
      tex.colorSpace = THREE.SRGBColorSpace;
      tex.anisotropy = Math.min(8, renderer.capabilities.getMaxAnisotropy());
      tex.generateMipmaps = true;
      tex.minFilter = THREE.LinearMipmapLinearFilter;
      [uniforms, refUniforms].forEach((u) => {
        u.uTex.value = tex;
        u.uImage.value.set(tex.image.width, tex.image.height);
      });
      card.ready = true;
      loaded++;
      onProgress && onProgress(loaded / N);
    }, undefined, () => { loaded++; onProgress && onProgress(loaded / N); });

    const card = { mesh, refl, holder, uniforms, refUniforms, ready: false, hover: 0, show: 0 };
    cards.push(card);
  });

  // Floor halo under the active plate
  const haloMat = new THREE.ShaderMaterial({
    transparent: true, depthWrite: false, blending: THREE.AdditiveBlending,
    uniforms: { uColor: { value: mood.clone() }, uAlpha: { value: 0 } },
    vertexShader: `varying vec2 vUv; void main(){ vUv = uv; gl_Position = projectionMatrix * modelViewMatrix * vec4(position,1.0); }`,
    fragmentShader: `uniform vec3 uColor; uniform float uAlpha; varying vec2 vUv;
      void main(){ vec2 p = vUv - 0.5; float r = length(p) * 2.0;
        float ring = smoothstep(0.05, 0.0, abs(r - 0.8)) * 0.45;
        float glow = smoothstep(1.0, 0.0, r) * 0.22;
        gl_FragColor = vec4(uColor, (ring + glow) * uAlpha); }`,
  });
  const halo = new THREE.Mesh(new THREE.PlaneGeometry(1, 1), haloMat);
  halo.rotation.x = -Math.PI / 2;
  stage.add(halo);

  // Drifting embers
  const COUNT = 420;
  const pos = new Float32Array(COUNT * 3);
  const seed = new Float32Array(COUNT);
  for (let i = 0; i < COUNT; i++) {
    pos[i * 3] = (Math.random() - 0.5) * 16;
    pos[i * 3 + 1] = (Math.random() - 0.3) * 8;
    pos[i * 3 + 2] = (Math.random() - 0.5) * 12 - 3;
    seed[i] = Math.random();
  }
  const pGeo = new THREE.BufferGeometry();
  pGeo.setAttribute('position', new THREE.BufferAttribute(pos, 3));
  pGeo.setAttribute('aSeed', new THREE.BufferAttribute(seed, 1));
  const pMat = new THREE.ShaderMaterial({
    transparent: true, depthWrite: false, blending: THREE.AdditiveBlending,
    uniforms: { uTime: { value: 0 }, uColor: { value: mood.clone() }, uPx: { value: 1 } },
    vertexShader: `uniform float uTime; uniform float uPx; attribute float aSeed; varying float vA;
      void main(){ vec3 p = position; p.y += mod(uTime * (0.08 + aSeed * 0.12) + aSeed * 8.0, 8.0) - 2.0;
        p.x += sin(uTime * 0.3 + aSeed * 20.0) * 0.25;
        vec4 mv = modelViewMatrix * vec4(p, 1.0); gl_Position = projectionMatrix * mv;
        gl_PointSize = (1.0 + aSeed * 2.5) * uPx * (8.0 / -mv.z);
        vA = 0.25 + 0.75 * fract(aSeed * 7.13); }`,
    fragmentShader: `uniform vec3 uColor; varying float vA;
      void main(){ float d = length(gl_PointCoord - 0.5); float a = smoothstep(0.5, 0.0, d) * vA * 0.55; gl_FragColor = vec4(uColor, a); }`,
  });
  const points = new THREE.Points(pGeo, pMat);
  scene.add(points);

  // ---------- State ----------
  const state = {
    rot: -N * 0.5, // intro spin
    target: 0,
    vel: 0,
    dragging: false,
    moved: 0,
    lastX: 0,
    intro: 0,
    scroll: 0, // 0..1 hero scroll progress (smoothed)
    scrollTarget: 0,
    mx: 0, my: 0, smx: 0, smy: 0,
    active: 0,
    hover: -1,
    visible: true,
  };

  const activeIndex = () => ((Math.round(state.target) % N) + N) % N;

  function goTo(i) {
    const cur = Math.round(state.target);
    let diff = (((i - cur) % N) + N) % N;
    if (diff > N / 2) diff -= N;
    state.target = cur + diff;
  }
  function step(d) { state.target = Math.round(state.target) + d; }

  // ---------- Layout ----------
  function resize() {
    const w = canvas.clientWidth, h = canvas.clientHeight;
    const dpr = Math.min(window.devicePixelRatio || 1, 2);
    renderer.setPixelRatio(dpr);
    renderer.setSize(w, h, false);
    camera.aspect = w / h;
    const narrow = w < 700;
    CW = narrow ? 1.42 : 1.4;
    CH = narrow ? 1.9 : 1.86;
    R = narrow ? 3.2 : 3.8;
    camera.fov = narrow ? 44 : 32;
    camera.updateProjectionMatrix();
    cards.forEach((c) => {
      c.mesh.scale.set(CW, CH, 1);
      c.refl.scale.set(CW, CH, 1);
      c.refl.position.y = -CH - 0.04;
      c.uniforms.uPlane.value.set(CW, CH);
      c.refUniforms.uPlane.value.set(CW, CH);
    });
    halo.scale.set(CW * 2.2, CW * 2.2, 1);
    halo.position.set(0, -CH / 2 - 0.02, 0);
    pMat.uniforms.uPx.value = dpr * (h / 900);
  }
  window.addEventListener('resize', resize);
  resize();

  // ---------- Input ----------
  const ray = new THREE.Raycaster();
  const ndc = new THREE.Vector2();
  function pick(e) {
    const r = canvas.getBoundingClientRect();
    ndc.set(((e.clientX - r.left) / r.width) * 2 - 1, -((e.clientY - r.top) / r.height) * 2 + 1);
    ray.setFromCamera(ndc, camera);
    const hits = ray.intersectObjects(cards.map((c) => c.mesh), false).filter((h) => h.object.material.uniforms.uOpacity.value > 0.3);
    return hits.length ? hits[0].object.userData.index : -1;
  }

  canvas.addEventListener('pointerdown', (e) => {
    state.dragging = true;
    state.moved = 0;
    state.lastX = e.clientX;
    state.vel = 0;
    canvas.classList.add('dragging');
    canvas.setPointerCapture(e.pointerId);
  });
  canvas.addEventListener('pointermove', (e) => {
    const r = canvas.getBoundingClientRect();
    state.mx = (e.clientX - r.left) / r.width - 0.5;
    state.my = (e.clientY - r.top) / r.height - 0.5;
    if (state.dragging) {
      const dx = e.clientX - state.lastX;
      state.lastX = e.clientX;
      state.moved += Math.abs(dx);
      const k = 5.5 / r.width;
      state.target -= dx * k;
      state.vel = -dx * k;
    } else if (e.pointerType === 'mouse') {
      state.hover = pick(e);
      canvas.style.cursor = state.hover >= 0 ? 'pointer' : '';
    }
  });
  const end = (e) => {
    if (!state.dragging) return;
    state.dragging = false;
    canvas.classList.remove('dragging');
    if (state.moved < 6) {
      const i = pick(e);
      if (i >= 0) {
        if (i === activeIndex()) onOpen && onOpen(dishes[i].id);
        else goTo(i);
      }
    } else {
      // inertia then snap
      state.target = Math.round(state.target + state.vel * 6);
    }
  };
  canvas.addEventListener('pointerup', end);
  canvas.addEventListener('pointercancel', end);
  canvas.addEventListener('pointerleave', () => { state.hover = -1; });

  // ---------- Loop ----------
  const clock = new THREE.Clock();
  const tmpColor = new THREE.Color();
  let raf = 0;

  function frame() {
    raf = requestAnimationFrame(frame);
    const dt = Math.min(clock.getDelta(), 0.05);
    const t = clock.elapsedTime;
    if (!state.visible) return;

    state.rot = damp(state.rot, state.target, state.dragging ? 18 : 5.2, dt);
    state.scroll = damp(state.scroll, state.scrollTarget, 9, dt);
    state.smx = damp(state.smx, state.mx, 3, dt);
    state.smy = damp(state.smy, state.my, 3, dt);

    const ai = activeIndex();
    if (ai !== state.active) {
      state.active = ai;
      onChange && onChange(ai);
    }

    const s = state.scroll;
    const intro = state.intro;

    // camera: settles in on load, then rises and pulls back with scroll
    const narrow = canvas.clientWidth < 700;
    const baseZ = narrow ? 8.6 : 9.6;
    camera.position.set(
      state.smx * 0.6,
      0.25 + s * 2.6 - state.smy * 0.3,
      baseZ + (1 - intro) * 3 + s * 4.5
    );
    camera.lookAt(0, -0.25 - s * 0.4, -R * 0.35);

    stage.position.y = narrow ? -0.55 : -0.62;
    stage.rotation.x = s * 0.22;
    stage.rotation.z = Math.sin(t * 0.25) * 0.006;
    ring.position.z = -R;

    mood.lerp(tmpColor.set(dishes[ai].mood.accent), 1 - Math.exp(-3 * dt));
    haloMat.uniforms.uColor.value.copy(mood);
    haloMat.uniforms.uAlpha.value = intro * (1 - s * 0.6);
    pMat.uniforms.uColor.value.copy(mood);
    pMat.uniforms.uTime.value = t;
    points.rotation.y = state.rot * 0.02 + s * 0.4;

    const spin = state.rot;
    cards.forEach((c, i) => {
      let a = (i - spin) * STEP;
      a = Math.atan2(Math.sin(a), Math.cos(a)); // wrap to -PI..PI
      c.holder.position.set(Math.sin(a) * R, 0, Math.cos(a) * R);
      c.holder.rotation.y = a;

      const near = 1 - Math.min(Math.abs(a) / STEP, 1); // 1 when centred
      const visible = 1 - THREE.MathUtils.smoothstep(Math.abs(a), Math.PI * 0.42, Math.PI * 0.62);
      c.show = damp(c.show, c.ready ? 1 : 0, 4, dt);
      c.hover = damp(c.hover, state.hover === i ? 1 : 0, 8, dt);

      const op = visible * c.show * intro;
      const dim = 1 - Math.max(near, c.hover * 0.6);
      const lift = near * 0.035 + c.hover * 0.03 + Math.sin(t * 1.2 + i) * 0.008 * near;
      [c.uniforms, c.refUniforms].forEach((u) => {
        u.uOpacity.value = op;
        u.uDim.value = dim;
        u.uActive.value = near * near;
        u.uLift.value = lift;
        u.uBend.value = 0.28 + (1 - near) * 0.25;
      });
      c.mesh.renderOrder = Math.round(near * 10);
    });

    renderer.render(scene, camera);
  }
  frame();

  return {
    next: () => step(1),
    prev: () => step(-1),
    goTo,
    get active() { return activeIndex(); },
    setScroll(p) { state.scrollTarget = p; },
    setVisible(v) { state.visible = v; },
    intro(duration = 2.6) {
      const start = performance.now();
      const from = state.rot;
      state.target = 0;
      const tick = (now) => {
        const k = Math.min((now - start) / (duration * 1000), 1);
        const e = 1 - Math.pow(1 - k, 4);
        state.intro = e;
        if (k < 1) requestAnimationFrame(tick);
      };
      state.rot = from;
      requestAnimationFrame(tick);
    },
    dispose() { cancelAnimationFrame(raf); renderer.dispose(); },
  };
}
