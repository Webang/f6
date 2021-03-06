import { Affix, CheckList, Toast } from "f6";

export default function App() {
  return (
    <div style={{ backgroundColor: "#fff" }}>
      <CheckList
        defaultValue={["B"]}
        multiple
        onChange={(v) => Toast.show({ message: v })}
      >
        <CheckList.Item value="A">A</CheckList.Item>
        <CheckList.Item value="B">B</CheckList.Item>
        <CheckList.Item value="C" disabled>
          C
        </CheckList.Item>
      </CheckList>
    </div>
  );
}
