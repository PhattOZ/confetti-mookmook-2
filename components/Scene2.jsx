import ConfettiGenerator from "confetti-js"
import { useEffect, useState } from "react"

export function Scene2({ goToNextScene }) {
  const [prankCount, setPrankCount] = useState(0)

  useEffect(() => {
    const confettiSettings = {
      target: "canvas",
      size: 0.5,
      rotate: true,
      start_from_edge: true,
    }
    const confetti = ConfettiGenerator(confettiSettings)
    confetti.render()

    return () => confetti.clear()
  }, [])

  const wish = "Happy New Year na mookmook"
  const letters = []
  let i
  for (i = 0; i < wish.length; i++) {
    letters.push(
      <span key={i} style={{ "--i": i + 1 }}>
        {wish.charAt(i)}
      </span>
    )
  }
  letters.push(
    <span key={i} style={{ "--i": i + 1 }}>
      🫰🏻
    </span>
  )

  const handleButtonWarp = () => {
    if (prankCount < 15) {
      const button = document.getElementById("clickMe")
      button.style.top = (Math.random() - Math.random()) * 40 + "vh"
      button.style.right = (Math.random() - Math.random()) * 40 + "vw"
      setPrankCount((prankCount) => prankCount + 1)
    }
  }

  const handleClick = () => {
    if (prankCount > 10) {
      goToNextScene()
    }
  }

  return (
    <>
      <canvas id="canvas" style={{ position: "fixed", zIndex: -1 }}></canvas>
      <h1 className="title" style={{ "--wish-length": wish.length }}>
        {letters.map((letter) => letter)}
      </h1>
      <button
        id="clickMe"
        onMouseEnter={handleButtonWarp}
        onClick={handleClick}
      >
        CLICK ME!
      </button>
    </>
  )
}
