// Typically used to avoid render blocking resources delay on first page load. Fonts are not critical and can be skipped on first load. Also, when using multiple fonts in the app, using this is recommended. It uses scroll events under the hood.

const FontFaceObserver = require('fontfaceobserver')

// const Fonts = () => {
//   const link = document.createElement('link')
//   link.href =
//     'https://fonts.googleapis.com/css2?family=Roboto:wght@300;400;700&display=swap'
//   // 'https://fonts.googleapis.com/css2?family=Sofia+Sans+Extra+Condensed:wght@300;400&display=swap'

//   link.rel = 'stylesheet'

//   document.head.appendChild(link)

//   const roboto = new FontFaceObserver('Roboto')

//   roboto.load(null, 8000).then(() => {
//     console.log('Roboto font loaded!')
//     document.documentElement.classList.add('roboto')
//   })
// }

const Fonts = () => {
  const link = document.createElement('link')
  link.href = 'https://use.typekit.net/puc7wfb.css'

  link.rel = 'stylesheet'

  document.head.appendChild(link)

  const poppins = new FontFaceObserver('Poppins')

  poppins.load(null, 10000).then(() => {
    console.log('Poppins font loaded!')
    document.documentElement.classList.add('poppins')
  })

  const roboto = new FontFaceObserver('Roboto')

  roboto.load(null, 10000).then(() => {
    console.log('Roboto font loaded!')
    document.documentElement.classList.add('roboto')
  })
}

export default Fonts
