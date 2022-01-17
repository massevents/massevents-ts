import ContactBlock from '@components/organisms/Blocks/Contact/Component'
import TwoColQuoteBlock from '@components/organisms/Blocks/TwoColQuote/Component'
import TwoColTwoTitleBlock from '@components/organisms/Blocks/TwoColTwoTitle/Component'
import OneColOneTitleBlock from '@components/organisms/Blocks/OneColOneTitle/Component'
import ImageBanner from '@components/organisms/Blocks/ImageBanner/Component'
import NewsOverviewComponent from '@components/organisms/Blocks/NewsOverview/Component'
import ProjectOverviewComponent from '@components/organisms/Blocks/ProjectOverview/Component'
import TeamCarouselBlock from '@components/organisms/Blocks/TeamCarousel/Component'


import React from 'react'
import { NewsQuery, ProjectQuery, SiteConfigQuery } from '@generated/graphql-request'


interface Props {
  siteConfig: SiteConfigQuery,
  block: any,
  news?: NewsQuery | null
  projects?: ProjectQuery | null
}

export const BlockMapper = (props: Props): JSX.Element => {
  const { block, siteConfig } = props

  switch (block._type) {
    case 'contact':
      return (<ContactBlock siteConfig={siteConfig} block={block} />)
    case 'twoColQuote':
      return (<TwoColQuoteBlock block={block} />)
    case 'twoColTwoTitle':
      return (<TwoColTwoTitleBlock block={block} />)
    case 'oneColOneTitle':
      return (<OneColOneTitleBlock block={block} />)
    case 'imageSection':
      return (<ImageBanner block={block} />)
    case 'newsOverview':
      return (<NewsOverviewComponent block={block} news={props.news} />)
    case 'projectOverview':
      return (<ProjectOverviewComponent block={block} projects={props.projects} />)
    case 'teamCarousel':
      return (<TeamCarouselBlock block={block} />)


    default:
      return (<><p>Some component named <b>{block._type}</b> should be displayed here.</p>
        <pre>{JSON.stringify(block, null, 2)}</pre>
      </>)
  }
}
