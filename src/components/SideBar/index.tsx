import Card from "./../Card"
import { SideBarProps } from "./types"

const SideBar = (props: SideBarProps) => {
  return (
    <div {...props} className="flex flex-col gap-3">
      <Card title="TOP COMPRADORES" backgroundTitle="bg-primary">d</Card>

      <Card>Twitter</Card>
      <Card>Discord</Card>
    </div>
  )
}

export default SideBar