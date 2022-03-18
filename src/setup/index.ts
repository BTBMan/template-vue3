import type { App } from 'vue';
import '@/styles';
import { setupRootFontSize } from './setupRootFontSize';
import { setupGlobalProperties } from './setupGlobalProperties';
import { setupAntd } from './setupAntd';
import { setupRouter } from './setupRouter';
import { setupPageTab } from './setupPageTab';

export const setupApp = (app: App) => {
  setupRootFontSize(1280);

  setupGlobalProperties();

  setupPageTab();

  setupAntd(app);

  setupRouter(app);
};
