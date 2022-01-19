import React from 'react'
import gridStyle from '@components/atoms/Grid/styles.module.css'
import style from './styles.module.css'
import { TwoColQuote } from '@generated/graphql-request'
import ReactMarkdown from 'react-markdown'
import clsx from 'clsx'

interface Props {
  block: TwoColQuote
}

export default function TwoColQuoteBlock (props: Props): JSX.Element {
  return (
    <section>
      <div className={gridStyle.grid}>
        <div className={clsx(gridStyle.grid, gridStyle.noPadding, style.wrapper)}>
          <div className={style.titleBar}>
            <p>{props.block.subtitle}</p>
            <h2>{props.block.title}</h2>
          </div>
          <div className={style.leftCol}>
            <ReactMarkdown>{props.block.leftCol ?? ''}</ReactMarkdown>
          </div>
          <div className={style.rightCol}>
            <ReactMarkdown>{props.block.rightCol ?? ''}</ReactMarkdown>
          </div>
          <div className={style.quote}>
            <blockquote>{props.block.quote ?? ''}</blockquote>
          </div>
        </div>
      </div>
    </section>
  )
}
