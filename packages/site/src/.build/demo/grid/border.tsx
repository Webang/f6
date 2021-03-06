import { Grid } from 'f6';
const icon = <img width={16} src="https://avatars.githubusercontent.com/u/34447750?s=40&v=4" />;

export default function App() {
  return (
    <>
      <Grid border={true}>
        <Grid.Item icon={icon} text="业务"></Grid.Item>
        <Grid.Item icon={icon} text="财务"></Grid.Item>
      </Grid>
      <div style={{ height: 20 }}></div>
      <Grid border={false}>
        <Grid.Item icon={icon} text="商品"></Grid.Item>
        <Grid.Item icon={icon} text="订单"></Grid.Item>
        <Grid.Item icon={icon} text="物流">主要按钮</Grid.Item>
      </Grid>
    </>
  )
}
