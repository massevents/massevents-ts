import React from 'react'
import { GetStaticProps, GetStaticPaths } from 'next'

import { DEFAULT_NOT_FOUND_REVALIDATE, DEFAULT_REVALIDATE } from '@constants/revalidate'

import Metatags from '@components/molecules/Metatags/Component'
import { PageQuery, SiteConfigQuery } from '@generated/graphql-request'
import { getWebsiteApiOrigin, getWebsiteApiPath } from '@misc/environments'
import { createGraphqlRequestSdk } from '@misc/graphql-request-sdk'
import { hasValue } from '@misc/helpers'
import { useRouter } from 'next/router'

export const getStaticPaths: GetStaticPaths = async () => {
  return {
    paths: [],
    fallback: true
  }
}

export const getStaticProps: GetStaticProps<{
  page: PageQuery['allPage']
  siteConfig: SiteConfigQuery
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

  const page = await sdk.Page({
    slug: `${slug}`
  })
  const siteSettings = await sdk.SiteConfig({ id: 'site-config' })

  if (page.allPage == null) {
    return {
      notFound: true,
      revalidate: DEFAULT_NOT_FOUND_REVALIDATE
    }
  }

  return {
    props: {
      page: page.allPage,
      siteConfig: siteSettings
    },
    revalidate: DEFAULT_REVALIDATE
  }
}

export default function Page (
  props: { page: PageQuery['allPage'] }
): JSX.Element {
  const router = useRouter()

  if (router.isFallback) {
    return <p>Loading</p>
  }

  const pageData = props.page[0]

  return (
    <>
    <Metatags
      {...{
        title: pageData.seo?.title ?? '',
        description: pageData.seo?.description ?? ''
      }}
    />

    <h1>{pageData.title}</h1>

      {/* {hasValue(pageData?.blocks) && pageData?.blocks.map((block: PossibleBlock | null) => {
        if (!hasValue(block)) return null
        return (<BlockMapper key={block._key} block={block} color={pageData?.color as PossibleColors} />)
      })} */}

    </>
  )
}
