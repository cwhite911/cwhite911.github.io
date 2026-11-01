import { nanoid } from 'nanoid';

// HEAD DATA
export const headData = {
  title: 'Corey T. White | Geospatial Research Software Engineer',
  lang: 'en',
  description:
    'Corey T. White, Ph.D., Geospatial Research Software Engineer at NC State\u2019s Center for Geospatial Analytics, Founder & CEO of OpenPlains Inc., and a GRASS core contributor and maintainer. NSF and USDA funded research in geomorphometry, hydrologic simulation, and post-disaster terrain analysis.',
};

// HERO DATA
export const heroData = {
  title: '',
  name: 'Corey White',
  subtitle:
    'I\u2019m a geospatial research software engineer and founder building open-source tools that bring scientific earth modeling to the cloud.',
  cta: 'Learn more',
};

// ABOUT DATA
export const aboutData = {
  img: 'profile.jpg',
  paragraphOne:
    'I\u2019m a Geospatial Research Software Engineer at the Center for Geospatial Analytics at North Carolina State University, where I co-develop interactive participatory-modeling applications that help communities make socio-environmental decisions. My research spans geomorphometry, hydrologic and overland-flow modeling, land-use and land-cover change, urban growth forecasting, and post-disaster topographic change detection with UAS and lidar. Since Hurricane Helene I have mapped volumetric topographic change across western North Carolina from rapid-response Civil Air Patrol imagery, work that produced the r.dem toolset for DEM co-registration and change detection. This work is funded by the National Science Foundation and USDA, most recently as Co-PI on the NSF Open Geoscience Accelerator award building the contributor pipeline for open geoscience software.',
  paragraphTwo:
    'I\u2019m also the Founder & CEO of OpenPlains Inc., where I build cloud-native platforms that bring the power of GRASS and Actinia to the web. As a long-time core contributor and maintainer of GRASS, I work to lower the barriers to open, reproducible, science-based geospatial computing through tools like the r.dem, t.stac, and r.soils.rosetta addons and a stack of open-source libraries for interactive modeling. I\u2019m also connecting GRASS to AI: through grass-mcp, the OSGeo Model Context Protocol server that lets language-model agents run GRASS tools, and through i.sam2, which brings prompt-driven Segment Anything segmentation into GRASS.',
  paragraphThree:
    'I earned my Ph.D. in Geospatial Analytics from NC State in 2023. I co-authored the chapter on geomorphometry in GRASS for the second edition of Geomorphometry: Concepts, Software, Applications (Elsevier, 2026), and I\u2019m co-authoring a book on the GRASS geocomputation engine (CRC Press / Taylor & Francis). I teach geospatial modeling and UAS mapping and analytics at NC State and fly as an FAA Part 107 remote pilot; UAS and Structure from Motion photogrammetry run through much of my terrain work, from rapid DEM updates to post-disaster change detection.',
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
      'Founder & CEO. Built on an open-source stack: django-actinia, grass-js-client, react-openplains, and more. Tutorials and posts at learning.openplains.com.',
    url: 'https://openplains.com',
    repo: 'https://github.com/OpenPlainsInc',
  },
  {
    id: nanoid(),
    img: 'grass.png',
    title: 'GRASS',
    info: 'A powerful open-source geospatial processing engine with 400+ core tools and 400+ community addons. I\u2019m a core contributor and maintainer.',
    info2:
      'Author of r.dem, t.stac, r.soils.rosetta, and nine more merged addons for terrain, soils, hydrology, and data access.',
    url: 'https://grass.osgeo.org',
    repo: 'https://github.com/OSGeo/grass',
  },
  {
    id: nanoid(),
    img: 'rdem.png',
    title: 'r.dem',
    info: 'A GRASS toolset for DEM co-registration, differencing, and topographic change analysis: ICP and pseudo-GCP registration, bias removal, Level of Detection, error propagation, and volumetric change summaries for post-disaster surfaces.',
    info2:
      'Built for the Hurricane Helene change detection work and archived on Zenodo (doi:10.5281/zenodo.21940875).',
    url: 'https://grass.osgeo.org/grass-stable/manuals/addons/r.dem.html',
    repo: 'https://github.com/ncsu-geoforall-lab/r.dem',
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
      name: 'r.dem',
      subtools:
        'r.dem.icp · r.dem.coregister · r.dem.bias · r.dem.lod · r.dem.errprop · r.dem.change · r.dem.dod · r.dem.stats · r.dem.nk · r.dem.screen · r.dem.floodrisk',
      info: 'A toolset for DEM co-registration, differencing, and topographic change analysis, from registration and bias removal to Level of Detection, error propagation, and volumetric change summaries.',
      manual: 'https://grass.osgeo.org/grass-stable/manuals/addons/r.dem.html',
      repo: 'https://github.com/OSGeo/grass-addons/tree/grass8/src/raster/r.dem',
    },
    {
      id: nanoid(),
      name: 'r.soils.rosetta',
      subtools: '',
      info: 'Estimates Mualem-van Genuchten soil hydraulic parameters, including saturated hydraulic conductivity, from soil texture rasters using the ROSETTA pedotransfer model, producing infiltration inputs for overland flow simulation.',
      manual: 'https://grass.osgeo.org/grass-stable/manuals/addons/r.soils.rosetta.html',
      repo: 'https://github.com/OSGeo/grass-addons/tree/grass8/src/raster/r.soils.rosetta',
    },
    {
      id: nanoid(),
      name: 'v.photo.geometry',
      subtools: '',
      info: 'Recovers acquisition geometry from a directory of aerial photos with incomplete flight metadata: camera positions and orientations, above-ground altitude, ground sample distance, and image footprints as vector maps.',
      manual: 'https://grass.osgeo.org/grass-stable/manuals/addons/v.photo.geometry.html',
      repo: 'https://github.com/OSGeo/grass-addons/tree/grass8/src/vector/v.photo.geometry',
    },
    {
      id: nanoid(),
      name: 'r.out.3mf',
      subtools: '',
      info: 'Exports a raster DEM to 3MF or STL format for 3D printing, with optional hollow mold and multi-color output.',
      manual: 'https://grass.osgeo.org/grass-stable/manuals/addons/r.out.3mf.html',
      repo: 'https://github.com/OSGeo/grass-addons/tree/grass8/src/raster/r.out.3mf',
    },
    {
      id: nanoid(),
      name: 'v.in.ags',
      subtools: '',
      info: 'Imports vector features from an ArcGIS Server REST API endpoint directly into GRASS.',
      manual: 'https://grass.osgeo.org/grass-stable/manuals/addons/v.in.ags.html',
      repo: 'https://github.com/OSGeo/grass-addons/tree/grass8/src/vector/v.in.ags',
    },
    {
      id: nanoid(),
      name: 'r.noaa.atlas14',
      subtools: '',
      info: 'Downloads and imports NOAA Atlas 14 precipitation-frequency data from the PFDS point service or the official GIS grid packages.',
      manual: 'https://grass.osgeo.org/grass-stable/manuals/addons/r.noaa.atlas14.html',
      repo: 'https://github.com/OSGeo/grass-addons/tree/grass8/src/raster/r.noaa.atlas14',
    },
    {
      id: nanoid(),
      name: 'i.sam2',
      subtools: '',
      info: 'Segments orthoimagery from text prompts with the Segment Anything model (SAMGeo) inside GRASS.',
      manual: 'https://grass.osgeo.org/grass-stable/manuals/addons/i.sam2.html',
      repo: 'https://github.com/OSGeo/grass-addons/tree/grass8/src/imagery/i.sam2',
    },
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
    img: 'teach-gis582.jpg',
    title: 'GIS/MEA 582: Geospatial Modeling and Analysis',
    meta: 'North Carolina State University · Instructor of Record',
    url: 'https://ncsu-geoforall-lab.github.io/geospatial-modeling-course/',
  },
  {
    id: nanoid(),
    img: 'teach-gis584.jpg',
    title: 'GIS/MEA 584: Mapping and Analytics Using UAS',
    meta: 'North Carolina State University · Instructor of Record',
    url: 'https://ncsu-geoforall-lab.github.io/gis-584-uas-course/',
  },
];

export const tutorialsData = [
  {
    id: nanoid(),
    img: 'teach-rosetta.jpg',
    title: 'Estimating infiltration from soil survey data for overland flow modeling',
    meta: 'GRASS Tutorials · 2026 · SSURGO, ROSETTA, and r.sim.water',
    url: 'https://grass-tutorials.osgeo.org/content/tutorials/soil_hydrology/soil_informed_overland_flow.html',
  },
  {
    id: nanoid(),
    img: 'teach-fallslake.jpg',
    title: 'Animating the Falls Lake drawdown with r.anim.morph',
    meta: 'OpenPlains Learning · 2026',
    url: 'https://learning.openplains.com/content/blog/animating_water_level_change_with_r_anim_morph.html',
  },
  {
    id: nanoid(),
    img: 'teach-geomorph-series.jpg',
    title: 'Geomorphometry with GRASS',
    meta: 'Tutorial series · 2026',
    url: 'https://doi.org/10.5281/zenodo.19403682',
  },
];

export const workshopsData = [
  {
    id: nanoid(),
    img: 'teach-geohazards.jpg',
    title: 'Geohazard Change Detection for Emergency Management with GRASS',
    meta: 'FOSS4G North America 2026, Sacramento',
    url: 'https://github.com/ncsu-geoforall-lab/geohazards-workshop',
  },
  {
    id: nanoid(),
    img: 'teach-foss4gna2025.jpg',
    title: 'GRASS Addon Development with Python',
    meta: 'FOSS4G North America 2025',
    url: 'https://github.com/ncsu-geoforall-lab/FOSS4GNA-2025-workshop',
  },
  {
    id: nanoid(),
    img: 'teach-geomorph2025.jpg',
    title: 'Propagating DEM Uncertainty to Stream Extraction using GRASS',
    meta: 'Geomorphometry 2025, Perugia, Italy',
    url: 'https://github.com/ncsu-geoforall-lab/geomorphometry2025_workshop',
  },
  {
    id: nanoid(),
    img: 'teach-ncgis2025.jpg',
    title: 'Geospatial Data Science with GRASS',
    meta: 'NCGIS 2025 · with Vaclav Petras',
    url: 'https://github.com/ncsu-geoforall-lab/grass-data-science-ncgis-2025',
  },
  {
    id: nanoid(),
    img: 'teach-foss4gna2024.jpg',
    title: 'Developing Web Applications with GRASS',
    meta: 'FOSS4G North America 2024',
    url: 'https://github.com/OpenPlainsInc/foss4gna-2024-workshop',
  },
  {
    id: nanoid(),
    img: 'teach-usdoi.jpg',
    title: 'Geoprocessing with GRASS and Jupyter Notebooks',
    meta: 'U.S. Department of the Interior webinar · 2024',
    url: 'https://doi.org/10.5281/zenodo.13367159',
  },
  {
    id: nanoid(),
    img: 'teach-introgeo.jpg',
    title: 'Introduction to Geoprocessing with GRASS',
    meta: 'SMathHacks, NC School of Science and Mathematics · 2024 and 2025',
    url: 'https://github.com/OpenPlainsInc/intro-to-geoprocessing-workshop',
  },
  {
    id: nanoid(),
    img: 'teach-foss4gna2023.jpg',
    title: 'Develop Geospatial Workflows and Custom Tools with GRASS',
    meta: 'FOSS4G North America 2023 · with Vaclav Petras',
    url: 'https://github.com/ncsu-geoforall-lab/develop-tools-with-grass-foss4gna-2023',
  },
];

// PUBLICATIONS DATA
export const publicationsData = [
  {
    id: nanoid(),
    img: 'helene-rs2026.png',
    title:
      'Volumetric Change Detection with SfM Photogrammetry from Rapid-Response Aerial Imagery After Hurricane Helene',
    authors: 'White C.T., Regmi P., Reckling W., Mitasova H.',
    journal: 'Remote Sensing, in press',
    year: '2026',
    url: 'https://www.mdpi.com/journal/remotesensing',
    doi: '',
  },
  {
    id: nanoid(),
    img: 'geomorphometry-chapter.png',
    title: 'Geomorphometry in GRASS',
    authors: 'White C.T., Mitasova H., Neteler M., Petrasova A., Hofierka J.',
    journal:
      'Chapter 12 in Geomorphometry: Concepts, Software, Applications, 2nd ed. (Grohmann, Lecours, Reuter, eds.), Elsevier',
    year: '2026',
    url: 'https://doi.org/10.1016/B978-0-44-333376-7.00023-9',
    doi: 'https://doi.org/10.1016/B978-0-44-333376-7.00023-9',
  },
  {
    id: nanoid(),
    img: 'helene-iale2025.png',
    title: 'Topographic Impacts of Hurricane Helene in Western North Carolina',
    authors: 'White C.T.',
    journal: 'IALE-North America Annual Meeting, Raleigh, NC (presentation)',
    year: '2025',
    url: 'https://zenodo.org/records/15237651',
    doi: 'https://doi.org/10.5281/zenodo.15237651',
  },
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
  email: 'corey.white@openplains.com',
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
      name: 'id-badge',
      url: 'https://orcid.org/0000-0002-2903-9924',
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
