// https://nuxt.com/docs/api/configuration/nuxt-config
import packageJson from './package.json';

export default defineNuxtConfig({
  modules: [
    '@sidebase/nuxt-session',
  ],
  ssr: true,
  nitro: {
    prerender: {
      routes: ['/static']
    },
  },
  session: {
    session: {
      storageOptions: {
        driver: 'redis',
        options: {
          url: 'redis://localhost:6379'
        }
      }
    }
  }
});
