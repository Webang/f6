---
order: 1
title: 嵌入内容
---

```jsx
import React from 'react';
import { Button, Overlay } from 'f6';

export default function App() {
  const [visible, setVisible] = React.useState(false);
  const show = () => setVisible(true);
  const hide = () => setVisible(false);
  const style = {
    position: 'fixed',
    top: '50%',
    left: '50%',
    padding: '12px 16px',
    backgroundColor: '#fff',
    transform: 'translate3d(-50%, -50%, 0)'
  };

  return (
    <div>
      <Button color="primary" onClick={show}>点击显示</Button>
      <Overlay onClick={hide} visible={visible}>
        <div style={style}>hello world</div>
      </Overlay>
    </div>
  )
}
```