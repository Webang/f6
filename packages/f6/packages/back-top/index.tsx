import Icon from "f6-icons";
import { getScrollTop } from "../utils/dom";
import { FC, useEffect, useState } from "react";
import { defineName } from "../utils/name";
import './index.less';

const[prefix] = defineName('back-top');

export interface BackTopProps {
  bottom?: number;
  distance?: number;
}

const BackTop: FC<BackTopProps> = ({
  children,
  distance = 10
}) => {
  const [visible, setVisible] = useState(false);
  const updateVisible = () => {
    setVisible(() => getScrollTop(window) > distance)
  }

  const toTop = () => {
    document.documentElement.scrollTop = 0;
  }

  useEffect(() => {
    window.addEventListener('scroll', updateVisible)
    return () => {
      window.removeEventListener('scroll', updateVisible)
    }
  }, [])

  if (!visible) return null;

  return (
    <div className={`${prefix}`} onClick={toTop}>
      <div className={`${prefix}__inner`}>
        <Icon name="arrow-up" className={`${prefix}__icon`} />
        {children}
      </div>
    </div>
  )
}

export default BackTop;