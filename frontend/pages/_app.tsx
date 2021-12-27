import React from 'react'
import DefaultMetatags from '@components/molecules/DefaultMetatags/Component'
import Favicons from '@components/molecules/Favicons/Component'
import { usePageView } from '@lib/react-gtm/next/use-page-view'
import { AppProps } from 'next/dist/shared/lib/router/router'
import '../theme/fonts.css'
import '../theme/main.css'
import useScrollbarWidth from '@misc/use-scrollbar-width'

export default function App (props: AppProps): JSX.Element {
  usePageView()
  useScrollbarWidth()

  return (
    <>
      <props.Component {...props.pageProps} />
      <DefaultMetatags />
      <Favicons />
    </>
  )
}
