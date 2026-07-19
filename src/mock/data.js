import { nanoid } from 'nanoid';

// HEAD DATA
export const headData = {
  title: 'Corey T. White | Geospatial Software Engineer',
  lang: 'en',
  description:
    'Corey T. White, Ph.D., Geospatial Software Engineer at NC State\u2019s Center for Geospatial Analytics, Founder & CEO of OpenPlains Inc., and a GRASS core contributor and maintainer. NSF and USDA funded research in geomorphometry, hydrologic simulation, and post-disaster terrain analysis.',
};

// HERO DATA
export const heroData = {
  title: '',
  name: 'Corey White',
  subtitle:
    'I\u2019m a geospatial software engineer and founder building open-source tools that bring scientific earth modeling to the cloud.',
  cta: 'Learn more',
};

// ABOUT DATA
export const aboutData = {
  img: 'profile.jpg',
  paragraphOne:
    'I\u2019m a Geospatial Software Engineer at the Center for Geospatial Analytics at North Carolina State University, where I co-develop interactive participatory-modeling applications that help communities make socio-environmental decisions. My research spans geomorphometry, hydrologic and overland-flow modeling, land-use and land-cover change, urban growth forecasting, and post-disaster topographic change detection with UAS and lidar. This work is funded by the National Science Foundation and USDA, most recently as Co-PI on the NSF Open Geoscience Accelerator award building the contributor pipeline for open geoscience software.',
  paragraphTwo:
    'I\u2019m also the Founder & CEO of OpenPlains Inc., where I build cloud-native platforms that bring the power of GRASS and Actinia to the web. As a long-time core contributor and maintainer of GRASS, I work to lower the barriers to open, reproducible, science-based geospatial computing through tools like the t.stac addon and a stack of open-source libraries for interactive modeling.',
  paragraphThree:
    'I earned my Ph.D. in Geospatial Analytics from NC State in 2023. These days I\u2019m co-authoring a book on the GRASS geocomputation engine (CRC Press / Taylor & Francis) and a chapter on geomorphometry for Elsevier, teaching GIS and UAS mapping, and flying as an FAA Part 107 remote pilot.',
  resume: '',
};

// PROJECTS DATA
export const projectsData = [
  {
    id: nanoid(),
    img: 'openplains.png',
    title: 'OpenPlains',
    info: 'A cloud-native platform that brings GRASS and Actinia to the web, letting researchers and communities build interactive geospatial participatory-modeling applications without specialized infrastructure.',
    info2:
      'Founder & CEO. Built on an open-source stack: django-actinia, grass-js-client, react-openplains, and more.',
    url: 'https://openplains.com',
    repo: 'https://github.com/OpenPlainsInc',
  },
  {
    id: nanoid(),
    img: 'grass.png',
    title: 'GRASS',
    info: 'A powerful open-source geospatial processing engine with 400+ core tools and 400+ community addons. I\u2019m a core contributor and maintainer.',
    info2:
      'Author of t.stac, an addon for working with SpatioTemporal Asset Catalogs (STAC) directly inside GRASS.',
    url: 'https://grass.osgeo.org',
    repo: 'https://github.com/OSGeo/grass',
  },
  {
    id: nanoid(),
    img: 'rapid-dsm.png',
    title: 'Rapid-DEM',
    info: 'Rapid urban digital-surface-model updates through satellite change detection and UAS data fusion: a priority queue that flags where the landscape has changed so drones re-survey only what matters.',
    info2: '',
    url: '',
    repo: 'https://github.com/ncsu-geoforall-lab/rapid-dem-binder',
  },
  {
    id: nanoid(),
    img: 'TomorrowNowProject.png',
    title: 'TomorrowNow',
    info: 'An NSF-funded research coordination network developing a spatially explicit serious game for geospatial participatory modeling, co-developed with stakeholders around stormwater management in North Carolina\u2019s Triangle region.',
    info2: '',
    url: 'https://cnr.ncsu.edu/geospatial/research/tomorrownow/',
    repo: 'https://github.com/tomorrownow',
  },
];

// GRASS TOOLS DATA
export const grassToolsData = {
  lead: 'Merged addons I have authored for GRASS, a free and open source geospatial processing engine.',
  tools: [
    {
      id: nanoid(),
      name: 't.stac',
      subtools: 't.stac.catalog · t.stac.collection · t.stac.item',
      info: 'A toolset for exploring metadata and ingesting SpatioTemporal Asset Catalog (STAC) items, collections, and catalogs directly inside GRASS.',
      manual: 'https://grass.osgeo.org/grass-stable/manuals/addons/t.stac.html',
      repo: 'https://github.com/OSGeo/grass-addons/tree/grass8/src/temporal/t.stac',
    },
    {
      id: nanoid(),
      name: 'r.in.ssurgo',
      subtools: '',
      info: 'Imports soil data from the USDA NRCS Soil Survey Geographic Database (SSURGO) from either the Soil Data Access online API or a local file geodatabase. Developed for the USDA NRCS Dynamic Soil Survey project.',
      manual: 'https://grass.osgeo.org/grass-stable/manuals/addons/r.in.ssurgo.html',
      repo: 'https://github.com/OSGeo/grass-addons/tree/grass8/src/raster/r.in.ssurgo',
    },
    {
      id: nanoid(),
      name: 'r.hand',
      subtools: '',
      info: 'Computes Height Above Nearest Drainage (HAND) from a DEM and generates flood inundation extent maps or time series for user-defined water levels.',
      manual: 'https://grass.osgeo.org/grass-stable/manuals/addons/r.hand.html',
      repo: 'https://github.com/OSGeo/grass-addons/tree/grass8/src/raster/r.hand',
    },
    {
      id: nanoid(),
      name: 'v.surf.rst.cv',
      subtools: '',
      info: 'Cross-validation of the regularized spline with tension (RST) surface model to optimize the tension and smoothing parameters of v.surf.rst.',
      manual: 'https://grass.osgeo.org/grass-stable/manuals/addons/v.surf.rst.cv.html',
      repo: 'https://github.com/OSGeo/grass-addons/tree/grass8/src/vector/v.surf.rst.cv',
    },
    {
      id: nanoid(),
      name: 'r.random.walk',
      subtools: '',
      info: 'Generates 2D random walks across the computational region, with control over steps, directions, self-avoiding behavior, and parallel walkers, for stochastic surface-process modeling.',
      manual: 'https://grass.osgeo.org/grass-stable/manuals/addons/r.random.walk.html',
      repo: 'https://github.com/OSGeo/grass-addons/tree/grass8/src/raster/r.random.walk',
    },
  ],
};

// TEACHING DATA
export const coursesData = [
  {
    id: nanoid(),
    title: 'GIS/MEA 582: Geospatial Modeling and Analysis',
    meta: 'North Carolina State University · Instructor of Record',
    url: 'https://ncsu-geoforall-lab.github.io/geospatial-modeling-course/',
  },
  {
    id: nanoid(),
    title: 'GIS/MEA 584: Mapping and Analytics Using UAS',
    meta: 'North Carolina State University · Instructor of Record',
    url: 'https://ncsu-geoforall-lab.github.io/gis-584-uas-course/',
  },
];

export const workshopsData = [
  {
    id: nanoid(),
    title: 'Geomorphometry with GRASS',
    meta: 'Tutorial series · 2026',
    url: 'https://doi.org/10.5281/zenodo.19403682',
  },
  {
    id: nanoid(),
    title: 'GRASS Addon Development with Python',
    meta: 'FOSS4G North America 2025',
    url: 'https://github.com/ncsu-geoforall-lab/FOSS4GNA-2025-workshop',
  },
  {
    id: nanoid(),
    title: 'Propagating DEM Uncertainty to Stream Extraction using GRASS',
    meta: 'Geomorphometry 2025, Perugia, Italy',
    url: 'https://github.com/ncsu-geoforall-lab/geomorphometry2025_workshop',
  },
  {
    id: nanoid(),
    title: 'Geospatial Data Science with GRASS',
    meta: 'NCGIS 2025 · with Vaclav Petras',
    url: 'https://github.com/ncsu-geoforall-lab/grass-data-science-ncgis-2025',
  },
  {
    id: nanoid(),
    title: 'Developing Web Applications with GRASS',
    meta: 'FOSS4G North America 2024',
    url: 'https://github.com/OpenPlainsInc/foss4gna-2024-workshop',
  },
  {
    id: nanoid(),
    title: 'Geoprocessing with GRASS and Jupyter Notebooks',
    meta: 'U.S. Department of the Interior webinar · 2024',
    url: 'https://doi.org/10.5281/zenodo.13367159',
  },
  {
    id: nanoid(),
    title: 'Introduction to Geoprocessing with GRASS',
    meta: 'SMathHacks, NC School of Science and Mathematics · 2024 and 2025',
    url: 'https://github.com/OpenPlainsInc/intro-to-geoprocessing-workshop',
  },
  {
    id: nanoid(),
    title: 'Develop Geospatial Workflows and Custom Tools with GRASS',
    meta: 'FOSS4G North America 2023 · with Vaclav Petras',
    url: 'https://github.com/ncsu-geoforall-lab/develop-tools-with-grass-foss4gna-2023',
  },
];

// PUBLICATIONS DATA
export const publicationsData = [
  {
    id: nanoid(),
    img: 'openplains.png',
    title: 'An open-source platform for geospatial participatory modeling in the cloud',
    authors:
      'White C.T., Petrasova A., Petras V., Tateosian L.G., Vukomanovic J., Mitasova H., Meentemeyer R.K.',
    journal: 'Environmental Modelling & Software, 167, 105767',
    year: '2023',
    url: 'https://www.sciencedirect.com/science/article/pii/S1364815223001536',
    doi: 'https://doi.org/10.1016/j.envsoft.2023.105767',
  },
  {
    id: nanoid(),
    img: 'remotesensing-040222.png',
    title:
      'Rapid-DEM: Rapid Topographic Updates through Satellite Change Detection and UAS Data Fusion',
    authors: 'White C.T., Reckling W., Petrasova A., Meentemeyer R.K., Mitasova, H.',
    journal: 'Remote Sensing 2022, 14(7), 1718;',
    year: '2022',
    url: 'https://www.mdpi.com/2072-4292/14/7/1718',
    doi: 'https://doi.org/10.3390/rs14071718',
  },
  {
    id: nanoid(),
    img: 'land2021.png',
    title:
      'Spatially Explicit Fuzzy Cognitive Mapping for Participatory Modeling of Stormwater Management',
    authors:
      'White C.T., Mitasova, H., BenDor, T.K., Foy K., Pala O., Vukomanovic J., Meentemeyer R.K.',
    journal: 'Land 2021, 10(11), 1114;',
    year: '2021',
    url: 'https://www.mdpi.com/2073-445X/10/11/1114',
    doi: 'https://doi.org/10.3390/land10111114',
  },
  {
    id: nanoid(),
    img: 'AllYearsRFPCA.png',
    title:
      'Automated Land Cover Change Detection through Rapid UAS Updates of Digital Surface Models',
    authors: 'White C., Petrasova A., Reckling W., Mitasova, H.',
    journal: 'ISPRS Archives, Volume XLII-3/W11',
    year: '2020',
    url: 'https://www.int-arch-photogramm-remote-sens-spatial-inf-sci.net/XLII-3-W11/155/2020/',
    doi: 'https://doi.org/10.5194/isprs-archives-XLII-3-W11-155-2020',
  },
];

// FUNDING DATA
export const fundingData = [
  {
    id: nanoid(),
    title: 'Open Geoscience Accelerator: Building the Contributor Pipeline',
    agency: 'National Science Foundation, GEO OSE Track 2',
    award: 'Award #2606178',
    url: 'https://www.nsf.gov/awardsearch/show-award/?AWD_ID=2606178',
    role: 'Co-Principal Investigator',
    period: '2026',
  },
  {
    id: nanoid(),
    title: 'Growing GRASS OSE for Worldwide Access to Multidisciplinary Geospatial Analytics',
    agency: 'National Science Foundation, POSE Phase II',
    award: 'Award #2303651',
    url: 'https://www.nsf.gov/awardsearch/show-award/?AWD_ID=2303651',
    role: 'Senior Personnel',
    period: '2023 to 2026',
  },
  {
    id: nanoid(),
    title: 'Adaptation of the SIMWE Water Flow Simulation Model for Dynamic Soil Survey Data',
    agency: 'USDA Natural Resources Conservation Service',
    award: 'Award #NR233A750023C043',
    url: '',
    role: 'Lead Researcher',
    period: '',
  },
  {
    id: nanoid(),
    title:
      'Co-Developing Mountains-to-Coast Resilience Solutions through Integrated Science and Practice',
    agency: 'National Science Foundation, Regional Resilience Innovation Incubator',
    award: 'Award #2519237',
    url: 'https://www.nsf.gov/awardsearch/show-award/?AWD_ID=2519237',
    role: 'Senior Personnel',
    period: '',
  },
];

// CONTACT DATA
export const contactData = {
  cta: 'I\u2019m always glad to talk about open-source geospatial software, GRASS, participatory modeling, or a new collaboration.',
  btn: 'Get in touch',
  email: 'ctwhite@ncsu.edu',
};

// FOOTER DATA
export const footerData = {
  networks: [
    {
      id: nanoid(),
      name: 'linkedin',
      url: 'https://www.linkedin.com/in/corey-white-ph-d-a6080312b',
    },
    {
      id: nanoid(),
      name: 'github',
      url: 'https://github.com/cwhite911',
    },
    {
      id: nanoid(),
      name: 'graduation-cap',
      url: 'https://scholar.google.com/citations?user=PQIUwlcAAAAJ',
    },
    {
      id: nanoid(),
      name: 'globe',
      url: 'https://openplains.com',
    },
  ],
};

// Github start/fork buttons
export const githubButtons = {
  isEnabled: false, // set to false to disable the GitHub stars/fork buttons
};
