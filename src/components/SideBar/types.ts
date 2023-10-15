import { HTMLAttributes } from "react";

export type SideBarProps = HTMLAttributes<HTMLDivElement> & {
  twitter?: string,
  discordId?: string,
}