import React from 'react'
import { GetStaticProps } from 'next'

import { DEFAULT_NOT_FOUND_REVALIDATE, DEFAULT_REVALIDATE } from '@constants/revalidate'

import Metatags from '@components/molecules/Metatags/Component'
import { Header, Maybe, ProjectQuery, NewsQuery, PageQuery, SiteConfigQuery } from '@generated/graphql-request'
import { getWebsiteApiOrigin, getWebsiteApiPath } from '@misc/environments'
import { createGraphqlRequestSdk } from '@misc/graphql-request-sdk'
import { useRouter } from 'next/router'
import { hasValue } from '@misc/helpers'
import { BlockMapper } from '@components/molecules/BlockMapper/Component'

export const getStaticProps: GetStaticProps<{
  homepage: PageQuery
  siteConfig: SiteConfigQuery
  header: Header
  news?: NewsQuery | null
  projects?: ProjectQuery | null
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

  let news: NewsQuery | null = null;
  const hasRecentNews = page.allPage[0].blocks.filter((block: any) => block._type ==='newsOverview' && block.newsType === 'recent').length > 0;
  if(hasRecentNews){
    news = await sdk.RecentNews()
  }

  const hasAllNews = page.allPage[0].blocks.filter((block: any) => block._type ==='newsOverview' && block.newsType === 'all').length > 0;
  if(hasAllNews){
    news = await sdk.AllNews()
  }


  console.log(page.allPage[0].blocks)

  let projects: ProjectQuery | null = null;
  const hasRecentProjects = page.allPage[0].blocks.filter((block: any) => block._type ==='projectOverview' && block.projectsType === 'recent').length > 0;
  if(hasRecentProjects){
    projects = await sdk.RecentProjects()
  }

  const hasAllProjects = page.allPage[0].blocks.filter((block: any) => block._type ==='projectOverview' && block.projectsType === 'all').length > 0;
  if(hasAllProjects){
    projects = await sdk.AllProjects()
  }

  return {
    props: {
      homepage: page,
      siteConfig: siteSettings,
      header: page.allPage[0].header,
      news: news,
      projects: projects
    },
    revalidate: DEFAULT_REVALIDATE
  }
}

export default function Homepage(props: {
  homepage: PageQuery
  siteConfig: SiteConfigQuery,
  header: Header,
  news?: NewsQuery | null,
  projects?: ProjectQuery | null
}): JSX.Element {
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
 
      {hasValue(pageData?.blocks) && pageData?.blocks.map((block: any) => {
        if (!hasValue(block)) return null
        return (<BlockMapper siteConfig={props.siteConfig} key={block._key} block={block} news={props.news} projects={props.projects} />)
      })}
    </>
  )
}
