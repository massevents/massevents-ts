import React from 'react'
import Link from 'next/link'
import { useRouter } from 'next/router'
import { Logo } from '@components/atoms/Logo/Component'
import gridStyle from '@components/atoms/Grid/styles.module.css'
import style from './styles.module.css'
import InternalOrExternalLink from '@lib/link/Component'
import { InternalExternalLink, Maybe } from '@generated/graphql-request'
import { hasValue } from '@misc/helpers'
import clsx from 'clsx'

interface Props {
  menu?: Maybe<Array<Maybe<InternalExternalLink>>>
  isLogoColor?: boolean
}

export default function MainNavigation (props: Props): JSX.Element {
  const router = useRouter()

  const checkActive = (link: InternalExternalLink) => {
    let targetPath = `/${link.internalLink?.slug?.current ?? ''}`.replace('//','/')
    let isActive = router.asPath === targetPath

    if(!isActive){
      isActive = router.asPath.startsWith(targetPath) && targetPath !== '/'
    }
    return isActive
  }
  
  return (
    <header className={clsx(gridStyle.grid,
      (!hasValue(props.isLogoColor) || !props.isLogoColor) && style.isAbsolute)
    }>
      <div className={style.mainNavigationWrapper}>
        <Link href='/'>
          <a>
            <Logo isColor={hasValue(props.isLogoColor) && props.isLogoColor} />
          </a>
        </Link>
        <nav>
          <ul className={clsx(style.linkList, hasValue(props.isLogoColor) && props.isLogoColor && style.isColored)}>
            {props.menu?.map((link?: InternalExternalLink | null) => {
              return (link != null) && link.linkType === 'externalLink' && (link.externalLink != null) ? (
                <li key={link.externalLink?.url}>
                  <InternalOrExternalLink href={link.externalLink?.url ?? ''}>
                    {link.externalLink?.label}
                  </InternalOrExternalLink>
                </li>
              ) : (link != null) && link.linkType === 'internalLink' && (link.internalLink != null) ? (
                <li key={link.internalLink?.slug?.current}>
                  <InternalOrExternalLink className={checkActive(link) ? style.isActive : ""} href={`${process.env.NEXT_PUBLIC_WEBSITE_URL ?? ''}/${link.internalLink?.slug?.current ?? ''}`}>
                    {link.internalLink?.title ?? ''}
                  </InternalOrExternalLink>
                </li>
              ) : null
            })}
          </ul>
        </nav>
      </div>
    </header>
  )
}
