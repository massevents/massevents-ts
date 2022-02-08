import React from 'react'
import { Project } from '@generated/graphql-request'
import style from './styles.module.css'
import { Button } from '@components/atoms/Button/Component'
import { FacebookIcon, InstagramIcon, LinkedInIcon, SpotifyIcon } from '@components/atoms/SocialIcon/Component'
import { hasValue } from '@misc/helpers'
import InternalOrExternalLink from '@lib/link/Component'

interface Props {
  project: Project
}

export default function SocialMedia (props: Props): JSX.Element {
  return (props.project.socialMedia != null) ? (
    <div className={style.col}>
      <div className={style.line}>
        {(props.project.ticketshop != null) && (
          <Button as='link' href={props.project.ticketshop.url ?? ''} title='Koop tickets nu!' target='_blank'>
            {props.project.ticketshop.buttonLabel ?? 'Koop tickets nu'}
          </Button>
        )}
        {hasValue(props.project.socialMedia.facebookUrl) && (
          <InternalOrExternalLink className={style.icon} href={props.project.socialMedia.facebookUrl} title='Bezoek de Facebook pagina'>
            <FacebookIcon color='var(--color-black)' />
          </InternalOrExternalLink>
        )}
        {hasValue(props.project.socialMedia.instagramUrl) && (
          <InternalOrExternalLink className={style.icon} title='Bezoek het Instagram kanaal' href={props.project.socialMedia.instagramUrl}>
            <InstagramIcon color='var(--color-black)' />
          </InternalOrExternalLink>
        )}
        {hasValue(props.project.socialMedia.linkedinUrl) && (
          <InternalOrExternalLink className={style.icon} title='Bezoek de LinkedIn pagina' href={props.project.socialMedia.linkedinUrl}>
            <LinkedInIcon color='var(--color-black)' />
          </InternalOrExternalLink>
        )}
        {hasValue(props.project.socialMedia.spotifyUrl) && (
          <InternalOrExternalLink className={style.icon} title='Bezoek de Spotify playlist' href={props.project.socialMedia.spotifyUrl}>
            <SpotifyIcon color='var(--color-black)' />
          </InternalOrExternalLink>
        )}
        {hasValue(props.project.socialMedia.websiteUrl) && (
          <InternalOrExternalLink title='Bezoek de website' href={props.project.socialMedia.websiteUrl}>
            Website
          </InternalOrExternalLink>
        )}
      </div>
    </div>
  ) : (<div className={style.emptyDiv} />)
}
