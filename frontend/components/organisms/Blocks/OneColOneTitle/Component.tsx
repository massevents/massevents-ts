import React from 'react'
import gridStyle from '@components/atoms/Grid/styles.module.css'
import style from './styles.module.css'
import { Contact, TeamMember, OneColOneTitle } from '@generated/graphql-request'
import ReactMarkdown from 'react-markdown'
import { hasValue } from '@misc/helpers'
import clsx from 'clsx'

interface Props {
  block: OneColOneTitle
}

export default function OneColOneTitleBlock(props: Props): JSX.Element {

  return (
    <section>
      <div className={gridStyle.grid}>
        <div className={clsx(gridStyle.grid, gridStyle.noPadding, style.wrapper)}>
          <div className={style.col}>
            <p>{props.block.subtitle}</p>
            <h2>{props.block.title}</h2>
            </div>
            <div className={style.col}>
            <ReactMarkdown>{props.block.col ?? ''}</ReactMarkdown>
          </div>
        </div>
      </div>
    </section >
  )
}
