import Card from "./../Card"
import { SideBarProps } from "./types"

const SideBar = (props: SideBarProps) => {
  return (
    <div {...props} className="flex flex-col gap-3">
      <Card title="TOP COMPRADORES" backgroundTitle="bg-primary">d</Card>

      <Card>Twitter</Card>

      <iframe src="https://discordapp.com/widget?id=451861943364616192&theme=dark" width="100%" height="415" />
    </div>
  )
}

export default SideBar