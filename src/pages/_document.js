import React from 'react'
import Document, { Html, Head, Main, NextScript } from 'next/document'
import createEmotionServer from '@emotion/server/create-instance'
import createEmotionCache from 'src/styles/createEmotionCache'
import theme from 'src/styles/theme'
import { ServerStyleSheets } from '@mui/styles'

export default class MyDocument extends Document {
  render() {
    return (
      <Html lang="en">
        <Head>
          <meta charSet="utf-8" />
          <meta name="theme-color" content={theme.palette.primary.main} />
          <meta name="emotion-insertion-point" content="" />
          {/* Google Fonts */}
          {/* Commenting below as we are loading fonts post render / non-blocking way for faster page loads. See Fonts.js */}
          {/* <link rel="preconnect" href="https://fonts.googleapis.com" />
          <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin />
          <link
            href="https://fonts.googleapis.com/css2?family=Roboto:wght@300;400;700&display=swap"
            rel="stylesheet"
          /> */}
          {this.props.emotionStyleTags}
          {/* Public folder is accessible for favicons (title icons) */}
          <link rel="shortcut icon" href="/assets/crown.svg" />
          {/* PWA primary color */}
          {/* OpenGraph Tags - Needs to be an image hosted somewhere. These can be specific for each of the pages too. In order to make this work, we need a title and link for all the pages. See index page for example */}
          <meta property="og:type" content="website" />
          <meta property="og:image" content="https://i.imgur.com/C8evBTM.png" />
          <meta property="og:image:type" content="image/png" />
          <meta property="og:image:width" content="1200" />
          <meta property="og:image:height" content="630" />
          <meta property="og:image:alt" content="company logo" />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}

// MyDocument.getInitialProps = async (ctx) => {
//   // Resolution order
//   //
//   // On the server:
//   // 1. app.getInitialProps
//   // 2. page.getInitialProps
//   // 3. document.getInitialProps
//   // 4. app.render
//   // 5. page.render
//   // 6. document.render
//   //
//   // On the server with error:
//   // 1. document.getInitialProps
//   // 2. app.render
//   // 3. page.render
//   // 4. document.render
//   //
//   // On the client
//   // 1. app.getInitialProps
//   // 2. page.getInitialProps
//   // 3. app.render
//   // 4. page.render

//   const originalRenderPage = ctx.renderPage

//   // You can consider sharing the same emotion cache between all the SSR requests to speed up performance.
//   // However, be aware that it can have global side effects.
//   const cache = createEmotionCache()
//   const { extractCriticalToChunks } = createEmotionServer(cache)

//   ctx.renderPage = () =>
//     originalRenderPage({
//       enhanceApp: (App) =>
//         function EnhanceApp(props) {
//           return <App emotionCache={cache} {...props} />
//         },
//     })

//   const initialProps = await Document.getInitialProps(ctx)
//   // This is important. It prevents emotion to render invalid HTML.
//   // See https://github.com/mui-org/material-ui/issues/26561#issuecomment-855286153
//   const emotionStyles = extractCriticalToChunks(initialProps.html)
//   const emotionStyleTags = emotionStyles.styles.map((style) => (
//     <style
//       data-emotion={`${style.key} ${style.ids.join(' ')}`}
//       key={style.key}
//       // eslint-disable-next-line react/no-danger
//       dangerouslySetInnerHTML={{ __html: style.css }}
//     />
//   ))

//   return {
//     ...initialProps,
//     // Styles fragment is rendered after the app and page rendering finish.
//     styles: [
//       ...React.Children.toArray(initialProps.styles),
//       ...emotionStyleTags,
//     ],
//   }
// }

MyDocument.getInitialProps = async (ctx) => {
  const sheets = new ServerStyleSheets()
  const originalRenderPage = ctx.renderPage
  ctx.renderPage = () =>
    originalRenderPage({
      enhanceApp: (App) => (props) => sheets.collect(<App {...props} />),
    })
  const initialProps = await Document.getInitialProps(ctx)
  return {
    ...initialProps,
    styles: [
      <React.Fragment key="styles">
        {initialProps.styles}
        {sheets.getStyleElement()}
      </React.Fragment>,
    ],
  }
  // const originalRenderPage = ctx.renderPage

  // ctx.renderPage = () =>
  //   originalRenderPage({
  //     enhanceApp: (App) => (props) => sheets.collect(<App {...props} />),
  //   })

  // const initialProps = await Document.getInitialProps(ctx)

  // return {
  //   ...initialProps,
  //   // Styles fragment is rendered after the app and page rendering finish.
  //   styles: [
  //     ...React.Children.toArray(initialProps.styles),
  //     sheets.getStyleElement(),
  //   ],
  // }
}
