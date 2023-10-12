export default {
  ssr: false,
  head: {
    title: 'Biswajit & Srotaswee | We’re getting engaged!',
    meta: [
      { charset: 'utf-8' },
      { name: 'google', content: 'notranslate' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      {
        hid: 'description',
        name: 'description',
        content: 'You are cordially invited to celebrate our engagement.',
      },
      {
        hid: 'og:type',
        property: 'og:type',
        content: 'website',
      },
      {
        hid: 'og:url',
        property: 'og:url',
        content: 'https://biswajitgotsimplified.netlify.app/',
      },
      {
        hid: 'og:title',
        property: 'og:title',
        content: 'Biswajit & Srotaswee | We’re getting engaged!',
      },
      {
        hid: 'og:description',
        property: 'og:description',
        content: 'You are cordially invited to celebrate our engagement.',
      },
      {
        hid: 'og:image',
        property: 'og:image',
        content: '/og-image1.jpg',
      },

      {
        hid: 'twitter:card',
        property: 'twitter:card',
        content: 'summary',
      },
      {
        hid: 'twitter:url',
        property: 'twitter:url',
        content: 'https://biswajitgotsimplified.netlify.app/',
      },
      {
        hid: 'twitter:title',
        property: 'twitter:title',
        content: 'Biswajit & Srotaswee | We’re getting engaged!',
      },
      {
        hid: 'twitter:description',
        property: 'twitter:description',
        content: 'You are cordially invited to celebrate our marriage.',
      },
      {
        hid: 'twitter:image',
        property: 'twitter:image',
        content: '/og-image.jpg',
      },
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ],
  },
  css: [`~/style.css`],
  plugins: [`~/plugins/lottie-vue-player.client.js`],
  buildModules: ['@nuxtjs/tailwindcss'],
};
