import { DefaultFooter } from '@ant-design/pro-layout';
import { useIntl } from 'umi';

export default () => {
  const intl = useIntl();

  const currentYear = new Date().getFullYear();

  return (
    <DefaultFooter
      copyright={`${currentYear} ${intl.formatMessage({
        id: 'general.organization',
        defaultMessage: '温州肯恩大学',
      })}`}
      links={[]}
    />
  );
};
