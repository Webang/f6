/**
 * 获取元素所属的滚动容器
 */
export const getScrollTarget = (element: Element) => {
  let currentElement: Element | null = element;
  while (
    currentElement &&
    ["HTML", "BODY"].indexOf(currentElement.tagName) === -1
  ) {
    let overflow =
      document.defaultView!.getComputedStyle(currentElement).overflowY;
    if (["scroll", "auto"].indexOf(overflow) !== -1) {
      return currentElement;
    }
    currentElement = currentElement.parentNode as Element;
  }
  return window;
};

/**
 * 获取 window scrollTop
 */
export const getScrollTop = (element: Window | Element) => {
  if (element === window) {
    return Math.max(
      window.pageYOffset || 0,
      document.documentElement.scrollTop
    );
  } else {
    return (element as Element).scrollTop;
  }
};

/**
 * 获取鼠标事件的当前坐标点
 */
export const getPosition: (
  type: string,
  event: any
) => {
  clientX: number;
  clientY: number;
} = (type: string, event: any) => {
  if (["mousedown", "mousemove"].includes(type)) {
    return {
      clientX: event.clientX,
      clientY: event.clientY,
    };
  }
  return event.changedTouches[0];
};

/**
 * 判断 target 是否为 node 的父元素
 */
export const isParent = (node: Element, target: Element) => {
  if (node === target) {
    return true;
  }
  while ((node = node?.parentNode as Element)) {
    if (node === target) {
      return true;
    }
  }
  return false;
};

/**
 * is mobile
 */
export const isMobile = () => {
  return "ontouchstart" in window;
};
