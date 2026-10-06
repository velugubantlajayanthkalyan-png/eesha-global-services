const { company, people, offices, destinations } = require('./data');
const { icon } = require('./icons');

const esc = (s) =>
  String(s)
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;');

const person = (id) => {
  const p = people[id];
  if (!p) throw new Error('Unknown person: ' + id);
  return { id, ...p };
};
const office = (id) => {
  const o = offices.find((x) => x.id === id);
  if (!o) throw new Error('Unknown office: ' + id);
  return o;
};

const telHref = (p) => `tel:+${p.phone}`;
const waHref = (p, text) =>
  `https://wa.me/${p.phone}` + (text ? `?text=${encodeURIComponent(text)}` : '');
const initials = (name) =>
  name
    .split(/\s+/)
    .filter(Boolean)
    .slice(0, 2)
    .map((w) => w[0].toUpperCase())
    .join('');
const mapHref = (o) =>
  o.mapUrl ||
  'https://www.google.com/maps/search/?api=1&query=' +
    encodeURIComponent([o.city, o.region].filter(Boolean).join(', '));

const primary = () => person(company.primaryContact);
const generalWa = () =>
  waHref(primary(), `Hi ${company.name}, I would like to know more about studying abroad.`);

/* ---------- small components ---------- */

function avatar(p, size = '') {
  const cls = 'avatar' + (size ? ` avatar--${size}` : '');
  if (p.photo) {
    return `<img class="${cls}" src="${esc(p.photo)}" alt="" width="56" height="56" loading="lazy">`;
  }
  return `<span class="${cls}" aria-hidden="true">${esc(initials(p.name))}</span>`;
}

function callButton(p, { label, cls = 'btn btn--quiet' } = {}) {
  return `<a class="${cls}" href="${telHref(p)}">${icon('phone', 18)}<span>${esc(label || 'Call ' + p.display)}</span></a>`;
}

function waButton(p, text, { label = 'WhatsApp', cls = 'btn btn--wa' } = {}) {
  return `<a class="${cls}" href="${waHref(p, text)}" target="_blank" rel="noopener">${icon('message-circle', 18)}<span>${esc(label)}</span></a>`;
}

function flag(d, size = 'md') {
  return `<img class="flag flag--${size}" src="assets/img/flags/${d.flag}.svg" alt="" width="40" height="30" loading="lazy">`;
}

function brand() {
  const mark = company.logo
    ? `<img class="brand__logo" src="${esc(company.logo)}" alt="" height="40">`
    : `<svg class="brand__mark" width="40" height="40" viewBox="0 0 40 40" aria-hidden="true" focusable="false">
        <circle cx="20" cy="20" r="20" fill="var(--sky-400)"/>
        <path d="M7 27 Q20 3 33 17" fill="none" stroke="#fff" stroke-width="2.5" stroke-linecap="round" stroke-dasharray="0.1 5.2"/>
        <circle cx="7" cy="27" r="3.2" fill="#fff"/>
        <circle cx="33" cy="17" r="3.2" fill="var(--ink)"/>
      </svg>`;
  return `<a class="brand" href="index.html" aria-label="${esc(company.name)} home">
      ${mark}
      <span class="brand__text"><span class="brand__name">${esc(company.shortName)}</span><span class="brand__sub">Global Services</span></span>
    </a>`;
}

/* ---------- header ---------- */

function header(current) {
  const link = (href, label, key) =>
    `<a class="nav__link" href="${href}"${current === key ? ' aria-current="page"' : ''}>${label}</a>`;

  const destLinks = destinations
    .map((d) => `<li><a href="${d.file}">${flag(d, 'sm')}<span>${esc(d.name)}</span></a></li>`)
    .join('');

  return `<header class="site-header">
  <div class="wrap site-header__row">
    ${brand()}
    <button class="nav-toggle" type="button" aria-expanded="false" aria-controls="site-nav">
      <span class="nav-toggle__open">${icon('menu', 24)}</span>
      <span class="nav-toggle__close">${icon('x', 24)}</span>
      <span class="sr-only">Menu</span>
    </button>
    <nav class="nav" id="site-nav" aria-label="Main">
      <div class="nav__group">
        <a class="nav__link" href="destinations.html"${current === 'destinations' ? ' aria-current="page"' : ''}>Destinations</a>
        <button class="nav__more" type="button" aria-expanded="false" aria-controls="dest-menu">
          ${icon('chevron-down', 16)}<span class="sr-only">Show destination list</span>
        </button>
        <ul class="nav__menu" id="dest-menu">${destLinks}</ul>
      </div>
      ${link('course-finder.html', 'Course finder', 'finder')}
      ${link('services.html', 'Services', 'services')}
      ${link('about.html', 'About', 'about')}
      ${link('branches.html', 'Branches', 'branches')}
      ${link('contact.html', 'Contact', 'contact')}
      <div class="nav__actions">
        <a class="btn btn--quiet" href="branches.html" data-open-call>${icon('phone', 18)}<span>Call a branch</span></a>
        <a class="btn btn--primary" href="contact.html#enquiry">Submit enquiry</a>
      </div>
    </nav>
  </div>
</header>`;
}

/* ---------- footer ---------- */

function footer() {
  const year = new Date().getFullYear();
  const socials = Object.entries(company.social)
    .filter(([, url]) => url)
    .map(([name, url]) => `<li><a href="${esc(url)}" target="_blank" rel="noopener">${name[0].toUpperCase() + name.slice(1)}</a></li>`)
    .join('');

  const officeList = offices
    .map((o) => {
      const p = person(o.lead);
      return `<li><span class="footer__city">${esc(o.city)}</span><a href="${telHref(p)}">${esc(p.display)}</a></li>`;
    })
    .join('');

  return `<footer class="site-footer">
  <div class="wrap site-footer__grid">
    <div class="site-footer__about">
      ${brand()}
      <p>Abroad admissions consultancy.</p>
      ${company.email ? `<p><a href="mailto:${esc(company.email)}">${esc(company.email)}</a></p>` : ''}
    </div>
    <nav aria-label="Destinations">
      <h2 class="site-footer__h">Destinations</h2>
      <ul>${destinations.map((d) => `<li><a href="${d.file}">Study in ${esc(d.short)}</a></li>`).join('')}</ul>
    </nav>
    <nav aria-label="Company">
      <h2 class="site-footer__h">Company</h2>
      <ul>
        <li><a href="course-finder.html">Course finder</a></li>
        <li><a href="services.html">Services</a></li>
        <li><a href="about.html">About us</a></li>
        <li><a href="branches.html">Branches</a></li>
        <li><a href="contact.html">Contact</a></li>
        ${socials}
      </ul>
    </nav>
    <div>
      <h2 class="site-footer__h">Call us</h2>
      <ul class="footer__phones">${officeList}</ul>
    </div>
  </div>
  <div class="wrap">
    <div class="site-footer__base">
      <p>© ${year} ${esc(company.name)}. All rights reserved.</p>
    </div>
  </div>
</footer>`;
}

/* ---------- call dialog + mobile bar ---------- */

function callDialog() {
  const rows = offices
    .map((o) => {
      const p = person(o.lead);
      return `<li class="call-row">
        <div class="call-row__who">
          <span class="call-row__city">${esc(o.city)}</span>
          <span class="call-row__name">${esc(p.name)}</span>
        </div>
        <div class="call-row__actions">
          ${callButton(p, { label: p.display, cls: 'btn btn--primary btn--sm' })}
          ${waButton(p, `Hi ${company.name}, I would like to know more about studying abroad.`, { cls: 'btn btn--wa btn--sm' })}
        </div>
      </li>`;
    })
    .join('');

  return `<dialog class="call-dialog" id="call-dialog" aria-labelledby="call-dialog-title">
  <div class="call-dialog__head">
    <h2 id="call-dialog-title">Call a branch</h2>
    <button class="icon-btn" type="button" data-close-call>${icon('x', 22)}<span class="sr-only">Close</span></button>
  </div>
  <p class="call-dialog__lede">Pick the office nearest to you. You will reach the person named.</p>
  <ul class="call-list">${rows}</ul>
</dialog>`;
}

function mobileBar() {
  return `<div class="mobile-bar" role="group" aria-label="Quick contact">
  <a class="mobile-bar__btn" href="branches.html" data-open-call>${icon('phone', 20)}<span>Call a branch</span></a>
  <a class="mobile-bar__btn mobile-bar__btn--wa" href="${generalWa()}" target="_blank" rel="noopener">${icon('message-circle', 20)}<span>WhatsApp</span></a>
</div>`;
}

/* ---------- shared sections ---------- */

function pageHead({ title, lede, crumbs = [] }) {
  const trail = crumbs.length
    ? `<nav class="crumbs" aria-label="Breadcrumb"><ol><li><a href="index.html">Home</a></li>${crumbs
        .map((c) => (c.href ? `<li><a href="${c.href}">${esc(c.label)}</a></li>` : `<li aria-current="page">${esc(c.label)}</li>`))
        .join('')}</ol></nav>`
    : '';
  return `<section class="page-head">
  <div class="wrap">
    ${trail}
    <h1>${esc(title)}</h1>
    ${lede ? `<p class="lede">${esc(lede)}</p>` : ''}
  </div>
</section>`;
}

function faqList(items) {
  return `<div class="faq">${items
    .map(
      (f) => `<details class="faq__item">
      <summary><span>${esc(f.q)}</span>${icon('chevron-down', 20)}</summary>
      <p>${esc(f.a)}</p>
    </details>`
    )
    .join('')}</div>`;
}

/* ---------- page shell ---------- */

function shell({ file, title, description, current, body, extraHead = '' }) {
  const canonical = company.siteUrl + '/' + (file === 'index.html' ? '' : file);
  const fullTitle = file === 'index.html' ? title : `${title} | ${company.name}`;

  const schema = {
    '@context': 'https://schema.org',
    '@type': 'EducationalOrganization',
    name: company.name,
    url: company.siteUrl + '/',
    description: 'Abroad admissions consultancy with branches in Vijayawada, Darsi and Ongole, and an international head office in the UK.',
    contactPoint: offices.map((o) => {
      const p = person(o.lead);
      return {
        '@type': 'ContactPoint',
        contactType: 'admissions',
        name: `${o.city} — ${p.name}`,
        telephone: '+' + p.phone,
        areaServed: o.inIndia ? 'IN' : 'GB',
      };
    }),
  };

  return `<!doctype html>
<!-- Generated by build.js. Edit files in src/ and run "npm run build" instead of editing this file. -->
<html lang="en">
<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width, initial-scale=1">
<title>${esc(fullTitle)}</title>
<meta name="description" content="${esc(description)}">
<link rel="canonical" href="${canonical}">
<meta property="og:type" content="website">
<meta property="og:site_name" content="${esc(company.name)}">
<meta property="og:title" content="${esc(fullTitle)}">
<meta property="og:description" content="${esc(description)}">
<meta property="og:url" content="${canonical}">
<meta property="og:image" content="${company.siteUrl}/assets/img/share.png">
<meta name="twitter:card" content="summary_large_image">
<meta name="theme-color" content="#DCEFFC">
<link rel="icon" href="assets/img/favicon.svg" type="image/svg+xml">
<link rel="preload" href="assets/fonts/bricolage-grotesque-latin-wght-normal.woff2" as="font" type="font/woff2" crossorigin>
<link rel="preload" href="assets/fonts/instrument-sans-latin-wght-normal.woff2" as="font" type="font/woff2" crossorigin>
<link rel="stylesheet" href="assets/css/style.css">
<script type="application/ld+json">${JSON.stringify(schema)}</script>
${extraHead}
</head>
<body>
<a class="skip-link" href="#main">Skip to content</a>
${header(current)}
<main id="main">
${body}
</main>
${footer()}
${callDialog()}
${mobileBar()}
<script src="assets/js/main.js" defer></script>
</body>
</html>
`;
}

// "who" block: avatar, name and (if set) role
function who(p, extra = '') {
  const role = [p.role, extra].filter(Boolean).join(', ');
  return `<div class="who">
      ${avatar(p)}
      <div>
        <p class="who__name">${esc(p.name)}</p>
        ${role ? `<p class="who__role">${esc(role)}</p>` : ''}
      </div>
    </div>`;
}

module.exports = {
  who,
  esc, person, office, telHref, waHref, mapHref, initials, primary, generalWa,
  avatar, callButton, waButton, flag, pageHead, faqList, shell,
};
