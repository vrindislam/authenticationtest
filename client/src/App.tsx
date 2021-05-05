import React, { FC } from 'react';
import { Layout } from 'antd';
import './App.less';
import MainRoutes from './routes/MainRoutes';
import SiteHeader from './components/SiteHeader';

const { Header, Content, Footer } = Layout;

const App: FC = (): JSX.Element => {
  return (
    <Layout>
      <Header>
        <SiteHeader />
      </Header>
      <Content>
        <MainRoutes />
      </Content>
      <Footer />
    </Layout>
  );
};

export default App;
