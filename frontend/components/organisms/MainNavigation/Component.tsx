import React from 'react'
import Link from 'next/link'
import { useRouter } from 'next/router'
import { Logo } from '@components/atoms/Logo/Component'
import gridStyle from '@components/atoms/Grid/styles.module.css'
import style from './styles.module.css'
import InternalOrExternalLink from '@lib/link/Component'
import clsx from 'clsx'
import { hasValue } from '@misc/helpers'

interface LinkProps {
  label: string
  path: string
  color: string
  badgeContent?: string
}

export default function MainNavigation (): JSX.Element {
  const router = useRouter()

  const links: LinkProps[] = [
    { label: 'over ons', path: '/over-ons', color: 'pink' },
    { label: 'expertise', path: '/expertise', color: 'green' },
    { label: 'portfolio', path: '/portfolio', color: 'pink' },
    { label: 'vacatures', path: '/vacatures', color: 'red', badgeContent: '2' },
    { label: 'contact', path: '/contact', color: 'blue' }
  ]

  return (
    <header className={gridStyle.grid}>
      <div className={style.mainNavigationWrapper}>
        <Link href='/'>
          <a>
            <Logo />
          </a>
        </Link>
        <nav>
          <ul className={style.linkList}>
            {links.map(link => {
              const colorClass = clsx(
                link.color === 'pink' && style.linkPink,
                link.color === 'blue' && style.linkBlue,
                link.color === 'red' && style.linkRed,
                link.color === 'green' && style.linkGreen,
                link.path === router.asPath && style.active
              )
              return (
                <li key={link.path}>
                  <InternalOrExternalLink className={colorClass} href={link.path}>
                    {link.label} {hasValue(link.badgeContent) && (<span>{link.badgeContent}</span>)}
                  </InternalOrExternalLink>
                </li>
              )
            })}
          </ul>
        </nav>
      </div>
    </header>
  )
}
