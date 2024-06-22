import { Discord } from "react-discord-widget";
import { useStore } from "./../../contexts/providers/Store";
import Card from "./../Card";
import { SideBarProps } from "./types";

const SideBar = (props: SideBarProps) => {
  const store = useStore();

  return (
    <div {...props} className="flex flex-col gap-3">
      <Card title="TOP COMPRADORES" backgroundTitle="bg-primary">d</Card>

      <Card>Twitter</Card>

      <Discord id={`${store?.widgets.discord.id}`} />
    </div>
  )
}

export default SideBar