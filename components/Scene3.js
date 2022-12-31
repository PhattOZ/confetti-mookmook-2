import { useEffect, useState } from "react"
import Image from "next/image"

export function Scene3() {
  const [scrollPosition, setScrollPosition] = useState(0)
  const [darkSectionYOffset, setDarkSectionYOffset] = useState(0)
  const [seenDarkSection, setSeenDarkSection] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      const position = window.scrollY
      setScrollPosition(position)

      if (scrollPosition > darkSectionYOffset) {
        setSeenDarkSection(true)
      } else {
        setSeenDarkSection(false)
      }
    }
    window.addEventListener("scroll", handleScroll, { passive: true })

    const darkSection = document.getElementById("section2")

    setDarkSectionYOffset(darkSection.offsetTop)

    return () => {
      window.removeEventListener("scroll", handleScroll)
    }
  }, [darkSectionYOffset, scrollPosition])

  return (
    <>
      <div
        id="wish"
        style={{
          height: "100vh",
          backgroundColor: "black",
          color: "white",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          paddingLeft: "1rem",
        }}
      >
        <h1>The crazy packed 2022 finally ends!</h1>
        <h3>
          I can&apos;t stress enough how grateful I&apos;m for the wonderful
          time we&apos;ve spent together
        </h3>
        <h3>I appreciate an endless trust you have in me</h3>
        <h3>
          I&apos;m very lucky to get to hold your hand when you&apos;re happy or
          afraid
        </h3>
        <h3>to receive a gentle kiss on my forehead</h3>
        <h3>
          to see a different shade in your eyes when the light hit you at a
          certain angle
        </h3>
        <h3>to be the most beautiful and also the weirdest with you</h3>
        <h1>And yes, we&apos;ve changed.</h1>
        <h2>We learn we see the world and we&apos;ve grown</h2>
        <h3>
          However, I keep falling in love with the new you every single day.
          &#40;〃ー〃&#41;
        </h3>
      </div>
      <div
        style={{
          backgroundColor: seenDarkSection ? "white" : "black",
          height: "120vh",
          transition: "background-color 0.5s",
          position: "relative",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
        id="section2"
      >
        <Image
          src="/sun.png"
          width={128}
          height={128}
          alt=""
          style={{
            position: "absolute",
            right: seenDarkSection ? "10%" : 0,
            top: seenDarkSection ? "15%" : "50%",
            transition: "top 1s, right 1s",
          }}
        />
        <Image
          src="/forest.png"
          width={80}
          height={80}
          alt=""
          style={{
            position: "absolute",
            left: seenDarkSection ? "10%" : "-10%",
            bottom: "20%",
            transition: "left 1s",
          }}
        />
        <h1
          style={{
            fontFamily: "Pacifico",
            color: seenDarkSection ? "black" : "white",
          }}
        >
          When you smile, you shrine
          <br />
          and brighten even the darkest place!
        </h1>
      </div>
      <div id="thankyou">
        <div id="text">
          <p>T</p>
          <p>H</p>
          <p>A</p>
          <p>N</p>
          <p>K</p>
          <p> </p>
          <p>Y</p>
          <p>O</p>
          <p>U</p>
          <br />
          <p>F</p>
          <p>O</p>
          <p>R</p>
          <br />
          <p>T</p>
          <p>H</p>
          <p>I</p>
          <p>S</p>
          <p> </p>
          <p>A</p>
          <p>M</p>
          <p>A</p>
          <p>Z</p>
          <p>I</p>
          <p>N</p>
          <p>G</p>
          <p> </p>
          <p>2</p>
          <p>0</p>
          <p>2</p>
          <p>2</p>
          <p>!</p>
        </div>
      </div>
    </>
  )
}
