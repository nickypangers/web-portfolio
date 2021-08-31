import { createApp } from "vue";

import { library } from "@fortawesome/fontawesome-svg-core";
import {
  faGooglePlay,
  faGithub,
  faLinkedinIn,
  faStackOverflow,
} from "@fortawesome/free-brands-svg-icons";
import { faExternalLinkAlt } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";

import "bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

import App from "./App.vue";
import router from "./router";

library.add(faGooglePlay);
library.add(faGithub);
library.add(faLinkedinIn);
library.add(faStackOverflow);
library.add(faExternalLinkAlt);

createApp(App)
  .component("font-awesome-icon", FontAwesomeIcon)
  .use(router)
  .mount("#app");
