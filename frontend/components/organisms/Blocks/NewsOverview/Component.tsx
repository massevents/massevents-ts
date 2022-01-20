import React from 'react'
import gridStyle from '@components/atoms/Grid/styles.module.css'
import { NewsOverview, NewsQuery } from '@generated/graphql-request'
import { Button } from '@components/atoms/Button/Component'
import clsx from 'clsx'
import style from './styles.module.css'
import ReactMarkdown from 'react-markdown'
import { Image } from '@components/atoms/Image/Component'
import { hasValue } from '@misc/helpers'

interface Props {
  block: NewsOverview
  news?: NewsQuery | null
}

export default function NewsOverviewComponent (props: Props): JSX.Element {
  const news = props.block?.newsType === 'news' ? props.block?.news : props.news?.allNews

  return (
    <section>
      <div className={gridStyle.grid}>
        <div className={clsx(gridStyle.grid, gridStyle.noPadding, style.wrapper)}>
          <div className={style.titleBar}>
            <p>{props.block?.subtitle}</p>
            <h2>{props.block?.title}</h2>
          </div>

          {hasValue(news) && news.length > 0 && news?.map((newsItem, idx) => (

            <div key={`${idx}`} className={clsx(gridStyle.grid, gridStyle.noPadding, style.news)}>
              <div className={style.image}>
                <div className={style.imageWrapper}>

                  <Image
                    src={newsItem?.Teaser?.imageSrc?.asset?.url ?? ''}
                    alt={newsItem?.Teaser?.imageSrc?.asset?.altText ?? ''}
                    objectFit='cover'
                    objectPosition='center center'
                    layout='fill'
                  />

                </div>
              </div>
              <div className={style.content}>

                <h3>{newsItem?.Teaser?.title}</h3>
                <ReactMarkdown>{newsItem?.Teaser?.description ?? ''}</ReactMarkdown>
                <Button as='link' href={newsItem?.slug?.current ?? ''} title={newsItem?.Teaser?.title ?? ''}>
                  Lees meer
                </Button>
              </div>
            </div>

          ))}

        </div>

        <div className={style.buttonBar}>
          {hasValue(props.block?.button_enable) && props.block?.button_enable && (
            <Button as='link' href={props.block?.button_url?.slug?.current ?? ''} title={props.block?.button_label ?? ''}>
              {props.block?.button_label ?? ''}
            </Button>
          )}
        </div>
      </div>
    </section>
  )
}
