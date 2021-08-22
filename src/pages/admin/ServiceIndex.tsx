import { Table } from 'antd';

import { v4 as uuid } from 'uuid';
import React, { useState } from 'react';
import SpreadsheetPraser from './components/SpreadsheetPraser';

const ServiceIndex: React.FC = () => {
  const [tableData, setTableData] = useState([]);

  const handleChange = (data: any[]) => {
    setTableData(data);
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
      </div>
      <Table dataSource={tableData} columns={columns} rowKey={() => uuid()} />
    </>
  );
};

export default ServiceIndex;
