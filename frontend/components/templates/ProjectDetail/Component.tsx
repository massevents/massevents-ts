import React from 'react'
import gridStyle from '@components/atoms/Grid/styles.module.css'
import style from './styles.module.css'
import { Contact, Project, TeamMember, TwoColQuote, TwoColTwoTitle } from '@generated/graphql-request'
import ReactMarkdown from 'react-markdown'
import { hasValue } from '@misc/helpers'
import clsx from 'clsx'
import { Image } from '@components/atoms/Image/Component'
import InternalOrExternalLink from '@lib/link/Component'
import { FacebookIcon, InstagramIcon, LinkedInIcon, SpotifyIcon } from '@components/atoms/SocialIcon/Component'
import { Button } from '@components/atoms/Button/Component'

interface Props {
  project: Project
}

export default function ProjectDetail(props: Props): JSX.Element {

  return (
    <section>
      <div className={gridStyle.grid}>
        <div className={clsx(gridStyle.grid, gridStyle.noPadding, style.wrapper)}>

          {props.project.socialMedia && (<div className={style.col}>
            <ul>
              {props.project.ticketshop && (
                <li>
                  <Button as="link" href={props.project.ticketshop.url ?? ''} title="Koop tickets nu!">
                    {props.project.ticketshop.buttonLabel || 'Koop tickets nu'}
                  </Button>
                </li>
              )}
              {props.project.socialMedia.facebookUrl && (
                <li>
                  <a href={props.project.socialMedia.facebookUrl} title="Bezoek de Facebook pagina">
                    <FacebookIcon color='var(--color-black)' />
                  </a>
                </li>
              )}
              {props.project.socialMedia.instagramUrl && (
                <li>
                  <a title="Bezoek het Instagram kanaal" href={props.project.socialMedia.instagramUrl}>
                    <InstagramIcon color='var(--color-black)' />
                  </a>
                </li>
              )}{" "}
              {props.project.socialMedia.linkedinUrl && (
                <li>
                  <a title="Bezoek de LinkedIn pagina" href={props.project.socialMedia.linkedinUrl}>
                    <LinkedInIcon color='var(--color-black)' />
                  </a>
                </li>
              )}{" "}
              {props.project.socialMedia.spotifyUrl && (
                <li>
                  <a title="Bezoek de Spotify playlist" href={props.project.socialMedia.spotifyUrl}>
                    <SpotifyIcon color='var(--color-black)' />
                  </a>
                </li>
              )}{" "}
              {props.project.socialMedia.websiteUrl && (
                <li>
                  <a title="Bezoek de website" href={props.project.socialMedia.websiteUrl}>
                    Website
                  </a>
                </li>
              )}
            </ul>
          </div>)}


          {props.project?.projectContent?.contentType === 'custom' ? (<div className={style.col}>
            <ReactMarkdown>{props.project?.projectContent?.customContent ?? ''}</ReactMarkdown>

            {props.project.photoAlbum?.map(photo => {
              return (<Image src={photo?.asset?.url ?? ''} alt={photo?.asset?.altText ?? ''} objectFit='cover' objectPosition='center center' layout='responsive' width='300' height='200' />)
            })}
          </div>
          ) : (<><div className={style.leftCol}>
            <h2>{props.project?.projectContent?.shortDescriptionTitle}</h2>
            <ReactMarkdown>{props.project?.projectContent?.shortDescription ?? ''}</ReactMarkdown>
            <h2>{props.project?.projectContent?.massEventsTitle}</h2>
            <ReactMarkdown>{props.project?.projectContent?.massEvents ?? ''}</ReactMarkdown>
          </div>
            <div className={style.rightCol}>
              {props.project.photoAlbum?.map(photo => {
                return (<Image src={photo?.asset?.url ?? ''} alt={photo?.asset?.altText ?? ''} objectFit='cover' objectPosition='center center' layout='responsive' width='300' height='200' />)
              })}
            </div>

            {props.project?.sponsors?.partners && props.project?.sponsors?.partners.length > 0 && (<div className={style.gridCol}>
              <h2>{props.project?.sponsors?.titleSponsors}</h2>

              {props.project?.sponsors?.partners?.map(partner => {
                return (<>
                  <p><b>{partner?.type}</b></p>
                  {partner?.sponsors?.map(sponsor => {
                    return (<InternalOrExternalLink href={sponsor?.url ?? ''}>{sponsor?.title}</InternalOrExternalLink>)
                  })}
                </>
                )
              })}

            </div>)}
            {props.project?.activiteiten && (<div className={style.gridCol}>
              <h2>{props.project?.activiteiten?.titleActivities}</h2>
              {props.project?.activiteiten?.activities?.map(activity => <p>{activity}</p>)}
            </div>)}
          </>
          )
          }


{props.project.socialMedia && (<div className={style.col}>
            <ul>
              {props.project.ticketshop && (
                <li>
                  <Button as="link" href={props.project.ticketshop.url ?? ''} title="Koop tickets nu!">
                    {props.project.ticketshop.buttonLabel || 'Koop tickets nu'}
                  </Button>
                </li>
              )}
              {props.project.socialMedia.facebookUrl && (
                <li>
                  <a href={props.project.socialMedia.facebookUrl} title="Bezoek de Facebook pagina">
                    <FacebookIcon color='var(--color-black)' />
                  </a>
                </li>
              )}
              {props.project.socialMedia.instagramUrl && (
                <li>
                  <a title="Bezoek het Instagram kanaal" href={props.project.socialMedia.instagramUrl}>
                    <InstagramIcon color='var(--color-black)' />
                  </a>
                </li>
              )}{" "}
              {props.project.socialMedia.linkedinUrl && (
                <li>
                  <a title="Bezoek de LinkedIn pagina" href={props.project.socialMedia.linkedinUrl}>
                    <LinkedInIcon color='var(--color-black)' />
                  </a>
                </li>
              )}{" "}
              {props.project.socialMedia.spotifyUrl && (
                <li>
                  <a title="Bezoek de Spotify playlist" href={props.project.socialMedia.spotifyUrl}>
                    <SpotifyIcon color='var(--color-black)' />
                  </a>
                </li>
              )}{" "}
              {props.project.socialMedia.websiteUrl && (
                <li>
                  <a title="Bezoek de website" href={props.project.socialMedia.websiteUrl}>
                    Website
                  </a>
                </li>
              )}
            </ul>
          </div>)}
        </div>

      </div>
    </section >
  )
}
