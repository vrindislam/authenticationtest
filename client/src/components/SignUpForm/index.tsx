import React, { FC } from 'react';
import { Button, Form, Input } from 'antd';
import { Link, useHistory } from 'react-router-dom';
// eslint-disable-next-line camelcase
import jwt_decode from 'jwt-decode';
import { useDispatch } from 'react-redux';
import { formItemLayout2, tailFormItemLayout } from './formLayout';
import { collectionItemsForm } from './collectionItems';
import RegisterService from '../../services/RegisterService';
import LoginService from '../../services/LoginService';
import { authUser } from '../../store/actionCreators/user';
import './style.less';

interface Values {
  email: string;
  firstName: string;
  lastName: string;
  login: string;
  password: string;
  phone: string;
}
export interface SavedCustomer {
  customerNo: string;
  date: string;
  email: string;
  enabled: boolean;
  firstName: string;
  isAdmin: boolean;
  lastName: string;
  login: string;
  password: string;
  phone: string;
  __v: number;
  _id: string;
}
interface UserData {
  password: string;
  loginOrEmail: string;
}
interface Decoded {
  decoded: string;
}
const SignUpForm: FC = (): JSX.Element => {
  const [form] = Form.useForm();
  const dispatch = useDispatch();
  const history = useHistory();

  const onFinish = (values: Values) => {
    const newCustomer = { ...values, isAdmin: false };
    const userData: UserData = {
      password: '',
      loginOrEmail: '',
    };
    RegisterService.RegisterResult(newCustomer)
      .then((savedCustomer: SavedCustomer) => {
        userData.loginOrEmail = savedCustomer.email;
        userData.password = values.password;
        LoginService.LoginResult(userData)
          .then((loginResult) => {
            localStorage.setItem('token', loginResult.token);
            const decoded: Decoded = jwt_decode(loginResult.token);
            // eslint-disable-next-line @typescript-eslint/ban-ts-comment
            // @ts-ignore
            delete decoded.iat;
            dispatch(authUser({ ...decoded, isAuthenticated: true }));
            history.push('/');
          })
          .catch((err) => {
            // errorRegisterToastCustom();
            console.log('login error', err);
          });
      })
      .catch((err) => {
        // errorRegisterToastCustom();
        console.log(err);
      });
  };
  return (
    <Form
      /* eslint-disable-next-line react/jsx-props-no-spreading */
      {...formItemLayout2}
      form={form}
      name="register"
      onFinish={onFinish}
      initialValues={{
        phone: '+380',
      }}
      scrollToFirstError
    >
      {/* eslint-disable-next-line react/jsx-props-no-spreading */}
      <Form.Item className="registration-form-title" {...tailFormItemLayout}>
        Sign Up
      </Form.Item>
      {collectionItemsForm.map((formItem: any) => (
        <Form.Item name={formItem.name} label={formItem.label} rules={formItem.rules} key={formItem.name}>
          {formItem.name === 'password' ? (
            <Input.Password maxLength={formItem.maxLength} placeholder={formItem.label} />
          ) : (
            <Input maxLength={formItem.maxLength} placeholder={formItem.label} onKeyPress={formItem.onKeyPress} />
          )}
        </Form.Item>
      ))}
      {/* eslint-disable-next-line react/jsx-props-no-spreading */}
      <Form.Item {...tailFormItemLayout}>
        <Button className="registration-button" type="primary" htmlType="submit">
          Register
        </Button>
      </Form.Item>
      {/* eslint-disable-next-line react/jsx-props-no-spreading */}
      <Form.Item {...tailFormItemLayout}>
        Already registered?
        <Link to="/login"> Sign In now</Link>
      </Form.Item>
    </Form>
  );
};

export default SignUpForm;
