import {memo} from "react";
import React from 'react';
import AppLayout from "../../components/AppLayout";
import {Layout} from "antd";
const { Content, Footer } = Layout;
import { Input } from 'antd';
const { TextArea } = Input;


import {
    LeftOutlined,
} from "@ant-design/icons";

const headerWrite = {
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

const Write = memo(() => {

    const onChange = (e) => {
        console.log('Change:', e.target.value);
    };

    return (
        <>
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
                    <div className="input-box">
                        <Input showCount placeholder="제목" maxLength={40} onChange={ onChange } />
                    </div>
                    <div className="input-box">
                        <TextArea showCount placeholder='내용을 입력해주세요' maxLength={100} onChange={ onChange } />
                    </div>
                </Content>
            </AppLayout>
        </>

    )
});

export default Write;
