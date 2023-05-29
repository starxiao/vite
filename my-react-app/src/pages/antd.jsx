import React from 'react';
import { Button, Upload } from 'antd';

import { compress, compressAccurately } from 'image-conversion';

const props = {
  action: 'https://www.mocky.io/v2/5cc8019d300000980a055e76',

  onChange({ file, fileList }) {
    if(file.status === 'uploading') {
      console.log(file.originFileObj);

      console.log(props);
      props.compress(file.originFileObj);
      return;
      const fileReader = new FileReader();

      fileReader.onload = () => {
        console.log(fileReader.result);
      }

      fileReader.readAsDataURL(file.originFileObj);
      
      console.log(URL.createObjectURL(file.originFileObj)); 
    }
  },

  compress(file) {
    console.log(`origin file size -> ${file.size}`);
    compress(file, 0.5).then(res => {
      console.log(`compress file size -> ${res.size}`); 
      console.log(res);
    });
  },

  defaultFileList: [
    {
      uid: '1',
      name: 'xxx.png',
      status: 'done',
      response: 'Server ',
      url: 'http://www.baidu.com/xxx.png'
    }
  ]
}

const App = () => {
  return (
    <div className="container">
      <Button type="primary">primary button</Button>
      <Button type="dashed">dashed</Button>
      
      <h1>上传文件</h1>
      <Upload {...props}>
        <Button>Upload</Button>
      </Upload>
    </div>
  )
}

export default App;