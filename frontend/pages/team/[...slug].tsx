import React from 'react'
import { GetStaticProps, GetStaticPaths } from 'next'

import { DEFAULT_NOT_FOUND_REVALIDATE, DEFAULT_REVALIDATE } from '@constants/revalidate'

import Metatags from '@components/molecules/Metatags/Component'
import { Header, SiteConfigQuery, TeamMemberQuery } from '@generated/graphql-request'
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
  team: TeamMemberQuery['allTeamMember']
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

  const team = await sdk.TeamMember({
    slug: `team/${slug}`
  })
  const siteSettings = await sdk.SiteConfig({ id: 'site-config' })

  if (team.allTeamMember == null) {
    return {
      notFound: true,
      revalidate: DEFAULT_NOT_FOUND_REVALIDATE
    }
  }

  return {
    props: {
      team: team.allTeamMember,
      siteConfig: siteSettings,
      header: team.allTeamMember[0].header
    },
    revalidate: DEFAULT_REVALIDATE
  }
}

export default function Page (
  props: {
    team: TeamMemberQuery['allTeamMember']
    siteConfig: SiteConfigQuery
    header: Header
  }
): JSX.Element {
  const router = useRouter()

  if (router.isFallback) {
    return <p>Loading</p>
  }
  const pageData = props.team[0]

  return (
    <>
      <Metatags
        {...{
          title: pageData.seo?.title ?? '',
          description: pageData.seo?.description ?? ''
        }}
      />

      <h1>Team member detail: {pageData.name}</h1>

      {/* {hasValue(pageData?.blocks) && pageData?.blocks.map((block: PossibleBlock | null) => {
        if (!hasValue(block)) return null
        return (<BlockMapper key={block._key} block={block} color={pageData?.color as PossibleColors} />)
      })} */}

    </>
  )
}
