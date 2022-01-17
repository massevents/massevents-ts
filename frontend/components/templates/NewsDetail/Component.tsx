import React from 'react'
import gridStyle from '@components/atoms/Grid/styles.module.css'
import style from './styles.module.css'
import { Contact, News, TeamMember, TwoColQuote, TwoColTwoTitle } from '@generated/graphql-request'
import ReactMarkdown from 'react-markdown'
import { hasValue } from '@misc/helpers'
import clsx from 'clsx'
import { Image } from '@components/atoms/Image/Component'
import InternalOrExternalLink from '@lib/link/Component'
import { FacebookIcon, InstagramIcon, LinkedInIcon, SpotifyIcon } from '@components/atoms/SocialIcon/Component'
import { Button } from '@components/atoms/Button/Component'

interface Props {
  news: News
}

export default function NewsDetail(props: Props): JSX.Element {
const created = new Date(props.news._createdAt);
const updated = new Date(props.news._createdAt);

const format = (date: any) => {
  return date.toLocaleDateString("nl-NL")
}
  return (
    <section>
      <div className={gridStyle.grid}>
        <div className={style.wrapper}>

          <p className={style.author}>Geschreven door <b>{props.news.author?.name}</b> op <b>{format(created)}</b></p>

          <ReactMarkdown>{props.news.description ?? ''}</ReactMarkdown>

          <h1>TODO: add fotoalbum</h1>
          <small>Laatst gewijzigd op {format(updated)}</small>
      </div>
      </div>
    </section >
  )
}
