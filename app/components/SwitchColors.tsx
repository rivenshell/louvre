"use client"
import { Switch } from "@material-tailwind/react"

export function SwitchColors() {
  return (
    <div className="flex w-max gap-4">
      <Switch color="blue" defaultChecked crossOrigin={true} />
      <Switch color="red" defaultChecked crossOrigin={true} />
      <Switch color="green" defaultChecked crossOrigin={true} />
      <Switch color="amber" defaultChecked crossOrigin={true} />
      <Switch color="teal" defaultChecked crossOrigin={true} />
      <Switch color="indigo" defaultChecked crossOrigin={true} />
      <Switch color="purple" defaultChecked crossOrigin={true} />
      <Switch color="pink" defaultChecked crossOrigin={true} />
    </div>
  )
}

export default SwitchColors
