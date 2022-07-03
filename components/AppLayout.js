import PropTypes from 'prop-types';
import React from 'react';
import {Col, Layout, Menu, Row} from 'antd';
import styled, {createGlobalStyle} from "styled-components";
import SiderMenu from "./SiderMenu";
import Link from "next/link";
import {UserAddOutlined, UserOutlined} from "@ant-design/icons";
const { Header, Content, Footer } = Layout;

/* styled-components 로 빼면 리렌더링이 되지 않음 */


const Global = createGlobalStyle`
  .ant-row {
    margin-right: 0 !important;
    margin-left: 0 !important;
  }
  .ant-col:first-child {
    padding-left: 0 !important;
  }
  .ant-col:last-child {
    padding-right: 0 !important;
  }

  /* 사이드 메뉴 css */
  .logo {
    height: 32px;
    margin: 16px;
    background: rgba(255, 255, 255, 0.2);
  }

  .site-layout-sub-header-background {
    background: #fff;
  }

  .site-layout-background {
    background: #fff;
  }

  #__next {
    height: 100%;
  }
  
  .ant-layout-sider-zero-width-trigger {
    box-shadow: 2px 0 8px #00000026;
    border-radius: 0 4px 4px 0;
  }
`;

const HeaderWrapper = styled(Layout.Header)`
  padding: 0;
  background: #fff;
  box-shadow: 2px 0 8px #00000026;
`

const AppLayout = ( { children } ) => {


    return (

        <Layout style={{height: '100%'}}>
            <Global />

            {/* 사이드 메뉴 */}
            <SiderMenu />

            <Layout>

                {/* 헤더 */}
                <HeaderWrapper>
                    <Row>
                        <Col xs={24} sm={24} md={6} lg={6} xl={5} xxl={4} style={{ textAlign: 'center' }}>
                            <h1>로고</h1>
                        </Col>
                        <Col xs={0} sm={0} md={18} lg={18} xl={19} xxl={20}>
                            <Menu mode="horizontal">
                                <Menu.Item icon={<UserOutlined />}>
                                    <Link href="/"><a>프로필</a></Link>
                                </Menu.Item>

                                <Menu.Item icon={<UserAddOutlined />}>
                                    <Link href="/"><a>회원가입</a></Link>
                                </Menu.Item>
                            </Menu>
                        </Col>
                    </Row>
                </HeaderWrapper>

                {/* 컨텐츠 */}
                <Content
                    style={{
                        margin: '24px 16px 0',
                    }}
                >
                    <div
                        className="site-layout-background"
                        style={{
                            padding: 24,
                            minHeight: 360,
                            height: '100%',
                        }}
                    >
                        { children }
                    </div>
                </Content>
                <Footer
                    style={{
                        textAlign: 'center',
                    }}
                >
                    Ant Design ©2018 Created by Ant UED
                </Footer>
            </Layout>
        </Layout>
    );

};

AppLayout.propTypes = {
    children: PropTypes.node.isRequired,
}

export default AppLayout;
