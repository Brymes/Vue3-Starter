import { createApp } from "vue";
import App from "./App.vue";

import { VueCookieNext } from "vue-cookie-next";

import router from "./router.js";

import "./index.css";

export const app = createApp(App);


//Register Global Components here like so
// app
//     .component("loading-overlay", LoadingComponent)

app.use(router).use(VueCookieNext).mount("#app");

// set default Cookie config to delete after tab closes
VueCookieNext.config({ expire: 0 });