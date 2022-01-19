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
import Header from '@components/organisms/Header/Component'
import { MainPage } from '@components/molecules/MainPage/Component'

export default function App (props: AppProps & { siteConfig: SiteConfigQuery, hasHeader: boolean }): JSX.Element {
  usePageView()
  useScrollbarWidth()
  const settings = props.pageProps?.siteConfig?.SiteConfig
  const isLogoColor = props.pageProps?.header?.headerType === 'nothing' || props.pageProps?.header?.headerType === 'city'
  return (
    <>
      <div className={stackStyles.stack}>
        <div>
          {((settings?.mainNavigation) != null) && (<MainNavigation isLogoColor={isLogoColor} menu={settings?.mainNavigation} />)}
          {props.pageProps?.header?.headerType !== 'nothing' && (<Header header={props.pageProps?.header} />)}
          <MainPage><props.Component {...props.pageProps} /></MainPage>
        </div>
        <Footer />
      </div>

      <DefaultMetatags />
      <Favicons />
    </>
  )
}
