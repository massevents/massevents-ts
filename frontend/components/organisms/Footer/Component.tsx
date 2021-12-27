import React from 'react'
import gridStyle from '@components/atoms/Grid/styles.module.css'
import style from './styles.module.css'
import { hasValue } from '@misc/helpers'
import InternalOrExternalLink from '@lib/link/Component'

interface LinkProps {
  label: string
}

interface FooterProps extends LinkProps {
  items?: LinkProps[]
}

export default function Footer (): JSX.Element {
  const links: FooterProps[] = [
    {
      label: 'Native app development',
      items: [
        { label: 'iPhone (iOS) app ontwikkelen' },
        { label: 'Android app ontwikkelen' },
        { label: 'App laten maken' }
      ]
    },
    {
      label: 'Concept & design',
      items: [
        { label: 'Proces van een app laten maken' },
        { label: 'Visual Design (UI Design)' },
        { label: 'Interaction Design (UX Design)' }
      ]
    },
    {
      label: 'Web development',
      items: [
        { label: 'Front-end development' },
        { label: 'Back-end & API’s' },
        { label: 'Elixir ontwikkelaar' }
      ]
    },
    {
      label: 'Games',
      items: [
        { label: 'Unity game development' },
        { label: 'Applied / serious games' }
      ]
    }
  ]

  return (
    <div className={gridStyle.grid}>
      <div className={style.footerBg} />
      <footer className={style.footerWrapper}>
        <h4 className={style.expertiseTitle}>Expertise</h4>
        <div className={style.expertiseColumn}>
          {links.map(linkGroup => {
            return (
              <div key={linkGroup.label}>
                <p>
                  <b>{linkGroup.label}</b>
                </p>
                <ul>
                  {hasValue(linkGroup.items) && linkGroup.items.map(item => {
                    return (
                      <li key={item.label}>
                        {item.label}
                      </li>
                    )
                  })}
                </ul>
              </div>
            )
          })}
        </div>
        <h4 className={style.contactTitle}>Neem contact met ons op</h4>
        <div className={style.contactColumn}>
          <p>
            <b>Mass Events B.V.</b>
          </p>
          <p>
            Schiehavenkade 264 – 266 <br />
            3024EZ Rotterdam
          </p>
          <p>
            <InternalOrExternalLink href='mailto:info@massevents.nl'>info@massevents.nl</InternalOrExternalLink><br />
            +31 (0)10 - 763 0 763
          </p>
          <p>
            <InternalOrExternalLink href='#'>Privacy Policy</InternalOrExternalLink><br />
            <InternalOrExternalLink href='#'>Algemene Voorwaarden</InternalOrExternalLink>
          </p>
        </div>
      </footer>
    </div>
  )
}
