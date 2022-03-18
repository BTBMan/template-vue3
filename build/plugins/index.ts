import type { Plugin } from 'vite';
import vue from '@vitejs/plugin-vue';
import vueJsx from '@vitejs/plugin-vue-jsx';
import Components from 'unplugin-vue-components/vite';
import { AntDesignVueResolver } from 'unplugin-vue-components/resolvers';
import AutoImport from 'unplugin-auto-import/vite';
import OptimizationPersist from 'vite-plugin-optimize-persist';
import PkgConfig from 'vite-plugin-package-config';
import eslintPlugin from 'vite-plugin-eslint';
import stylelintPlugin from 'vite-plugin-stylelint';
import { autoImportAliIconCssByJs } from './autoImportAliIconCssByJs';

export const plugins: (Plugin | Plugin[])[] = [
  vue(),
  vueJsx({ optimize: true }),
  eslintPlugin({
    cache: false,
    include: [
      '**/*.js',
      '**/*.cjs',
      '**/*.mjs',
      '**/*.jsx',
      '**/*.ts',
      '**/*.cts',
      '**/*.mts',
      '**/*.tsx',
      '**/*.vue',
    ],
  }),
  stylelintPlugin({
    cache: false,
  }),
  Components({
    dts: 'types/components.d.ts',
    dirs: ['src/components', 'src/views', 'src/layouts'],
    resolvers: [
      AntDesignVueResolver({ resolveIcons: true, importStyle: 'less' }),
    ],
  }),
  AutoImport({
    dts: 'types/auto-import.d.ts',
    imports: [
      'vue',
      'vue-router',
      {
        '@vueuse/core': ['useVModels'],
        'lodash-es': ['cloneDeep', ['find', 'lodashFind'], 'findIndex'],
      },
    ],
    eslintrc: {
      enabled: true,
    },
  }),
  PkgConfig(),
  OptimizationPersist(),
  autoImportAliIconCssByJs(),
];
