---
order: 0
title: 基本用法
---

```jsx
import { useState } from 'react';
import { Flow, Button } from "f6";

export default function () {
  const [current, setCurrent] = useState(0);
  const next = () => setCurrent(p => p + 1 > 3 ? 0 : p + 1)
  return (
    <>
      <Flow current={current} direction="vertical">
        <Flow.Item index={0} title='标题1' description='描述'></Flow.Item>
        <Flow.Item index={1} title='标题2' description='描述'></Flow.Item>
        <Flow.Item index={2} title='标题2' description='描述'></Flow.Item>
      </Flow>
      <div style={{ height: 16 }}></div>
      <Button block onClick={next}>next</Button>
    </>
  );
}
```