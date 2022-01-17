import React from 'react'
import gridStyle from '@components/atoms/Grid/styles.module.css'
import style from './styles.module.css'
import InternalOrExternalLink from '@lib/link/Component'
import { Logo } from '@components/atoms/Logo/Component'
import { FacebookIcon, InstagramIcon, LinkedInIcon } from '@components/atoms/SocialIcon/Component'
import clsx from 'clsx'

export default function Footer(): JSX.Element {

  return (
    <div className={gridStyle.grid}>
      <div className={style.container}>

        <div className={clsx(gridStyle.grid, style.sectionTop)}>
          <div className={style.linksBar}>
            <InternalOrExternalLink href="/" title="Bezoek de home-pagina">
              <Logo isColor={false} />
            </InternalOrExternalLink>
            <ul>
              <li>
                <InternalOrExternalLink
                  href="https://www.facebook.com/MASSevents.nl/"
                  title="Bezoek de Facebook pagina"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FacebookIcon color='var(--color-white)' />
                </InternalOrExternalLink>
              </li>
              <li>
                <InternalOrExternalLink
                  href="https://www.instagram.com/massevents.nl/"
                  title="Bezoek Instagram kanaal"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <InstagramIcon color='var(--color-white)' />
                </InternalOrExternalLink>
              </li>
              <li>
                <InternalOrExternalLink
                  title="Bezoek LinkedIn pagina"
                  target="_blank"
                  href="https://www.linkedin.com/company/massevents/"
                  rel="noopener noreferrer"
                >
                  <LinkedInIcon color='var(--color-white)' />
                </InternalOrExternalLink>
              </li>
              <li>
                <InternalOrExternalLink className={style.normal} href="/projecten" title="Bezoek projecten">Projecten
                </InternalOrExternalLink>
              </li>
            </ul>
          </div>
        </div>
        <div className={clsx(gridStyle.grid, style.sectionMiddle)}>
          <div className={style.actionBar}>
            <ul>
              <li>KVK: 72414499</li>
              <li>
                <a title="Stuur een mailtje" href="mailto:info@massevents.nl" target="_blank" rel="noopener noreferrer">
                  Stuur ons een mailtje!
                </a>
              </li>
              <li>
                Of bel ons op <a title="Bel ons op 0182 - 23 93 83" href="tel:0182239383" target="_blank" rel="noopener noreferrer">
                  0182 - 23 93 83
                </a>
              </li>
            </ul>
            <InternalOrExternalLink href="http://www.robinheij.nl"
              title="Bezoek The Heretics"
            >
              <svg viewBox="0 0 62 69" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink">
                <g id="VD___DQPdhhlw" stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
                  <g id="Desktop-Copy___DQPdhhlw" transform="translate(-30.000000, -30.000000)" fill="#FFFFFF">
                    <g id="Group-4___DQPdhhlw" transform="translate(30.000000, 30.000000)">
                      <g id="Logo___DQPdhhlw">
                        <path d="M38.4715425,21.1854375 C40.285888,21.1854375 41.9739789,20.13525 42.7732153,18.5101875 L47.8295971,8.0775 C48.3278516,6.68925 48.1643971,5.1789375 47.3792516,3.929625 C46.4965971,2.525625 44.9804153,1.6875 43.3216335,1.6875 L41.5675971,1.6875 L32.1509244,21.1854375 L38.4715425,21.1854375 Z M8.72901527,43.0385625 C8.814688,43.0385625 8.89810618,43.0295625 8.98152436,43.0216875 L9.11116073,43.009875 C9.72552436,42.939 10.9401607,42.6796875 11.9699244,41.7594375 C12.0629244,41.6750625 12.1581789,41.5873125 12.2477971,41.4916875 L12.3763062,41.34375 C12.4709971,41.2329375 12.5628698,41.1148125 12.6496698,40.9921875 L12.7471789,40.85325 C12.8728698,40.660875 12.9737607,40.48425 13.0537971,40.3160625 L29.7926698,5.27625 C29.8727062,5.1125625 29.9403425,4.951125 30.0006516,4.788 C30.0113607,4.7570625 30.0739244,4.5489375 30.074488,4.5466875 C30.1015425,4.4634375 30.1291607,4.3801875 30.1500153,4.29525 C30.1618516,4.2463125 30.1703062,4.195125 30.179888,4.1439375 L30.2148335,3.96225 C30.2255425,3.9054375 30.2373789,3.8491875 30.2452698,3.792375 C30.254288,3.724875 30.2587971,3.6556875 30.2633062,3.5870625 L30.2757062,3.434625 C30.2802153,3.3856875 30.2847244,3.33675 30.2858516,3.2878125 C30.2881062,3.21075 30.285288,3.1370625 30.2830335,3.063375 C30.2830335,3.063375 30.2762698,2.8215 30.272888,2.77425 C30.2661244,2.694375 30.254288,2.611125 30.241888,2.5273125 L30.2277971,2.424375 C30.2210335,2.3720625 30.2148335,2.31975 30.204688,2.268 C30.1900335,2.188125 30.1691789,2.1076875 30.1483244,2.02725 C30.1483244,2.026125 30.1274698,1.942875 30.1269062,1.9411875 C30.1128153,1.8826875 30.099288,1.823625 30.0812516,1.7656875 C30.0733607,1.73925 30.0649062,1.713375 30.055888,1.6875 L20.8195789,1.6875 C21.1256335,3.0144375 21.0061425,4.4049375 20.4661789,5.6773125 L2.36105164,43.0385625 L8.72901527,43.0385625 Z M16.6007607,43.0385625 C18.418488,43.0385625 20.1077062,41.986125 20.9052516,40.3565625 L39.6873062,1.6875 L31.8076698,1.6875 C31.8116153,1.7060625 31.8155607,1.7240625 31.8195062,1.742625 C31.8386698,1.8264375 31.8561425,1.911375 31.8713607,1.996875 C31.897288,2.1414375 31.9181425,2.282625 31.9339244,2.4249375 C31.9440698,2.514375 31.953088,2.595375 31.9581607,2.6775 C31.9694335,2.8209375 31.9739425,2.9649375 31.9750698,3.1100625 C31.9756335,3.213 31.9761971,3.2878125 31.9733789,3.362625 C31.9694335,3.5049375 31.9564698,3.6500625 31.9423789,3.79575 L31.9356153,3.862125 C31.9305425,3.9223125 31.9249062,3.9825 31.915888,4.0426875 C31.8955971,4.1895 31.8668516,4.334625 31.8364153,4.4803125 L31.8217607,4.55175 C31.8110516,4.606875 31.7997789,4.6625625 31.7862516,4.71825 C31.748488,4.869 31.7000153,5.0214375 31.649288,5.17275 L31.6318153,5.23125 C31.6177244,5.2801875 31.6025062,5.3285625 31.5850335,5.376375 C31.5072516,5.5895625 31.4165062,5.80275 31.3150516,6.010875 L14.5942153,41.0175 C14.481488,41.252625 14.3484698,41.4860625 14.1754335,41.75325 C14.1337244,41.8179375 14.0891971,41.8815 14.0441062,41.945625 C13.9246153,42.114375 13.8101971,42.2611875 13.6907062,42.400125 C13.5007607,42.62625 13.2944698,42.84 13.0746516,43.0385625 L16.6007607,43.0385625 Z M25.8207244,34.1055 L24.7971607,36.2109375 C24.1320698,37.679625 24.2515607,39.394125 25.1251971,40.7840625 C26.0129244,42.1959375 27.5223425,43.0385625 29.1636516,43.0385625 L32.4034335,43.0385625 C32.1683971,42.0080625 32.1785425,40.914 32.4389425,39.8874375 L32.4744516,39.781125 C32.4812153,39.7625625 32.4891062,39.745125 32.4969971,39.7276875 L39.2843062,25.6978125 C39.5819062,25.084125 39.541888,24.3725625 39.1794698,23.794875 C38.8159244,23.21775 38.1914153,22.8729375 37.508288,22.8729375 L31.3325244,22.8729375 L25.8207244,34.1055 Z M40.8292335,43.0385625 C40.564888,41.7875625 40.657888,40.45275 41.1037244,39.2776875 C41.1093607,39.2625 41.1251425,39.2270625 41.1319062,39.213 L59.0848516,1.6875 L51.2570698,1.6875 C51.526488,2.8603125 51.4661789,4.0989375 51.0727607,5.2475625 C51.0659971,5.2689375 51.0569789,5.2903125 51.0473971,5.3105625 L49.3722698,8.767125 C49.3209789,8.9128125 49.2482698,9.1051875 49.1569607,9.2930625 L44.309688,19.213875 C44.1693425,19.5001875 44.0267425,19.744875 43.8553971,20.00025 C43.8165062,20.0565 43.776488,20.1088125 43.7359062,20.1605625 L43.6851789,20.226375 C43.571888,20.3799375 43.4557789,20.5318125 43.3283971,20.6746875 C43.2737244,20.737125 43.2156698,20.7950625 43.1570516,20.8535625 L43.0978698,20.9131875 C42.9749971,21.0375 42.8521244,21.157875 42.722488,21.270375 C42.6368153,21.3451875 42.5477607,21.414375 42.4592698,21.4835625 C42.3172335,21.5938125 42.1836516,21.6905625 42.0449971,21.7828125 C41.9441062,21.8491875 41.8437789,21.911625 41.7417607,21.97125 C41.5985971,22.0550625 41.451488,22.1326875 41.3015607,22.2058125 C41.1753062,22.267125 41.0811789,22.312125 40.9831062,22.35375 C40.8235971,22.42125 40.6618335,22.4780625 40.4978153,22.532625 C40.4978153,22.532625 40.3929789,22.5680625 40.3771971,22.5736875 C40.4685062,22.6861875 40.5445971,22.7919375 40.6111062,22.89825 C41.2857789,23.970375 41.3590516,25.291125 40.8072516,26.431875 L34.0627789,40.37175 C34.0582698,40.393125 34.0024698,40.662 33.9957062,40.7053125 L33.9754153,40.867875 C33.9630153,40.9640625 33.9539971,41.0315625 33.9483607,41.099625 C33.9438516,41.1564375 33.9353971,41.39775 33.9353971,41.39775 L33.9325789,41.4855 C33.9320153,41.587875 33.9365244,41.6885625 33.9415971,41.788125 L33.3830335,41.9191875 L33.9449789,41.8786875 C33.9528698,41.9900625 33.9652698,42.100875 33.9793607,42.211125 L33.4298153,42.3556875 L33.9872516,42.2746875 C34.0030335,42.38325 34.0227607,42.4906875 34.0458698,42.598125 L33.5115425,42.79725 L34.0616516,42.674625 C34.0836335,42.771375 34.1089971,42.8664375 34.1366153,42.9609375 L34.1597244,43.0385625 L40.8292335,43.0385625 Z M29.1636516,44.7260625 C26.9367244,44.7260625 24.891288,43.5875625 23.6924335,41.6806875 C23.366088,41.1609375 23.1169607,40.6029375 22.9473062,40.0201875 L22.4253789,41.0945625 C21.3454516,43.30125 19.0593425,44.7260625 16.6007607,44.7260625 L0.563615274,44.7260625 C0.369160729,44.7260625 0.189360729,44.6265 0.0856516377,44.46225 C-0.0169301805,44.2985625 -0.0282029078,44.09325 0.0563425468,43.918875 L18.9263244,4.9809375 C19.4319062,3.787875 19.4183789,2.39625 18.8778516,1.188 L18.7008698,0.792 C18.623088,0.6181875 18.6383062,0.4168125 18.7425789,0.2565 C18.8468516,0.09675 19.0243971,0 19.2154698,0 L43.3216335,0 C45.5654698,0 47.6182335,1.134 48.8114516,3.033 C49.1152516,3.515625 49.3514153,4.0348125 49.5165607,4.5770625 C49.8682698,3.46725 49.7972516,2.268 49.3136516,1.1885625 L49.1372335,0.7914375 C49.0594516,0.617625 49.0746698,0.41625 49.1789425,0.2565 C49.2832153,0.09675 49.4607607,0 49.6518335,0 L60.8727062,0 C61.0665971,0 61.2463971,0.0995625 61.3495425,0.2626875 C61.452688,0.4258125 61.465088,0.6305625 61.3811062,0.8049375 L42.6627425,39.9290625 C42.245088,41.0428125 42.2715789,42.41475 42.7523607,43.5555 L42.9169425,43.9453125 C42.9902153,44.119125 42.9710516,44.31825 42.8667789,44.474625 C42.7619425,44.6315625 42.586088,44.7260625 42.3972698,44.7260625 L29.1636516,44.7260625 Z" id="Fill-1___DQPdhhlw"></path>
                      </g>
                      <path d="M11.974,58.9 L22.026,58.9 L22.026,67.902 L11.974,67.902 L11.974,58.9 Z M13.43,60.244 L13.43,66.558 L20.57,66.558 L20.57,60.244 L13.43,60.244 Z M36.376,56.184 C37.034,56.786 37.552,57.416 37.916,58.06 L37.146,58.62 C36.74,57.92 36.25,57.29 35.662,56.73 L36.376,56.184 Z M35.06,57.066 C35.676,57.626 36.194,58.256 36.586,58.956 L35.83,59.502 C35.438,58.816 34.934,58.186 34.346,57.612 L35.06,57.066 Z M35.088,59.446 L35.886,60.552 C33.814,61.658 31.252,62.638 28.214,63.492 L28.214,65.438 C28.214,66.026 28.382,66.418 28.746,66.628 C29.194,66.88 30.104,67.02 31.504,67.02 C33.058,67.02 34.598,66.922 36.124,66.726 L36.11,68.126 C33.646,68.266 32.148,68.35 31.63,68.35 C29.698,68.35 28.41,68.168 27.78,67.832 C27.108,67.454 26.772,66.698 26.772,65.55 C26.772,62.4 26.786,59.698 26.828,57.444 L28.256,57.444 L28.228,62.092 C30.748,61.42 33.044,60.538 35.088,59.446 Z M40.1,57.724 C41.43,58.396 42.886,59.32 44.482,60.482 L43.572,61.588 C42.004,60.468 40.604,59.6 39.386,58.956 L40.1,57.724 Z M49.508,59.754 L50.852,60.286 C49.886,62.484 48.612,64.29 47.016,65.718 C45.294,67.216 43.222,68.266 40.786,68.854 L40.114,67.566 C42.256,67.062 44.16,66.11 45.826,64.71 C47.422,63.338 48.64,61.686 49.508,59.754 Z" id="ロビン___DQPdhhlw"></path>
                    </g>
                  </g>
                </g>
              </svg>
            </InternalOrExternalLink>
          </div>
        </div>

        <div className={clsx(gridStyle.grid, style.sectionBottom)}>
          <div className={style.actionBar}>
            <ul>
              <li>
                <InternalOrExternalLink href="/privacy-statement" title="Bezoek privacy statement">Privacy Statement
                </InternalOrExternalLink>
              </li>
              <li>
                <InternalOrExternalLink href="/algemene-voorwaarden" title="Bezoek algemene voorwaarden">
                  Algemene voorwaarden
                </InternalOrExternalLink>
              </li>
            </ul>
          </div>
        </div>
      </div>


    </div>
  )
}
