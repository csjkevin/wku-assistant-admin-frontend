import type { UploadChangeParam, UploadFile } from 'antd/es/upload/interface';
import React, { useState } from 'react';
import XLSX from 'xlsx';
import { UploadOutlined } from '@ant-design/icons';
import { Button, Upload } from 'antd';

interface Props {
  onChange?: (data: any[]) => void;
}

const SpreadsheetPraser: React.FC<Props> = (props) => {
  const { onChange = () => {} } = props;
  const [fileList, setFileList] = useState<UploadFile[]>([]);

  const fileReader = new FileReader();
  fileReader.onload = (e) => {
    const file = new Uint8Array(e?.target?.result as ArrayBuffer);
    const workbook = XLSX.read(file, { type: 'array' });
    const sheets = workbook.Sheets;
    const sheet_keys = Object.keys(sheets);
    if (sheet_keys.length > 0) {
      const data = XLSX.utils.sheet_to_json(sheets[sheet_keys[0]]);
      if (Array.isArray(data)) {
        onChange(data);
      }
    }
  };

  const handleChange = (info: UploadChangeParam) => {
    const list = info.fileList.slice(-1);
    setFileList(list);

    const file = list[0];
    if (
      file.type === 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet' &&
      file.originFileObj
    ) {
      fileReader.readAsArrayBuffer(file.originFileObj);
    }
  };

  return (
    <Upload
      onChange={handleChange}
      fileList={fileList}
      beforeUpload={() => {
        return false;
      }}
      accept=".xls,.xlsx,application/vnd.openxmlformats-officedocument.spreadsheetml.sheet"
    >
      <Button icon={<UploadOutlined />}>Upload</Button>
    </Upload>
  );
};

export default SpreadsheetPraser;
