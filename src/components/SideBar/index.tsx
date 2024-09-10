import { Card } from "@Minecart/components/Card";
import Purchases from "@Minecart/components/Purchases";
import { useStore } from "@Minecart/contexts/providers/Store";
import { Discord } from "react-discord-widget";
import { SideBarProps } from "./types";

const SideBar = (props: SideBarProps) => {
  const store = useStore();

  return (
    <div {...props} className="flex flex-col gap-3">
      <Purchases />

      <Card>Twitter</Card>

      <Discord id={`${store?.widgets.discord.id}`} />
    </div>
  );
};

export default SideBar;
