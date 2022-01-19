import React from 'react'
import gridStyle from '@components/atoms/Grid/styles.module.css'
import style from './styles.module.css'
import { TeamCarousel } from '@generated/graphql-request'
import clsx from 'clsx'
import { Image } from '@components/atoms/Image/Component'

interface Props {
  block: TeamCarousel
}

export default function TeamCarouselBlock (props: Props): JSX.Element {
  return (
    <section>
      <div className={gridStyle.grid}>
        <div className={clsx(gridStyle.grid, gridStyle.noPadding, style.wrapper)}>

          {props.block?.people?.map((person, idx) => {
            return (
              <div key={`${idx}_people`} className={style.col}>

                <div>
                  <Image className={style.image} src={person?.image?.asset?.url ?? ''} alt={person?.image?.asset?.altText ?? ''} objectFit='cover' objectPosition='center center' layout='responsive' width='300' height='200' />
                </div>
                <h3>{person?.name}</h3><p>{person?.roles}</p>

              </div>
            )
          })}

        </div>
      </div>
    </section>
  )
}
