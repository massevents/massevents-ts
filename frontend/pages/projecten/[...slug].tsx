import React from 'react'
import { GetStaticProps, GetStaticPaths } from 'next'

import { DEFAULT_NOT_FOUND_REVALIDATE, DEFAULT_REVALIDATE } from '@constants/revalidate'

import Metatags from '@components/molecules/Metatags/Component'
import { Header, ProjectQuery, SiteConfigQuery } from '@generated/graphql-request'
import { getWebsiteApiOrigin, getWebsiteApiPath } from '@misc/environments'
import { createGraphqlRequestSdk } from '@misc/graphql-request-sdk'
import { hasValue } from '@misc/helpers'
import { useRouter } from 'next/router'
import ProjectDetail from '@components/templates/ProjectDetail/Component'

export const getStaticPaths: GetStaticPaths = async () => {
  return {
    paths: [],
    fallback: true
  }
}

export const getStaticProps: GetStaticProps<{
  project: ProjectQuery['allProject']
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

  const project = await sdk.Project({
    slug: `projecten/${slug}`
  })
  const siteSettings = await sdk.SiteConfig({ id: 'site-config' })

  if (project.allProject == null) {
    return {
      notFound: true,
      revalidate: DEFAULT_NOT_FOUND_REVALIDATE
    }
  }

  return {
    props: {
      project: project.allProject,
      siteConfig: siteSettings,
      header: project.allProject[0].header
    },
    revalidate: DEFAULT_REVALIDATE
  }
}

export default function Page(
  props: {
    project: ProjectQuery['allProject']
    siteConfig: SiteConfigQuery
    header: Header
  }
): JSX.Element {
  const router = useRouter()

  if (router.isFallback) {
    return <p>Loading</p>
  }
  const pageData = props.project[0]

  return (
    <>
      <Metatags
        {...{
          title: pageData.seo?.title ?? '',
          description: pageData.seo?.description ?? '',
          og_image: pageData.seo?.openGraphImage?.asset?.url ?? ''
        }}
      />

      <ProjectDetail project={pageData} />

    </>
  )
}
