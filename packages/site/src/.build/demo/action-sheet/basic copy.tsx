import { Cell, Button, ActionSheet, Toast } from "f6";
import { useState } from "react";

export default function App() {
  const [visible, setVisible] = useState(false);

  const show = () => setVisible(true);
  const hide = () => setVisible(false);
  const callback = (index: number) => {
    Toast.show({ message: index });
    hide();
  };

  const mButton = (
    <Button size="mini" color="primary" onClick={show}>
      显示
    </Button>
  );

  return (
    <div>
      <Cell title="标题" value={mButton} />
      <ActionSheet
        visible={visible}
        onClose={hide}
        callback={callback}
        actions={[{ title: "相机" }, { title: "相册" }]}
      />
    </div>
  );
}
