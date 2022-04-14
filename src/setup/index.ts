import type { App } from 'vue';
import '@/styles';
import './setupDayjs';
import { setupRootFontSize } from './setupRootFontSize';
import { setupGlobalProperties } from './setupGlobalProperties';
import { setupAntd } from './setupAntd';
import { setupRouter } from './setupRouter';
import { setupPageTab } from './setupPageTab';
import { setupPinia } from './setupPinia';

export const setupApp = (app: App) => {
  setupRootFontSize(1280);

  setupGlobalProperties();

  setupPageTab();

  setupAntd(app);

  setupPinia(app);

  setupRouter(app);
};
