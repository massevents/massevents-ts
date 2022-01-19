import React from 'react'
import gridStyle from '@components/atoms/Grid/styles.module.css'
import style from './styles.module.css'
import { Header } from '@generated/graphql-request'
import clsx from 'clsx'
import ReactPlayer from 'react-player'
import { Shape } from '@components/atoms/Shape/Component'

import { Image } from '@components/atoms/Image/Component'
import { City } from '@components/atoms/Graphic/Component'

interface Props {
  header: Header
}

export default function HeaderComponent (props: Props): JSX.Element {
  // const router = useRouter()

  const [loaded, setLoaded] = React.useState<boolean>(false)

  const videoUrl = `https://www.youtube.com/embed/${props.header?.videoId ?? ''}`

  return props.header?.headerType === 'city'
    ? (<div className={style.city}><City /></div>) : (
      <section>
        <div className={gridStyle.grid}>
          <div className={style.videoWrapper}>

            <div className={style.video}>
              <div className={style.shape}>
                <Shape />
              </div>
              <div className={style.overlay} />
              <div className={style.overlaySmall} />
              {props.header?.headerType === 'video' && (
                <div className={style.videoElement}>
                  <ReactPlayer
                    height='100%'
                    width='100%'
                    muted
                    playing
                    loop
                    onStart={() => setLoaded(true)}
                    url={videoUrl}
                    config={{
                      youtube: {
                        playerVars: { showinfo: 0, controls: 0, disablekb: 1, modestbranding: 1, start: props.header.delay ?? 0 }
                      }
                    }}
                  />
                </div>)}

              {props.header?.headerType === 'image' && (<Image src={props.header?.imageSrc?.asset?.url ?? ''} layout='fill' objectFit='cover' objectPosition='center center' />)}

              {props.header?.headerType === 'video' && (
                <div className={clsx(style.overlayLoading, loaded && style.overlayLoadingLoaded)}>
                  <div style={{ transitionDelay: '150ms' }} />
                  <div style={{ transitionDelay: '300ms' }} />
                  <div style={{ transitionDelay: '450ms' }} />
                  <div style={{ transitionDelay: '600ms' }} />
                  <div style={{ transitionDelay: '750ms' }} />
                </div>)}

              <div className={style.titleWrapper}>
                <div className={gridStyle.grid}>
                  <div className={style.title}>
                    <p>{props.header?.subtitle}</p>
                    <h3>{props.header?.title}</h3>
                  </div>
                </div>
              </div>

            </div>

            {/* <Styled.Video>

          <Styled.OverlayLoading className={isLoaded ? `isLoaded` : ``}>
            {panels}
          </Styled.OverlayLoading>
            <Styled.Section>
              <Title
                size={TitleEnum.Size.big}
                color={HeadingEnum.Color.light}
                heading={headingTitle || "Fill in a header"}
                subheading={headingSubTitle || "Fill in a subtitle"}
              />
            </Styled.Section>
          )}
        </Styled.Video> */}
          </div>
        </div>
      </section>
    )
}
