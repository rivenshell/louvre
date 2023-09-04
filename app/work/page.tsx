import React from "react"
import Pagination from "../components/Pagination"
import NavbarSimple from "../components/NavbarSimple"

export default function work() {
  return (
    <>
      <NavbarSimple />
      <div className="text-center">
        <h2>All things fabruucated here</h2>
        <Pagination />
      </div>
    </>
  )
}
