---
order: 0
title: 基本用法
---

```jsx
import { Tab } from 'f6';

const { TabItem } = Tab;

export default function App() {
  return (
    <Tab>
      <TabItem title="标签1">1</TabItem>
      <TabItem title="标签2">2</TabItem>
      <TabItem title="标签3">3</TabItem>
      <TabItem title="标签4">4</TabItem>
    </Tab>
  )
}
```