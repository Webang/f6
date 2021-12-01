import { Cell, Button, Toast } from 'f6/packages';

export default function App() {
  return (
    <Cell.Group>
      <Cell title={"top"} link onClick={() => {
        Toast.show({
          position: 'top',
          message: '请求成功',
        });
      }} />
      <Cell title={"middle"} link onClick={() => {
        Toast.show({
          position: 'middle',
          message: '请求成功'
        });
      }} />
      <Cell title={"bottom"} link onClick={() => {
        Toast.show({
          position: 'bottom',
          message: '请求成功'
        });
      }} />
    </Cell.Group>
  )
}