import {memo} from "react";
import React from 'react';
import AppLayout from "../components/AppLayout";
import Head from "next/head";
import styled from 'styled-components';
import {Layout} from "antd";
const { Content, Footer } = Layout;
import { Input } from 'antd';
const { TextArea } = Input;
import {createGlobalStyle} from "styled-components";
const onChange = (e) => {
    console.log('Change:', e.target.value);
};


import {
    LeftOutlined,
} from "@ant-design/icons";

const headerWrite = {
    paddingBottom: '10px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
}
const headerBtnWrap = {
    position: 'unset',
}
const headerTitle = {
    margin: '0',
    fontSize: '1.125rem',
    fontWeight: 'bold',
}
const headerBtn = {
    border: 'none',
    backgroundColor: 'transparent',
    fontSize: '1rem',
    fontWeight: '700',
}
const inputBox = {
    paddingBottom: '10px',
}
const Global = createGlobalStyle`
    .input-box .ant-input-affix-wrapper {
        padding: 20px;
        border: none;
        border-bottom: 1px solid #ddd;
    }
    .input-box .ant-input-textarea textarea {
        border: none;
    }
`
const Write = memo(() => {


    return (
        <>
            <Global />
            <AppLayout>
                <div className="header" style={{...headerWrite}}>
                    <div className="prev-btn">
                        <LeftOutlined />
                    </div>
                    <p className="title" style={{...headerTitle}}>
                        글 제목
                    </p>
                    <div className="btn-wrap" style={{...headerBtnWrap}}>
                        <button style={{...headerBtn}}>완료</button>
                    </div>
                </div>

                <Content>
                    <div className="input-box" style={{...inputBox}}>
                        <Input showCount placeholder="제목" maxLength={40} onChange={onChange} />
                    </div>
                    <div className="input-box" style={{...inputBox}}>
                        <TextArea showCount placeholder='내용을 입력해주세요' maxLength={100} onChange={onChange} style={{height: 200,}} />
                    </div>
                </Content>
            </AppLayout>
        </>

    )
});

export default Write;
