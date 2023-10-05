import { Effect } from "react-lazy-load-image-component";

export type ImgProps = {
  className?: string,
  src: string,
  placeholderSrc?: string,
  effect?: Effect,
}