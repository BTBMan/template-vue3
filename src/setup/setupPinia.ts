import type { App } from 'vue';
import { createPinia } from 'pinia';

export const setupPinia = (app: App) => {
  app.use(createPinia());
};
