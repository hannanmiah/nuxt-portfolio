export default defineAppConfig({
  global: {
    picture: {
      dark: '/photo.jpg',
      light: '/photo.jpg',
      alt: 'Hannan Miah'
    },
    meetingLink: 'tel:+8801787378887',
    email: 'hannanhridoy@gmail.com',
    available: true
  },
  ui: {
    colors: {
      primary: 'blue',
      neutral: 'neutral'
    },
    pageHero: {
      slots: {
        container: 'py-18 sm:py-24 lg:py-32',
        title: 'mx-auto max-w-xl text-pretty text-3xl sm:text-4xl lg:text-5xl',
        description: 'mt-2 text-md mx-auto max-w-2xl text-pretty sm:text-md text-muted'
      }
    }
  },
  footer: {
    credits: `Hannan Miah • © ${new Date().getFullYear()}`,
    colorMode: false,
    links: [{
      'icon': 'i-simple-icons-facebook',
      'to': 'https://fb.me/hannanmiah29',
      'target': '_blank',
      'aria-label': 'Connect on Facebook'
    }, {
      'icon': 'i-simple-icons-linkedin',
      'to': 'https://linkedin.com/in/hannanmiah',
      'target': '_blank',
      'aria-label': 'Connect on LinkedIn'
    }, {
      'icon': 'i-simple-icons-github',
      'to': 'https://github.com/hannanmiah',
      'target': '_blank',
      'aria-label': 'Connect on GitHub'
    }]
  }
})
