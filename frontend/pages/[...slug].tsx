import React from 'react'
import { GetStaticProps, GetStaticPaths } from 'next'

import { DEFAULT_NOT_FOUND_REVALIDATE, DEFAULT_REVALIDATE } from '@constants/revalidate'

import Metatags from '@components/molecules/Metatags/Component'
import { Header, NewsQuery, PageQuery, ProjectQuery, SiteConfigQuery } from '@generated/graphql-request'
import { getWebsiteApiOrigin, getWebsiteApiPath } from '@misc/environments'
import { createGraphqlRequestSdk } from '@misc/graphql-request-sdk'
import { hasValue } from '@misc/helpers'
import { useRouter } from 'next/router'
import { BlockMapper } from '@components/molecules/BlockMapper/Component'

export const getStaticPaths: GetStaticPaths = async () => {
  return {
    paths: [],
    fallback: true
  }
}

export const getStaticProps: GetStaticProps<{
  page: PageQuery['allPage']
  siteConfig: SiteConfigQuery
  header: Header
  news?: NewsQuery | null
  projects?: ProjectQuery | null
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

  let news: NewsQuery | null = null
  let projects: ProjectQuery | null = null

  if (hasValue(page.allPage[0].blocks)) {
    const hasRecentNews = page.allPage[0].blocks.filter((block: any) => block._type === 'newsOverview' && block.newsType === 'recent').length > 0
    if (hasRecentNews) {
      news = await sdk.RecentNews()
    }

    const hasAllNews = page.allPage[0].blocks.filter((block: any) => block._type === 'newsOverview' && block.newsType === 'all').length > 0
    if (hasAllNews) {
      news = await sdk.AllNews()
    }

    const hasRecentProjects = page.allPage[0].blocks.filter((block: any) => block._type === 'projectOverview' && block.projectsType === 'recent').length > 0
    if (hasRecentProjects) {
      projects = await sdk.RecentProjects()
    }

    const hasAllProjects = page.allPage[0].blocks.filter((block: any) => block._type === 'projectOverview' && block.projectsType === 'all').length > 0
    if (hasAllProjects) {
      projects = await sdk.AllProjects()
    }
  }

  return {
    props: {
      page: page.allPage,
      siteConfig: siteSettings,
      header: page.allPage[0].header,
      news: news,
      projects: projects
    },
    revalidate: DEFAULT_REVALIDATE
  }
}

export default function Page (
  props: {
    page: PageQuery['allPage']
    siteConfig: SiteConfigQuery
    header: Header
    news?: NewsQuery | null
    projects?: ProjectQuery | null
  }
): JSX.Element {
  const router = useRouter()

  if (router.isFallback) {
    return <p>Loading</p>
  }

  const pageData = props.page[0]

  return (
    <>
      {/*
    <pre>
      {JSON.stringify(props, null, 2)}
    </pre> */}
      <Metatags
        {...{
          title: pageData.seo?.title ?? '',
          description: pageData.seo?.description ?? ''
        }}
      />

      {hasValue(pageData?.blocks) && pageData?.blocks.map((block: any) => {
        if (!hasValue(block)) return null
        return (<BlockMapper siteConfig={props.siteConfig} key={block._key} block={block} news={props.news} projects={props.projects} />)
      })}

    </>
  )
}
