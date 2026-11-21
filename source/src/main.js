import './style.css';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Lenis from 'lenis';
import data from './data.json';
import { createRing } from './hero3d.js';

gsap.registerPlugin(ScrollTrigger);

const $ = (s, el = document) => el.querySelector(s);
const $$ = (s, el = document) => [...el.querySelectorAll(s)];
const media = (p) => `./media/${p}`;
const sm = (n) => media(`sm/${n}.webp`);
const lg = (n) => media(`lg/${n}.webp`);
const vid = (n) => media(`video/${n}.mp4`);
const poster = (n) => media(`video/${n}.jpg`);
const pad = (n) => String(n).padStart(2, '0');
const reduce = matchMedia('(prefers-reduced-motion: reduce)').matches;
const root = document.documentElement;

const { cats, dishes, stats, journey, awards, skills } = data;
const featured = dishes.filter((d) => d.featured);
const byId = Object.fromEntries(dishes.map((d) => [d.id, d]));
// menu order = category order, then data order (matches the numbering on the original site)
const menuOrder = cats.flatMap((c) => dishes.filter((d) => d.category === c.id));

/* ---------------- Smooth scroll ---------------- */
const lenis = new Lenis({ duration: 1.15, easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)), smoothWheel: !reduce });
lenis.on('scroll', ScrollTrigger.update);
gsap.ticker.add((t) => lenis.raf(t * 1000));
gsap.ticker.lagSmoothing(0);
lenis.stop();

$$('[data-scroll]').forEach((a) =>
  a.addEventListener('click', (e) => {
    const id = a.getAttribute('href');
    if (!id || !id.startsWith('#')) return;
    e.preventDefault();
    closeNav();
    lenis.scrollTo(id === '#top' ? 0 : id, { offset: id === '#menu' ? 0 : 0, duration: 1.6 });
  })
);

/* ---------------- Mood colour ---------------- */
function setMood(dish) {
  gsap.to(root, { '--mood': dish.mood.accent, duration: 1.1, ease: 'power2.out' });
}

/* ---------------- Nav ---------------- */
const gnav = $('#gnav');
const burger = $('.gnav__burger');
function closeNav() { gnav.classList.remove('open'); burger.setAttribute('aria-expanded', 'false'); lenis.start(); }
burger.addEventListener('click', () => {
  const open = !gnav.classList.contains('open');
  gnav.classList.toggle('open', open);
  burger.setAttribute('aria-expanded', String(open));
  open ? lenis.stop() : lenis.start();
});
/* ---------------- Hero ring ---------------- */
const loaderBar = $('#loaderBar');
let ring;
const dishMeta = $('.hero__dish-meta');
function showDish(i) {
  const d = featured[i];
  dishMeta.classList.add('swap');
  clearTimeout(showDish.t);
  showDish.t = setTimeout(() => {
    $('#dishIndex').textContent = pad(i + 1);
    $('#dishName').textContent = d.name;
    $('#dishShort').textContent = d.short;
    $('#dishMood').textContent = d.mood.name;
    dishMeta.classList.remove('swap');
  }, 220);
  setMood(d);
}
$('#dishTotal').textContent = pad(featured.length);

let webgl = true;
try {
  ring = createRing($('#ring'), featured, {
    mediaUrl: media,
    onChange: showDish,
    onOpen: (id) => openInspector(id),
    onProgress: (p) => { loaderBar.style.transform = `scaleX(${p})`; if (p >= 1) start(); },
  });
} catch (err) {
  webgl = false;
  console.warn('WebGL unavailable', err);
}
setTimeout(start, webgl ? 6000 : 0); // never block on slow networks

$('#prevDish').addEventListener('click', () => ring && ring.prev());
$('#nextDish').addEventListener('click', () => ring && ring.next());
$('#inspectDish').addEventListener('click', () => openInspector(featured[ring ? ring.active : 0].id));
window.addEventListener('keydown', (e) => {
  if (inspector.classList.contains('open')) return;
  if (window.scrollY > innerHeight) return;
  if (e.key === 'ArrowRight') ring && ring.next();
  if (e.key === 'ArrowLeft') ring && ring.prev();
});

ScrollTrigger.create({
  trigger: '#hero', start: 'top top', end: 'bottom top',
  onUpdate: (s) => ring && ring.setScroll(s.progress),
  onToggle: (s) => ring && ring.setVisible(s.isActive),
});
gsap.timeline({ scrollTrigger: { trigger: '#hero', start: 'top top', end: '45% top', scrub: true } })
  .to('.hero__copy', { yPercent: -40, opacity: 0, scale: 0.94, ease: 'none' }, 0)
  .to('.hero__hint', { opacity: 0, ease: 'none' }, 0);
gsap.timeline({ scrollTrigger: { trigger: '#hero', start: '55% top', end: 'bottom top', scrub: true } })
  .to('.hero__dish', { y: -40, opacity: 0, ease: 'none' }, 0)
  .to('#ring', { opacity: 0, ease: 'none' }, 0);

let started = false;
function start() {
  if (started) return;
  started = true;
  $('#loader').classList.add('done');
  window.scrollTo(0, 0);
  lenis.scrollTo(0, { immediate: true });
  lenis.start();
  ring && ring.intro(2.8);
  gsap.from('[data-intro]', { y: 40, opacity: 0, duration: 1.6, stagger: 0.09, ease: 'expo.out', delay: 0.15 });
  gsap.from('.hero__title span', { yPercent: 60, opacity: 0, duration: 1.8, stagger: 0.08, ease: 'expo.out', delay: 0.2 });
  ScrollTrigger.refresh();
}

/* ---------------- Chef: word-by-word reveal ---------------- */
const intro = $('#introText');
intro.innerHTML = intro.textContent.trim().split(/\s+/).map((w) => `<span class="w">${w}</span>`).join(' ');
const words = $$('.w', intro);
ScrollTrigger.create({
  trigger: intro, start: 'top 80%', end: 'bottom 45%', scrub: true,
  onUpdate: (s) => {
    const n = Math.round(s.progress * words.length);
    words.forEach((w, i) => w.classList.toggle('on', i < n));
  },
});
$$('[data-zoom]').forEach((fig) => {
  gsap.fromTo(fig, { clipPath: 'inset(8% 10% round 40px)' }, { clipPath: 'inset(0% 0% round 28px)', ease: 'none', scrollTrigger: { trigger: fig, start: 'top 95%', end: 'top 25%', scrub: true } });
  gsap.fromTo($('img', fig), { scale: 1.3 }, { scale: 1, ease: 'none', scrollTrigger: { trigger: fig, start: 'top bottom', end: 'bottom top', scrub: true } });
});

$('#stats').innerHTML = stats.map((s) => `<div class="stat"><span class="stat__num" data-count="${s.value}">0</span><span class="stat__label">${s.label}</span></div>`).join('');
$$('[data-count]').forEach((el) => {
  const o = { v: 0 };
  gsap.to(o, {
    v: +el.dataset.count, duration: 2, ease: 'power3.out',
    scrollTrigger: { trigger: el, start: 'top 85%' },
    onUpdate: () => (el.textContent = Math.round(o.v)),
  });
});
gsap.from('.stat', { y: 50, opacity: 0, stagger: 0.1, duration: 1.2, ease: 'expo.out', scrollTrigger: { trigger: '#stats', start: 'top 85%' } });

/* ---------------- Live station: scroll-expanding film ---------------- */
gsap.timeline({ scrollTrigger: { trigger: '#live', start: 'top top', end: 'bottom bottom', scrub: true } })
  .fromTo('#expandMedia', { clipPath: 'inset(24% 30% round 44px)' }, { clipPath: 'inset(0% 0% round 0px)', ease: 'power1.inOut', duration: 0.55 }, 0)
  .fromTo('#expandMedia video', { scale: 1.25 }, { scale: 1, ease: 'power1.inOut', duration: 0.55 }, 0)
  .to('.expand__shade', { opacity: 1, duration: 0.2 }, 0.45)
  .fromTo('.expand__copy', { opacity: 0, y: 60 }, { opacity: 1, y: 0, duration: 0.25, ease: 'power2.out' }, 0.55)
  .to({}, { duration: 0.2 });

/* ---------------- Craft ---------------- */
const chapters = [
  { title: 'Mise en place', text: 'Every service is won before it starts. Spices measured, condiments cut and portioned, stations set so service can move at full speed without losing precision.', a: { src: 'spice-mise', cap: 'Pani puri station mise en place' }, b: { src: 'condiments', cap: 'Breakfast station prep' } },
  { title: 'Plating precision', text: 'Ten components on one tray, each with its own place, garnish and height. Mapped out first, then placed with patience.', a: { src: 'mezze-annotated', cap: 'Mezze, component map' }, b: { src: 'chef-mezze', cap: 'Final placement' } },
  { title: 'Chocolate & pastry', text: 'Tempered shells, piped ganache, clean seals. Pastry leaves no room for “close enough”, and that is why I love it.', a: { src: 'chocolate-piping', cap: 'Piping ganache' }, b: { src: 'bonbons', cap: 'Finished bonbons' } },
  { title: 'Dough work', text: 'From pizza dough tossed at the counter to thirteen fresh pasta shapes rolled single-handed. The dough tells you everything if you listen.', a: { src: 'dough-roll', cap: 'Rolling at the live counter' }, b: { video: 'pizza-toss-2', cap: 'Tossing pizza dough' } },
  { title: 'Sauce & finish', text: 'Glazes reduced until they mirror the light, sauces that coat rather than flood, and a clean rim before anything leaves the pass.', a: { src: 'glazed-chicken', cap: 'Glaze, reduced to a mirror' }, b: { src: 'stroganoff', cap: 'Velvet cream, seared mushrooms' } },
];
const cardHTML = (m, cls = '') => `<figure class="card ${cls}">${m.video
  ? `<video src="${vid(m.video)}" poster="${poster(m.video)}" muted loop playsinline preload="metadata" data-autoplay data-px></video>`
  : `<img src="${lg(m.src)}" alt="${m.cap}" loading="lazy" decoding="async" data-px />`}<figcaption>${m.cap}</figcaption></figure>`;
$('#craftTrack').insertAdjacentHTML('beforeend', chapters.map((c, i) => `
  <article class="chapter">
    <div class="chapter__text"><span class="chapter__no">${pad(i + 1)}</span><h3 class="chapter__title">${c.title}</h3><p class="chapter__copy">${c.text}</p></div>
    ${cardHTML(c.a)}${cardHTML(c.b, 'card--b')}
  </article>`).join('') + '<div style="flex:0 0 4vw"></div>');

const mm = gsap.matchMedia();
mm.add('(min-width: 1024px)', () => {
  const track = $('#craftTrack');
  const dist = () => track.scrollWidth - innerWidth;
  const tween = gsap.to(track, {
    x: () => -dist(), ease: 'none',
    scrollTrigger: { trigger: '.craft__pin', start: 'top top', end: () => `+=${dist()}`, scrub: 1, pin: true, invalidateOnRefresh: true, anticipatePin: 1 },
  });
  gsap.to('#craftBar', { scaleX: 1, ease: 'none', scrollTrigger: { trigger: '.craft__pin', start: 'top top', end: () => `+=${dist()}`, scrub: true } });
  $$('[data-px]', track).forEach((m) =>
    gsap.fromTo(m, { xPercent: -7 }, { xPercent: 7, ease: 'none', scrollTrigger: { trigger: m.parentElement, containerAnimation: tween, start: 'left right', end: 'right left', scrub: true } })
  );
  $$('.chapter', track).forEach((ch) =>
    gsap.from($$('.card', ch), { rotateY: -18, z: -120, opacity: 0.4, transformPerspective: 1400, ease: 'none', stagger: 0.1, scrollTrigger: { trigger: ch, containerAnimation: tween, start: 'left right', end: 'left 40%', scrub: true } })
  );
});
mm.add('(max-width: 1023px)', () => {
  $$('#craftTrack [data-px]').forEach((m) =>
    gsap.fromTo(m, { yPercent: -6 }, { yPercent: 6, ease: 'none', scrollTrigger: { trigger: m.parentElement, start: 'top bottom', end: 'bottom top', scrub: true } })
  );
  gsap.utils.toArray('#craftTrack .card').forEach((c) => gsap.from(c, { y: 80, opacity: 0, duration: 1.2, ease: 'expo.out', scrollTrigger: { trigger: c, start: 'top 90%' } }));
});

/* ---------------- Philosophy ---------------- */
const lines = [['Discipline is', 'the first ingredient.'], ['The guest', 'sees everything.'], ['Clean station,', 'clear mind.'], ['Cost is a craft', 'too.']];
$('#philoLines').innerHTML = lines.map(([a, b]) => `<div class="philo__line"><span class="a">${a}</span><span class="b">${b}</span></div>`).join('');
$$('.philo__line').forEach((l) => {
  gsap.timeline({ scrollTrigger: { trigger: l, start: 'top 92%', end: 'center 50%', scrub: true } })
    .fromTo($('.a', l), { opacity: 0.12, y: 60, scale: 0.94 }, { opacity: 1, y: 0, scale: 1, ease: 'none' }, 0)
    .fromTo($('.b', l), { opacity: 0, y: 90, scale: 0.94 }, { opacity: 1, y: 0, scale: 1, ease: 'none' }, 0.15);
  gsap.to(l, { opacity: 0.25, ease: 'none', scrollTrigger: { trigger: l, start: 'center 30%', end: 'bottom top', scrub: true } });
});
gsap.fromTo('[data-iris]', { clipPath: 'circle(12% at 50% 50%)' }, { clipPath: 'circle(75% at 50% 50%)', ease: 'none', scrollTrigger: { trigger: '[data-iris]', start: 'top 85%', end: 'center 45%', scrub: true } });
gsap.fromTo('[data-iris] img', { scale: 1.35 }, { scale: 1, ease: 'none', scrollTrigger: { trigger: '[data-iris]', start: 'top bottom', end: 'bottom top', scrub: true } });
const principles = [
  { n: '01', t: 'Precision', d: 'Consistent cuts, measured portions, identical plates from the first cover to the last.' },
  { n: '02', t: 'Standards', d: 'Food safety, hygiene compliance and SOPs are non-negotiable. Luxury starts with what the guest never sees.' },
  { n: '03', t: 'Commercial sense', d: 'Menu costing, food cost control and pricing, built in Excel with Finance, because a great dish must also make sense.' },
  { n: '04', t: 'Presence', d: 'Impeccable grooming, warm guest interaction and calm leadership at the live station and in training sessions.' },
];
$('#principles').innerHTML = principles.map((p) => `<li class="principle"><span class="principle__n">${p.n}</span><p class="principle__t">${p.t}</p><p class="principle__d">${p.d}</p></li>`).join('');
gsap.from('.philo__quote', { y: 50, opacity: 0, duration: 1.4, ease: 'expo.out', scrollTrigger: { trigger: '.philo__quote', start: 'top 85%' } });
gsap.from('.principle', { y: 60, opacity: 0, stagger: 0.1, duration: 1.2, ease: 'expo.out', scrollTrigger: { trigger: '#principles', start: 'top 85%' } });

/* ---------------- Menu ---------------- */
let no = 0;
$('#courses').innerHTML = cats.map((c) => {
  const list = dishes.filter((d) => d.category === c.id);
  return `<div class="course" id="course-${c.id}" data-cat="${c.id}">
    <div class="course__head">
      <span class="course__num">${c.numeral}</span>
      <div><h3 class="course__title">${c.title}</h3><p class="course__kicker">${c.kicker}</p></div>
      <span class="course__count">${pad(list.length)} courses</span>
      <p class="course__blurb">${c.blurb}</p>
    </div>
    <div class="tiles">${list.map((d) => {
      no++;
      return `<div class="tile" data-tile>
        <button class="tile__btn" data-open="${d.id}" style="--tile-accent:${d.mood.accent}">
          <div class="tile__img">${d.video
            ? `<video src="${vid(d.video)}" poster="${poster(d.video)}" muted loop playsinline preload="none" data-autoplay></video>`
            : `<img src="${sm(d.images[0])}" alt="${d.name}" loading="lazy" decoding="async" />`}
            <span class="tile__no">N° ${pad(no)}</span>
          </div>
          <div class="tile__body"><div><h4 class="tile__name">${d.name}</h4><p class="tile__short">${d.short}</p></div><span class="tile__plus"><svg viewBox="0 0 24 24"><path d="M12 5v14M5 12h14"/></svg></span></div>
        </button>
      </div>`;
    }).join('')}</div>
  </div>`;
}).join('');

// segmented control
const seg = $('#seg');
seg.innerHTML = '<span class="seg__thumb"></span>' + cats.map((c) => `<button role="tab" data-target="course-${c.id}">${c.title}</button>`).join('');
const thumb = $('.seg__thumb', seg);
const segBtns = $$('button', seg);
function setSeg(i) {
  segBtns.forEach((b, j) => b.classList.toggle('on', i === j));
  const b = segBtns[i];
  if (!b) return;
  thumb.style.width = `${b.offsetWidth}px`;
  thumb.style.transform = `translateX(${b.offsetLeft}px)`;
  if (seg.scrollWidth > seg.clientWidth) seg.scrollTo({ left: b.offsetLeft - seg.clientWidth / 2 + b.offsetWidth / 2, behavior: 'smooth' });
}
segBtns.forEach((b) => b.addEventListener('click', () => lenis.scrollTo(`#${b.dataset.target}`, { offset: -120, duration: 1.4 })));
$$('.course').forEach((c, i) => ScrollTrigger.create({ trigger: c, start: 'top 55%', end: 'bottom 55%', onToggle: (s) => s.isActive && setSeg(i) }));
setSeg(0);
window.addEventListener('resize', () => setSeg(Math.max(0, segBtns.findIndex((b) => b.classList.contains('on')))));
gsap.fromTo('#segbar', { opacity: 0, y: 20 }, { opacity: 1, y: 0, scrollTrigger: { trigger: '#courses', start: 'top 85%', end: 'top 70%', scrub: true } });
ScrollTrigger.create({ trigger: '#courses', start: 'bottom 30%', onEnter: () => gsap.to('#segbar', { opacity: 0, duration: 0.3 }), onLeaveBack: () => gsap.to('#segbar', { opacity: 1, duration: 0.3 }) });

$$('.course').forEach((c) => {
  gsap.from($('.course__num', c), { yPercent: 50, opacity: 0, duration: 1.4, ease: 'expo.out', scrollTrigger: { trigger: c, start: 'top 80%' } });
  ScrollTrigger.batch($$('[data-tile]', c), {
    start: 'top 92%',
    onEnter: (els) => gsap.fromTo(els, { y: 90, opacity: 0, rotateX: 10 }, { y: 0, opacity: 1, rotateX: 0, transformPerspective: 1200, stagger: 0.08, duration: 1.3, ease: 'expo.out', overwrite: true }),
  });
});
// 3D tilt
if (matchMedia('(hover: hover)').matches) {
  $$('.tile__btn').forEach((btn) => {
    const rx = gsap.quickTo(btn, 'rotateX', { duration: 0.7, ease: 'power3' });
    const ry = gsap.quickTo(btn, 'rotateY', { duration: 0.7, ease: 'power3' });
    btn.addEventListener('pointermove', (e) => {
      const r = btn.getBoundingClientRect();
      ry(((e.clientX - r.left) / r.width - 0.5) * 9);
      rx(-((e.clientY - r.top) / r.height - 0.5) * 9);
    });
    btn.addEventListener('pointerleave', () => { rx(0); ry(0); });
  });
}

/* ---------------- Pasta ---------------- */
gsap.fromTo('#pastaNum', { scale: 0.55, opacity: 0.15 }, { scale: 1, opacity: 1, ease: 'none', transformOrigin: 'left bottom', scrollTrigger: { trigger: '#pasta', start: 'top bottom', end: 'center center', scrub: 1 } });
gsap.fromTo('.pasta__bg', { yPercent: -8 }, { yPercent: 8, ease: 'none', scrollTrigger: { trigger: '#pasta', start: 'top bottom', end: 'bottom top', scrub: true } });

/* ---------------- Reels ---------------- */
const reels = [
  { video: 'flambe', title: 'Flambé on the open grill', tag: 'Live fire' },
  { video: 'pizza-toss-2', title: 'Hand-tossed at the Italian counter', tag: 'Dough' },
  { video: 'pasta-bar', title: 'The handmade pasta bar', tag: 'Gala Dinner' },
];
$('#reelGrid').innerHTML = reels.map((r, i) => `<figure class="reel"><span class="reel__badge">Reel ${pad(i + 1)}</span>
  <video src="${vid(r.video)}" poster="${poster(r.video)}" muted loop playsinline preload="metadata" data-autoplay></video>
  <figcaption><p class="reel__tag">${r.tag}</p><p class="reel__title">${r.title}</p></figcaption></figure>`).join('');
gsap.from('.reel', { y: 140, opacity: 0, rotateY: (i) => (i - 1) * -14, transformPerspective: 1400, stagger: 0.12, duration: 1.5, ease: 'expo.out', scrollTrigger: { trigger: '#reelGrid', start: 'top 85%' } });

/* ---------------- Journey ---------------- */
$('#timeline').innerHTML = journey.map((j) => `<li class="tl">
  <span class="tl__years">${j.years}</span>
  <div><h3 class="tl__role">${j.role}</h3><p class="tl__org">${j.org}</p></div>
  ${j.points.length ? `<ul class="tl__points">${j.points.map((p) => `<li>${p}</li>`).join('')}</ul>` : '<div></div>'}
</li>`).join('');
$('#awards').innerHTML = awards.map((a, i) => `<li>${a}<span>${pad(i + 1)}</span></li>`).join('');
gsap.utils.toArray('.tl, .awards__list li').forEach((el) => gsap.from(el, { y: 50, opacity: 0, duration: 1.1, ease: 'expo.out', scrollTrigger: { trigger: el, start: 'top 92%' } }));

/* ---------------- Marquees ---------------- */
function buildMarquee(el, items, reverse = false) {
  const html = items.map((t) => `<span class="marquee__item">${t}<i>●</i></span>`).join('');
  el.innerHTML = `<div class="marquee__track">${html}${html}</div>`;
  const track = el.firstElementChild;
  const tl = gsap.to(track, { xPercent: reverse ? 0 : -50, startAt: { xPercent: reverse ? -50 : 0 }, duration: items.length * 4.5, ease: 'none', repeat: -1 });
  ScrollTrigger.create({ trigger: el, start: 'top bottom', end: 'bottom top', onToggle: (s) => (s.isActive ? tl.play() : tl.pause()) });
  return tl;
}
const marquees = [];
$$('.marquee[data-items]').forEach((el) => marquees.push(buildMarquee(el, el.dataset.items.split(','))));
marquees.push(buildMarquee($('#skillsA'), skills.slice(0, 9)));
marquees.push(buildMarquee($('#skillsB'), skills.slice(9), true));
lenis.on('scroll', ({ velocity }) => {
  const k = 1 + Math.min(Math.abs(velocity) * 0.12, 3);
  marquees.forEach((m) => gsap.to(m, { timeScale: k, duration: 0.3, overwrite: true }));
});

/* ---------------- Contact ---------------- */
gsap.fromTo('.contact__bg', { scale: 1.25 }, { scale: 1, ease: 'none', scrollTrigger: { trigger: '#contact', start: 'top bottom', end: 'bottom bottom', scrub: true } });
gsap.from('.contact__title', { y: 100, opacity: 0, duration: 1.6, ease: 'expo.out', scrollTrigger: { trigger: '.contact__title', start: 'top 85%' } });
gsap.from('.contact__links li', { y: 40, opacity: 0, stagger: 0.08, duration: 1.1, ease: 'expo.out', scrollTrigger: { trigger: '.contact__links', start: 'top 95%' } });
$('#copyEmail').addEventListener('click', async () => {
  try {
    await navigator.clipboard.writeText('udddipandatta@gmail.com');
    $('#copyIcon').textContent = 'Copied';
    setTimeout(() => ($('#copyIcon').textContent = 'Copy'), 1800);
  } catch { location.href = 'mailto:udddipandatta@gmail.com'; }
});
$('#year').textContent = new Date().getFullYear();

/* ---------------- Videos: play only in view ---------------- */
const io = new IntersectionObserver((entries) => entries.forEach((e) => {
  const v = e.target;
  if (e.isIntersecting) { if (v.preload === 'none') v.preload = 'metadata'; v.play().catch(() => {}); } else v.pause();
}), { threshold: 0.15 });
$$('video[data-autoplay]').forEach((v) => io.observe(v));

/* ---------------- Inspector ---------------- */
const inspector = $('#inspector');
const sheet = $('.inspector__sheet', inspector);
let current = null;
let slide = 0;
let slideTimer;

function renderInspector(d) {
  current = d;
  const cat = cats.find((c) => c.id === d.category);
  sheet.style.setProperty('--dish', d.mood.accent);
  $('#insKicker').textContent = `${cat.title} · ${d.mood.name}`;
  $('#insKicker').style.color = `color-mix(in srgb, ${d.mood.accent} 72%, #1d1d1f)`;
  $('#insName').textContent = d.name;
  $('#insDesc').textContent = d.description;
  $('#insStory').textContent = d.story;
  $('#insComponents').innerHTML = d.components ? `<p class="inspector__label">Components</p><div class="chips" style="margin-top:0">${d.components.map((c) => `<span class="chip">${c}</span>`).join('')}</div>` : '';
  $('#insFlavour').innerHTML = `<p class="inspector__label" style="margin-bottom:2px">Flavour profile</p>` + Object.entries(d.flavor).map(([k, v]) => `<div class="flavour__row"><span>${k}</span><div class="flavour__bar"><i style="transform:scaleX(0)" data-v="${v / 100}"></i></div><span>${v}</span></div>`).join('');
  $('#insTags').innerHTML = d.tags.map((t) => `<span class="chip">${t}</span>`).join('');

  const items = d.images.map((n) => `<img src="${lg(n)}" alt="${d.name}" decoding="async" />`);
  if (d.video) items.unshift(`<video src="${vid(d.video)}" poster="${poster(d.video)}" muted loop playsinline autoplay></video>`);
  $('#insMedia').innerHTML = items.join('') + (items.length > 1 ? `<div class="inspector__dots">${items.map((_, i) => `<button aria-label="Image ${i + 1}"></button>`).join('')}</div>` : '');
  const slides = $$('#insMedia > img, #insMedia > video');
  const dots = $$('.inspector__dots button');
  const go = (i) => {
    slide = (i + slides.length) % slides.length;
    slides.forEach((s, j) => s.classList.toggle('on', j === slide));
    dots.forEach((b, j) => b.classList.toggle('on', j === slide));
  };
  dots.forEach((b, i) => b.addEventListener('click', () => { go(i); restart(); }));
  const restart = () => { clearInterval(slideTimer); if (slides.length > 1) slideTimer = setInterval(() => go(slide + 1), 4200); };
  go(0); restart();
  requestAnimationFrame(() => requestAnimationFrame(() => $$('.flavour__bar i').forEach((b, i) => { b.style.transitionDelay = `${0.15 + i * 0.07}s`; b.style.transform = `scaleX(${b.dataset.v})`; })));
  sheet.scrollTop = 0;
}

function openInspector(id) {
  const d = byId[id];
  if (!d) return;
  renderInspector(d);
  inspector.classList.add('open');
  inspector.setAttribute('aria-hidden', 'false');
  lenis.stop();
  gsap.killTweensOf([sheet, '.inspector__scrim']);
  gsap.to('.inspector__scrim', { opacity: 1, duration: 0.5, ease: 'power2.out' });
  gsap.fromTo(sheet, { opacity: 0, y: 60, scale: 0.96 }, { opacity: 1, y: 0, scale: 1, duration: 0.8, ease: 'expo.out' });
  $('.inspector__close').focus({ preventScroll: true });
}
function closeInspector() {
  if (!inspector.classList.contains('open')) return;
  clearInterval(slideTimer);
  gsap.to('.inspector__scrim', { opacity: 0, duration: 0.4 });
  gsap.to(sheet, {
    opacity: 0, y: 40, scale: 0.97, duration: 0.45, ease: 'power2.in',
    onComplete: () => { inspector.classList.remove('open'); inspector.setAttribute('aria-hidden', 'true'); $('#insMedia').innerHTML = ''; },
  });
  lenis.start();
}
function stepInspector(dir) {
  const i = menuOrder.indexOf(current);
  const next = menuOrder[(i + dir + menuOrder.length) % menuOrder.length];
  gsap.to('.inspector__body', { opacity: 0, x: -20 * dir, duration: 0.2, onComplete: () => {
    renderInspector(next);
    gsap.fromTo('.inspector__body', { opacity: 0, x: 20 * dir }, { opacity: 1, x: 0, duration: 0.5, ease: 'expo.out' });
  } });
}
$$('[data-close]', inspector).forEach((b) => b.addEventListener('click', closeInspector));
$('#insPrev').addEventListener('click', () => stepInspector(-1));
$('#insNext').addEventListener('click', () => stepInspector(1));
window.addEventListener('keydown', (e) => {
  if (!inspector.classList.contains('open')) return;
  if (e.key === 'Escape') closeInspector();
  if (e.key === 'ArrowRight') stepInspector(1);
  if (e.key === 'ArrowLeft') stepInspector(-1);
});
document.addEventListener('click', (e) => {
  const t = e.target.closest('[data-open]');
  if (t) openInspector(t.dataset.open);
});

/* Nav state triggers are created last so they account for pinned sections above them */
$$('.light').forEach((sec) =>
  ScrollTrigger.create({ trigger: sec, start: 'top 26px', end: 'bottom 26px', onToggle: (s) => gnav.classList.toggle('on-light', s.isActive) })
);
['chef', 'craft', 'philosophy', 'menu', 'journey'].forEach((id) => {
  const link = $(`.gnav__links a[href="#${id}"]`);
  ScrollTrigger.create({ trigger: `#${id}`, start: 'top 50%', end: 'bottom 50%', onToggle: (s) => link.classList.toggle('is-active', s.isActive) });
});

ScrollTrigger.sort();
ScrollTrigger.refresh();
window.addEventListener('load', () => ScrollTrigger.refresh());
