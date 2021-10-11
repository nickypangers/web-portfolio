let coreTechnologies = [
  "Javascript",
  "Vue.js",
  "PHP",
  "Go",
  "HTML",
  "CSS",
  "SQL",
  "Flutter",
  "SCSS",
];
let others = ["Responsive Website Design", "SEO", "Performance Optimization"];

let education = {
  name: "University of Leeds",
  location: "Leeds, UK",
  degree: "BEng Electronic and Electrical Engineering",
  period: "September 2016 - July 2019",
};

export const resumeData = {
  config: {
    coreTechnologies: true,
    others: false,
    education: true,
    experiences: true,
  },
  coreTechnologies: coreTechnologies.sort(),
  others: others.sort(),
  education: education,
  experiences: [
    {
      company: "Mosaic",
      position: "Web/Mobile Application Developer",
      period: "Nov 2020 - Present",
      description:
        "I am working with Mosaic as a Web/Mobile Application Developer to create responsive websites and mobile applications for both Android and iOS.",
      points: [],
    },
    {
      company: "SG Wireless",
      position: "Hardware Engineer",
      period: "Feb 2020 - Oct 2020",
      description:
        "I worked with SG Wireless as a Hardware Engineer to develop internet-of-things products involving BLE, LoRa and WiFi 6 technologies.",
      points: [
        "IoT hardware development on LoRa, BLE, WiFi 6 and NFC",
        "Native and cross-playform mobile application development using Java and Flutter",
        "Developing test programs using C, C#, Go and LabView",
        "Quality assurance of hardware function design",
        "Compliance and product certification",
        "Translate customer product requirements into hardware requirements, test plan and design documentations before hardwrae implementation",
        "In-house manufacturing setup",
      ],
    },
  ],
};
