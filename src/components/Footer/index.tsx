import { DefaultFooter } from '@ant-design/pro-layout';

export default () => {
  const currentYear = new Date().getFullYear();
  return <DefaultFooter copyright={`${currentYear} 温州肯恩大学`} links={[]} />;
};
