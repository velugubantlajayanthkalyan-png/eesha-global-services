/*
 * UNIVERSITIES AND COURSES — used by the course finder and the country guides.
 *
 * Edit freely: remove universities you do not work with, add the ones you do.
 *
 * Each course is written as  'LEVEL|SUBJECT|Course name'
 *   LEVEL    UG = undergraduate, PG = postgraduate
 *   SUBJECT  one of the keys in "subjects" below
 *
 * Course names are simplified (for example "Computer Science" rather than the
 * university's full degree title). Universities add, rename and withdraw courses
 * every year, so treat this as a guide and confirm on the university website.
 */

const subjects = {
  business: 'Business and management',
  computing: 'Computer science and IT',
  data: 'Data science and AI',
  engineering: 'Engineering',
  finance: 'Finance and accounting',
  health: 'Health and life sciences',
  science: 'Science, agriculture and environment',
  design: 'Design, media and architecture',
  law: 'Law',
};

const levels = { UG: 'Undergraduate', PG: 'Postgraduate' };

const universities = [
  /* ===================== UNITED KINGDOM ===================== */
  {
    country: 'uk',
    name: 'University of Birmingham',
    city: 'Birmingham',
    url: 'https://www.birmingham.ac.uk',
    point: 'A Russell Group research university in the UK’s second-largest city.',
    courses: [
      'PG|computing|Computer Science', 'PG|data|Data Science', 'PG|business|International Business', 'PG|business|MBA',
      'PG|engineering|Mechanical Engineering', 'PG|health|Public Health', 'PG|finance|Financial Management',
      'UG|computing|Computer Science', 'UG|engineering|Mechanical Engineering', 'UG|business|Business Management', 'UG|law|Law',
    ],
  },
  {
    country: 'uk',
    name: 'University of Leeds',
    city: 'Leeds',
    url: 'https://www.leeds.ac.uk',
    point: 'A Russell Group university whose business school holds triple accreditation.',
    courses: [
      'PG|data|Data Science and Analytics', 'PG|computing|Advanced Computer Science', 'PG|business|International Business',
      'PG|engineering|Mechanical Engineering', 'PG|engineering|Electronic and Electrical Engineering', 'PG|finance|Banking and International Finance',
      'UG|computing|Computer Science', 'UG|business|Business Management', 'UG|law|Law',
    ],
  },
  {
    country: 'uk',
    name: 'University of Glasgow',
    city: 'Glasgow',
    url: 'https://www.gla.ac.uk',
    point: 'Founded in 1451. A Russell Group university and one of the oldest in the English-speaking world.',
    courses: [
      'PG|data|Data Science', 'PG|computing|Software Development', 'PG|business|Management', 'PG|business|MBA',
      'PG|engineering|Mechanical Engineering', 'PG|health|Public Health', 'PG|finance|Banking and Finance',
      'UG|computing|Computing Science', 'UG|engineering|Mechanical Engineering', 'UG|finance|Accounting and Finance',
    ],
  },
  {
    country: 'uk',
    name: 'University of Leicester',
    city: 'Leicester',
    url: 'https://le.ac.uk',
    point: 'A research university known for space science. DNA fingerprinting was invented here.',
    courses: [
      'PG|computing|Advanced Computer Science', 'PG|data|Data Analysis for Business Intelligence', 'PG|business|Management',
      'PG|business|MBA', 'PG|engineering|Advanced Engineering', 'PG|law|Law',
      'UG|computing|Computer Science', 'UG|business|Business and Management', 'UG|engineering|Aerospace Engineering',
    ],
  },
  {
    country: 'uk',
    name: 'Coventry University',
    city: 'Coventry',
    url: 'https://www.coventry.ac.uk',
    point: 'Known for automotive and engineering courses, with several intakes a year on many master’s degrees.',
    courses: [
      'PG|engineering|Automotive Engineering', 'PG|engineering|Mechanical Engineering', 'PG|computing|Computer Science',
      'PG|computing|Cyber Security', 'PG|data|Data Science', 'PG|business|International Business Management', 'PG|business|MBA',
      'UG|computing|Computer Science', 'UG|engineering|Mechanical Engineering', 'UG|business|Business Management',
    ],
  },
  {
    country: 'uk',
    name: 'University of Hertfordshire',
    city: 'Hatfield',
    url: 'https://www.herts.ac.uk',
    point: 'A short train ride from central London, and popular for computing and business courses.',
    courses: [
      'PG|computing|Computer Science', 'PG|computing|Cyber Security', 'PG|data|Data Science and Analytics',
      'PG|data|Artificial Intelligence and Robotics', 'PG|business|Management', 'PG|business|MBA', 'PG|engineering|Automotive Engineering',
      'UG|computing|Computer Science', 'UG|business|Business Administration', 'UG|engineering|Aerospace Engineering',
    ],
  },
  {
    country: 'uk',
    name: 'University of Greenwich',
    city: 'London',
    url: 'https://www.gre.ac.uk',
    point: 'Its main campus is the Old Royal Naval College, a World Heritage Site on the Thames.',
    courses: [
      'PG|computing|Computer Science', 'PG|data|Data Science', 'PG|business|International Business', 'PG|business|MBA',
      'PG|finance|Accounting and Finance', 'PG|engineering|Engineering Management', 'PG|health|Global Public Health',
      'UG|computing|Computing', 'UG|business|Business Management', 'UG|engineering|Civil Engineering',
    ],
  },
  {
    country: 'uk',
    name: 'Northumbria University',
    city: 'Newcastle upon Tyne',
    url: 'https://www.northumbria.ac.uk',
    point: 'Based in Newcastle with a second campus in London. Its business school is AACSB accredited.',
    courses: [
      'PG|computing|Computer Science', 'PG|computing|Cyber Security', 'PG|data|Data Science', 'PG|business|International Business Management',
      'PG|business|MBA', 'PG|engineering|Mechanical Engineering',
      'UG|computing|Computer Science', 'UG|business|Business Management', 'UG|design|Fashion Design',
    ],
  },
  {
    country: 'uk',
    name: 'Sheffield Hallam University',
    city: 'Sheffield',
    url: 'https://www.shu.ac.uk',
    point: 'One of the UK’s largest universities, with work placements built into many courses.',
    courses: [
      'PG|computing|Computing', 'PG|data|Big Data Analytics', 'PG|business|International Business Management', 'PG|business|MBA',
      'PG|engineering|Mechanical Engineering', 'PG|health|Public Health',
      'UG|computing|Computer Science', 'UG|business|Business and Management', 'UG|engineering|Mechanical Engineering',
    ],
  },
  {
    country: 'uk',
    name: 'Anglia Ruskin University',
    city: 'Cambridge and Chelmsford',
    url: 'https://www.aru.ac.uk',
    point: 'Campuses in Cambridge and Chelmsford, with September and January intakes.',
    courses: [
      'PG|computing|Computer Science', 'PG|computing|Cyber Security', 'PG|business|International Business', 'PG|business|MBA',
      'PG|engineering|Engineering Management', 'PG|health|Public Health',
      'UG|computing|Computer Science', 'UG|business|Business Management',
    ],
  },
  {
    country: 'uk',
    name: 'Teesside University',
    city: 'Middlesbrough',
    url: 'https://www.tees.ac.uk',
    point: 'Known for computing, animation and games courses.',
    courses: [
      'PG|computing|Computing', 'PG|computing|Cybersecurity', 'PG|data|Data Science', 'PG|data|Artificial Intelligence',
      'PG|business|International Management', 'PG|business|MBA', 'PG|engineering|Mechanical Engineering',
      'UG|computing|Computer Science', 'UG|design|Computer Games Design', 'UG|engineering|Mechanical Engineering',
    ],
  },

  /* ===================== UNITED STATES ===================== */
  {
    country: 'usa',
    name: 'Arizona State University',
    city: 'Tempe, Arizona',
    url: 'https://www.asu.edu',
    point: 'One of the largest public universities in the US, known for engineering and business.',
    courses: [
      'PG|computing|Computer Science', 'PG|computing|Information Technology', 'PG|data|Data Science', 'PG|data|Business Analytics',
      'PG|engineering|Electrical Engineering', 'PG|engineering|Mechanical Engineering', 'PG|engineering|Industrial Engineering', 'PG|business|MBA',
      'UG|computing|Computer Science', 'UG|engineering|Mechanical Engineering', 'UG|business|Business',
    ],
  },
  {
    country: 'usa',
    name: 'University of Texas at Dallas',
    city: 'Richardson, Texas',
    url: 'https://www.utdallas.edu',
    point: 'A public research university in the Dallas technology corridor, strong in computer science and business analytics.',
    courses: [
      'PG|computing|Computer Science', 'PG|computing|Information Technology and Management', 'PG|data|Business Analytics',
      'PG|engineering|Electrical Engineering', 'PG|engineering|Mechanical Engineering', 'PG|business|Supply Chain Management',
      'PG|finance|Finance', 'PG|business|MBA',
      'UG|computing|Computer Science', 'UG|engineering|Electrical Engineering', 'UG|business|Business Administration',
    ],
  },
  {
    country: 'usa',
    name: 'University at Buffalo (SUNY)',
    city: 'Buffalo, New York',
    url: 'https://www.buffalo.edu',
    point: 'The largest campus in the State University of New York system.',
    courses: [
      'PG|computing|Computer Science', 'PG|data|Data Science', 'PG|engineering|Industrial Engineering', 'PG|engineering|Mechanical Engineering',
      'PG|engineering|Civil Engineering', 'PG|business|Management Information Systems', 'PG|business|MBA', 'PG|health|Public Health',
      'UG|computing|Computer Science', 'UG|engineering|Mechanical Engineering', 'UG|business|Business Administration',
    ],
  },
  {
    country: 'usa',
    name: 'Northeastern University',
    city: 'Boston, Massachusetts',
    url: 'https://www.northeastern.edu',
    point: 'A private university known for co-op, where paid work placements are part of the degree.',
    courses: [
      'PG|computing|Computer Science', 'PG|computing|Information Systems', 'PG|data|Data Science', 'PG|data|Analytics',
      'PG|engineering|Engineering Management', 'PG|engineering|Mechanical Engineering', 'PG|business|Project Management',
      'PG|business|MBA', 'PG|health|Biotechnology',
      'UG|computing|Computer Science', 'UG|engineering|Mechanical Engineering', 'UG|business|Business Administration',
    ],
  },
  {
    country: 'usa',
    name: 'University of Cincinnati',
    city: 'Cincinnati, Ohio',
    url: 'https://www.uc.edu',
    point: 'The public university where co-operative education began in 1906.',
    courses: [
      'PG|computing|Computer Science', 'PG|computing|Information Technology', 'PG|data|Business Analytics',
      'PG|engineering|Mechanical Engineering', 'PG|engineering|Electrical Engineering', 'PG|engineering|Aerospace Engineering',
      'PG|business|MBA', 'PG|design|Design',
      'UG|computing|Computer Science', 'UG|engineering|Mechanical Engineering', 'UG|design|Industrial Design',
    ],
  },
  {
    country: 'usa',
    name: 'University of South Florida',
    city: 'Tampa, Florida',
    url: 'https://www.usf.edu',
    point: 'A public research university in Tampa with a large college of public health.',
    courses: [
      'PG|computing|Computer Science', 'PG|computing|Cybersecurity', 'PG|data|Business Analytics and Information Systems',
      'PG|engineering|Electrical Engineering', 'PG|engineering|Mechanical Engineering', 'PG|engineering|Engineering Management',
      'PG|health|Public Health', 'PG|business|MBA',
      'UG|computing|Computer Science', 'UG|engineering|Mechanical Engineering', 'UG|business|Business',
    ],
  },
  {
    country: 'usa',
    name: 'George Mason University',
    city: 'Fairfax, Virginia',
    url: 'https://www.gmu.edu',
    point: 'Virginia’s largest public research university, close to Washington, DC.',
    courses: [
      'PG|computing|Computer Science', 'PG|computing|Information Systems', 'PG|computing|Cyber Security Engineering',
      'PG|data|Data Analytics Engineering', 'PG|engineering|Electrical Engineering', 'PG|health|Health Informatics', 'PG|business|MBA',
      'UG|computing|Computer Science', 'UG|computing|Information Technology', 'UG|business|Business',
    ],
  },
  {
    country: 'usa',
    name: 'Illinois Institute of Technology',
    city: 'Chicago, Illinois',
    url: 'https://www.iit.edu',
    point: 'A private technology university in Chicago, focused on engineering, computing and design.',
    courses: [
      'PG|computing|Computer Science', 'PG|computing|Cybersecurity', 'PG|data|Data Science', 'PG|data|Artificial Intelligence',
      'PG|engineering|Electrical Engineering', 'PG|engineering|Mechanical and Aerospace Engineering', 'PG|business|MBA', 'PG|design|Design',
      'UG|computing|Computer Science', 'UG|engineering|Aerospace Engineering', 'UG|design|Architecture',
    ],
  },

  /* ===================== CANADA ===================== */
  {
    country: 'canada',
    name: 'University of Toronto',
    city: 'Toronto, Ontario',
    url: 'https://www.utoronto.ca',
    point: 'A research university known for artificial intelligence, engineering and medicine.',
    courses: [
      'PG|computing|Applied Computing', 'PG|engineering|Engineering (MEng)', 'PG|data|Management Analytics', 'PG|business|MBA',
      'PG|finance|Finance', 'PG|health|Public Health',
      'UG|computing|Computer Science', 'UG|engineering|Engineering Science', 'UG|business|Commerce',
    ],
  },
  {
    country: 'canada',
    name: 'University of British Columbia',
    city: 'Vancouver, British Columbia',
    url: 'https://www.ubc.ca',
    point: 'A research university with campuses in Vancouver and the Okanagan.',
    courses: [
      'PG|data|Data Science', 'PG|computing|Computer Science', 'PG|engineering|Electrical and Computer Engineering',
      'PG|engineering|Engineering Leadership', 'PG|business|Management', 'PG|data|Business Analytics', 'PG|business|MBA', 'PG|health|Public Health',
      'UG|computing|Computer Science', 'UG|engineering|Engineering', 'UG|business|Commerce',
    ],
  },
  {
    country: 'canada',
    name: 'University of Waterloo',
    city: 'Waterloo, Ontario',
    url: 'https://uwaterloo.ca',
    point: 'Known for computer science and engineering, and for one of the largest co-op programmes anywhere.',
    courses: [
      'PG|computing|Computer Science', 'PG|data|Data Science and Artificial Intelligence', 'PG|engineering|Electrical and Computer Engineering',
      'PG|engineering|Mechanical and Mechatronics Engineering', 'PG|business|Management Sciences', 'PG|finance|Quantitative Finance',
      'UG|computing|Computer Science', 'UG|engineering|Software Engineering', 'UG|finance|Accounting and Financial Management',
    ],
  },
  {
    country: 'canada',
    name: 'University of Alberta',
    city: 'Edmonton, Alberta',
    url: 'https://www.ualberta.ca',
    point: 'A research university known for artificial intelligence, energy and engineering.',
    courses: [
      'PG|computing|Computing Science', 'PG|engineering|Electrical and Computer Engineering', 'PG|engineering|Mechanical Engineering',
      'PG|engineering|Engineering Management', 'PG|business|MBA', 'PG|health|Public Health',
      'UG|computing|Computing Science', 'UG|engineering|Engineering', 'UG|business|Commerce',
    ],
  },
  {
    country: 'canada',
    name: 'University of Windsor',
    city: 'Windsor, Ontario',
    url: 'https://www.uwindsor.ca',
    point: 'Course-based master’s degrees in engineering and computing, in a city across the river from Detroit.',
    courses: [
      'PG|computing|Applied Computing', 'PG|engineering|Mechanical Engineering', 'PG|engineering|Electrical and Computer Engineering',
      'PG|engineering|Industrial Engineering', 'PG|business|Management', 'PG|business|MBA',
      'UG|computing|Computer Science', 'UG|engineering|Mechanical Engineering', 'UG|business|Business Administration',
    ],
  },
  {
    country: 'canada',
    name: 'Dalhousie University',
    city: 'Halifax, Nova Scotia',
    url: 'https://www.dal.ca',
    point: 'A research university on Canada’s Atlantic coast and a member of the U15 group.',
    courses: [
      'PG|computing|Applied Computer Science', 'PG|computing|Internetworking', 'PG|data|Digital Innovation', 'PG|engineering|Engineering (MEng)',
      'PG|business|MBA', 'PG|health|Health Informatics',
      'UG|computing|Computer Science', 'UG|engineering|Engineering', 'UG|business|Commerce',
    ],
  },
  {
    country: 'canada',
    name: 'Conestoga College',
    city: 'Kitchener, Ontario',
    url: 'https://www.conestogac.on.ca',
    point: 'A public college offering one- and two-year graduate certificates, many with a co-op term.',
    courses: [
      'PG|business|Project Management', 'PG|business|Global Business Management', 'PG|business|Supply Chain Management',
      'PG|computing|Computer Applications Development', 'PG|computing|Mobile Solutions Development', 'PG|data|Big Data Solution Architecture',
      'UG|computing|Computer Programming', 'UG|business|Business',
    ],
  },
  {
    country: 'canada',
    name: 'Seneca Polytechnic',
    city: 'Toronto, Ontario',
    url: 'https://www.senecapolytechnic.ca',
    point: 'A public polytechnic in Toronto with career-focused graduate certificates, diplomas and degrees.',
    courses: [
      'PG|business|Project Management', 'PG|business|International Business Management', 'PG|business|Supply Chain Management',
      'PG|data|Business Analytics', 'PG|data|Artificial Intelligence', 'PG|computing|Cybersecurity and Threat Management',
      'UG|computing|Computer Programming and Analysis', 'UG|business|Business Administration',
    ],
  },

  /* ===================== AUSTRALIA ===================== */
  {
    country: 'australia',
    name: 'University of Melbourne',
    city: 'Melbourne, Victoria',
    url: 'https://www.unimelb.edu.au',
    point: 'A Group of Eight university where professional degrees are taught at master’s level.',
    courses: [
      'PG|computing|Information Technology', 'PG|computing|Computer Science', 'PG|data|Data Science', 'PG|engineering|Mechanical Engineering',
      'PG|business|Management', 'PG|finance|Finance', 'PG|health|Public Health',
      'UG|science|Science', 'UG|business|Commerce', 'UG|design|Design',
    ],
  },
  {
    country: 'australia',
    name: 'Monash University',
    city: 'Melbourne, Victoria',
    url: 'https://www.monash.edu',
    point: 'A Group of Eight university in Melbourne, with a campus in Malaysia as well.',
    courses: [
      'PG|computing|Information Technology', 'PG|data|Data Science', 'PG|data|Artificial Intelligence', 'PG|engineering|Professional Engineering',
      'PG|business|Business', 'PG|data|Business Analytics', 'PG|finance|Banking and Finance', 'PG|health|Public Health',
      'UG|computing|Computer Science', 'UG|engineering|Engineering', 'UG|business|Commerce',
    ],
  },
  {
    country: 'australia',
    name: 'UNSW Sydney',
    city: 'Sydney, New South Wales',
    url: 'https://www.unsw.edu.au',
    point: 'A Group of Eight university known for engineering and business.',
    courses: [
      'PG|computing|Information Technology', 'PG|data|Data Science', 'PG|engineering|Engineering Science', 'PG|business|Commerce',
      'PG|finance|Finance', 'PG|health|Public Health',
      'UG|computing|Computer Science', 'UG|engineering|Engineering', 'UG|business|Commerce',
    ],
  },
  {
    country: 'australia',
    name: 'Deakin University',
    city: 'Melbourne and Geelong, Victoria',
    url: 'https://www.deakin.edu.au',
    point: 'Campuses in Melbourne and Geelong, and the first foreign university to open a campus in India, at GIFT City.',
    courses: [
      'PG|computing|Information Technology', 'PG|computing|Cyber Security', 'PG|data|Data Science', 'PG|data|Business Analytics',
      'PG|business|MBA', 'PG|engineering|Professional Engineering', 'PG|health|Public Health',
      'UG|computing|Information Technology', 'UG|business|Commerce', 'UG|health|Nursing',
    ],
  },
  {
    country: 'australia',
    name: 'RMIT University',
    city: 'Melbourne, Victoria',
    url: 'https://www.rmit.edu.au',
    point: 'A university of technology and design in central Melbourne, known for practical, industry-linked courses.',
    courses: [
      'PG|computing|Information Technology', 'PG|computing|Cyber Security', 'PG|data|Data Science', 'PG|data|Artificial Intelligence',
      'PG|engineering|Engineering Management', 'PG|engineering|Mechanical Engineering', 'PG|business|MBA',
      'PG|business|Supply Chain and Logistics Management', 'PG|design|Design',
      'UG|computing|Information Technology', 'UG|engineering|Engineering', 'UG|design|Design',
    ],
  },
  {
    country: 'australia',
    name: 'University of Technology Sydney',
    city: 'Sydney, New South Wales',
    url: 'https://www.uts.edu.au',
    point: 'A technology-focused university in the centre of Sydney.',
    courses: [
      'PG|computing|Information Technology', 'PG|data|Data Science and Innovation', 'PG|engineering|Engineering',
      'PG|engineering|Engineering Management', 'PG|data|Business Analytics', 'PG|business|MBA', 'PG|finance|Finance',
      'UG|computing|Information Technology', 'UG|engineering|Engineering', 'UG|business|Business',
    ],
  },
  {
    country: 'australia',
    name: 'University of Wollongong',
    city: 'Wollongong, New South Wales',
    url: 'https://www.uow.edu.au',
    point: 'A coastal campus south of Sydney. It also runs a campus in India, at GIFT City.',
    courses: [
      'PG|computing|Computer Science', 'PG|data|Business Analytics', 'PG|engineering|Engineering', 'PG|business|MBA',
      'PG|finance|Applied Finance', 'PG|health|Public Health',
      'UG|computing|Computer Science', 'UG|engineering|Engineering', 'UG|business|Business',
    ],
  },

  /* ===================== GERMANY ===================== */
  {
    country: 'germany',
    name: 'Technical University of Munich',
    city: 'Munich, Bavaria',
    url: 'https://www.tum.de',
    point: 'One of Germany’s TU9 technical universities. It charges tuition fees to students from outside the EU.',
    courses: [
      'PG|computing|Informatics', 'PG|data|Data Engineering and Analytics', 'PG|data|Robotics, Cognition, Intelligence',
      'PG|engineering|Mechanical Engineering', 'PG|engineering|Aerospace', 'PG|business|Management',
      'UG|computing|Informatics', 'UG|business|Management and Technology', 'UG|engineering|Aerospace',
    ],
  },
  {
    country: 'germany',
    name: 'RWTH Aachen University',
    city: 'Aachen, North Rhine-Westphalia',
    url: 'https://www.rwth-aachen.de',
    point: 'A TU9 member and one of Europe’s best-known engineering universities.',
    courses: [
      'PG|engineering|Automotive Engineering', 'PG|engineering|Robotic Systems Engineering', 'PG|engineering|Production Systems Engineering',
      'PG|engineering|Electrical Engineering and Information Technology', 'PG|computing|Software Systems Engineering', 'PG|data|Data Science',
    ],
  },
  {
    country: 'germany',
    name: 'Technical University of Berlin',
    city: 'Berlin',
    url: 'https://www.tu.berlin',
    point: 'A TU9 member in the centre of Berlin, a city with a large start-up scene.',
    courses: [
      'PG|computing|Computer Science', 'PG|engineering|Computer Engineering', 'PG|engineering|Automotive Systems',
      'PG|engineering|Electrical Engineering', 'PG|engineering|Global Production Engineering', 'PG|business|Innovation Management and Entrepreneurship',
    ],
  },
  {
    country: 'germany',
    name: 'University of Stuttgart',
    city: 'Stuttgart, Baden-Württemberg',
    url: 'https://www.uni-stuttgart.de',
    point: 'A TU9 member in Germany’s car-making region, near Mercedes-Benz, Porsche and Bosch. The state charges tuition to non-EU students.',
    courses: [
      'PG|computing|Computer Science', 'PG|computing|Information Technology', 'PG|engineering|Electrical Engineering',
      'PG|engineering|Computational Mechanics of Materials and Structures', 'PG|science|Water Resources Engineering and Management',
    ],
  },
  {
    country: 'germany',
    name: 'FAU Erlangen-Nürnberg',
    city: 'Erlangen and Nuremberg, Bavaria',
    url: 'https://www.fau.eu',
    point: 'A large research university close to Siemens and Adidas, with many English-taught master’s degrees.',
    courses: [
      'PG|data|Artificial Intelligence', 'PG|data|Data Science', 'PG|engineering|Computational Engineering',
      'PG|engineering|Communications and Multimedia Engineering', 'PG|engineering|Advanced Materials and Processes',
      'PG|health|Medical Engineering', 'PG|business|International Business Studies',
    ],
  },
  {
    country: 'germany',
    name: 'Otto von Guericke University Magdeburg',
    city: 'Magdeburg, Saxony-Anhalt',
    url: 'https://www.ovgu.de',
    point: 'A public university with no tuition fees and a wide range of English-taught master’s degrees.',
    courses: [
      'PG|computing|Digital Engineering', 'PG|data|Data and Knowledge Engineering', 'PG|engineering|Chemical and Energy Engineering',
      'PG|engineering|Electrical Engineering and Information Technology', 'PG|health|Medical Systems Engineering',
      'PG|business|Operations Research and Business Analytics',
    ],
  },
  {
    country: 'germany',
    name: 'Chemnitz University of Technology',
    city: 'Chemnitz, Saxony',
    url: 'https://www.tu-chemnitz.de',
    point: 'A public technical university with no tuition fees and English-taught master’s degrees in computing and engineering.',
    courses: [
      'PG|computing|Automotive Software Engineering', 'PG|computing|Web Engineering', 'PG|engineering|Embedded Systems',
      'PG|engineering|Advanced Manufacturing', 'PG|science|Advanced Functional Materials', 'PG|business|Management and Organisation Studies',
    ],
  },

  /* ===================== IRELAND ===================== */
  {
    country: 'ireland',
    name: 'Trinity College Dublin',
    city: 'Dublin',
    url: 'https://www.tcd.ie',
    point: 'Ireland’s oldest university, founded in 1592, in the centre of Dublin.',
    courses: [
      'PG|computing|Computer Science', 'PG|data|Business Analytics', 'PG|business|International Management', 'PG|business|MBA',
      'PG|finance|Finance', 'PG|engineering|Mechanical Engineering', 'PG|health|Global Health', 'PG|law|Law',
      'UG|computing|Computer Science', 'UG|business|Business Studies', 'UG|engineering|Engineering',
    ],
  },
  {
    country: 'ireland',
    name: 'University College Dublin',
    city: 'Dublin',
    url: 'https://www.ucd.ie',
    point: 'Ireland’s largest university. Its Smurfit business school holds triple accreditation.',
    courses: [
      'PG|computing|Computer Science', 'PG|data|Business Analytics', 'PG|business|Management', 'PG|business|MBA',
      'PG|finance|Finance', 'PG|engineering|Electronic and Computer Engineering', 'PG|health|Public Health', 'PG|health|Biotechnology',
      'UG|computing|Computer Science', 'UG|business|Commerce', 'UG|engineering|Engineering',
    ],
  },
  {
    country: 'ireland',
    name: 'University of Galway',
    city: 'Galway',
    url: 'https://www.universityofgalway.ie',
    point: 'On Ireland’s west coast, in a city that is a centre for medical-device companies.',
    courses: [
      'PG|data|Data Analytics', 'PG|data|Artificial Intelligence', 'PG|computing|Software Design and Development',
      'PG|business|International Management', 'PG|data|Business Analytics', 'PG|engineering|Biomedical Engineering', 'PG|health|Biotechnology',
      'UG|computing|Computer Science and Information Technology', 'UG|business|Commerce', 'UG|engineering|Biomedical Engineering',
    ],
  },
  {
    country: 'ireland',
    name: 'University College Cork',
    city: 'Cork',
    url: 'https://www.ucc.ie',
    point: 'Close to the pharmaceutical and technology companies based around Cork.',
    courses: [
      'PG|computing|Computing Science', 'PG|data|Data Science and Analytics', 'PG|business|Management and Marketing',
      'PG|finance|Finance', 'PG|health|Biotechnology', 'PG|health|Public Health',
      'UG|computing|Computer Science', 'UG|business|Commerce',
    ],
  },
  {
    country: 'ireland',
    name: 'Dublin City University',
    city: 'Dublin',
    url: 'https://www.dcu.ie',
    point: 'A young university known for its links with employers and paid work placements.',
    courses: [
      'PG|computing|Computing', 'PG|data|Data Analytics', 'PG|data|Artificial Intelligence', 'PG|engineering|Electronic and Computer Engineering',
      'PG|business|Management', 'PG|business|Digital Marketing', 'PG|finance|Finance',
      'UG|computing|Computer Science', 'UG|business|Business Studies', 'UG|engineering|Engineering',
    ],
  },
  {
    country: 'ireland',
    name: 'University of Limerick',
    city: 'Limerick',
    url: 'https://www.ul.ie',
    point: 'Known for co-operative education, with a work placement in most degrees.',
    courses: [
      'PG|computing|Software Engineering', 'PG|data|Artificial Intelligence and Machine Learning', 'PG|data|Business Analytics',
      'PG|business|International Management and Global Business', 'PG|business|Project Management', 'PG|engineering|Mechanical Engineering',
      'UG|computing|Computer Systems', 'UG|business|Business Studies', 'UG|engineering|Engineering',
    ],
  },
  {
    country: 'ireland',
    name: 'National College of Ireland',
    city: 'Dublin',
    url: 'https://www.ncirl.ie',
    point: 'Based in Dublin’s financial district and focused on computing and business.',
    courses: [
      'PG|data|Data Analytics', 'PG|data|Artificial Intelligence', 'PG|computing|Cloud Computing', 'PG|computing|Cybersecurity',
      'PG|finance|FinTech', 'PG|finance|Finance', 'PG|business|International Business', 'PG|business|Management',
      'UG|computing|Computing', 'UG|business|Business',
    ],
  },

  /* ===================== FRANCE ===================== */
  {
    country: 'france',
    name: 'Université Paris-Saclay',
    city: 'Paris region',
    url: 'https://www.universite-paris-saclay.fr',
    point: 'A public research university south of Paris, known worldwide for mathematics and physics.',
    courses: [
      'PG|computing|Computer Science', 'PG|data|Artificial Intelligence', 'PG|science|Physics', 'PG|science|Mathematics and Applications',
      'PG|engineering|Electronics, Electrical Energy and Automation', 'PG|engineering|Nuclear Energy',
    ],
  },
  {
    country: 'france',
    name: 'Sorbonne University',
    city: 'Paris',
    url: 'https://www.sorbonne-universite.fr',
    point: 'A public university in central Paris for science, engineering, medicine and humanities. Most courses are taught in French.',
    courses: [
      'PG|computing|Computer Science', 'PG|science|Mathematics', 'PG|science|Physics', 'PG|engineering|Mechanics', 'PG|health|Biology',
      'UG|science|Science', 'UG|computing|Computer Science',
    ],
  },
  {
    country: 'france',
    name: 'École Polytechnique',
    city: 'Palaiseau, near Paris',
    url: 'https://www.polytechnique.edu',
    point: 'One of France’s leading engineering schools, with a bachelor’s degree and several master’s degrees taught in English.',
    courses: [
      'PG|data|Artificial Intelligence and Advanced Visual Computing', 'PG|data|Data Science for Business', 'PG|computing|Cybersecurity',
      'PG|computing|Internet of Things', 'PG|science|Energy and Environment', 'PG|finance|Economics, Data Analytics and Corporate Finance',
      'UG|science|Bachelor of Science',
    ],
  },
  {
    country: 'france',
    name: 'HEC Paris',
    city: 'Jouy-en-Josas, near Paris',
    url: 'https://www.hec.edu',
    point: 'One of Europe’s best-known business schools, especially for its Master in Management.',
    courses: [
      'PG|business|Master in Management', 'PG|business|MBA', 'PG|finance|International Finance', 'PG|business|Strategic Management',
      'PG|business|Marketing', 'PG|data|Data Science for Business',
    ],
  },
  {
    country: 'france',
    name: 'ESSEC Business School',
    city: 'Cergy, near Paris',
    url: 'https://www.essec.edu',
    point: 'A triple-accredited business school with a campus in Singapore as well as France.',
    courses: [
      'PG|business|Master in Management', 'PG|finance|Master in Finance', 'PG|data|Data Sciences and Business Analytics',
      'PG|business|Strategy and Management of International Business', 'PG|business|Marketing Management and Digital', 'PG|business|Global MBA',
      'UG|business|Global BBA',
    ],
  },
  {
    country: 'france',
    name: 'SKEMA Business School',
    city: 'Lille, Paris and Sophia Antipolis',
    url: 'https://www.skema.edu',
    point: 'A triple-accredited school with several campuses and many MSc courses taught in English.',
    courses: [
      'PG|business|International Business', 'PG|business|Project and Programme Management', 'PG|business|Luxury and Fashion Management',
      'PG|business|Supply Chain Management and Purchasing', 'PG|business|Digital Marketing', 'PG|finance|Financial Markets and Investments',
      'PG|finance|Corporate Financial Management', 'PG|data|Artificial Intelligence for Business Transformation',
      'UG|business|Global BBA',
    ],
  },
  {
    country: 'france',
    name: 'EDHEC Business School',
    city: 'Lille, Nice and Paris',
    url: 'https://www.edhec.edu',
    point: 'A triple-accredited business school known for finance.',
    courses: [
      'PG|business|Master in Management', 'PG|finance|Finance', 'PG|finance|Financial Engineering',
      'PG|data|Data Analytics and Artificial Intelligence', 'PG|business|Marketing Management', 'PG|business|Strategy, Organisation and Consulting',
      'PG|business|Global MBA', 'UG|business|International BBA',
    ],
  },
  {
    country: 'france',
    name: 'EPITA',
    city: 'Paris',
    url: 'https://www.epita.fr',
    point: 'An engineering school that specialises in computer science, with master’s courses taught in English.',
    courses: [
      'PG|computing|Computer Science', 'PG|computing|Software Engineering', 'PG|computing|Computer Security',
      'PG|data|Data Science and Analytics', 'PG|data|Artificial Intelligence',
      'UG|computing|Computer Science',
    ],
  },

  /* ===================== NEW ZEALAND ===================== */
  {
    country: 'nz',
    name: 'University of Auckland',
    city: 'Auckland',
    url: 'https://www.auckland.ac.nz',
    point: 'New Zealand’s largest university, in its largest city.',
    courses: [
      'PG|computing|Information Technology', 'PG|data|Data Science', 'PG|data|Business Analytics', 'PG|engineering|Engineering Studies',
      'PG|business|Management', 'PG|business|MBA', 'PG|health|Public Health',
      'UG|computing|Computer Science', 'UG|engineering|Engineering', 'UG|business|Commerce',
    ],
  },
  {
    country: 'nz',
    name: 'Auckland University of Technology',
    city: 'Auckland',
    url: 'https://www.aut.ac.nz',
    point: 'A university of technology in central Auckland with close links to employers.',
    courses: [
      'PG|computing|Computer and Information Sciences', 'PG|data|Analytics', 'PG|business|Business Management', 'PG|business|MBA',
      'PG|engineering|Engineering Project Management', 'PG|engineering|Construction Management', 'PG|health|Public Health',
      'UG|computing|Computer and Information Sciences', 'UG|engineering|Engineering', 'UG|business|Business',
    ],
  },
  {
    country: 'nz',
    name: 'University of Waikato',
    city: 'Hamilton',
    url: 'https://www.waikato.ac.nz',
    point: 'Home of the Weka machine-learning software. Its management school holds triple accreditation.',
    courses: [
      'PG|computing|Information Technology', 'PG|computing|Cyber Security', 'PG|business|Business Management', 'PG|business|MBA',
      'PG|engineering|Engineering', 'PG|finance|Professional Accounting',
      'UG|computing|Computer Science', 'UG|engineering|Engineering', 'UG|business|Business',
    ],
  },
  {
    country: 'nz',
    name: 'Massey University',
    city: 'Palmerston North, Auckland and Wellington',
    url: 'https://www.massey.ac.nz',
    point: 'Known for agriculture, veterinary science and food technology, with campuses in three cities.',
    courses: [
      'PG|computing|Information Sciences', 'PG|data|Analytics', 'PG|business|Management', 'PG|science|Agriculture',
      'PG|science|Food Technology', 'PG|health|Public Health',
      'UG|computing|Information Sciences', 'UG|science|Agricultural Science', 'UG|business|Business',
    ],
  },
  {
    country: 'nz',
    name: 'Victoria University of Wellington',
    city: 'Wellington',
    url: 'https://www.wgtn.ac.nz',
    point: 'In New Zealand’s capital, close to government and the city’s film and technology industries.',
    courses: [
      'PG|computing|Computer Science', 'PG|computing|Software Development', 'PG|data|Artificial Intelligence',
      'PG|business|Global Management', 'PG|design|Design Technology', 'PG|law|Law',
      'UG|computing|Computer Science', 'UG|business|Commerce', 'UG|design|Design Innovation',
    ],
  },
  {
    country: 'nz',
    name: 'University of Canterbury',
    city: 'Christchurch',
    url: 'https://www.canterbury.ac.nz',
    point: 'Known for engineering, and based in Christchurch on the South Island.',
    courses: [
      'PG|engineering|Civil Engineering', 'PG|engineering|Mechanical Engineering', 'PG|engineering|Engineering Management',
      'PG|data|Applied Data Science', 'PG|business|Business Management', 'PG|business|MBA', 'PG|finance|Financial Management',
      'UG|engineering|Engineering', 'UG|computing|Computer Science', 'UG|business|Commerce',
    ],
  },
  {
    country: 'nz',
    name: 'Lincoln University',
    city: 'Lincoln, near Christchurch',
    url: 'https://www.lincoln.ac.nz',
    point: 'A specialist land-based university for agriculture, environment, food and tourism.',
    courses: [
      'PG|science|Agricultural Science', 'PG|science|Environmental Policy and Management', 'PG|business|Global Management and Marketing',
      'PG|business|Tourism Management', 'PG|finance|Finance', 'PG|computing|Applied Computing',
      'UG|science|Agricultural Science', 'UG|science|Environmental Management', 'UG|business|Commerce (Agriculture)',
    ],
  },
  {
    country: 'nz',
    name: 'University of Otago',
    city: 'Dunedin',
    url: 'https://www.otago.ac.nz',
    point: 'New Zealand’s oldest university, founded in 1869 and known for health sciences.',
    courses: [
      'PG|health|Public Health', 'PG|computing|Computer Science', 'PG|data|Business Data Science', 'PG|business|International Business',
      'PG|business|MBA', 'PG|finance|Finance',
      'UG|health|Health Sciences', 'UG|computing|Computer Science', 'UG|business|Commerce',
    ],
  },
];

// Turn the short course strings into objects and check them.
const parsed = universities.map((u) => ({
  ...u,
  courses: u.courses.map((c) => {
    const [level, subject, name] = c.split('|');
    if (!levels[level] || !subjects[subject] || !name) {
      throw new Error(`Bad course "${c}" for ${u.name}. Use LEVEL|SUBJECT|Name.`);
    }
    return { level, subject, name };
  }),
}));

module.exports = { universities: parsed, subjects, levels };
