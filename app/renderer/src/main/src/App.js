import logo from './logo.svg';
import './App.css';
import {ipcRenderer} from'electron'
import React, { useState } from 'react';

import { PoweroffOutlined } from '@ant-design/icons';
import {
  Button,
  Input,
  Select,
  Space
} from 'antd';
const { Option } = Select;



function App() {
  const [loadings, setLoadings] = useState(false);
  const enterLoading = () => {
    setLoadings(true)
    setTimeout(() => {
      setLoadings(() => {
        setLoadings(false)
      });
    }, 2000);
  };

  return (
    <div className="App">
      <div>
        <Input.Group compact>
          <Select defaultValue="Zhejiang">
            <Option value="Zhejiang">Zhejiang</Option>
            <Option value="Jiangsu">Jiangsu</Option>
          </Select>
          <Input
            allowClear
            style={{
              width: '50%',
            }}
            defaultValue="Xihu District, Hangzhou"
          />
          <Button
            style={{
              width: '15%',
            }}
            type="primary"
            onClick={() => enterLoading()}
          >
          {loadings?'loading...':'查询' }
        </Button>
        </Input.Group>
        
      </div>
    </div>
  );
}

export default App;
