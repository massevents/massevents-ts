import React from 'react'
import gridStyle from '@components/atoms/Grid/styles.module.css'
import style from './styles.module.css'
import clsx from 'clsx'
import { MasonryFragment } from '@generated/graphql-request'
import { PossibleColors } from '@components/molecules/BlockMapper/Component'
import Image from 'next/image'

export default function Masonry (props: MasonryFragment & { color: PossibleColors}): JSX.Element {
  return (
    <div className={clsx(gridStyle.grid, style.masonry)}>
      <div className={style.grid}>
        <div className={clsx(
          style.bgBlock,
          props.color === 'pink' && style.bgBlockPink,
          props.color === 'green' && style.bgBlockGreen,
          props.color === 'red' && style.bgBlockRed,
          props.color === 'blue' && style.bgBlockBlue
        )}
        >
          <div className={style.bgBlockWrapper} />
        </div>
        <div className={style.leftPhoto}>
          <div className={style.leftPhotoWrapper}>
            <Image src={props.photoLeft?.asset?.url ?? ''} alt={props.photoLeft?.asset?.altText ?? ''} layout='fill' objectFit='cover' objectPosition='center center' />
          </div>
        </div>
        <div className={style.rightCol}>
          <div className={style.rightTopPhoto}>
            <div className={style.rightTopPhotoWrapper}>
              <Image src={props.photoRightTop?.asset?.url ?? ''} alt={props.photoRightTop?.asset?.altText ?? ''} layout='fill' objectFit='cover' objectPosition='center center' />
            </div>
          </div>
          <div className={style.rightBottomPhoto}>
            <div className={style.rightBottomPhotoWrapper}>
              <Image src={props.photoRightBottom?.asset?.url ?? ''} alt={props.photoRightBottom?.asset?.altText ?? ''} layout='fill' objectFit='cover' objectPosition='center center' />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
