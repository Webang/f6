import { Picker, Toast } from 'f6';

const children1 = new Array(30).fill(0).map((it, index) => {
  return { label: `深圳${index}` }
});

const children2 = new Array(30).fill(0).map((it, index) => {
  return { label: `遵义${index}` }
});

const columns = [
  [
    { label: '广东', value: 'A', children: children1 },
    { label: '贵州', value: 'B', children: children2 },
  ],
  children1
]

export default function App() {
  return (
    <Picker
      cascade={true}
      defaultIndex={[0]}
      columns={columns}
      maxLength={2}
      onChange={(index, value, column, picker) => {
        console.log(picker.getValues())
        Toast.show({
          message: picker.getValues().map(it => it.label).join('-')
        })
      }}
    />
  )
}
