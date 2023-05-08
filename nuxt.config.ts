// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({
  modules: [
    '@nuxtjs/tailwindcss',
    '@nuxtjs/supabase',
    '@pinia/nuxt',
    '@nuxtjs/color-mode',
  ],
  colorMode: {
    preference: 'system', // default value of $colorMode.preference
    fallback: 'light', // fallback value if not system preference found
    hid: 'nuxt-color-mode-script',
    globalName: '__NUXT_COLOR_MODE__',
    componentName: 'ColorScheme',
    classPrefix: '',
    classSuffix: '',
    storageKey: 'nuxt-color-mode',
  },
  pinia: {
    autoImports: [
      // automatically imports `defineStore`
      'defineStore', // import { defineStore } from 'pinia'
      ['defineStore', 'definePiniaStore'], // import { defineStore as definePiniaStore } from 'pinia'
    ],
  },
  supabase: {
    url: 'https://qfgusybkqqvjhrotseuz.supabase.co',
    key: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InFmZ3VzeWJrcXF2amhyb3RzZXV6Iiwicm9sZSI6ImFub24iLCJpYXQiOjE2NzY4MTQ4NjQsImV4cCI6MTk5MjM5MDg2NH0.Go3YVWTVKvsvV2wkXNICDA7aZ7T6Yrji_W6i15oF6F4',
  },
  plugins: ['@/plugins/globalTicker.client.ts'],
  ssr: true,
  app: {
    head: {
      charset: 'utf-8',
      viewport: 'width=device-width, initial-scale=1',
      bodyAttrs: {
        class: 'h-full dark:bg-gray-900',
      },
      script: [
        {
          src: '/assets/preline.js',
          body: true,
          defer: true,
        },
        {
          src: 'https://cdnjs.cloudflare.com/ajax/libs/jquery/3.1.1/jquery.min.js',
          body: true,
          defer: true,
        },
      ],
    },
    keepalive: true,
  },
});
