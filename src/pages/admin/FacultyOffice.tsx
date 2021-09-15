import { Button, message, Table } from 'antd';
import { v4 as uuidv4 } from 'uuid';
import React, { useState } from 'react';
import SpreadsheetPraser from './components/SpreadsheetPraser';
import { CopyOutlined } from '@ant-design/icons';

interface TableEntry {
  用户名称: string;
  办公室: string;
  邮箱: string;
}
interface FacultyInfo {
  name: string;
  office: string;
  email: string;
}

const FacultyOffice: React.FC = () => {
  const [tableData, setTableData] = useState<FacultyInfo[]>([]);

  const handleChange = (data: TableEntry[]) => {
    // process data
    const newData = data.map((item) => {
      const regex = /\(.*\)/;
      const matchRes = item['用户名称'].match(regex);
      return {
        name: matchRes ? matchRes[0].substr(1, matchRes[0].length - 2) : item['用户名称'],
        office: item['办公室'],
        email: item['邮箱'],
      };
    });
    setTableData(newData);
  };

  const handleCopy = () => {
    navigator.clipboard.writeText(JSON.stringify(tableData)).then(() => {
      message.success('复制成功');
    });
  };

  const columns = [
    {
      title: '姓名',
      dataIndex: 'name',
    },
    {
      title: '办公室',
      dataIndex: 'office',
    },
    {
      title: '邮箱',
      dataIndex: 'email',
    },
  ];

  return (
    <>
      <div style={{ marginBottom: 24, display: 'flex' }}>
        <SpreadsheetPraser onChange={handleChange} />
        <Button onClick={handleCopy} icon={<CopyOutlined />}>
          Copy
        </Button>
      </div>
      <Table dataSource={tableData} columns={columns} rowKey={() => uuidv4()} />
    </>
  );
};

export default FacultyOffice;
