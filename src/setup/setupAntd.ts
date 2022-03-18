import type { App } from 'vue';
import { createFromIconfontCN } from '@ant-design/icons-vue';

export const setupAntd = (app: App) => {
  const IconFont = createFromIconfontCN({
    scriptUrl: '//at.alicdn.com/t/font_2705200_141qjpxc7haf.js',
  });

  app.component('AliIcon', IconFont);
};
