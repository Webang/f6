---
order: 1
title: 禁止输入
---

```jsx
import { useState } from "react";
import { Cell, Input, Toast, Button } from "f6";

export default function () {
  const [value, setValue] = useState("hello world");
  return (
    <>
      <Cell title="账户">
        <Input title="账户" disabled placeholder="请输入账户" />
      </Cell>
      <Cell title="账户">
        <Input title="账户" value={value} disabled placeholder="请输入账户" />
      </Cell>
    </>
  );
}
```