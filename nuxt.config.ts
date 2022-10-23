export default defineNuxtConfig({
  meta: {
    title: 'Java (INT101)',
    meta: [
      { hid: 'description', name: 'description', content: 'learning' },
      { name: 'keywords', content: 'Java, INT101, BestZige' },
      { name: 'author', content: 'BestZige' },
      { name: 'robots', content: 'index, follow' },
      { name: 'language', content: 'Thailand' },
      { name: 'theme-color', content: '#cc0000' },
      { name: 'og:title', content: 'Java (INT101)' },
      { name: 'og:description', content: 'learning' },
      {
        name: 'og:image',
        content: 'logo.png'
      }
    ],
    link: [
      {
        href: 'https://fonts.googleapis.com/css2?family=Kanit:wght@100;200;300;400;500;600;700;800;900&display=swap&family=Silkscreen:wght@400;700&family=Chakra+Petch:wght@100;200;300;400;500;600;700;800;900&display=swap',
        rel: 'stylesheet'
      },
      {
        href: 'https://cdn.jsdelivr.net/npm/bootstrap@5.2.2/dist/css/bootstrap.min.css',
        rel: 'stylesheet',
        integrity:
          'sha384-Zenh87qX5JnK2Jl0vWa8Ck2rdkQ2Bzep5IDxbcnCeuOxjzrPF/et3URy9Bv1WTRi',
        crossorigin: 'anonymous'
      },
      {
        rel: 'icon',
        type: 'image/png',
        href: 'logo.png'
      }
    ],
    script: [
      {
        src: 'https://cdn.jsdelivr.net/npm/bootstrap@5.2.2/dist/js/bootstrap.bundle.min.js',
        integrity:
          'sha384-OERcA2EqjJCMA+/3y+gxIOqMEjwtxJY7qPCqsdltbNJuaOe923+mo//f6V8Qbsw3',
        crossorigin: 'anonymous'
      }
    ]
  },
  css: ['~/assets/css/main.css']
});
