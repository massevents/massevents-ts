import React from 'react'
import gridStyle from '@components/atoms/Grid/styles.module.css'
import style from './styles.module.css'
import { News } from '@generated/graphql-request'
import ReactMarkdown from 'react-markdown'
import { hasValue } from '@misc/helpers'
import { Image } from '@components/atoms/Image/Component'

import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/css'
interface Props {
  news: News
}

export default function NewsDetail (props: Props): JSX.Element {
  const created = new Date(props.news._createdAt)
  const updated = new Date(props.news._createdAt)

  const format = (date: any): string => {
    return date.toLocaleDateString('nl-NL')
  }
  return (
    <section>
      <div className={gridStyle.grid}>
        <div className={style.wrapper}>

          <p className={style.author}>Geschreven door <b>{props.news.author?.name}</b> op <b>{format(created)}</b></p>

          <ReactMarkdown>{props.news.description ?? ''}</ReactMarkdown>

          {hasValue(props.news?.photoAlbum) && (
            <div className={style.album}>
              <Swiper
                spaceBetween={30}
                slidesPerView={2}
                onSlideChange={() => console.log('slide change')}
                onSwiper={(swiper) => console.log(swiper)}
              >
                {props.news?.photoAlbum?.map(photo => {
                  return (<SwiperSlide key={`${photo?.asset?.url ?? ''}_newsdetail`}><Image src={photo?.asset?.url ?? ''} alt={photo?.asset?.altText ?? ''} objectFit='cover' objectPosition='center center' layout='responsive' width='300' height='200' /></SwiperSlide>)
                })}
              </Swiper>
              <div className={style.albumSwipe}>
                <img src='/images/swipe.svg' />
              </div>
            </div>
          )}

          <small>Laatst gewijzigd op {format(updated)}</small>
        </div>
      </div>
    </section>
  )
}
