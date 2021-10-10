import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import { library } from "@fortawesome/fontawesome-svg-core";
import {
  faInstagram,
  faTwitter,
  faLinkedin,
} from "@fortawesome/free-brands-svg-icons";
import { faFileDownload, faMoon } from "@fortawesome/free-solid-svg-icons";
import { faEnvelope, faSun } from "@fortawesome/free-regular-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import "./assets/tailwind.css";
import "./assets/index.css";

library.add(faInstagram);
library.add(faLinkedin);
library.add(faTwitter);
library.add(faEnvelope);
library.add(faFileDownload);
library.add(faSun);
library.add(faMoon);

createApp(App)
  .use(router)
  .component("font-awesome-icon", FontAwesomeIcon)
  .mount("#app");
