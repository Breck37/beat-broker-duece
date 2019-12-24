import React from "react"

export default function SampleKey({ sound, text = "", style = {} }) {
  let audio = new Audio(sound)

  const playAudio = () => {
    if (audio.paused) {
      audio.play()
    } else {
      audio.currentTime = 0
    }
  }
  return (
    <div
      onClick={playAudio}
      style={{ width: 100, height: 100, backgroundColor: "green", ...style }}
    >
      {/* <audio><source src={soundfile} type="audio/mp3"></source></audio> */}
    </div>
  )
}
