import type { CSSOptions } from 'vite';
import { pathResolve } from './utils';

export const css: CSSOptions = {
  preprocessorOptions: {
    less: {
      modifyVars: {
        hack: `true; @import "${pathResolve(
          'src/styles/constant/index.less',
        )}";`,
        hack2: `true;@import "${pathResolve(
          'src/styles/constant/antd.less',
        )}";`,
      },
      javascriptEnabled: true,
    },
  },
};
