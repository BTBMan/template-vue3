import { defineConfig } from 'vite';
import { server } from './build/server';
import { pathResolve } from './build/utils';
import { plugins } from './build/plugins';
import { css } from './build/css';

export default defineConfig({
  base: '/[name]/',
  envDir: pathResolve('env'),
  plugins,
  css,
  resolve: {
    alias: {
      '@': pathResolve('src'),
      '-': pathResolve(''),
      moment: 'dayjs',
    },
  },
  server,
});
