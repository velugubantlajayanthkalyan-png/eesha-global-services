/*
 * SITE CONTENT: people, branches, countries, services and FAQs.
 * (Universities and courses for the course finder are in universities.js.)
 * Change a phone number, add a branch, edit a service — then run:  npm run build
 * Never edit the .html files in the project root by hand; they are regenerated.
 */

const company = {
  name: 'Eesha Global Services',
  shortName: 'Eesha',
  tagline: 'Abroad admissions consultancy',
  siteUrl: 'https://eeshaglobalservices.com', // no trailing slash
  email: '',          // e.g. 'info@eeshaglobalservices.com' — shown site-wide once filled in
  logo: '',           // e.g. 'assets/img/logo.png' — replaces the built-in mark once filled in
  primaryContact: 'prudhvi', // who the general "WhatsApp us" buttons go to
  /*
   * ENQUIRY FORM
   * Paste a Web3Forms access key here and every enquiry is emailed to you.
   * Get one free at https://web3forms.com (enter your email, the key arrives by email).
   * While this is empty, the form sends the enquiry through WhatsApp instead.
   */
  enquiryAccessKey: '',
  social: {
    instagram: '',    // full URLs; a link appears in the footer once filled in
    facebook: '',
    youtube: '',
    linkedin: '',
  },
};

/*
 * PEOPLE
 * phone: digits only, with country code, no "+" (used for tel: and WhatsApp links)
 * display: how the number is printed on the page
 * role: job title; leave '' to show none
 * photo: optional, e.g. 'assets/img/team/prudhvi.jpg' (square works best)
 */
const people = {
  prudhvi: {
    name: 'Ailuri Prudhvi Reddy',
    role: 'MD / CEO',
    office: 'vijayawada',
    phone: '917093548281',
    display: '+91 70935 48281',
    photo: '',
  },
  bhargav: {
    name: 'Kanakam Bhargav',
    role: 'Managing Director',
    office: 'darsi',
    phone: '918341617304',
    display: '+91 83416 17304',
    photo: '',
  },
  siva: {
    name: 'Singamsetty Venkata Siva',
    role: 'Director',
    office: 'darsi',
    phone: '919959562169',
    display: '+91 99595 62169',
    photo: '',
  },
  sai: {
    name: 'Orugu Naga Venkata Sai',
    role: 'Chief Marketing Officer',
    office: 'darsi',
    phone: '918520919679',
    display: '+91 85209 19679',
    photo: '',
  },
  sandeep: {
    name: 'Meriga Sandeep',
    role: 'Managing Director',
    office: 'ongole',
    phone: '917036285535',
    display: '+91 70362 85535',
    photo: '',
  },
  naveen: {
    name: 'Naveen',
    role: '', // add his title here, e.g. 'UK Operations Head'
    office: 'uk',
    phone: '447887133146',
    display: '+44 7887 133146',
    photo: '',
  },
};

/*
 * OFFICES
 * address: leave '' until you have the exact text; it appears automatically once filled in
 * mapUrl: paste a Google Maps share link; until then a search link for the town is used
 * hours: e.g. 'Mon–Sat, 10 am – 7 pm'
 */
const offices = [
  {
    id: 'vijayawada',
    city: 'Vijayawada',
    region: 'Andhra Pradesh',
    kind: 'Branch',
    lead: 'prudhvi',
    team: [],
    address: '',
    mapUrl: '',
    hours: '',
    inIndia: true,
  },
  {
    id: 'darsi',
    city: 'Darsi',
    region: 'Andhra Pradesh',
    kind: 'Andhra head office',
    lead: 'bhargav',
    team: ['siva', 'sai'],
    address: '',
    mapUrl: '',
    hours: '',
    inIndia: true,
  },
  {
    id: 'ongole',
    city: 'Ongole',
    region: 'Andhra Pradesh',
    kind: 'Branch',
    lead: 'sandeep',
    team: [],
    address: '',
    mapUrl: '',
    hours: '',
    inIndia: true,
  },
  {
    id: 'uk',
    city: 'United Kingdom',
    region: '',
    kind: 'International head office',
    lead: 'naveen',
    team: [],
    address: '',
    mapUrl: '',
    hours: '',
    inIndia: false,
  },
];

/*
 * DESTINATIONS
 * Facts here are deliberately general. Visa and work rules change often,
 * so every country page tells students that the counsellor confirms current rules.
 */
const destinations = [
  {
    id: 'uk',
    file: 'study-in-uk.html',
    flag: 'gb',
    name: 'United Kingdom',
    short: 'the UK',
    intakes: 'September, January',
    masters: '1 year',
    bachelors: '3 years (4 in Scotland)',
    tests: 'IELTS or PTE; some universities accept TOEFL, Duolingo or Class 12 English marks',
    visa: 'Student visa',
    summary:
      'One-year master’s degrees, two main intakes, and our own office in the country.',
    why: [
      'Most master’s degrees take one year, so you pay living costs for one year instead of two.',
      'Two main intakes, September and January, give you a second chance if you miss the first.',
      'Some universities accept strong Class 12 English marks in place of a language test.',
      'Eesha has its own office in the UK, so you have a contact in the country.',
    ],
    documents: [
      'Passport',
      'Class 10, Class 12 and degree mark sheets and certificates',
      'English test score, or a waiver from the university',
      'Statement of purpose and letters of recommendation',
      'CAS (Confirmation of Acceptance for Studies) from your university',
      'Bank statements or an education loan sanction letter',
      'Tuberculosis test certificate from an approved clinic',
    ],
    after:
      'After your degree you can apply for the Graduate Route visa, which lets you stay in the UK and work or look for work.',
    fields: ['Business and management', 'Computer science and data', 'Engineering', 'Public health and nursing', 'Law'],
  },
  {
    id: 'usa',
    file: 'study-in-usa.html',
    flag: 'us',
    name: 'United States',
    short: 'the USA',
    intakes: 'Fall (Aug–Sep), Spring (Jan)',
    masters: '2 years',
    bachelors: '4 years',
    tests: 'TOEFL, IELTS or Duolingo; GRE or GMAT for some courses',
    visa: 'F-1 student visa',
    summary:
      'The widest choice of universities and courses, with work options after STEM degrees.',
    why: [
      'Thousands of universities, so there is a realistic option for most academic profiles.',
      'Courses are flexible: you choose electives and can often change your focus as you go.',
      'Many universities no longer ask for the GRE; we tell you which ones do.',
      'Graduates can work in their field after the degree, with a longer period for STEM subjects.',
    ],
    documents: [
      'Passport',
      'Class 10, Class 12 and degree transcripts',
      'English test score, plus GRE or GMAT where the course asks for it',
      'Statement of purpose, résumé and letters of recommendation',
      'Form I-20 from your university',
      'Bank statements or an education loan sanction letter',
      'SEVIS fee receipt and DS-160 confirmation for the visa interview',
    ],
    after:
      'Optional Practical Training (OPT) lets you work in your field after you graduate. Graduates of STEM courses can apply for an extension.',
    fields: ['Computer science', 'Data science and AI', 'Engineering', 'Business analytics and MBA', 'Life sciences'],
  },
  {
    id: 'canada',
    file: 'study-in-canada.html',
    flag: 'ca',
    name: 'Canada',
    short: 'Canada',
    intakes: 'September, January, May',
    masters: '1–2 years',
    bachelors: '4 years',
    tests: 'IELTS, PTE or TOEFL',
    visa: 'Study permit',
    summary:
      'Universities and public colleges, three intakes a year, and work rights that depend on your course.',
    why: [
      'You can choose between university degrees and shorter, career-focused college programmes.',
      'Three intakes a year: September, January and May.',
      'Co-op programmes build paid work experience into the course.',
      'Whether you can work after graduating depends on the course and college, so we check that before you apply.',
    ],
    documents: [
      'Passport',
      'Class 10, Class 12 and degree mark sheets and certificates',
      'English test score',
      'Letter of acceptance from a designated learning institution',
      'Attestation letter from the province, where it is required',
      'Proof of funds (a GIC is commonly used)',
      'Study plan and medical examination',
    ],
    after:
      'Many graduates qualify for a post-graduation work permit. Eligibility depends on your programme and institution, and we confirm it before you accept an offer.',
    fields: ['Business and project management', 'IT and software', 'Healthcare', 'Engineering technology', 'Supply chain'],
  },
  {
    id: 'australia',
    file: 'study-in-australia.html',
    flag: 'au',
    name: 'Australia',
    short: 'Australia',
    intakes: 'February, July',
    masters: '1.5–2 years',
    bachelors: '3 years',
    tests: 'IELTS, PTE or TOEFL',
    visa: 'Student visa (subclass 500)',
    summary:
      'Highly ranked universities, February and July intakes, and a graduate visa after you finish.',
    why: [
      'Several Australian universities rank among the best in the world.',
      'February and July intakes fit well with Indian academic calendars.',
      'PTE is widely accepted, which many students find easier to schedule.',
      'A graduate visa lets eligible students stay and work after their course.',
    ],
    documents: [
      'Passport',
      'Class 10, Class 12 and degree mark sheets and certificates',
      'English test score',
      'Confirmation of Enrolment (CoE) from your university',
      'Genuine Student statement',
      'Overseas Student Health Cover (OSHC)',
      'Bank statements or an education loan sanction letter',
    ],
    after:
      'Eligible graduates can apply for the Temporary Graduate visa (subclass 485) to stay and work after their course.',
    fields: ['IT and cyber security', 'Engineering', 'Nursing and health', 'Accounting and business', 'Construction management'],
  },
  {
    id: 'germany',
    file: 'study-in-germany.html',
    flag: 'de',
    name: 'Germany',
    short: 'Germany',
    intakes: 'Winter (Sep–Oct), Summer (Mar–Apr)',
    masters: '2 years',
    bachelors: '3–4 years',
    tests: 'IELTS or TOEFL for English-taught courses; German for others',
    visa: 'National student visa',
    summary:
      'Low or no tuition at many public universities, and strong engineering and technology courses.',
    why: [
      'Many public universities charge little or no tuition, even for international students.',
      'A large number of master’s courses are taught fully in English.',
      'Germany is known for engineering, automotive and manufacturing courses.',
      'Graduates can stay on a residence permit while they look for a job.',
    ],
    documents: [
      'Passport',
      'Class 10, Class 12 and degree mark sheets and certificates',
      'APS certificate (required for Indian applicants)',
      'English or German language score',
      'Motivation letter, CV and letters of recommendation',
      'Admission letter from your university',
      'Blocked account confirmation and health insurance',
    ],
    after:
      'After graduating you can apply for a residence permit that gives you time to find work related to your degree.',
    fields: ['Mechanical and automotive engineering', 'Computer science', 'Electrical engineering', 'Data science', 'Management'],
  },
  {
    id: 'ireland',
    file: 'study-in-ireland.html',
    flag: 'ie',
    name: 'Ireland',
    short: 'Ireland',
    intakes: 'September, some in January',
    masters: '1 year',
    bachelors: '3–4 years',
    tests: 'IELTS, PTE, TOEFL or Duolingo',
    visa: 'Study visa',
    summary:
      'English-speaking, one-year master’s degrees, and a base for many global technology and pharma companies.',
    why: [
      'An English-speaking country inside the European Union.',
      'Most master’s degrees take one year.',
      'Many global technology and pharmaceutical companies have their European offices in Ireland.',
      'Graduates can stay on after their course to look for work.',
    ],
    documents: [
      'Passport',
      'Class 10, Class 12 and degree mark sheets and certificates',
      'English test score',
      'Offer letter and fee payment receipt from your university',
      'Bank statements or an education loan sanction letter',
      'Medical insurance',
      'Statement of purpose',
    ],
    after:
      'The Third Level Graduate Programme lets graduates stay in Ireland after their course to look for work.',
    fields: ['Computer science and cloud', 'Data analytics', 'Pharmaceutical science', 'Finance', 'Business'],
  },
  {
    id: 'france',
    file: 'study-in-france.html',
    flag: 'fr',
    name: 'France',
    short: 'France',
    intakes: 'September, some in January',
    masters: '1–2 years',
    bachelors: '3 years',
    tests: 'IELTS or TOEFL for English-taught courses; French (DELF, DALF or TCF) for others',
    visa: 'Long-stay student visa (VLS-TS)',
    summary:
      'Well-known business and engineering schools, with a large number of master’s courses taught in English.',
    why: [
      'France’s business schools, the grandes écoles, are among the best known in Europe for management and finance.',
      'Fees at public universities are set by the government and are lower than in most English-speaking countries.',
      'A large number of master’s courses are taught fully in English, so French is not always needed to get in.',
      'Students can work part-time while they study.',
    ],
    documents: [
      'Passport',
      'Class 10, Class 12 and degree mark sheets and certificates',
      'English or French language score',
      'Statement of purpose, CV and letters of recommendation',
      'Admission letter from your university or school',
      'Campus France file and interview (the Études en France procedure)',
      'Proof of funds and proof of accommodation',
    ],
    after:
      'Graduates with a master’s degree from France can apply for a post-study residence permit that gives them time to look for work.',
    fields: ['Management and marketing', 'Finance', 'Luxury and fashion management', 'Data science and AI', 'Aerospace and engineering'],
  },
  {
    id: 'nz',
    file: 'study-in-new-zealand.html',
    flag: 'nz',
    name: 'New Zealand',
    short: 'New Zealand',
    intakes: 'February, July',
    masters: '1–2 years',
    bachelors: '3 years',
    tests: 'IELTS, PTE or TOEFL',
    visa: 'Fee Paying Student Visa',
    summary:
      'Eight public universities, February and July intakes, and a work visa for eligible graduates.',
    why: [
      'New Zealand has eight universities, and all eight are public.',
      'February and July intakes line up well with Indian academic calendars.',
      'Known for agriculture, environmental science, engineering, IT and health courses.',
      'Students can work part-time during term, and eligible graduates can stay on to work.',
    ],
    documents: [
      'Passport',
      'Class 10, Class 12 and degree mark sheets and certificates',
      'English test score',
      'Offer of place from your university',
      'Evidence of funds for tuition fees and living costs',
      'Statement of purpose',
      'Medical and police certificates, where your course length requires them',
    ],
    after:
      'Graduates with an eligible qualification can apply for a Post Study Work Visa. How long it lasts depends on what you studied.',
    fields: ['IT and software', 'Engineering', 'Agriculture and environment', 'Business and management', 'Health sciences'],
  },
];

const services = [
  {
    icon: 'compass',
    title: 'Counselling and profile review',
    text: 'We look at your marks, budget and goals, and tell you plainly which countries and courses are realistic.',
  },
  {
    icon: 'graduation-cap',
    title: 'University and course shortlisting',
    text: 'A shortlist that fits your profile, with the reason for each choice, the fees and the deadline.',
  },
  {
    icon: 'file-text',
    title: 'Applications and SOP support',
    text: 'Help preparing your documents and statement of purpose, and tracking every application until you have a decision.',
  },
  {
    icon: 'languages',
    title: 'English test guidance',
    text: 'Which test each university accepts (IELTS, PTE, TOEFL or Duolingo) and the score you need.',
  },
  {
    icon: 'landmark',
    title: 'Education loan guidance',
    text: 'Your loan options explained, along with the documents banks ask for and the usual timelines.',
  },
  {
    icon: 'stamp',
    title: 'Visa guidance and mock interviews',
    text: 'We go through the financial documents and the visa form with you, and practise the interview if there is one.',
  },
  {
    icon: 'luggage',
    title: 'Pre-departure briefing',
    text: 'Accommodation, forex, travel and what to pack, covered before you fly.',
  },
  {
    icon: 'house',
    title: 'A contact in the UK',
    text: 'Our own office in the UK gives students heading there a point of contact after they arrive.',
  },
];

// A real sequence, so it is numbered on the page.
const steps = [
  {
    title: 'Talk to a counsellor',
    text: 'Tell us your marks, your budget and what you want to study. Walk in, call or WhatsApp.',
  },
  {
    title: 'Get your shortlist',
    text: 'We suggest universities and courses that match your profile, and explain why.',
  },
  {
    title: 'Apply',
    text: 'We help with documents and your statement of purpose, then track each application.',
  },
  {
    title: 'Get your visa',
    text: 'We check your financial documents and visa form, and prepare you for the interview.',
  },
  {
    title: 'Fly',
    text: 'Before you leave we cover accommodation, forex and what to pack.',
  },
];

const faqs = [
  {
    q: 'When should I start?',
    a: 'About 8 to 12 months before your intake. For a September start, that means beginning the previous autumn or winter. Starting later is possible, but your choice of universities gets narrower.',
  },
  {
    q: 'Do I need IELTS?',
    a: 'It depends on the country and the university. Most accept IELTS or PTE. Many also accept TOEFL or Duolingo, and some UK universities accept strong Class 12 English marks instead. We check this for every university on your shortlist.',
  },
  {
    q: 'I have backlogs or a gap in my studies. Can I still apply?',
    a: 'Often, yes. Many universities accept applicants with backlogs or study gaps, though your options depend on how many and on the rest of your profile. Give us the details and we will tell you where you stand.',
  },
  {
    q: 'How much money do I need to show for the visa?',
    a: 'Each country sets its own proof-of-funds rule and revises the amount from time to time. Your counsellor will give you the current figure for your destination and explain which documents are accepted.',
  },
  {
    q: 'Can you guarantee an admission or a visa?',
    a: 'No, and nobody honestly can. Universities and embassies make those decisions. What we do is make sure your applications are complete, accurate and on time, which is the part you can control.',
  },
  {
    q: 'Which branch should I visit?',
    a: 'Whichever is closest: Vijayawada, Darsi or Ongole. If you cannot travel, call or WhatsApp us and we will start from there.',
  },
];

const firstMeeting = [
  'Class 10, Class 12 and degree mark sheets (photos on your phone are fine)',
  'Your passport, if you have one',
  'Any English test or GRE score you already have',
  'A rough idea of your budget, and whether you plan to take a loan',
  'Countries or courses you are curious about, even if you are not sure yet',
];

module.exports = { company, people, offices, destinations, services, steps, faqs, firstMeeting };
