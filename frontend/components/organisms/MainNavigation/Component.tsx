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
import useWindowSize from '@misc/use-window-size'
import { LazyMotion, domAnimation, m } from 'framer-motion'

interface Props {
  menu?: Maybe<Array<Maybe<InternalExternalLink>>>
  isLogoColor?: boolean
}

export default function MainNavigation(props: Props): JSX.Element {
  const [showMenu, setShowMenu] = React.useState<boolean | null>(null);
  const router = useRouter()
  const windowSize = useWindowSize();

  const clickHandler = () => setShowMenu(show => !show)

  React.useEffect(() => {
    if (hasValue(windowSize.width) && windowSize.width < 768) {
      setShowMenu(false);
    }
  }, [router])


  React.useEffect(() => {
    if (hasValue(windowSize.width) && windowSize.width < 768) {
      setShowMenu(false);
    }
  }, [])

  React.useEffect(() => {
    if (hasValue(windowSize.width) && windowSize.width >= 768) {
      setShowMenu(true);
    }
    if (hasValue(windowSize.width) && windowSize.width >= 768 && showMenu === null) {
      setShowMenu(true);
    }
    if (hasValue(windowSize.width) && windowSize.width < 768 && showMenu === null) {
      setShowMenu(false);
    }
  }, [windowSize])

  const checkActive = (link: InternalExternalLink): boolean => {
    const targetPath = `/${link.internalLink?.slug?.current ?? ''}`.replace('//', '/')
    let isActive = router.asPath === targetPath

    if (!isActive) {
      isActive = router.asPath.startsWith(targetPath) && targetPath !== '/'
    }
    return isActive
  }

  return (
    <LazyMotion features={domAnimation}>
    <header className={clsx(gridStyle.grid,
      (!hasValue(props.isLogoColor) || !props.isLogoColor) && style.isAbsolute)}
    >
      <div className={style.mainNavigationWrapper}>
        <Link href='/'>
          <a>
            <Logo isColor={hasValue(props.isLogoColor) && props.isLogoColor} />
          </a>
        </Link>
        <div className={style.hamburgerIcon} onClick={clickHandler}>
          <m.div
            initial={{ y: -6, backgroundColor: 'var(--color-orange)', rotate: 0 }}
            animate={{
              y: showMenu ? 0 : -6,
              rotate: showMenu ? -45 : 0,
              backgroundColor: showMenu ? 'var(--color-white)' : 'var(--color-orange)'
            }}
            transition={{
              duration: 0.3,
              ease: 'easeOut'
            }}
          ></m.div>
          <m.div
            initial={{ y: 0, backgroundColor: 'var(--color-orange)', opacity: 1}}
            animate={{
              y: showMenu ? 0 : 0,
              opacity: showMenu ? 0 : 1,
              backgroundColor: showMenu ? 'var(--color-white)' : 'var(--color-orange)'
            }}
            transition={{
              duration: 0.3,
              ease: 'easeOut'
            }}
          ></m.div>
          <m.div
            initial={{ y: 6, backgroundColor: 'var(--color-orange)', rotate: 0 }}
            animate={{
              y: showMenu ? 0 : 6,
              rotate: showMenu ? 45 : 0,
              backgroundColor: showMenu ? 'var(--color-white)' : 'var(--color-orange)'
            }}
            transition={{
              duration: 0.3,
              ease: 'easeOut'
            }}
          ></m.div>
        </div>
        {showMenu && (
          <nav className={style.hamburgerMenu}>
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
                    <InternalOrExternalLink className={checkActive(link) ? style.isActive : ''} href={`${process.env.NEXT_PUBLIC_WEBSITE_URL ?? ''}/${link.internalLink?.slug?.current ?? ''}`}>
                      {link.internalLink?.title ?? ''}
                    </InternalOrExternalLink>
                  </li>
                ) : null
              })}
            </ul>
          </nav>)}
      </div>
    </header>
    </LazyMotion>
  )
}
