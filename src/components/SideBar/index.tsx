import { Discord } from "react-discord-widget";
import Purchases from "../Purchases";
import { useStore } from "./../../contexts/providers/Store";
import Card from "./../Card";
import { SideBarProps } from "./types";

const SideBar = (props: SideBarProps) => {
  const store = useStore();

  return (
    <div {...props} className="flex flex-col gap-3">
      <Purchases />

      <Card>Twitter</Card>

      <Discord id={`${store?.widgets.discord.id}`} />
    </div>
  )
}

export default SideBar