import React from 'react'
import gridStyle from '@components/atoms/Grid/styles.module.css'
import style from './styles.module.css'
import { TwoColTwoTitle } from '@generated/graphql-request'
import ReactMarkdown from 'react-markdown'
import clsx from 'clsx'

interface Props {
  block: TwoColTwoTitle
}

export default function TwoColTwoTitleBlock (props: Props): JSX.Element {
  return (
    <section>
      <div className={gridStyle.grid}>
        <div className={clsx(gridStyle.grid, gridStyle.noPadding, style.wrapper)}>
          <div className={style.leftCol}>
            <p>{props.block.leftSubtitle}</p>
            <h2>{props.block.leftTitle}</h2>

          </div>
          <div className={style.rightCol}>
            <p>{props.block.rightSubtitle}</p>
            <h2>{props.block.rightTitle}</h2>
          </div>
          <div className={style.leftCol}>

            <ReactMarkdown>{props.block.leftCol ?? ''}</ReactMarkdown>
          </div>
          <div className={style.rightCol}>
            <ReactMarkdown>{props.block.rightCol ?? ''}</ReactMarkdown>
          </div>
        </div>
      </div>
    </section>
  )
}
