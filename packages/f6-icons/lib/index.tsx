import { CSSProperties, FC } from 'react';
import '../iconfont/iconfont.css';

export type IconType = "checkbox-o" | "checkbox" | "close-circle-o" | "flame-o" | "checkmark-circle" | "circle" | "home" | "close-circle" | "information-o" | "person" | "home-o" | "information" | "help-circle" | "success" | "help-circle-o" | "pin-o" | "success1" | "warn" | "arrow-down" | "arrow-left-circle" | "arrow-up" | "search" | "success2" | "arrow-left-circle-o" | "arrow-right" | "arrow-left" | "person-o" | "cart-o" | "megaphone-o" | "flame" | "success3" | "pin" | "error" | "trash-o" | "radio-on" | "megaphone" | "trash" | "backtop" | "cross" | "plus"
export interface IconProps {
  name: IconType;
  className?: string;
  style?: CSSProperties;
}
const Icon: FC<IconProps> = ({
  name,
  className,
  ...restProps
}) => {
  const cls = `wax-icon yus-icon yus-icon-${name} ${className}`
  return <span className={cls} {...restProps}></span>
}

export default Icon;