import PropTypes from 'prop-types';
import React, {useCallback, useRef, useState} from 'react';
import {Avatar, Badge, Button, Card, Col, Drawer, Layout, Menu, Popover, Row, Space} from 'antd';
import styled, {createGlobalStyle} from "styled-components";
import Link from "next/link";
import {
    EditOutlined, LogoutOutlined,
    MenuOutlined, PlusOutlined, TeamOutlined,
    UserOutlined,
} from "@ant-design/icons";
import {useDispatch} from "react-redux";
import {LOG_OUT_REQUEST} from "../reducers/user";
const { Header, Content } = Layout;

/* styled-components 로 빼면 리렌더링이 되지 않음 */
const Global = createGlobalStyle`
  .ant-popover-inner-content {
    padding: 0 !important;
    width: 200px;
  }
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
  .card-list .ant-space-item .ant-card-head {
      border: none;
  }
  .card-list .ant-space-item .ant-card-head {
      border: none;
  }
  .card-list .ant-card-bordered {
      border: transparent;
      box-shadow: 0 2px 4px rgb(0 0 0 / 8%);
  }
  .card-list .ant-card-hoverable:hover {
      border-color: transparent;
      box-shadow: 0 1px 2px -2px rgb(0 0 0 / 16%), 0 3px 6px 0 rgb(0 0 0 / 12%), 0 5px 12px 4px rgb(0 0 0 / 9%);
  }
  
  .wrap .ant-layout .btn-wrap {
      position: fixed;
      right: 25px;
      bottom: 110px;
  }
  .wrap .ant-layout .btn-wrap .btn {
      display: flex;
      align-items: center;
      justify-content: center;
      width: 44px;
      height: 44px;
      background: #fff;
      border-radius: 50%;
      box-shadow: 0 3px 6px -4px #0000001f, 0 6px 16px #00000014, 0 9px 28px 8px #0000000d;
  }
  
`;

const HeaderWrapper = styled(Layout.Header)`
  padding: 0;
  background: #fff;
  box-shadow: 2px 0 8px #00000026;
  border-bottom: 1px solid #ddd;
`

const LayoutWrapper = styled(Layout)`
  height: 100%;
`

const ContentWrapper = styled(Layout.Content)`
  padding: 24px;
  min-height: 360px;
  height: 100%;
  width: 100%;
  background: #fff;
`



const widgetMenus = [
    {key: 'write', label: (<Link href="/write" title={"글쓰기"} ><a>글쓰기</a></Link>), icon: <EditOutlined />},
    {key: 'team', label: (<Link href="/write/team" title={"팀 만들기"} ><a>팀 만들기</a></Link>), icon: <TeamOutlined />},
];

const widgetContents = (
    <Menu
        theme="light"
        mode="inline"
        defaultSelectedKeys={['1']}
        items={ widgetMenus }
    />

)

const menus = [
    {key: 'all', label: (<Link href="/" title={"전체"}><a>전체</a></Link>)},
    {key: 'soccer', label: (<Link href="/posts/soccer" title={"축구"}><a>축구</a></Link>)},
    {key: 'basket', label: (<Link href="/posts/basket" title={"농구"}><a>농구</a></Link>)},
]

const AppLayout = ( { children } ) => {
    const dispatch = useDispatch();
    const [collapsed, setCollapsed] = useState(false);
    const [visible, setVisible] = useState(false);
    const widgetRef = useRef(null);

    const toggleCollapsed = () => {
        setCollapsed(!collapsed);
        setVisible(true);
    };

    const onClose = useCallback(() => {
        setVisible(false);
    }, []);

    const onLogout = useCallback(() => {
        dispatch({
            type: LOG_OUT_REQUEST,
        });
    }, []);

    const onWidgetClick = useCallback(() => {
        widgetRef.current.onClick();
    }, [widgetRef.current]);

    const profileContent = (
        <Menu
            theme="light"
            mode="inline"
            defaultSelectedKeys={['1']}
            items={[
                {key: 'profile_1', label: (<Link href="/profile" title={"프로필"}><a>프로필</a></Link>), icon: <UserOutlined />},
                {key: 'group_2', label: (<Link href="/group" title={"내 팀보기"}><a onClick={ onLogout }>내 팀보기</a></Link>), icon: <TeamOutlined />},
                {key: 'logout_3', label: (<Link href="/" title={"로그아웃"}><a onClick={ onLogout }>로그아웃</a></Link>), icon: <LogoutOutlined />},
            ]}
        />
    );


    return (

        <LayoutWrapper className={'wrap'}>
            <Global />

            <Layout>
                {/* 헤더 */}
                <HeaderWrapper>
                    <Row>
                        <Col xs={4} sm={4} md={4} lg={4} xl={4} xxl={4} style={{ textAlign: 'center' }}>
                            <Button
                                onClick={toggleCollapsed}
                                style={{ marginBottom: 16 }}
                                type="text"
                                size={"large"}
                                ghost={false}
                                icon={<MenuOutlined />}
                            />

                            <Drawer title="Menu"
                                    placement="left"
                                    onClose={onClose}
                                    visible={visible}
                                    closable={true}
                                    width={260}
                                    headerStyle={{ textAlign: 'center' }}
                                    bodyStyle={{ padding: 0 }}
                            >
                                <Menu
                                    theme="light"
                                    mode="inline"
                                    defaultSelectedKeys={['1']}
                                    items={ menus }
                                />
                            </Drawer>
                        </Col>

                        <Col xs={16} sm={16} md={16} lg={16} xl={16} xxl={16} style={{ textAlign: 'center' }}>
                            <Link href="/" ><a style={{ textAlign: 'center' }}>로고</a></Link>
                        </Col>

                        {/* 프로필  */}
                        <Col xs={4} sm={4} md={4} lg={4} xl={4} xxl={4} style={{ textAlign: 'center' }}>
                            <Popover placement="bottomRight"  content={ profileContent } trigger="click">
                                <Badge count={1}>
                                    <Avatar  icon={<UserOutlined />} />
                                </Badge>
                            </Popover>
                        </Col>
                    </Row>
                </HeaderWrapper>

                {/* 컨텐츠 */}
                <Content>
                    <ContentWrapper>
                        {children}
                    </ContentWrapper>
                </Content>

                {/*<Footer style={{ textAlign: 'center'}} >
                </Footer>*/}

                {/* fixed-widget */}
                <div className={'btn-wrap'} onClick={ onWidgetClick }>
                    <div className={'btn'}>
                        <Popover placement="topRight" content={ widgetContents } trigger="click" ref={ widgetRef }>
                            <PlusOutlined  className={'edit-btn'} />
                        </Popover>
                    </div>
                </div>

            </Layout>
        </LayoutWrapper>
    );

};

AppLayout.propTypes = {
    children: PropTypes.node.isRequired,
}

export default AppLayout;
