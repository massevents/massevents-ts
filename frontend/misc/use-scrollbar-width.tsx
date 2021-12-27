import React from 'react'
import { isClient } from './is-environment'

//  We needed something to calc the scrollbar widht, since our calculation for the grid-sizes and the actual grid weren'y equal.
//  Turned out it was due to the presence of a scrollbar when rendering, but that same scrollbar wasn't there when just calculating.

export default function useScrollbarWidth (): void {
  if (isClient()) {
    React.useEffect((): any => {
      function handleResize (): void {
        document.documentElement.style.setProperty('--scrollbar-width', `${(window.innerWidth - document.documentElement.clientWidth)}px`)
      }
      window.addEventListener('resize', handleResize)
      handleResize()

      return (): void => {
        window.removeEventListener('resize', handleResize)
      }
    }, [])
  }
}
