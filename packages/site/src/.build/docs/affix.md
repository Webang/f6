<div class="block-panel">

<h3>介绍</h3>

Affix 与 `position: sticky` 实现的效果一致，当组件在容器范围内时，会按照正常的布局排列，当组件滚出容器范围时，始终会固定在容器的指定位置。


</div>
<div class="block-panel">
        <a class="to-github-link" target="_blank" href=https://github.com/Webang/f6/tree/master/packages/f6/packages/affix/demo/basic.md>更新此演示代码</a>
        <h3>基本用法</h3>

```jsx
import { Affix, Button } from "f6";

export default function App() {
  return (
    <div style={{ height: "700px", background: "#607d8b" }}>
      <Affix top={20}>
        <Button size="sm" shape="round" color="primary">
          首页
        </Button>
      </Affix>
    </div>
  );
}
```
</div>

<div class="block-panel">
        <a class="to-github-link" target="_blank" href=https://github.com/Webang/f6/tree/master/packages/f6/packages/affix/demo/container.md>更新此演示代码</a>
        <h3>设置容器</h3>

```jsx
import React from "react";
import { Affix, Button } from "f6";

export default function App() {
  const ref = React.useRef<HTMLDivElement>(null);
  return (
    <div
      ref={ref}
      style={{
        height: "200px",
        background: "#607d8b",
        overflow: "scroll",
        position: "relative",
      }}
    >
      <div style={{ height: "40px" }}></div>
      <Affix top={10} container={() => ref.current}>
        <Button size="sm" shape="round" color="primary">
          首页
        </Button>
      </Affix>
      <div style={{ height: "300px" }}></div>
    </div>
  );
}
```
</div>
<div class="block-panel">

<h3>Props</h3>

| 属性 | 说明 | 类型 | 默认值 |
| :-  | :- | :- | :- |
| top | 距离顶部距离 | number | `0` |
| container | 相对偏移的容器 | `(() => HTMLElement) \| Window` | `window` |
| wrapperStyle | 容器样式 | `(params: { fixed: boolean }) => React.CSSProperties` | - |

```tsx
export interface AffixProps {
  top?: number;
  container?: (() => HTMLElement) | Window;
  wrapperStyle?: (params: { fixed: boolean }) => React.CSSProperties;
}
```
</div>