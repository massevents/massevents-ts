import React from 'react'
import Link from 'next/link'
// import { useRouter } from 'next/router'
import { Logo } from '@components/atoms/Logo/Component'
import gridStyle from '@components/atoms/Grid/styles.module.css'
import style from './styles.module.css'
import InternalOrExternalLink from '@lib/link/Component'
import { InternalExternalLink, Maybe } from '@generated/graphql-request'

interface Props {
  menu?: Maybe<Array<Maybe<InternalExternalLink>>>
}

export default function MainNavigation (props: Props): JSX.Element {
  // const router = useRouter()

  return (
    <header className={gridStyle.grid}>
      <div className={style.mainNavigationWrapper}>
        <Link href='/'>
          <a>
            <Logo isColor={false} />
          </a>
        </Link>
        <nav>
          <ul className={style.linkList}>
            {props.menu?.map((link?: InternalExternalLink | null) => {
              return (link != null) && link.linkType === 'externalLink' && (link.externalLink != null) ? (
                <li key={link.externalLink?.url}>
                  <InternalOrExternalLink href={link.externalLink?.url ?? ''}>
                    {link.externalLink?.label}
                  </InternalOrExternalLink>
                </li>
              ) : (link != null) && link.linkType === 'internalLink' && (link.internalLink != null) ? (
                <li key={link.internalLink?.slug?.current}>
                  <InternalOrExternalLink href={link.internalLink?.slug?.current ?? ''}>
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
