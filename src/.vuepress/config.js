const head = require('./config/head')

module.exports = {
  title: 'Érica Nakamine',
  head,
  dest: 'docs',
  themeConfig: {
    logo: 'https://d3bv2hg4q0qyg2.cloudfront.net/2018/12/08/33b869f90619e81763dbf1fccc896d8d.jpg',
    nav: [{
        text: 'trabalhos',
        link: '/jobs',
        side: 'left'
      },
      {
        text: 'blog',
        link: '/blog',
        side: 'right'
      },
    ]
  }
}