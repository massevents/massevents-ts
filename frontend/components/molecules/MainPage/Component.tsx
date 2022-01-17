import React from 'react'
import gridStyle from '@components/atoms/Grid/styles.module.css'
import style from './styles.module.css'

export const MainPage = (props: { children: React.ReactElement }): JSX.Element => {
  return (
    <div className={gridStyle.grid}>
      <div className={style.container}>
        {props.children}
      </div>
    </div>
  )
}
