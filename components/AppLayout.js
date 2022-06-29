import PropTypes from 'prop-types';
import Link from 'next/link'; // 넥스트에서 지원
import { Menu, Input, Row, Col } from 'antd';
import {memo} from "react";
import styled, {createGlobalStyle} from "styled-components";
import useInput from "../hooks/useInput";
import LoginForm from "./LoginForm";
import {HomeOutlined, ProfileOutlined, UserAddOutlined, UserOutlined} from "@ant-design/icons";

/* styled-components 로 빼면 리렌더링이 되지 않음 */
const SearchInput = styled(Input.Search)`
  vertical-align: middle;
`;

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
`;

const Wrapper = styled.div``



const AppLayout = memo(( { children } ) => {


    return (
        <Wrapper>
            <Global/>
            <Menu mode="horizontal" theme="light" style={{}}>
                <Menu.Item key={"home"}>
                    <Link href="/">
                        <a title="홈"><HomeOutlined /></a>
                    </Link>
                </Menu.Item>

                <Menu.Item key={"profile"}>
                    <Link href="/profile">
                        <a title="프로필"><ProfileOutlined /></a>
                    </Link>
                </Menu.Item>

                <Menu.Item key={"signup"}>
                    <Link href="/signup">
                        <a title="회원가입"><UserAddOutlined /></a>
                    </Link>
                </Menu.Item>
            </Menu>
            <Row gutter={8}>
                <Col xs={24} md={6} >
                    <LoginForm />
                </Col>
                <Col xs={24} md={12} >
                    { children }
                </Col>
                <Col xs={24} md={6} >
                </Col>
            </Row>
        </Wrapper>
    )

});

AppLayout.propTypes = {
    children: PropTypes.node.isRequired,
}

export default AppLayout;
