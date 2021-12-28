import React from 'react'
import DefaultMetatags from '@components/molecules/DefaultMetatags/Component'
import Favicons from '@components/molecules/Favicons/Component'
import { usePageView } from '@lib/react-gtm/next/use-page-view'
import { AppProps } from 'next/dist/shared/lib/router/router'
import '../theme/main.css'
import useScrollbarWidth from '@misc/use-scrollbar-width'
import MainNavigation from '@components/organisms/MainNavigation/Component'
import { SiteConfigQuery } from '@generated/graphql-request'
import stackStyles from '@components/atoms/Stack/styles.module.css'

import Footer from '@components/organisms/Footer/Component'

export default function App(props: AppProps & { siteConfig: SiteConfigQuery }): JSX.Element {
  usePageView()
  useScrollbarWidth()
  const settings = props.pageProps?.siteConfig?.SiteConfig

  return (
    <>
      <div className={stackStyles.stack}>
        <div>
          {((settings?.mainNavigation) != null) && (<MainNavigation menu={settings?.mainNavigation} />)}

          <props.Component {...props.pageProps} />
        </div>
       <Footer />
      </div>

      <DefaultMetatags />
      <Favicons />
    </>
  )
}
