const { company, people, offices, destinations, services, steps, faqs, firstMeeting } = require('./data');
const { universities, subjects, levels } = require('./universities');
const { icon } = require('./icons');
const L = require('./layout');
const { esc, person, office } = L;

const chipName = (d) => d.short.replace(/^the /, '');
const indiaOffices = offices.filter((o) => o.inIndia);
const dest = (id) => destinations.find((d) => d.id === id);
const unisIn = (id) => universities.filter((u) => u.country === id);
const courseCount = universities.reduce((n, u) => n + u.courses.length, 0);
const numberWord = (n) => ['zero', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine', 'ten'][n] || String(n);
const cap = (s) => s[0].toUpperCase() + s.slice(1);

/* =========================================================
   Home
   ========================================================= */

function routeWidget() {
  const d0 = destinations[0];
  const o0 = indiaOffices[0];
  const p0 = person(o0.lead);

  const data = {
    company: company.name,
    destinations: Object.fromEntries(
      destinations.map((d) => [d.id, { name: d.name, short: d.short, flag: `assets/img/flags/${d.flag}.svg` }])
    ),
    offices: Object.fromEntries(
      indiaOffices.map((o) => {
        const p = person(o.lead);
        return [o.id, { city: o.city, name: p.name, role: p.role, phone: p.phone, display: p.display, initials: L.initials(p.name), photo: p.photo }];
      })
    ),
  };

  const destChips = destinations
    .map(
      (d, i) => `<label class="chip">
        <input type="radio" name="route-dest" value="${d.id}"${i === 0 ? ' checked' : ''}>
        <span>${L.flag(d, 'sm')}${esc(chipName(d))}</span>
      </label>`
    )
    .join('');

  const officeChips = indiaOffices
    .map(
      (o, i) => `<label class="chip">
        <input type="radio" name="route-office" value="${o.id}"${i === 0 ? ' checked' : ''}>
        <span>${esc(o.city)}</span>
      </label>`
    )
    .join('');

  const plane =
    'M17.8 19.2 16 11l3.5-3.5C21 6 21.5 4 21 3c-1-.5-3 0-4.5 1.5L13 8 4.8 6.2c-.5-.1-.9.1-1.1.5l-.3.5c-.2.5-.1 1 .3 1.3L9 12l-2 3H4l-1 1 3 2 2 3 1-1v-3l3-2 3.5 5.3c.3.4.8.5 1.3.3l.5-.2c.4-.3.6-.7.5-1.2z';

  return `<div class="route" data-route>
    <script type="application/json" data-route-data>${JSON.stringify(data)}</script>
    <div class="route__sky">
      <svg class="route__svg" viewBox="0 0 480 170" aria-hidden="true" focusable="false">
        <g class="route__clouds" fill="#fff">
          <path d="M92 58a13 13 0 0 1 25-4 10 10 0 0 1 14 9 9 9 0 0 1-2 18H94a12 12 0 0 1-2-23z"/>
          <path d="M318 128a10 10 0 0 1 19-3 8 8 0 0 1 11 7 7 7 0 0 1-2 14h-27a9 9 0 0 1-1-18z" opacity=".8"/>
        </g>
        <path class="route__path" d="M36 140 Q240 -40 444 96" pathLength="1"/>
        <path class="route__progress" d="M36 140 Q240 -40 444 96" pathLength="1" stroke-dasharray="0.78 1"/>
        <circle class="route__from" cx="36" cy="140" r="7"/>
        <circle class="route__to" cx="444" cy="96" r="7"/>
        <g class="route__plane" transform="translate(354 51) rotate(63) scale(1.6) translate(-12 -12)"><path d="${plane}"/></g>
      </svg>
      <div class="route__ends">
        <p><span class="route__label">From</span><strong data-route-from>${esc(o0.city)}</strong></p>
        <p class="route__end-to"><span class="route__label">To</span><strong><img class="flag flag--sm" data-route-flag src="assets/img/flags/${d0.flag}.svg" alt="" width="24" height="18"><span data-route-to>${esc(d0.name)}</span></strong></p>
      </div>
    </div>

    <fieldset class="chips">
      <legend>Where do you want to study?</legend>
      <div class="chips__row">${destChips}</div>
    </fieldset>

    <fieldset class="chips">
      <legend>Your nearest branch</legend>
      <div class="chips__row">${officeChips}</div>
    </fieldset>

    <div class="route__person" aria-live="polite">
      <div class="who">
        <span data-route-avatar>${L.avatar(p0)}</span>
        <div>
          <p class="who__name" data-route-name>${esc(p0.name)}</p>
          <p class="who__role" data-route-role>${esc([p0.role, o0.city].filter(Boolean).join(', '))}</p>
        </div>
      </div>
      <div class="route__actions">
        <a class="btn btn--primary" data-route-wa href="${L.waHref(p0, `Hi ${company.name}, I am interested in studying in ${d0.short}. My nearest branch is ${o0.city}.`)}" target="_blank" rel="noopener">${icon('message-circle', 18)}<span data-route-wa-label>Ask about ${esc(d0.short)} on WhatsApp</span></a>
        <a class="btn btn--quiet" data-route-call href="${L.telHref(p0)}">${icon('phone', 18)}<span data-route-call-label>Call ${esc(p0.display)}</span></a>
      </div>
    </div>
  </div>`;
}

function finderSelects(prefix) {
  return `<div class="field">
        <label for="${prefix}-country">Country</label>
        <select id="${prefix}-country" name="country">
          <option value="">All countries</option>
          ${destinations.map((d) => `<option value="${d.id}">${esc(d.name)}</option>`).join('')}
        </select>
      </div>
      <div class="field">
        <label for="${prefix}-subject">Subject</label>
        <select id="${prefix}-subject" name="subject">
          <option value="">All subjects</option>
          ${Object.entries(subjects).map(([k, v]) => `<option value="${k}">${esc(v)}</option>`).join('')}
        </select>
      </div>`;
}

function home() {
  const tiles = destinations
    .map(
      (d) => `<li><a class="tile" href="${d.file}">
        ${L.flag(d, 'lg')}
        <h3>${esc(d.name)}</h3>
        <p>${esc(d.summary)}</p>
      </a></li>`
    )
    .join('');

  const officePanel = (o) => {
    const p = person(o.lead);
    return `<article class="office${o.inIndia ? '' : ' office--intl'}">
      <div class="office__top">
        <h3>${esc(o.city)}</h3>
        <span class="tag">${esc(o.kind)}</span>
      </div>
      ${L.who(p)}
      <div class="office__actions">
        ${L.callButton(p, { label: p.display, cls: 'btn btn--primary btn--sm' })}
        ${L.waButton(p, `Hi ${company.name}, I would like to know more about studying abroad.`, { cls: 'btn btn--wa btn--sm' })}
      </div>
    </article>`;
  };

  const body = `
<section class="hero">
  <div class="wrap hero__grid">
    <div class="hero__copy">
      <h1>Study abroad, starting from a branch near you.</h1>
      <p class="lede">${esc(company.name)} helps students from Andhra Pradesh choose a university, apply and get their visa. Walk into our offices in Vijayawada, Darsi or Ongole. If you are heading to the UK, our own team is there too.</p>
      <div class="hero__actions">
        <a class="btn btn--primary btn--lg" href="course-finder.html">Find a course</a>
        <a class="btn btn--quiet btn--lg" href="branches.html" data-open-call>${icon('phone', 18)}<span>Call a branch</span></a>
      </div>
    </div>
    ${routeWidget()}
  </div>
</section>

<section class="section" id="destinations">
  <div class="wrap">
    <div class="section__head section__head--split">
      <div>
        <h2>${cap(numberWord(destinations.length))} countries to choose from</h2>
      </div>
      <a class="text-link" href="destinations.html">Compare intakes and course lengths</a>
    </div>
    <ul class="tiles">${tiles}</ul>
  </div>
</section>

<section class="section section--sky" id="finder">
  <div class="wrap finder-teaser">
    <div class="finder-teaser__copy">
      <h2>Search ${universities.length} universities</h2>
      <p>Pick a country and a subject to see which universities teach it, at bachelor’s or master’s level.</p>
    </div>
    <form class="finder-teaser__form" action="course-finder.html" method="get" data-finder-teaser>
      ${finderSelects('t')}
      <button class="btn btn--primary btn--lg" type="submit">Search courses</button>
    </form>
  </div>
</section>

<section class="section" id="process">
  <div class="wrap">
    <div class="section__head section__head--split">
      <div>
        <h2>From first conversation to boarding gate</h2>
        <p>Five stops, in this order. We tell you which one you are at, and what comes next.</p>
      </div>
      <a class="text-link" href="services.html">What we help with</a>
    </div>
    <ol class="stops">${steps
      .map(
        (s, i) => `<li class="stop">
        <span class="stop__num" aria-hidden="true">${i + 1}</span>
        <h3>${esc(s.title)}</h3>
        <p>${esc(s.text)}</p>
      </li>`
      )
      .join('')}</ol>
  </div>
</section>

<section class="section section--sky" id="branches">
  <div class="wrap">
    <div class="section__head section__head--split">
      <div>
        <h2>The people who answer the phone</h2>
      </div>
      <a class="text-link" href="branches.html">Full team and directions</a>
    </div>
    <div class="offices">${offices.map(officePanel).join('')}</div>
  </div>
</section>
`;
  return L.shell({
    file: 'index.html',
    current: 'home',
    title: `${company.name} | Study abroad consultants in Vijayawada, Darsi and Ongole`,
    description:
      'Abroad admissions consultancy with branches in Vijayawada, Darsi and Ongole and an office in the UK. University shortlisting, applications, visa guidance and pre-departure support.',
    body,
  });
}

/* =========================================================
   About
   ========================================================= */

function about() {
  const principles = [
    {
      title: 'Face to face',
      text: 'Students and parents can sit across a table from the person handling their application.',
    },
    {
      title: 'Straight answers',
      text: 'We tell you which universities are realistic for your marks and budget, including when the answer is not the one you hoped for.',
    },
    {
      title: 'Nothing missed',
      text: 'Applications, loan papers and visa forms each have their own deadline. We keep track of them with you.',
    },
    {
      title: 'Someone on the other side',
      text: 'Our international head office is in the UK, so students going there know someone in the country.',
    },
  ];

  const team = Object.keys(people)
    .map((id) => {
      const p = person(id);
      const o = office(p.office);
      return `<li class="member">
        ${L.avatar(p, 'lg')}
        <div class="member__body">
          <h3>${esc(p.name)}</h3>
          ${p.role ? `<p class="member__role">${esc(p.role)}</p>` : ''}
          <p class="member__office">${icon('map-pin', 16)}<span>${esc(o.city)}</span></p>
          <a class="member__phone" href="${L.telHref(p)}">${esc(p.display)}</a>
        </div>
      </li>`;
    })
    .join('');

  const body = `
${L.pageHead({
  title: `About ${company.name}`,
  lede: 'An abroad admissions consultancy from Andhra Pradesh.',
  crumbs: [{ label: 'About' }],
})}

<section class="section">
  <div class="wrap about-grid">
    <div class="prose">
      <h2>Why we exist</h2>
      <p>Going abroad to study means a long list of decisions: which country, which university, which intake, which test, how to pay. Most families make these decisions only once, and a lot depends on getting them right.</p>
      <p>Our job is to make each of those decisions clear, and then to handle the paperwork that follows.</p>
    </div>
    <dl class="principles">
      ${principles.map((p) => `<div><dt>${esc(p.title)}</dt><dd>${esc(p.text)}</dd></div>`).join('')}
    </dl>
  </div>
</section>

<section class="section section--sky" id="team">
  <div class="wrap">
    <div class="section__head">
      <h2>Leadership</h2>
    </div>
    <ul class="team">${team}</ul>
  </div>
</section>
`;
  return L.shell({
    file: 'about.html',
    current: 'about',
    title: 'About us',
    description: `${company.name} is an abroad admissions consultancy from Andhra Pradesh with branches in Vijayawada, Darsi and Ongole and an international head office in the UK.`,
    body,
  });
}

/* =========================================================
   Services
   ========================================================= */

function servicesPage() {
  const body = `
${L.pageHead({
  title: 'Services',
  lede: 'What we do for you, from the first meeting to the day you fly.',
  crumbs: [{ label: 'Services' }],
})}

<section class="section">
  <div class="wrap">
    <ul class="svc-list">${services
      .map(
        (s) => `<li class="svc">
        <span class="svc__icon">${icon(s.icon, 22)}</span>
        <div>
          <h2 class="h3">${esc(s.title)}</h2>
          <p>${esc(s.text)}</p>
        </div>
      </li>`
      )
      .join('')}</ul>
  </div>
</section>

<section class="section section--sky">
  <div class="wrap wrap--narrow">
    <div class="section__head">
      <h2>What to bring to your first meeting</h2>
      <p>You do not need everything ready. The more we can see, the more specific our advice will be.</p>
    </div>
    <ul class="checks">
      ${firstMeeting.map((f) => `<li>${icon('check', 18)}<span>${esc(f)}</span></li>`).join('')}
    </ul>
  </div>
</section>
`;
  return L.shell({
    file: 'services.html',
    current: 'services',
    title: 'Services',
    description:
      'Counselling, university shortlisting, applications and SOP support, English test guidance, education loan guidance, visa guidance and pre-departure briefing.',
    body,
  });
}

/* =========================================================
   Destinations index + country guides
   ========================================================= */

function destinationsPage() {
  const rows = destinations
    .map(
      (d) => `<tr>
        <th scope="row"><a class="board__dest" href="${d.file}">${L.flag(d)}<span>${esc(d.name)}</span></a></th>
        <td data-label="Main intakes">${esc(d.intakes)}</td>
        <td data-label="Typical master’s">${esc(d.masters)}</td>
        <td data-label="English tests">${esc(d.tests)}</td>
        <td data-label="Universities listed">${unisIn(d.id).length}</td>
      </tr>`
    )
    .join('');

  const body = `
${L.pageHead({
  title: 'Compare study destinations',
  lede: 'Intakes, course lengths and language tests, side by side. Select a country for its full guide.',
  crumbs: [{ label: 'Destinations' }],
})}

<section class="section">
  <div class="wrap">
    <div class="board board--wide">
      <table>
        <thead>
          <tr>
            <th scope="col">Destination</th>
            <th scope="col">Main intakes</th>
            <th scope="col">Typical master’s</th>
            <th scope="col">English tests</th>
            <th scope="col">Universities listed</th>
          </tr>
        </thead>
        <tbody>${rows}</tbody>
      </table>
    </div>
    <p class="note">Course lengths are typical figures. Individual universities and courses vary.</p>
  </div>
</section>
`;
  return L.shell({
    file: 'destinations.html',
    current: 'destinations',
    title: 'Compare study destinations',
    description: `Compare studying in ${destinations.map((d) => d.short).join(', ')}: intakes, course lengths and English test requirements.`,
    body,
  });
}

function countryPage(d) {
  const others = destinations
    .filter((x) => x.id !== d.id)
    .map((x) => `<li><a class="pill-link" href="${x.file}">${L.flag(x, 'sm')}<span>${esc(x.name)}</span></a></li>`)
    .join('');

  const unis = unisIn(d.id);
  const uniList = unis
    .map(
      (u) => `<li class="uni-brief">
        <h3>${esc(u.name)}</h3>
        <p class="uni-brief__city">${esc(u.city)}</p>
        <p>${esc(u.point)}</p>
      </li>`
    )
    .join('');

  const body = `
<section class="page-head page-head--country">
  <div class="wrap">
    <nav class="crumbs" aria-label="Breadcrumb"><ol><li><a href="index.html">Home</a></li><li><a href="destinations.html">Destinations</a></li><li aria-current="page">${esc(d.name)}</li></ol></nav>
    <div class="country-title">
      ${L.flag(d, 'xl')}
      <h1>Study in ${esc(d.short)}</h1>
    </div>
    <p class="lede">${esc(d.summary)}</p>
    <div class="hero__actions">
      <a class="btn btn--primary btn--lg" href="contact.html?dest=${d.id}#enquiry">Enquire about ${esc(d.short)}</a>
      <a class="btn btn--quiet btn--lg" href="course-finder.html?country=${d.id}">Find courses in ${esc(d.short)}</a>
    </div>
  </div>
</section>

<section class="section section--tight">
  <div class="wrap">
    <h2 class="sr-only">At a glance</h2>
    <dl class="glance">
      <div><dt>Main intakes</dt><dd>${esc(d.intakes)}</dd></div>
      <div><dt>Master’s degree</dt><dd>${esc(d.masters)}</dd></div>
      <div><dt>Bachelor’s degree</dt><dd>${esc(d.bachelors)}</dd></div>
      <div><dt>English tests</dt><dd>${esc(d.tests)}</dd></div>
      <div><dt>Visa</dt><dd>${esc(d.visa)}</dd></div>
    </dl>
  </div>
</section>

<section class="section">
  <div class="wrap about-grid">
    <div class="prose">
      <h2>Why students choose ${esc(d.short)}</h2>
      <ul class="checks">
        ${d.why.map((w) => `<li>${icon('check', 18)}<span>${esc(w)}</span></li>`).join('')}
      </ul>
      <h2>Popular subjects</h2>
      <ul class="subject-list">${d.fields.map((f) => `<li>${esc(f)}</li>`).join('')}</ul>
    </div>
    <div class="prose">
      <h2>Documents you will need</h2>
      <ul class="doc-list">
        ${d.documents.map((x) => `<li>${icon('file-text', 18)}<span>${esc(x)}</span></li>`).join('')}
      </ul>
      <h2>After you graduate</h2>
      <p>${esc(d.after)}</p>
      <p class="note">Visa and work rules change. Your counsellor will confirm what applies on the date you apply.</p>
    </div>
  </div>
</section>

<section class="section section--sky">
  <div class="wrap">
    <div class="section__head section__head--split">
      <div>
        <h2>Universities in ${esc(d.short)}</h2>
      </div>
      <a class="text-link" href="course-finder.html?country=${d.id}">See their courses</a>
    </div>
    <ul class="uni-briefs">${uniList}</ul>
  </div>
</section>

<section class="section section--tight">
  <div class="wrap">
    <h2 class="h3">Other destinations</h2>
    <ul class="pill-links">${others}</ul>
  </div>
</section>
`;
  return L.shell({
    file: d.file,
    current: 'destinations',
    title: `Study in ${d.short}`,
    description: `Studying in ${d.short} from India: intakes, course lengths, English tests, documents, universities and what happens after you graduate.`,
    body,
  });
}

/* =========================================================
   Course finder
   ========================================================= */

function finderPage() {
  const cards = universities
    .map((u) => {
      const d = dest(u.country);
      const group = (lv) => {
        const list = u.courses.filter((c) => c.level === lv);
        if (!list.length) return '';
        return `<div class="uni__group" data-level-group="${lv}">
          <p class="uni__level">${levels[lv]}</p>
          <ul class="uni__courses">${list
            .map((c) => `<li data-course data-level="${c.level}" data-subject="${c.subject}" data-name="${esc(c.name.toLowerCase())}">${esc(c.name)}</li>`)
            .join('')}</ul>
        </div>`;
      };
      return `<li class="uni" data-uni data-country="${u.country}" data-text="${esc((u.name + ' ' + u.city).toLowerCase())}">
        <div class="uni__head">
          ${L.flag(d)}
          <div>
            <h2 class="uni__name">${esc(u.name)}</h2>
            <p class="uni__place">${esc(u.city)}, ${esc(d.name)}</p>
          </div>
        </div>
        <p class="uni__point">${esc(u.point)}</p>
        ${group('PG')}
        ${group('UG')}
        <div class="uni__actions">
          <a class="btn btn--primary btn--sm" href="contact.html?dest=${u.country}&amp;interest=${encodeURIComponent(u.name)}#enquiry">Enquire about this university</a>
          <a class="uni__site" href="${esc(u.url)}" target="_blank" rel="noopener">University website</a>
        </div>
      </li>`;
    })
    .join('');

  const body = `
${L.pageHead({
  title: 'Course finder',
  lede: `${universities.length} universities and ${courseCount} courses across ${numberWord(destinations.length)} countries. Filter by country, level and subject.`,
  crumbs: [{ label: 'Course finder' }],
})}

<section class="section section--tight finder">
  <div class="wrap">
    <form class="finder__filters" data-finder role="search" aria-label="Filter universities and courses">
      ${finderSelects('f')}
      <div class="field">
        <label for="f-level">Level</label>
        <select id="f-level" name="level">
          <option value="">Any level</option>
          <option value="UG">${levels.UG}</option>
          <option value="PG">${levels.PG}</option>
        </select>
      </div>
      <div class="field">
        <label for="f-q">University or course</label>
        <input id="f-q" name="q" type="search" autocomplete="off" placeholder="e.g. data science">
      </div>
      <button class="btn btn--quiet" type="reset">Clear filters</button>
    </form>

    <p class="finder__count" data-finder-count role="status" aria-live="polite">${universities.length} universities, ${courseCount} courses</p>

    <ul class="unis" data-finder-list>${cards}</ul>

    <div class="finder__empty" data-finder-empty hidden>
      <h2 class="h3">No courses match those filters</h2>
      <p>Remove a filter or try a broader search. If the course you want is not listed, ask us. This list does not cover everything we can help with.</p>
      <a class="btn btn--primary" href="contact.html#enquiry">Ask about a course</a>
    </div>

    <p class="note finder__note">This is a guide to popular options, not a complete list and not a list of partner universities. Course names are simplified, and universities change their courses, fees and entry requirements every year. Check the university website or ask us before you apply.</p>
  </div>
</section>
`;
  return L.shell({
    file: 'course-finder.html',
    current: 'finder',
    title: 'Course finder',
    description: `Search universities and courses in ${destinations.map((d) => d.short).join(', ')} by country, level and subject.`,
    body,
  });
}

/* =========================================================
   Branches
   ========================================================= */

function branchesPage() {
  const personRow = (p) => `<li class="staff">
      ${L.who(p)}
      <div class="staff__actions">
        ${L.callButton(p, { label: p.display, cls: 'btn btn--primary btn--sm' })}
        ${L.waButton(p, `Hi ${company.name}, I would like to know more about studying abroad.`, { cls: 'btn btn--wa btn--sm' })}
      </div>
    </li>`;

  const blocks = offices
    .map((o) => {
      const staff = [o.lead, ...o.team].map(person);
      const meta = [
        o.address ? `<p class="branch__line">${icon('map-pin', 18)}<span>${esc(o.address)}</span></p>` : '',
        o.hours ? `<p class="branch__line">${icon('clock', 18)}<span>${esc(o.hours)}</span></p>` : '',
        o.inIndia || o.mapUrl
          ? `<p class="branch__line">${icon('map-pin', 18)}<a href="${esc(L.mapHref(o))}" target="_blank" rel="noopener">${o.address ? 'Open in Google Maps' : `Find ${esc(o.city)} on Google Maps`}</a></p>`
          : '',
      ].join('');
      return `<article class="branch${o.inIndia ? '' : ' branch--intl'}" id="${o.id}">
        <div class="branch__info">
          <h2>${esc(o.city)}</h2>
          <span class="tag">${esc(o.kind)}</span>
          ${o.region ? `<p class="branch__region">${esc(o.region)}, India</p>` : ''}
          ${meta}
          ${o.address ? '' : `<p class="note">${o.inIndia ? 'Call for directions to the office.' : 'Call or message for the office address.'}</p>`}
        </div>
        <ul class="staff-list">${staff.map(personRow).join('')}</ul>
      </article>`;
    })
    .join('');

  const body = `
${L.pageHead({
  title: 'Branches',
  lede: `${cap(numberWord(indiaOffices.length))} offices in Andhra Pradesh and an international head office in the UK.`,
  crumbs: [{ label: 'Branches' }],
})}

<section class="section">
  <div class="wrap">
    <div class="branches">${blocks}</div>
  </div>
</section>
`;
  return L.shell({
    file: 'branches.html',
    current: 'branches',
    title: 'Branches',
    description: `${company.name} offices in Vijayawada, Darsi and Ongole, and our international head office in the UK, with direct phone numbers.`,
    body,
  });
}

/* =========================================================
   Contact + enquiry form
   ========================================================= */

function contactPage() {
  const key = company.enquiryAccessKey.trim();

  const officeOptions = offices
    .map((o) => {
      const p = person(o.lead);
      return `<option value="${o.id}" data-phone="${p.phone}" data-name="${esc(p.name)}" data-display="${esc(p.display)}">${esc(o.city)}${o.inIndia ? '' : ' office'}</option>`;
    })
    .join('');
  const destOptions = destinations.map((d) => `<option value="${d.id}">${esc(d.name)}</option>`).join('');

  const intro = key
    ? 'Tell us a little about yourself and the branch you choose will call you back.'
    : 'Tell us a little about yourself. Submitting opens WhatsApp with your details filled in, addressed to the branch you choose. Press send there and we will reply.';

  const buttons = key
    ? `<button class="btn btn--primary btn--lg" type="submit" data-send="email">Submit enquiry</button>
          <button class="btn btn--wa btn--lg" type="button" data-send="whatsapp">${icon('message-circle', 18)}<span>Send on WhatsApp instead</span></button>`
    : `<button class="btn btn--primary btn--lg" type="submit" data-send="whatsapp">Submit enquiry</button>`;

  const body = `
${L.pageHead({
  title: 'Submit an enquiry',
  lede: 'Or call a branch directly. The numbers are on this page.',
  crumbs: [{ label: 'Contact' }],
})}

<section class="section">
  <div class="wrap contact-grid">
    <div class="form-card" id="enquiry">
      <h2>Your enquiry</h2>
      <p>${intro}</p>
      <form class="form" data-enquiry data-access-key="${esc(key)}" data-company="${esc(company.name)}" novalidate>
        <div class="field">
          <label for="f-name">Your name</label>
          <input id="f-name" name="name" type="text" autocomplete="name" required>
          <p class="field__error" data-error-for="name" hidden>Enter your name so we know who to ask for.</p>
        </div>
        <div class="field">
          <label for="f-phone">Phone number</label>
          <input id="f-phone" name="phone" type="tel" inputmode="tel" autocomplete="tel" required>
          <p class="field__error" data-error-for="phone" hidden>Enter a phone number with at least 10 digits.</p>
        </div>
        <div class="field">
          <label for="f-email">Email <span class="field__opt">Optional</span></label>
          <input id="f-email" name="email" type="email" autocomplete="email">
          <p class="field__error" data-error-for="email" hidden>That email address does not look complete. Check it, or leave it empty.</p>
        </div>
        <div class="field">
          <label for="f-office">Nearest branch</label>
          <select id="f-office" name="office" required>${officeOptions}</select>
        </div>
        <div class="field">
          <label for="f-dest">Where do you want to study?</label>
          <select id="f-dest" name="dest">
            <option value="">Not sure yet</option>
            ${destOptions}
          </select>
        </div>
        <div class="field">
          <label for="f-level">Level</label>
          <select id="f-level" name="level">
            <option>Master’s</option>
            <option>Bachelor’s</option>
            <option>Diploma or other</option>
          </select>
        </div>
        <div class="field field--full">
          <label for="f-interest">Course or university you have in mind <span class="field__opt">Optional</span></label>
          <input id="f-interest" name="interest" type="text">
        </div>
        <div class="field field--full">
          <label for="f-msg">Anything else we should know? <span class="field__opt">Optional</span></label>
          <textarea id="f-msg" name="message" rows="4"></textarea>
        </div>
        <input class="hp" type="checkbox" name="botcheck" tabindex="-1" autocomplete="off" aria-hidden="true">
        <div class="field field--full">
          <div class="form__buttons">
          ${buttons}
          </div>
          <p class="form__status" data-status role="status" aria-live="polite"></p>
        </div>
      </form>
    </div>

    <aside class="contact-side">
      <h2 class="h3">Call a branch directly</h2>
      <ul class="call-list">${offices
        .map((o) => {
          const p = person(o.lead);
          return `<li class="call-row">
        <div class="call-row__who">
          <span class="call-row__city">${esc(o.city)}</span>
          <span class="call-row__name">${esc([p.name, p.role].filter(Boolean).join(', '))}</span>
        </div>
        <div class="call-row__actions">
          ${L.callButton(p, { label: p.display, cls: 'btn btn--primary btn--sm' })}
          ${L.waButton(p, `Hi ${company.name}, I would like to know more about studying abroad.`, { cls: 'btn btn--wa btn--sm' })}
        </div>
      </li>`;
        })
        .join('')}</ul>
      ${company.email ? `<p class="contact-side__mail">${icon('mail', 18)}<a href="mailto:${esc(company.email)}">${esc(company.email)}</a></p>` : ''}
    </aside>
  </div>
</section>

<section class="section section--sky" id="faq">
  <div class="wrap wrap--narrow">
    <div class="section__head">
      <h2>Before you enquire</h2>
    </div>
    ${L.faqList(faqs)}
  </div>
</section>
`;
  return L.shell({
    file: 'contact.html',
    current: 'contact',
    title: 'Submit an enquiry',
    description: `Submit an enquiry to ${company.name}, or call our Vijayawada, Darsi, Ongole or UK office directly.`,
    body,
  });
}

/* =========================================================
   404
   ========================================================= */

function notFound() {
  const body = `
<section class="page-head page-head--center">
  <div class="wrap wrap--narrow">
    <h1>We could not find that page</h1>
    <p class="lede">The link may be old or mistyped. These will get you back on track.</p>
    <div class="hero__actions">
      <a class="btn btn--primary btn--lg" href="index.html">Go to the home page</a>
      <a class="btn btn--quiet btn--lg" href="course-finder.html">Open the course finder</a>
    </div>
  </div>
</section>
`;
  return L.shell({
    file: '404.html',
    current: '',
    title: 'Page not found',
    description: 'Page not found.',
    body,
    // <base> keeps CSS and links working when the server shows this page at a nested URL.
    extraHead: '<meta name="robots" content="noindex">\n<base href="/">',
  });
}

module.exports = function allPages() {
  return [
    { file: 'index.html', html: home() },
    { file: 'course-finder.html', html: finderPage() },
    { file: 'destinations.html', html: destinationsPage() },
    ...destinations.map((d) => ({ file: d.file, html: countryPage(d) })),
    { file: 'services.html', html: servicesPage() },
    { file: 'about.html', html: about() },
    { file: 'branches.html', html: branchesPage() },
    { file: 'contact.html', html: contactPage() },
    { file: '404.html', html: notFound(), noSitemap: true },
  ];
};
