import Head from "next/head"
import { useEffect, useState } from "react"
import { Scene2 } from "../components/Scene2"
import { Scene3 } from "../components/Scene3"

export default function Home() {
  const [currentScene, setCurrentScene] = useState(0)

  useEffect(() => {
    let timeoutId = 0
    if (currentScene === 0) {
      timeoutId = window.setTimeout(nextScene, 3700)
    }

    return () => {
      clearTimeout(timeoutId)
    }
  }, [currentScene])

  const nextScene = () => {
    setCurrentScene((currentScene) => currentScene + 1)
  }

  const render = (scene) => {
    switch (scene) {
      case 0:
        return (
          <main>
            <div className="countdownContainer">
              <div className="countdown">Three!</div>
              <div className="countdown" style={{ animationDelay: "1.5s" }}>
                Two!
              </div>
              <div className="countdown" style={{ animationDelay: "2.5s" }}>
                One!
              </div>
            </div>
          </main>
        )
      case 1:
        return (
          <main>
            <Scene2 goToNextScene={nextScene} />
          </main>
        )
      case 2:
        return <Scene3 />
      default:
        return null
    }
  }

  return (
    <>
      <Head>
        <title>HNY to MookMook!</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      {render(currentScene)}
    </>
  )
}
