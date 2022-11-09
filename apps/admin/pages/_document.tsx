import React from 'react'
import NextDocument, { Html, Head, Main, NextScript } from 'next/document'
import { getCssText } from '~/stitches.config'
export default class Document extends NextDocument {
  render() {
    return (
      <Html lang="en">
        <Head>
          <style id="stitches" dangerouslySetInnerHTML={{ __html: getCssText() }} />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}

// import NextDocument, { Html, Head, Main, NextScript, DocumentContext } from 'next/document'
// import { getCssText } from '~/src/styles/stitches.config'

// export default class Document extends NextDocument {
//   static async getInitialProps(ctx: DocumentContext) {
//     const initialProps = await NextDocument.getInitialProps(ctx)

//     return {
//       ...initialProps,
//       styles: (
//         <>
//           {initialProps.styles}
//           {/* Stitches CSS for SSR */}
//           <style id="stitches" dangerouslySetInnerHTML={{ __html: getCssText() }} />
//         </>
//       ),
//     }
//   }

//   render() {
//     return (
//       <Html lang="en">
//         <Head />
//         <body>
//           <Main />
//           <NextScript />
//         </body>
//       </Html>
//     )
//   }
// }
