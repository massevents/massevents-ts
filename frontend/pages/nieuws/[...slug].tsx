import React from 'react'
import { GetStaticProps, GetStaticPaths } from 'next'

import { DEFAULT_NOT_FOUND_REVALIDATE, DEFAULT_REVALIDATE } from '@constants/revalidate'

import Metatags from '@components/molecules/Metatags/Component'
import { Header, NewsQuery, SiteConfigQuery } from '@generated/graphql-request'
import { getWebsiteApiOrigin, getWebsiteApiPath } from '@misc/environments'
import { createGraphqlRequestSdk } from '@misc/graphql-request-sdk'
import { hasValue } from '@misc/helpers'
import { useRouter } from 'next/router'
import NewsDetail from '@components/templates/NewsDetail/Component'

export const getStaticPaths: GetStaticPaths = async () => {
  return {
    paths: [],
    fallback: true
  }
}

export const getStaticProps: GetStaticProps<{
  news: NewsQuery['allNews']
  siteConfig: SiteConfigQuery
  header: Header
}> = async ctx => {
  const origin = getWebsiteApiOrigin()
  const path = getWebsiteApiPath()
  const endpoint = `${origin}${path}`

  const sdk = createGraphqlRequestSdk(new URL(endpoint))
  const slug = hasValue(ctx.params?.slug) ? ctx.params?.slug[0] : ''

  if (typeof slug !== 'string' || slug === '') {
    return {
      notFound: true,
      revalidate: DEFAULT_NOT_FOUND_REVALIDATE
    }
  }

  const news = await sdk.News({
    slug: `nieuws/${slug}`
  })
  const siteSettings = await sdk.SiteConfig({ id: 'site-config' })

  if (news.allNews == null) {
    return {
      notFound: true,
      revalidate: DEFAULT_NOT_FOUND_REVALIDATE
    }
  }

  return {
    props: {
      news: news.allNews,
      siteConfig: siteSettings,
      header: news.allNews[0].header
    },
    revalidate: DEFAULT_REVALIDATE
  }
}

export default function Page(
  props: {
    news: NewsQuery['allNews']
    siteConfig: SiteConfigQuery
    header: Header
  }
): JSX.Element {
  const router = useRouter()

  if (router.isFallback) {
    return <p>Loading</p>
  }
  const pageData = props.news[0]

  return (
    <>
      <Metatags
        {...{
          title: pageData.seo?.title ?? '',
          description: pageData.seo?.description ?? '',
          og_image: pageData.seo?.openGraphImage?.asset?.url ?? ''
        }}
      />
      <NewsDetail news={pageData} />
    </>
  )
}
