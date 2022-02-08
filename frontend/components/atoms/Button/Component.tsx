import clsx from 'clsx'
import React from 'react'
import style from './styles.module.css'
import InternalOrExternalLink from '@lib/link/Component'

export type PossibleTypes = 'pink' | 'blank' | 'gradient' | 'text-gradient'

interface ButtonProps {
  disabled?: boolean
  children: React.ReactNode
  color?: PossibleTypes
}

type Props =
  | ({ as: 'link' } & ButtonProps & React.AnchorHTMLAttributes<HTMLAnchorElement>)
  | ({ as: 'button' } & ButtonProps & React.ButtonHTMLAttributes<HTMLButtonElement>)

export function Button (props: Props): JSX.Element {
  const { color = 'pink', children, ...componentProps } = props

  const classes = clsx(
    componentProps.className,
    style.button,
    color === 'pink' && style.buttonPrimary,
    color === 'gradient' && style.buttonGradient,
    color === 'text-gradient' && style.buttonTextGradient,
    color === 'blank' && style.buttonBlank
  )

  if (componentProps.as === 'link') {
    const { as, className, ...linkProps } = componentProps
    return (
      <InternalOrExternalLink className={classes} {...linkProps}>
        {color === 'text-gradient' ? (<span>{children}</span>) : children}
      </InternalOrExternalLink>
    )
  } else {
    const { as, className, ...buttonProps } = componentProps
    return (
      <button className={classes} {...buttonProps}>
        {color === 'text-gradient' ? (<span>{children}</span>) : children}
      </button>
    )
  }
}
