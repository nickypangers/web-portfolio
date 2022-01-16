let coreTechnologies = [
  'Javascript',
  'jQuery',
  'Tailwind',
  'Bootstrap',
  'Vue.js',
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
      company: 'Mosaic Digital Production',
      position: 'Web/Mobile Application Developer',
      period: 'Nov 2020 - Jan 2022',
      location: 'Lai Chi Kok, Hong Kong',
      description:
        'I am working with Mosaic Digital Group as a Web/Mobile Application Developer to create responsive websites and hybrid mobile applications for both Android and iOS.',
      points: [
        'Build mobile applications for both Android and iOS using Flutter',
        'Build responsive websites and custom content management systems (CMS) according to client specifications and designer wireframes using HTML, CSS, SCSS, PHP and Vue.js',
        'Deploy web applications on AWS',
        'Implement enhancements that improved web functionality, responsiveness and performance',
      ],
    },
    {
      company: 'SG Wireless',
      position: 'Hardware Engineer',
      period: 'Feb 2020 - Oct 2020',
      location: 'Tsuen Wan, Hong Kong',
      description:
        'I worked with SG Wireless as a Hardware Engineer to develop internet-of-things products involving BLE, LoRa and WiFi 6 technologies.',
      points: [
        'IoT hardware development on LoRa, BLE, WiFi 6 and NFC',
        'Native and cross-playform mobile application development using Java and Flutter',
        'Developing test programs using C, C#, Go and LabView',
        'Quality assurance of hardware function design',
        'Compliance and product certification',
        'Translate customer product requirements into hardware requirements, test plan and design documentations before hardwrae implementation',
        'In-house manufacturing setup',
      ],
    },
  ],
}
