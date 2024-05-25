import './assets/index.css';
import 'vue3-json-viewer/dist/index.css';

import { createApp } from 'vue'
import { createPinia } from 'pinia'
import JsonViewer from 'vue3-json-viewer';
import * as components from './components/baseComponents';

const defaultComponents: any = components?.default;

const vueComponents = {
  install(Vue: any) {
    Object.keys(defaultComponents).forEach((componentName) => {
      Vue.component(componentName, defaultComponents[componentName]);
    });
  }
};




import App from './App.vue'
import router from './router'

const app = createApp(App)

app.use(createPinia())
app.use(router).use(vueComponents).use(JsonViewer)

app.mount('#app')
