import React from 'react'
import gridStyle from '@components/atoms/Grid/styles.module.css'
import style from './styles.module.css'
import { Project } from '@generated/graphql-request'
import ReactMarkdown from 'react-markdown'
import clsx from 'clsx'
import { Image } from '@components/atoms/Image/Component'
import InternalOrExternalLink from '@lib/link/Component'
import SocialMedia from '@components/molecules/SocialMedia/Component'
import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/css'
import { hasValue } from '@misc/helpers'
import SwiperCore, { Autoplay } from 'swiper';

SwiperCore.use([Autoplay]);

interface Props {
  project: Project
}

export default function ProjectDetail(props: Props): JSX.Element {
  console.log(props)
  return (
    <section>
      <div className={gridStyle.grid}>
        <div className={clsx(gridStyle.grid, gridStyle.noPadding, style.wrapper)}>

          <SocialMedia {...props} />

          {hasValue(props.project?.logo) && hasValue(props.project?.logo?.asset) && (
            <div className={style.logoImg}>
              <Image src={props.project?.logo?.asset?.url ?? ''} alt={props.project?.logo?.asset?.altText ?? ''} objectFit='contain' objectPosition='center center' layout='intrinsic' width='120' height='60' />
            </div>)}

          {props.project?.projectContent?.contentType === 'custom' ? (
            <div className={style.col}>
              <ReactMarkdown>{props.project?.projectContent?.customContent ?? ''}</ReactMarkdown>

              {props.project.photoAlbum?.map(photo => {
                return (<Image key={`${photo?.asset?.url ?? ''}_projectdetail`} src={photo?.asset?.url ?? ''} alt={photo?.asset?.altText ?? ''} objectFit='cover' objectPosition='center center' layout='responsive' width='300' height='200' />)
              })}
            </div>
          ) : (
            <>
              <div className={style.leftCol}>
                <h2>{props.project?.projectContent?.shortDescriptionTitle}</h2>
                <ReactMarkdown>{props.project?.projectContent?.shortDescription ?? ''}</ReactMarkdown>
                <h2>{props.project?.projectContent?.massEventsTitle}</h2>
                <ReactMarkdown>{props.project?.projectContent?.massEvents ?? ''}</ReactMarkdown>
              </div>
              <div className={style.rightCol}>
                <div className={style.album}>
                  <Swiper
                    spaceBetween={50}
                    slidesPerView={1}
                    loop
                    autoplay={{
                      "delay": 3500
                    }}
                    onSlideChange={() => console.log('slide change')}
                    onSwiper={(swiper) => console.log(swiper)}
                  >
                    {props.project.photoAlbum?.map(photo => {
                      return (
                        <SwiperSlide key={`${photo?.asset?.url ?? ''}_photoalbum_projectoverview`}>
                          <Image src={photo?.asset?.url ?? ''} alt={photo?.asset?.altText ?? ''} objectFit='cover' objectPosition='center center' layout='responsive' width='300' height='200' />
                        </SwiperSlide>
                      )
                    })}
                  </Swiper>
                  <div className={style.albumSwipe}>
                    <img src='/images/swipe.svg' />
                  </div>
                </div>
              </div>

              {((props.project?.sponsors?.partners) != null) && props.project?.sponsors?.partners.length > 0 && (
                <div className={style.gridCol}>
                  <h2>{props.project?.sponsors?.titleSponsors}</h2>

                  {props.project?.sponsors?.partners?.map((partner, idx) => {
                    return (
                      <React.Fragment key={`${idx}_projectdetail_sponsorgroup`}>

                        <p className={style.partnersTitle}><b>{partner?.type}</b></p>
                        <ul className={style.sponsorsActivities}>

                          {partner?.sponsors?.map((sponsor, idxtwo) => {
                            return (
                              <li key={`${idxtwo}_projectdetail_sponsor`} className={clsx(partner?.sponsorType === 'text' && style.textSponsor)}>

                                {hasValue(sponsor?.url) ? (<InternalOrExternalLink href={sponsor?.url ?? ''}>

                                  {partner?.sponsorType === 'text' && sponsor?.title}

                                  {hasValue(sponsor?.logo) && hasValue(sponsor?.logo?.asset) && partner?.sponsorType !== 'text' && (
                                    <div className={style.logoImg}>
                                      {/* <pre>{JSON.stringify(props, null, 2)}</pre> */}
                                      <Image src={sponsor?.logo?.asset?.url ?? ''} alt={sponsor?.logo?.asset?.altText ?? ''} objectFit='contain' objectPosition='center center' layout='intrinsic' width='120' height='60' />
                                    </div>)}

                                </InternalOrExternalLink>) :
                                  (<>

                                    {partner?.sponsorType === 'text' && sponsor?.title}

                                    {hasValue(sponsor?.logo) && hasValue(sponsor?.logo?.asset) && partner?.sponsorType !== 'text' && (
                                      <div className={style.logoImg}>
                                        {/* <pre>{JSON.stringify(props, null, 2)}</pre> */}
                                        <Image src={sponsor?.logo?.asset?.url ?? ''} alt={sponsor?.logo?.asset?.altText ?? ''} objectFit='contain' objectPosition='center center' layout='intrinsic' width='120' height='60' />
                                      </div>)}

                                  </>)}

                              </li>
                            )
                          })}
                        </ul>
                      </React.Fragment>
                    )
                  })}
                </div>
              )}
              {((props.project?.activiteiten) != null) && (
                <div className={style.gridCol}>
                  <h2>{props.project?.activiteiten?.titleActivities}</h2>

                  <ul className={style.sponsorsActivities}>

                    {props.project?.activiteiten?.activities?.map((activity, idx) => {
                      return (<li key={`${idx}_activiteiten`} className={style.textSponsor}><p>{activity}</p></li>)
                    })}
                  </ul>
                </div>
              )}
            </>
          )}

          <SocialMedia {...props} />

        </div>

      </div>
    </section>
  )
}
