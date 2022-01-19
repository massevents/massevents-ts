import React from 'react'
import gridStyle from '@components/atoms/Grid/styles.module.css'
import style from './styles.module.css'
import { ImageSection } from '@generated/graphql-request'
import { Image } from '@components/atoms/Image/Component'
import InternalOrExternalLink from '@lib/link/Component'

interface Props {
  block: ImageSection
}

export default function ImageBanner (props: Props): JSX.Element {
  return (
    <section>
      <div className={gridStyle.grid}>
        <InternalOrExternalLink href={props.block.link?.linkType === 'external' ? props.block.link?.externalLink?.url ?? '' : props.block.link?.internalLink?.slug?.current ?? ''} className={style.wrapper} style={{ paddingTop: `calc(100% / ${props.block.image?.asset?.metadata?.dimensions?.aspectRatio ?? ''})` }}>
          <Image
            src={props.block.image?.asset?.url ?? ''}
            alt={props.block.image?.asset?.altText ?? ''}
            objectFit='contain'
            objectPosition='center center'
            layout='fill'
          />
        </InternalOrExternalLink>
      </div>
    </section>
  )
}
