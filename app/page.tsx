"use client"
import React from "react"
import NavbarSimple from "./components/NavbarSimple"
import SwitchColors from "./components/SwitchColors"

import { Typography } from "@material-tailwind/react"

export default function Home() {
  return (
    <>
      <NavbarSimple />
      <div className="text-center ">
        <h2>Semi-dynamic Portfolio Site</h2>
        <p>screw this i miss samantha 🥵</p>
      </div>
      <div className=" content-center ">
        <video className="h-full w-full rounded-lg" controls autoPlay>
          <source
            src="https://player.vimeo.com/external/389836750.sd.mp4?s=96843c6d0f70fd25d702f2fe4c75103d086e25cb&profile_id=164&oauth2_token_id=57447761"
            type="video/mp4"
          />
          Your browser does not support the video tag.
        </video>
        <h1 className=" text-2xl text-center">Definition</h1>
        <h2 className=" mx-6">
          The Louvre is one of the world's most famous and historic museums,
          located in Paris, France. Its history spans over eight centuries, and
          it has evolved from a royal palace to a symbol of art and culture.
          Here's an overview of the history of the Louvre:
          <br />
          <br />
          <li>
            <strong>12th Century: </strong>The history of the Louvre dates back
            to the late 12th century when King Philip II (Philip Augustus) built
            a fortified royal palace called the Louvre Castle. It was initially
            constructed as a defensive fortress to protect Paris from Viking
            raids.
          </li>
          <li>
            <strong>14th Century: </strong>In the 14th century, Charles V
            transformed the Louvre into a more comfortable residence, adding
            significant architectural enhancements. However, the Louvre
            continued to serve as a royal residence for several centuries.
            raids.
          </li>
          <li>
            <strong>16th Century: </strong>During the Renaissance, King Francis
            I turned his attention to the arts and began acquiring various works
            of art and books. He invited Italian artist and engineer Leonardo da
            Vinci to live and work at the Château du Clos Lucé in Amboise,
            France. It was during this time that Leonardo created some of his
            famous works, such as the Mona Lisa.
          </li>
        </h2>
      </div>
    </>
  )
}
