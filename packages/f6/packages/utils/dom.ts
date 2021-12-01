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

export const getScrollTop = (element: Window|Element) => {
  if (element === window) {
    return Math.max(window.pageYOffset || 0, document.documentElement.scrollTop);
  } else {
    return (element as Element).scrollTop;
  }
}

export const getPosition = (type: string, event: any) => {
  if (["mousedown", "mousemove"].includes(type)) {
    return {
      clientX: event.clientX,
      clientY: event.clientY,
    }
  }
  return event.changedTouches[0];
}