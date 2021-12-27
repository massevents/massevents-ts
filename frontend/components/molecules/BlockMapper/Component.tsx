import React from 'react'

export type PossibleBlock = any
export type PossibleColors = any

interface Props {
  block: PossibleBlock
  color: PossibleColors
}

export const BlockMapper = (props: Props): JSX.Element => {
  const { block } = props

  switch (block._type) {
    default:
      return (<p>Some component named <b>{block._type}</b> should be displayed here.</p>)
  }
}
