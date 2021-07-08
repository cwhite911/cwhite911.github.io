import { nanoid } from 'nanoid';

// HEAD DATA
export const headData = {
  title: '', // e.g: 'Name | Developer'
  lang: '', // e.g: en, es, fr, jp
  description: '', // e.g: Welcome to my website
};

// HERO DATA
export const heroData = {
  title: '',
  name: 'Corey White',
  subtitle: 'I am a PhD Candidate working to define the future of Smart and Connected Communities',
  cta: '',
};

// ABOUT DATA
export const aboutData = {
  img: 'profile.jpg',
  paragraphOne:
    'I am a Ph.D. Candidate working on a degree in Geospatial Analytics from the Center for Geospatial Analytics at North Carolina State University. I am the network coordinator for TomorrowNow an NSF funded research coordination network, which is developing a spatially explicit serious gaming platform for smart and connect communities that enables equitable community engagement through participatory modeling. Through stakeholder workshops and public symposiums, we are co-developing a prototype of TomorrowNow focusing on stormwater management issues in the Triangle region of North Carolina.',
  paragraphTwo: '',
  paragraphThree: '',
  resume: '', // if no resume, the button will not show up
};

// PROJECTS DATA
export const projectsData = [
  {
    id: nanoid(),
    img: 'TomorrowNowProject.png',
    title: 'TomorrowNow',
    info: 'TomorrowNow a Spatially Explicit Serious Game for Geospatial Participatory Modeling',
    info2: '',
    url: 'https://cnr.ncsu.edu/geospatial/research/tomorrownow/',
    repo: 'https://github.com/tomorrownow', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'fcm.png',
    title: 'Participatory Modeling',
    info: 'Co-design Spatially Explicit Serious Game Specifications with Participatory Modeling',
    info2: '',
    url: 'https://github.com/tomorrownow/PyFCM',
    repo: 'https://github.com/tomorrownow/PyFCM', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'rapid-dsm.png',
    title: 'Rapid-DSM',
    info: 'Rapid Urban DSM Updates through Satellite Change Detection and UAS Data Fusion',
    info2:
      'Rapid-DSM: a tool that creates a priority queue of areas with a high likelihood of change in the urban topography, enabling rapid UAS updates of DSM through data fusion.',
    url: '',
    repo: 'https://github.com/ncsu-geoforall-lab/rapid-dsm', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'development_year.png',
    title: 'Modeling Regional Nutrient Lading',
    info:
      'Working with a team, we are developing a spatial-temporal bayesian model to forecast future nutrient loading levels affecting regional drinking water supplies.',
    info2: '',
    url: '',
    repo: 'https://github.ncsu.edu/FallsJordan/nutrient-loading-model', // if no repo, the button will not show up
  },
];

// PUBLICATIONS DATA
export const publicationsData = [
  {
    id: nanoid(),
    img: 'AllYearsRFPCA.png',
    title:
      'AUTOMATED LAND COVER CHANGE DETECTION THROUGH RAPID UAS UPDATES OF DIGITAL SURFACE MODELS',
    authors: 'White C., Petrasova A., Reckling W., Mitasova, H.',
    journal: 'ISPRS Archives, Volume XLII-3/W11',
    year: '2020',
    url: 'https://www.int-arch-photogramm-remote-sens-spatial-inf-sci.net/XLII-3-W11/155/2020/',
  },
];

// CONTACT DATA
export const contactData = {
  cta: '',
  btn: '',
  email: 'ctwhite@ncsu.edu',
};

// FOOTER DATA
export const footerData = {
  networks: [
    {
      id: nanoid(),
      name: 'twitter',
      url: 'https://twitter.com/plottgis',
    },
    {
      id: nanoid(),
      name: 'linkedin',
      url: 'https://www.linkedin.com/in/corey-white-a6080312b',
    },
    {
      id: nanoid(),
      name: 'researchgate',
      url: 'https://www.researchgate.net/profile/Corey_White4',
    },
    {
      id: nanoid(),
      name: 'github',
      url: 'https://github.com/cwhite911',
    },
  ],
};

// Github start/fork buttons
export const githubButtons = {
  isEnabled: false, // set to false to disable the GitHub stars/fork buttons
};
