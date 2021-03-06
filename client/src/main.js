// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from "vue";
import App from "./App";
import router from "./router/index";
import "./../node_modules/bulma/css/bulma.css";
import Buefy from "buefy";
import "buefy/dist/buefy.css";

Vue.use(Buefy);

// import VueNotification from "@kugatsu/vuenotification";

// Vue.use(VueNotification, {
//   timer: 20
// });

Vue.config.productionTip = false;

/* eslint-disable no-new */
new Vue({
  el: "#app",
  router,
  components: { App },
  template: "<App/>"
});



