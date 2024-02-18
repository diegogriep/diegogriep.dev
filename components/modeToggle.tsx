"use client"

import * as React from "react"
import { useTheme } from "next-themes"
import Lottie, { LottieRef } from "lottie-react";

export function ModeToggle() {
  const { resolvedTheme, setTheme } = useTheme()
  const lottieRef: LottieRef = React.useRef(null);

  React.useEffect(() => {
    lottieRef.current?.setDirection(resolvedTheme === 'light' ? 1 : -1)
    lottieRef.current?.play()
  }, [resolvedTheme])

  const moonSunAnimation = require('../public/assets/sun-moon.json')

  const style = {
    height: 100,
    width: 100
  }

  return (
    <button aria-label="Button to activate the animation" className="top-0 absolute right-2 sm:relative" onClick={() => {
      setTheme(resolvedTheme === 'light' ? 'dark' : 'light')
    }}>
      <Lottie
        animationData={moonSunAnimation}
        autoplay={false}
        initialSegment={[40, 180]}
        loop={false}
        lottieRef={lottieRef}
        style={style}
      />
    </button>
  )
}
