import React from 'react'
import gridStyle from '@components/atoms/Grid/styles.module.css'
import { ProjectOverview, ProjectQuery } from '@generated/graphql-request'
import { Button } from '@components/atoms/Button/Component'
import clsx from 'clsx'
import style from './styles.module.css'
import ReactMarkdown from 'react-markdown'
import { Image } from '@components/atoms/Image/Component'
import { hasValue } from '@misc/helpers'

interface Props {
  block: ProjectOverview
  projects?: ProjectQuery | null
}

export default function ProjectOverviewComponent (props: Props): JSX.Element {
  const projects = props.block?.projectsType === 'projects' ? props.block?.projects : props.projects?.allProject

  return (
    <section>
      <div className={gridStyle.grid}>
        <div className={clsx(gridStyle.grid, gridStyle.noPadding, style.wrapper)}>
          <div className={style.titleBar}>
            <p>{props.block?.headingSubTitle}</p>
            <h2>{props.block?.headingTitle}</h2>
          </div>

          {hasValue(projects) && props.block?.format === 'projectblock' && projects.length > 0 && projects?.map((projectItem, idx) => (

            <div key={`${idx}_projectBlock`} className={clsx(gridStyle.grid, gridStyle.noPadding, style.project)}>

              <div className={clsx(style.image, idx % 2 === 0 && style.imageReversed)}>
                <div className={clsx(style.imageWrapper, idx % 2 === 0 && style.imageWrapperReversed)}>
                  <a href={projectItem?.slug?.current ?? ''}>
                    <Image
                      src={projectItem?.teaser?.imageSrc?.asset?.url ?? ''}
                      alt={projectItem?.teaser?.imageSrc?.asset?.altText ?? ''}
                      objectFit='cover'
                      objectPosition='center center'
                      layout='fill'
                    />
                  </a>

                </div>
              </div>
              <div className={clsx(style.content, idx % 2 === 0 && style.contentReversed)}>

                {hasValue(projectItem?.logo) && (
                  <a href={projectItem?.slug?.current ?? ''}>
                    <div className={style.logoImg}>
                      <Image src={projectItem?.logo?.asset?.url ?? ''} alt={projectItem?.logo?.asset?.altText ?? ''} objectFit='contain' objectPosition='center center' layout='intrinsic' width='120' height='60' />
                    </div>
                  </a>
                )}

                <a href={projectItem?.slug?.current ?? ''}>
                  <h3 className={clsx(!hasValue(projectItem?.logo) && style.titleMargin)}>{projectItem?.teaser?.title}</h3>
                  <ReactMarkdown className={style.projectLink}>{projectItem?.teaser?.description ?? ''}</ReactMarkdown>
                </a>

                <Button as='link' href={projectItem?.slug?.current ?? ''} title={projectItem?.teaser?.title ?? ''}>
                  Lees meer
                </Button>
              </div>
            </div>
          ))}

          {hasValue(projects) && props.block?.format === 'poster' && projects.length > 0 && projects?.map((projectItem, idx) => (

            <div key={`${idx}_projectBlock_Poster`} className={style.projectPoster}>
              <a href={projectItem?.slug?.current ?? ''}>
                <div className={style.imagePoster}>
                  <Image
                    src={projectItem?.poster?.asset?.url ?? ''}
                    alt={projectItem?.poster?.asset?.altText ?? ''}
                    objectFit='cover'
                    objectPosition='center center'
                    layout='fill'
                  />
                </div>
                <div className={style.content}>

                  <p><b>{projectItem?.teaser?.title}</b></p>

                </div>
              </a>
            </div>
          ))}

        </div>
        {hasValue(props.block?.button_enable) && props.block?.button_enable && (
          <div className={style.buttonBar}>
            <Button color='blank' as='link' href={props.block?.button_url?.slug?.current ?? ''} title={props.block?.button_label ?? ''}>
              {props.block?.button_label ?? ''}
            </Button>
          </div>
        )}
      </div>
    </section>
  )
}
