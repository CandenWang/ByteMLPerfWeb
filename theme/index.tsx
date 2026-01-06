import Theme from 'rspress/theme';
import { HomeLayout } from './HomeLayout';
import '@arco-design/web-react/dist/css/arco.css';

export * from 'rspress/theme';

export default {
  ...Theme,
  HomeLayout,
};
