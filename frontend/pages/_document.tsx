import React from 'react'
import Document, {
  Head,
  Html,
  Main,
  NextScript
} from 'next/document'
import { Head as GtmHead, Body as GtmBody } from '@lib/react-gtm'
import PerformanceMark from '@lib/react-performance-api/performance-mark/Component'
import { getGTMKey } from '@misc/environments'

export default class MyDocument extends Document {
  render (): JSX.Element {
    const containerId = getGTMKey()

    return (
      <Html>
        <Head>
          <PerformanceMark name='head-start' />
          <link rel='preconnect' href='https://imgur.com' />

          <PerformanceMark name='analytics-start' />

          {/* Global Site Tag (gtag.js) - Google Analytics */}
          <script
            async
            src='https://www.googletagmanager.com/gtag/js?id=252945389'
          />
          <script
            dangerouslySetInnerHTML={{
              __html: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', '252945389', {
              page_path: window.location.pathname,
            });
          `
            }}
          />
          <PerformanceMark name='analytics-end' />
          <PerformanceMark name='gtm-start' />
          <GtmHead containerId={containerId} />
          <PerformanceMark name='gtm-end' />

          <PerformanceMark name='google-fonts-start' />

          <link
            href='https://fonts.googleapis.com/css2?family=Karla:wght@400;700&family=Rubik:wght@400;700&display=swap'
            rel='stylesheet'
          />
          <PerformanceMark name='google-fonts-end' />

          <PerformanceMark name='head-end' />

        </Head>
        <body>
          <PerformanceMark name='body-start' />

          <GtmBody containerId={containerId} />

          <PerformanceMark name='main-start' />
          <Main />
          <PerformanceMark name='main-end' />

          <PerformanceMark name='next-scripts-body-start' />
          <NextScript />
          <PerformanceMark name='next-scripts-body-end' />

          <PerformanceMark name='body-end' />
        </body>
      </Html>
    )
  }
}
