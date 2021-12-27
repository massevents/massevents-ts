import clsx from 'clsx'
import React from 'react'
import style from './styles.module.css'
import InternalOrExternalLink from '@lib/link/Component'
import { ArrowRight } from '../Icons/Component'
import { hasValue } from '@misc/helpers'

interface InlineLinkProps {
  disabled?: boolean
  children: React.ReactNode
}

type Props =
| ({ as: 'link' } & InlineLinkProps & React.AnchorHTMLAttributes<HTMLAnchorElement>)
| ({ as: 'button' } & InlineLinkProps & React.ButtonHTMLAttributes<HTMLButtonElement>)

export function InlineLink (props: Props): JSX.Element {
  const { children, ...componentProps } = props

  const classes = clsx(
    componentProps.className,
    style.link
  )

  if (componentProps.as === 'link') {
    const { as, className, ...linkProps } = componentProps
    return (
      <InternalOrExternalLink className={classes} {...linkProps}>
        {hasValue(children) && children !== '' && (<span className={style.label}>{children}</span>)}
        <ArrowRight />
      </InternalOrExternalLink>
    )
  } else {
    const { as, className, ...buttonProps } = componentProps
    return (
      <button className={classes} {...buttonProps}>
        {hasValue(children) && children !== '' && (<span className={style.label}>{children}</span>)}
        <ArrowRight />
      </button>
    )
  }
}
