"use client"

import * as React from "react"
import { useTheme } from "next-themes"
import Lottie, { LottieRef } from "lottie-react";

type segmentsProps = {
  [k: string]: [number, number]
}

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

  // const interactivity = {
  //   mode: 'cursor',
  //   actions: [
  //     {
  //       position: { x: [0, 1], y: [-1, 2] },
  //       type: "seek",
  //       frames: resolvedTheme === 'light' ? [50, 179] : [180, 213],
  //     },
  //     {
  //       position: { x: -1, y: -1 },
  //       type: "stop",
  //       frames: [0],
  //     },
  //   ],
  // }

  return (
    <button className="top-0 absolute right-2 sm:relative" onClick={() => {
      setTheme(resolvedTheme === 'light' ? 'dark' : 'light')
    }}>
      <Lottie
        animationData={moonSunAnimation}
        autoplay={false}
        initialSegment={[40, 180]}
        // interactivity={interactivity}
        loop={false}
        lottieRef={lottieRef}
        style={style}
      />
    </button>
  )
}
