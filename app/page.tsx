import React from "react"
import NavbarSimple from "./components/NavbarSimple"
import SwitchColors from "./components/SwitchColors"

export default function Home() {
  return (
    <>
      <NavbarSimple />
      <div className="text-center ">
        <h2>Semi-dynamic Portfolio Site</h2>
        <p>screw this i miss samantha 🥵</p>
      </div>
      <div className=" content-center ">
        <SwitchColors />
        <video className="h-full w-full rounded-lg" controls autoPlay>
          <source
            src="https://player.vimeo.com/video/843809307?h=4e0a7905c4"
            type="video/mp4"
          />
          Your browser does not support the video tag.
        </video>
      </div>
    </>
  )
}
