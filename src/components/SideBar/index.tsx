import { Card } from "@Minecart/components/Card";
import Goal from "@Minecart/components/Goal";
import Purchases from "@Minecart/components/Purchases";
import { useStore } from "@Minecart/contexts/providers/Store";
import { cn } from "@Minecart/lib/utils";
import { Discord } from "react-discord-widget";
import { SideBarProps } from "./types";

const SideBar = (props: SideBarProps) => {
  const store = useStore();

  return (
    <aside {...props} className={cn("flex min-w-0 flex-col gap-4 lg:sticky lg:top-24 lg:self-start", props.className)}>
      <Purchases />

      <Card className="p-5 text-sm text-gray-500">Twitter</Card>

      <Goal />

      <Discord id={`${store?.widgets.discord.id}`} />
    </aside>
  );
};

export default SideBar;
