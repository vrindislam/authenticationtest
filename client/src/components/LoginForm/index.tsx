import React, { FC } from 'react';
import { Link, useHistory } from 'react-router-dom';
import { Button, Form, Input } from 'antd';
import { LockOutlined, UserOutlined } from '@ant-design/icons';
// eslint-disable-next-line camelcase
import jwt_decode from 'jwt-decode';
import { useDispatch } from 'react-redux';
import LoginService from '../../services/LoginService';
import { authUser } from '../../store/actionCreators/user';
import './style.less';

export interface CustomerData {
  loginOrEmail: string;
  password: string;
}
interface LoginResult {
  success: number;
  token: string;
}
interface Decoded {
  decoded: string;
}

const LoginForm: FC = (): JSX.Element => {
  const [form] = Form.useForm();
  const history = useHistory();
  const dispatch = useDispatch();
  const onFinish = (customerData: CustomerData) => {
    console.log('customerData', customerData);
    LoginService.LoginResult(customerData)
      .then((loginResult: LoginResult) => {
        localStorage.setItem('token', loginResult.token);
        console.log('loginResult', loginResult);
        const decoded: Decoded = jwt_decode(loginResult.token);
        // eslint-disable-next-line @typescript-eslint/ban-ts-comment
        // @ts-ignore
        delete decoded.iat;
        dispatch(authUser({ ...decoded, isAuthenticated: true }));
        history.push('/');
      })
      .catch((err) => {
        const error: CustomerData = err.response.data;
        console.log('error', error);
      });
  };
  return (
    <div className="login-page-wrapper">
      <Form
        form={form}
        name="login-form"
        initialValues={{
          remember: true,
        }}
        onFinish={onFinish}
      >
        <Form.Item className="login-form-title">Sign In</Form.Item>
        <Form.Item
          name="loginOrEmail"
          className="login-form-item-margin"
          label="Login or Email"
          rules={[
            {
              required: true,
              message: 'Please input your Username or Email!',
            },
          ]}
        >
          <Input prefix={<UserOutlined className="site-form-item-icon" />} placeholder="Username" />
        </Form.Item>
        <Form.Item
          name="password"
          className="login-form-item-margin"
          label="Password"
          rules={[
            {
              required: true,
              message: 'Please input your Password!',
            },
          ]}
        >
          <Input.Password prefix={<LockOutlined className="site-form-item-icon" />} placeholder="Password" />
        </Form.Item>
        <Form.Item className="login-form-item-margin">
          <Link to="/forgot-password">Forgot password?</Link>
        </Form.Item>
        <Form.Item>
          Do not have an account?
          <Link to="/signup">Sign Up!</Link>
        </Form.Item>
        <Button className="login-form-button" type="primary" htmlType="submit" style={{ width: '100px' }}>
          Sign in
        </Button>
      </Form>
    </div>
  );
};

export default LoginForm;
