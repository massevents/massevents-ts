import React from 'react'
import { GetStaticProps } from 'next'

import { DEFAULT_NOT_FOUND_REVALIDATE, DEFAULT_REVALIDATE } from '@constants/revalidate'

import Metatags from '@components/molecules/Metatags/Component'
import { Button } from '@components/atoms/Button/Component'
import MainNavigation from '@components/organisms/MainNavigation/Component'
import Footer from '@components/organisms/Footer/Component'
import { HomepageQuery } from '@generated/graphql-request'
import { getWebsiteApiOrigin, getWebsiteApiPath } from '@misc/environments'
import { createGraphqlRequestSdk } from '@misc/graphql-request-sdk'
import { BlockMapper, PossibleBlock, PossibleColors } from '@components/molecules/BlockMapper/Component'
import { hasValue } from '@misc/helpers'
import { useRouter } from 'next/router'

export const getStaticProps: GetStaticProps<{
  homepage: HomepageQuery
}> = async () => {
  const origin = getWebsiteApiOrigin()
  const path = getWebsiteApiPath()
  const endpoint = `${origin}${path}`

  const sdk = createGraphqlRequestSdk(new URL(endpoint))

  const homepage = await sdk.Homepage()

  if (homepage.Page == null) {
    return {
      notFound: true,
      revalidate: DEFAULT_NOT_FOUND_REVALIDATE
    }
  }

  return {
    props: {
      homepage: homepage
    },
    revalidate: DEFAULT_REVALIDATE
  }
}

export default function Homepage (props: { homepage: HomepageQuery }): JSX.Element {
  const pageData = props.homepage.Page
  const router = useRouter()
  if (router.isFallback) {
    return <p>Loading</p>
  }

  return (
    <>
      <Metatags
        {...{
          title: 'Page title',
          description: 'Page description',
          hrefLangLinks: [{ language: 'en', url: 'https://some.url/en' }]
        }}
      />
      <MainNavigation />

      {hasValue(pageData?.blocks) && pageData?.blocks.map((block: PossibleBlock | null) => {
        if (!hasValue(block)) return null
        return (<BlockMapper key={block._key} block={block} color={pageData?.color as PossibleColors} />)
      })}

      <h1>App ontwikkelaar van iOS & Android apps .</h1>
      <h2>App ontwikkelaar van iOS & Android apps .</h2>
      <h3>App ontwikkelaar van iOS & Android apps .</h3>
      <h4>App ontwikkelaar van iOS & Android apps .</h4>
      <h5>App ontwikkelaar van iOS & Android apps .</h5>
      <p>App ontwikkelaar van iOS & Android apps .</p>
      <blockquote>App ontwikkelaar van iOS & Android apps .</blockquote>
      <p>App <a href='#'>ontwikkelaar</a> van iOS & Android apps .</p>
      <label>Label</label>
      <Button as='button'>Text</Button>

      <div>
        <div style={{ backgroundColor: 'hsl(0, 100%, 70%)', color: '#fff', width: 'var(--grid-1x)' }}>1</div>
        <div style={{ backgroundColor: 'hsl(0, 100%, 64%)', color: '#fff', width: 'var(--grid-2x)' }}>2</div>
        <div style={{ backgroundColor: 'hsl(0, 100%, 58%)', color: '#fff', width: 'var(--grid-3x)' }}>3</div>
        <div style={{ backgroundColor: 'hsl(0, 100%, 52%)', color: '#fff', width: 'var(--grid-4x)' }}>4</div>
        <div style={{ backgroundColor: 'hsl(0, 100%, 46%)', color: '#fff', width: 'var(--grid-5x)' }}>5</div>
        <div style={{ backgroundColor: 'hsl(0, 100%, 40%)', color: '#fff', width: 'var(--grid-6x)' }}>6</div>
        <div style={{ backgroundColor: 'hsl(0, 100%, 34%)', color: '#fff', width: 'var(--grid-7x)' }}>7</div>
        <div style={{ backgroundColor: 'hsl(0, 100%, 28%)', color: '#fff', width: 'var(--grid-8x)' }}>8</div>
        <div style={{ backgroundColor: 'hsl(0, 100%, 22%)', color: '#fff', width: 'var(--grid-9x)' }}>9</div>
        <div style={{ backgroundColor: 'hsl(0, 100%, 16%)', color: '#fff', width: 'var(--grid-10x)' }}>10</div>
        <div style={{ backgroundColor: 'hsl(0, 100%, 10%)', color: '#fff', width: 'var(--grid-11x)' }}>11</div>
        <div style={{ backgroundColor: 'hsl(0, 100%, 4%)', color: '#fff', width: 'var(--grid-12x)' }}>12</div>
      </div>

      <Footer />
    </>
  )
}
