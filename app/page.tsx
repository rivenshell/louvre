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
      </div>
    </>
  )
}
