import React from 'react'
import gridStyle from '@components/atoms/Grid/styles.module.css'
import style from './styles.module.css'
import clsx from 'clsx'
import { Lines, SkewBlock } from '@components/atoms/Graphic/Component'
import { Button, PossibleTypes } from '@components/atoms/Button/Component'
import { ButtonFragment, HeroFragment } from '@generated/graphql-request'
import { PossibleColors } from '@components/molecules/BlockMapper/Component'
import BlockContent from '@sanity/block-content-to-react'
import { hasValue } from '@misc/helpers'
import { LazyMotion, domAnimation, m } from 'framer-motion'

export default function Hero (props: HeroFragment & { color: PossibleColors }): JSX.Element {
  const titleObject = props.title?.split(props.coloredPart ?? '') ?? [props.title]

  return (
    <LazyMotion features={domAnimation}>
      <div className={style.hero}>
        <div className={style.lines}>
          <Lines />
        </div>
        <m.div
          className={style.heroSkew}
          initial={{ scaleY: '0', y: 1 }}
          animate={{
            scaleY: '100%', y: 1
          }}
          transition={{
            duration: 0.3,
            ease: 'easeOut'
          }}
        >
          <div>
            <SkewBlock />
          </div>
        </m.div>

        <div className={clsx(gridStyle.grid, style.grid)}>
          <div className={style.heroWrapper}>
            <h1>
              {titleObject[0]}
              <span className={clsx(
                props.color === 'pink' && 'span-pink',
                props.color === 'green' && 'span-green',
                props.color === 'red' && 'span-red',
                props.color === 'blue' && 'span-blue'
              )}
              >{props.coloredPart}
              </span>
              {titleObject[1]}
              <span className={clsx(
                props.color === 'pink' && 'span-pink',
                props.color === 'green' && 'span-green',
                props.color === 'red' && 'span-red',
                props.color === 'blue' && 'span-blue'
              )}
              >.
              </span>
            </h1>

            <BlockContent blocks={props.descriptionRaw} />

            <div className={style.heroButtons}>
              {hasValue(props.buttons) && props.buttons?.map((button: ButtonFragment | null) => {
                if (!hasValue(button)) return null
                return (<Button key={button._key} as='link' href={button.path ?? '/'} color={button.buttonType as PossibleTypes}>{button.label}</Button>)
              })}
            </div>
          </div>
        </div>
      </div>

    </LazyMotion>
  )
}
