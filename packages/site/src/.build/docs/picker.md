<div class="block-panel">

<h3>介绍</h3>

`Picker` 仿 IOS 客户端 `Picker` 的效果，以便 IOS 和 Android 统一。


</div>
<div class="block-panel">
        <a class="to-github-link" target="_blank" href=https://github.com/Webang/f6/tree/master/packages/f6/packages/picker/demo/basic.md>更新此演示代码</a>
        <h3>基本用法</h3>

```jsx
import { Picker, Toast } from 'f6';

const columns = new Array(10).fill(1).map((_, index) => {
  return { label: '广东' + index, value: 'A' }
})

export default function App() {
  return (
    <Picker
      cascade={false}
      defaultIndex={[0]}
      columns={[columns]}
      onChange={(index, value, column, picker) => {
        console.log(picker.getValues())
      }}
    />
  )
}
```
</div>

<div class="block-panel">
        <a class="to-github-link" target="_blank" href=https://github.com/Webang/f6/tree/master/packages/f6/packages/picker/demo/method.md>更新此演示代码</a>
        <h3>相关方法</h3>

```jsx
import { Picker, Toast } from 'f6';

const columns = [
  [
    { label: '广东', value: 'A' },
    { label: '贵州', value: 'B' },
    { label: '浙江', value: 'C' }
  ],
  [
    { label: '苹果1', value: 'A' },
    { label: '苹果2', value: 'B' },
    { label: '苹果3', value: 'C' }
  ]
]

export default function App() {
  return (
    <>
      <Picker
        cascade={false}
        defaultIndex={[0, 0]}
        columns={columns}
        onChange={(index, value, column, picker) => {
          if (index === 0) {
            picker.setColumnOptions(1, [
              { label: '香蕉1', value: 'B' },
              { label: '香蕉1', value: 'C' }
            ])
          }
          console.log(picker)
        }}
      />
    </>
  )
}
```
</div>

<div class="block-panel">
        <a class="to-github-link" target="_blank" href=https://github.com/Webang/f6/tree/master/packages/f6/packages/picker/demo/casade.md>更新此演示代码</a>
        <h3>联动效果</h3>

```jsx
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
```
</div>
<div class="block-panel">

<h3>Props</h3>

| 属性 | 说明 | 类型 | 默认值 |
| :-  | :- | :- | :- |
| columns | 初始状态选项 | `IPickerColumn[]` | `[]` |
| defaultIndex | 初始默认选中的索引 | `number[]` | - |
| cascade | 是否联动 | boolean | false |
| maxLength | 最大联动级数 | number | 3 |
| onChange | 某列选中值发生变化时调用 | `IOnChange` | - |

```tsx
export interface PickerProps {
  columns: IPickerColumns;
  onChange?: IOnChange;
  defaultIndex?: number[];
  cascade?: boolean;
  maxLength?: number;
  optionRender?: OptionRender;
}

export interface IOnMounted {
  (pickerColumn: PickerColumn, index: number): void;
}

export interface IOnDestroyed {
  (pickerColumn: PickerColumn, index: number): void;
}

export interface IOnChange {
  (index: number, value: number, columns: IPickerOption[], picker: PickerRef): void;
}

export interface IOnColumnChange {
  (index: number, value: number, columns: IPickerOption[], picker: PickerColumn): void;
}

export interface IPickerOption {
  label: string;
  value: string | number;
  children?: IPickerOption[];
}

export interface OptionRender {
  (option: { option: IPickerOption, selected: boolean; }): ReactNode;
}

export type IPickerColumn = IPickerOption[];

export type IPickerColumns = IPickerColumn[];
```


</div>
<div class="block-panel">

<h3>Refs</h3>

| 属性 | 说明 | 签名 |
| :-  | :- | :- |
| setOptions | 设置选项 | `(columns: IPickerColumns) => void` |
| getOptions | 获取选项 | `() => IPickerColumns` |
| setIndex | 设置选中索引 | `(list: number[]) => void` |
| getIndex | 获取选中索引 | `() => number[]` |
| setColumnIndex | 设置某列索引 | `(index: number, value: number) => void` |
| getColumnIndex | 获取某列索引 | `(index: number) => number` |
| setColumnOptions | 设置某列选项 | `(index: number, options: IPickerColumn) => void` |
| getColumnOptions | 获取某列选项 | `(index: number) => IPickerColumn` |
| getValues | 获取选中值 | `() => IPickerColumn` |

```tsx
export interface PickerRef {
  slideTo: (index: number, value: number, animation: boolean) => void;
  setOptions: (columns: IPickerColumns) => void;
  getOptions: () => IPickerColumns;
  setColumnOptions: (index: number, options: IPickerColumn) => void;
  getColumnOptions: (index: number) => IPickerColumn;
  setIndex: (list: number[]) => void;
  getIndex: () => number[];
  setColumnIndex: (index: number, value: number) => void;
  getColumnIndex: (index: number) => number;
  getValues: () => IPickerColumn;
}
```
</div>