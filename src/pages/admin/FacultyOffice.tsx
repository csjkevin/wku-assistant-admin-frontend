import { Table } from 'antd';

import { v4 as uuid } from 'uuid';
import React, { useState } from 'react';
import SpreadsheetPraser from './components/SpreadsheetPraser';

const ServiceIndex: React.FC = () => {
  const [tableData, setTableData] = useState<any[]>([]);

  const handleChange = (data: any[]) => {
    const newData = data.map((item) => {
      const regex = /\(.*\)/;
      const found = item['用户名称'].match(regex);
      if (found) {
        item['用户名称'] = found[0].substr(1, found[0].length - 2);
      }
      return item;
    });
    setTableData(newData);
  };

  const columns = [
    {
      title: '姓名',
      dataIndex: '用户名称',
    },
    {
      title: '办公室',
      dataIndex: '办公室',
    },
    {
      title: '邮箱',
      dataIndex: '邮箱',
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
