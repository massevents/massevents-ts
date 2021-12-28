import React from 'react'
import { GetStaticProps } from 'next'

import { DEFAULT_NOT_FOUND_REVALIDATE, DEFAULT_REVALIDATE } from '@constants/revalidate'

import Metatags from '@components/molecules/Metatags/Component'
import { PageQuery, SiteConfigQuery } from '@generated/graphql-request'
import { getWebsiteApiOrigin, getWebsiteApiPath } from '@misc/environments'
import { createGraphqlRequestSdk } from '@misc/graphql-request-sdk'
import { useRouter } from 'next/router'

export const getStaticProps: GetStaticProps<{
  homepage: PageQuery
  siteConfig: SiteConfigQuery
}> = async ctx => {
  const origin = getWebsiteApiOrigin()
  const path = getWebsiteApiPath()
  const endpoint = `${origin}${path}`

  const sdk = createGraphqlRequestSdk(new URL(endpoint))

  const page = await sdk.Page({
    slug: '/'
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
      homepage: page,
      siteConfig: siteSettings
    },
    revalidate: DEFAULT_REVALIDATE
  }
}

export default function Homepage (props: { homepage: PageQuery
  siteConfig: SiteConfigQuery }): JSX.Element {
  const pageData = props.homepage.allPage[0]

  const router = useRouter()
  if (router.isFallback) {
    return <p>Loading</p>
  }

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
