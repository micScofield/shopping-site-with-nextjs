const FontFaceObserver = require('fontfaceobserver')

const Fonts = () => {
  const link = document.createElement('link')
  link.href =
    'https://fonts.googleapis.com/css2?family=Roboto:wght@300;400;700&display=swap'
  link.rel = 'stylesheet'

  document.head.appendChild(link)

  const roboto = new FontFaceObserver('Roboto')

  roboto.load().then(() => {
    console.log('Fonts loaded!')
    document.documentElement.classList.add('roboto')
  })
}

export default Fonts
