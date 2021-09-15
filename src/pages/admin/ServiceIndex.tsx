import { Button, message, Table } from 'antd';
import { v4 as uuidv4 } from 'uuid';
import React, { useState } from 'react';
import SpreadsheetPraser from './components/SpreadsheetPraser';
import { CopyOutlined } from '@ant-design/icons';

interface ServiceInfo {
  dept: string;
  serv: string;
  contact: string;
  office: string;
  telephone: string;
}

const ServiceIndex: React.FC = () => {
  const [tableData, setTableData] = useState<any[]>([]);

  const handleChange = (data: ServiceInfo[]) => {
    setTableData(data);
  };

  const handleCopy = () => {
    navigator.clipboard.writeText(JSON.stringify(tableData)).then(() => {
      message.success('复制成功');
    });
  };

  const columns = [
    {
      title: '部门',
      dataIndex: 'dept',
    },
    {
      title: '服务',
      dataIndex: 'serv',
    },
    {
      title: '联系人',
      dataIndex: 'contact',
    },
    {
      title: '办公室',
      dataIndex: 'office',
    },
    {
      title: '电话',
      dataIndex: 'telephone',
    },
  ];

  return (
    <>
      <div style={{ marginBottom: 24 }}>
        <SpreadsheetPraser onChange={handleChange} />
        <Button onClick={handleCopy} icon={<CopyOutlined />}>
          Copy
        </Button>
      </div>
      <Table dataSource={tableData} columns={columns} rowKey={() => uuidv4()} />
    </>
  );
};

export default ServiceIndex;
