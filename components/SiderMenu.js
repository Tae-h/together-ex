import React from 'react';
import {Menu, Layout} from 'antd';
import styled from "styled-components";
import {UploadOutlined, UserOutlined, VideoCameraOutlined} from "@ant-design/icons";
const { Sider } = Layout;



const SiderWrapper = styled(Layout.Sider)`
  box-shadow: 2px 0 8px #00000026;
  border-radius: 0 4px 4px 0;
`

const SiderMenu = () => {

    return (
        <>
            {/* 옆의 메뉴 */}
            <SiderWrapper
                theme={"light"}
                breakpoint="lg"
                collapsedWidth="0"
                onBreakpoint={(broken) => {
                    console.log(broken);
                }}
                onCollapse={(collapsed, type) => {
                    console.log(collapsed, type);
                }}
                style={{ color: 'white' }}
            >
                <div className="logo" />
                <Menu
                    theme="light"
                    mode="inline"
                    defaultSelectedKeys={['4']}
                    items={[UserOutlined, VideoCameraOutlined, UploadOutlined, UserOutlined].map(
                        (icon, index) => ({
                            key: String(index + 1),
                            icon: React.createElement(icon),
                            label: `nav ${index + 1}`,
                        }),
                    )}
                />
            </SiderWrapper>

        </>

    )
}

export default SiderMenu;
