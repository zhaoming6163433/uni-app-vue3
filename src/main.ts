import { createSSRApp } from "vue";
import apis from '@/api/index'
import App from "./App.vue";
export function createApp() {
  const app = createSSRApp(App);
	app.config.globalProperties.$api = apis
  return {
    app
  };
}
