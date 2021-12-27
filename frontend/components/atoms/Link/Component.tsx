import clsx from 'clsx'
import React from 'react'
import style from './styles.module.css'
import InternalOrExternalLink from '@lib/link/Component'
import { ArrowRight } from '../Icons/Component'
import { hasValue } from '@misc/helpers'

interface LinkProps {
  disabled?: boolean
  children: React.ReactNode
  arrowDirection?: 'block-start' | 'block-end' | 'inline-start' | 'inline-end'
}

type Props =
| ({ as: 'link' } & LinkProps & React.AnchorHTMLAttributes<HTMLAnchorElement>)
| ({ as: 'button' } & LinkProps & React.ButtonHTMLAttributes<HTMLButtonElement>)

export function Link (props: Props): JSX.Element {
  const { children, arrowDirection, ...componentProps } = props

  const classes = clsx(
    componentProps.className,
    style.link,
    arrowDirection === 'block-start' && style.arrowBlockStart,
    arrowDirection === 'inline-start' && style.arrowInlineStart,
    arrowDirection === 'inline-end' && style.arrowInlineEnd
  )

  if (componentProps.as === 'link') {
    const { as, className, ...linkProps } = componentProps
    return (
      <InternalOrExternalLink className={classes} {...linkProps}>
        <span className={style.icon}>
          <div className={style.iconWrapper}><ArrowRight /></div>
          <div className={style.iconWrapper}><ArrowRight /></div>
        </span>
        {hasValue(children) && children !== '' && (<span className={style.label}>{children}</span>)}
      </InternalOrExternalLink>
    )
  } else {
    const { as, className, ...buttonProps } = componentProps
    return (
      <button className={classes} {...buttonProps}>
        <span className={style.icon}>
          <div className={style.iconWrapper}><ArrowRight /></div>
          <div className={style.iconWrapper}><ArrowRight /></div>
        </span>
        {hasValue(children) && children !== '' && (<span className={style.label}>{children}</span>)}
      </button>
    )
  }
}
