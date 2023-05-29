import { useState } from 'react'
import { Form, Button, Input } from 'antd-mobile'

export default () => {
  const [user, setUser] = useState('')
  const [password, setPassword] = useState('')

  const onFinish = (values) => {
    console.log(values);
  }

  return (
    <div className='login-box'>
      <Form
      onFinish={onFinish}
      footer={
        <Button block type='submit' color='primary' size='large'>
          提交
        </Button>
      }
      >
        <Form.Item
          name='user'
          label='用户名'
          rules={[
            { required: true },
            { type: 'string', min: 6 },
            { type: 'user', warningOnly: true },
          ]}
        >
          <Input placeholder='请输入用户名' />
        </Form.Item>
        <Form.Item
          name='password'
          label='密码'
          rules={[
            { required: true },
            { type: 'string', min: 6 },
            { type: 'password', warningOnly: true },
          ]}
        >
          <Input placeholder='请输入用户名密码' />
        </Form.Item>
      </Form>
    </div>
  )
}