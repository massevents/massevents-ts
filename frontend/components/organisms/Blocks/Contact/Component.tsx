import React from 'react'
import gridStyle from '@components/atoms/Grid/styles.module.css'
import style from './styles.module.css'
import { Contact, SiteConfigQuery, TeamMember } from '@generated/graphql-request'
import ReactMarkdown from 'react-markdown'
import { hasValue } from '@misc/helpers'
import clsx from 'clsx'
import { Button } from '@components/atoms/Button/Component'

interface Props {
  block: Contact
  siteConfig: SiteConfigQuery
}

export default function ContactBlock (props: Props): JSX.Element {
  return (
    <section>
      <div className={gridStyle.grid}>

        <div className={clsx(gridStyle.grid, gridStyle.noPadding, style.wrapper)}>
          <div className={style.titleBar}>
            <p>{props.block.subtitle}</p>
            <h2>{props.block.title}</h2>
          </div>
          <div className={style.leftCol}>
            <ReactMarkdown>{props.block.address ?? ''}</ReactMarkdown>
            <Button as='link' href={`mailto:${props.siteConfig?.SiteConfig?.email ?? ''}`}>Stuur een bericht</Button>
          </div>
          <div className={style.rightCol}>
            {props.block.team?.map((team: TeamMember | null, idx: number) => {
              if (!hasValue(team)) return null
              return (
                <div key={`${idx}_teamMember`}>
                  <h5>{team?.name}</h5>
                  <p>{team?.roles}</p>
                  <p>
                    <a href={`mailto:${team?.email ?? ''}`} title={`Stuur een email naar ${team?.name ?? ''}`}>
                      {team?.email}
                    </a>
                  </p>
                </div>
              )
            })}
          </div>

        </div>

      </div>
    </section>
  )
}
