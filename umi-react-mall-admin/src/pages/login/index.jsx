import {
    LockOutlined,
  UserOutlined,
} from '@ant-design/icons';
import { Alert, Tabs } from 'antd';
import React, {useEffect} from 'react';
import ProForm, {  ProFormText } from '@ant-design/pro-form';
import {  connect,history } from 'umi';
import styles from './index.less';

const LoginMessage = ({ content }) => (
  <Alert
    style={{
      marginBottom: 24,
    }}
    message={content}
    type="error"
    showIcon
  />
);

const Login = (props) => {
  // 已经登录直接去首页
  useEffect(() => {
    const userInfo = localStorage.getItem('userInfo')
    if (!userInfo) history.replace('/')
  })
  const { userLogin = {}, submitting } = props;
  const {status} = userLogin

  const handleSubmit = (values) => {
    const { dispatch } = props;
    const adminAccount = {
      email:'super@a.com',
      password:'123123'
    }

    const userAccount = {
      email: 'test@a.com',
      password:'123123'
    }
    dispatch({
      type: 'login/login',
      payload: { ...adminAccount },
    });
  };

  return (
    <div className={styles.main}>
      <ProForm
        initialValues={{
          autoLogin: true,
        }}
        submitter={{
          render: (_, dom) => dom.pop(),
          submitButtonProps: {
            loading: submitting,
            size: 'large',
            style: {
              width: '100%',
            },
          },
        }}
        onFinish={(values) => {
          handleSubmit(values);
          return Promise.resolve();
        }}
      >
        <Tabs activeKey='account' >
          <Tabs.TabPane
            key="account"
            tab='login'
          />
        </Tabs>

        {status === 'error' && !submitting && (
          <LoginMessage
            content='error'
          />
        )}

            <ProFormText
              name="email"
              fieldProps={{
                size: 'large',
                prefix: <UserOutlined className={styles.prefixIcon} />,
              }}
              placeholder='邮箱：super@a.com'
              rules={[
                {
                  required: true,
                  message: '请输入邮箱',
                }
              ]}
            />
            <ProFormText.Password
              name="password"
              fieldProps={{
                size: 'large',
                prefix: <LockOutlined className={styles.prefixIcon} />,
              }}
              placeholder='密码:123123'
              rules={[
                {
                  required: true,
                  message: '请输入密码',
                },
              ]}
            />
      </ProForm>
    </div>
  );
};

export default connect(({ login, loading }) => ({
  userLogin: login,
  submitting: loading.effects['login/login'],
}))(Login);
