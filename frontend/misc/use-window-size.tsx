import React from 'react'
import { isClient } from './is-environment'

interface Size {
  width: number | undefined
  height: number | undefined
}

export default function useWindowSize (): Size {
  if (isClient()) {
    const [windowSize, setWindowSize] = React.useState<Size>({
      width: undefined,
      height: undefined
    })

    React.useEffect(() => {
      function handleResize (): void {
        setWindowSize({
          width: window.innerWidth,
          height: window.innerHeight
        })
      }

      window.addEventListener('resize', handleResize)
      handleResize()

      return () => window.removeEventListener('resize', handleResize)
    }, [])
    return windowSize
  } else {
    return { width: undefined, height: undefined }
  }
}