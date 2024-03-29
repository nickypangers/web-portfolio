let coreTechnologies = [
  'Javascript',
  'Typescript',
  'Node.js',
  'jQuery',
  'Tailwind',
  'Bootstrap',
  'Vue 2 + 3',
  'Nuxt.js',
  'PHP',
  'Go',
  'HTML',
  'CSS',
  'SQL',
  'Flutter',
  'SCSS',
  'Git',
  'Firebase',
  'REST APIs',
]

let softSkills = [
  'Responsive Web Design',
  'Software Testing',
  'SEO',
  'Agile Development',
]

let others = [
  'Responsive Web Design',
  'Software Testing',
  'SEO',
  'Agile Development',
]

let education = {
  name: 'University of Leeds',
  location: 'Leeds, UK',
  degree: 'BEng Electronic and Electrical Engineering',
  period: 'September 2016 - July 2019',
  description: 'Grade: Upper Second Class',
}

export const resumeData = {
  config: {
    coreTechnologies: true,
    others: true,
    education: true,
    experiences: true,
  },
  coreTechnologies: coreTechnologies.sort(),
  softSkills: softSkills.sort(),
  others: others.sort(),
  education: education,
  experiences: [
    {
      company: 'Chaos Theroy',
      position: 'Full Stack Developer',
      period: 'May 2022 - Present',
      location: 'Central, Hong Kong',
      description:
        'I am working at Chaos Theory as a Full Stack Developer to develop bespoke functionality for an in-house sports news app for both Android and iOS.',
      points: [
        'Develop bespoke functionality on the app using Flutter, usually totally unique on a sport-by-sport basis',
        'Develop and maintain features of the backend using Firebase and Node.js',
        'Own various parts of our data pipeline that may come via web-scraping techniques',
        'Set, report and communicate OKRs for your piece of the project',
        'Own the website infrastructure, deployment pipeline and performance monitoring, including the cost profile',
      ],
    },
    {
      company: 'AQUMON',
      position: 'Software Developer',
      period: 'Jan 2022 - May 2022',
      location: 'Quarry Bay, Hong Kong',
      description:
        'I worked at Aqumon as a Software Developer to create and maintain frontend modules for asset management, and interactive websites for data analysis using various chart libraries',
      points: [
        'Develop, implement and maintain frontend modules for asset management for middle and backend office',
        'Delivery interactive websites to explain quantitative research ideas according to the product team',
        'Create and maintain documentation around features and configurations',
      ],
    },
    {
      company: 'Mosaic Digital Production',
      position: 'Web/Mobile Application Developer',
      period: 'Nov 2020 - Jan 2022',
      location: 'Lai Chi Kok, Hong Kong',
      description:
        'I worked at Mosaic Digital Production as a Web/Mobile Application Developer to create responsive websites and hybrid mobile applications for both Android and iOS.',
      points: [
        'Build mobile applications for both Android and iOS using Flutter',
        'Build responsive websites and custom content management systems (CMS) according to client specifications and designer wireframes using HTML, CSS, SCSS, PHP, Vue 2 + 3 and Nuxt.js',
        'Deploy web applications on AWS',
        'Implement enhancements that improved web functionality, responsiveness and performance',
      ],
    },
    {
      company: 'SG Wireless',
      position: 'Hardware Engineer',
      period: 'Feb 2020 - Sep 2020',
      location: 'Tsuen Wan, Hong Kong',
      description:
        'I worked at SG Wireless as a Hardware Engineer to develop internet-of-things products involving BLE, LoRa and WiFi 6 technologies.',
      points: [
        'IoT hardware development on LoRa, BLE, WiFi 6 and NFC',
        'Native and cross-playform mobile application development using Java and Flutter',
        'Developing test programs using C, C#, Go and LabView',
        'Quality assurance of hardware function design',
        'Compliance and product certification',
        'Translate customer product requirements into hardware requirements, test plan and design documentations before hardware implementation',
        'In-house manufacturing setup',
      ],
    },
  ],
}
