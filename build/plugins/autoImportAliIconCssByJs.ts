import type { Plugin } from 'vite';

export const autoImportAliIconCssByJs = (): Plugin => {
  let aliUrl = '';
  const virtualModuleId = '@ali-icon-module.css';
  const resolvedVirtualModuleId = `\0${virtualModuleId}`;

  return {
    name: 'vite:ali-icon-js-to-css',
    transform(code) {
      const matchedUrl = code.match(/at\.alicdn.+js/)?.[0];

      if (matchedUrl) {
        aliUrl = matchedUrl;

        return `import '${virtualModuleId}'
            ${code}`;
      }

      return null;
    },
    resolveId(id) {
      if (id === virtualModuleId) {
        return resolvedVirtualModuleId;
      }

      return null;
    },
    load(id) {
      if (id === resolvedVirtualModuleId) {
        return `@import '//${aliUrl.replace('.js', '.css')}';`;
      }

      return null;
    },
  };
};
