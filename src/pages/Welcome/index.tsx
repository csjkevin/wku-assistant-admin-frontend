import React from 'react';
import { PageContainer } from '@ant-design/pro-layout';
import { Card, Alert } from 'antd';

export default (): React.ReactNode => {
  return (
    <PageContainer>
      <Card>
        <Alert message="欢迎来到一站式服务中心管理后台" type="success" showIcon banner />
      </Card>
    </PageContainer>
  );
};
