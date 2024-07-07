import { createApp } from "vue";
import "./style.css";
import App from "./App.vue";
import { createPinia } from "pinia";
import { PiniaSharedState } from "pinia-shared-state";

// Vue app
const app = createApp(App);

// Init pinia for global state management
const pinia = createPinia();
app.use(pinia);

// Pinia plugin for syncing state between tabs
pinia.use(PiniaSharedState({}));

// Mounting vue app
app.mount("#app");
