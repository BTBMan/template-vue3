import type { ServerOptions } from 'vite';

const proxyIp = 'http://192.168.5.176';

export const server: ServerOptions = {
  host: '0.0.0.0',
  proxy: {
    '/api/': {
      target: proxyIp,
      ws: false,
      changeOrigin: true,
    },
  },
};
