import React from 'react'
import HeroComponent from '@components/organisms/Hero/Component'
import { Hero, Masonry } from '@generated/graphql-request'
import MasonryComponent from '@components/organisms/Masonry/Component'

export type PossibleBlock = Hero | Masonry
export type PossibleColors = 'pink' | 'green' | 'red' | 'blue'

interface Props {
  block: PossibleBlock
  color: PossibleColors
}

export const BlockMapper = (props: Props): JSX.Element => {
  const { block, color } = props

  switch (block._type) {
    case 'hero':
      return (<HeroComponent {...block as Hero} color={color} key={block._key} />)
    case 'masonry':
      return (<MasonryComponent {...block as Masonry} color={color} key={block._key} />)
    default:
      return (<p>Some component named <b>{block._type}</b> should be displayed here.</p>)
  }
}
