import App0 from './number-keyboard/basic';
import Demo from '../../components/demo-block';
export default () => {
  const title = 'number-keyboard';
  const list = [{
        title: '基本用法',
        element: App0
      },];
  return <Demo list={list} title={title}/>;
}
