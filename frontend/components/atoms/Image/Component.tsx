import React from 'react'
import NextImage, { ImageProps } from 'next/image'

export function Image (props: ImageProps): JSX.Element {
  return <NextImage {...props} />
}
