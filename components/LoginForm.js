import {Button, Checkbox, Divider, Form, Image, Input, Space} from 'antd';
import Link  from 'next/link';
import styled from 'styled-components';
import useInput from "../hooks/useInput";
import {useDispatch, useSelector} from "react-redux";
import {useCallback, useEffect, useState} from "react";
import {LOG_IN_REQUEST} from "../reducers/user";
import {AlipayOutlined, LockOutlined, UserOutlined} from "@ant-design/icons";

export const ButtonWrapper = styled.div`
  margin-top: 10px;
  text-align: center;
`
export const FormWrapper = styled(Form)`
  padding: 10px;
  margin-top: 50px;
`;

const RememberDiv = styled.div`
  margin-top: 5px;
  text-align: right;
`
const LoginFormDiv = styled.div`
  margin-bottom: 24px;
`

const iconStyles = {
    color: 'rgba(0, 0, 0, 0.2)',
    fontSize: '18px',
    verticalAlign: 'middle',
    cursor: 'pointer',
};





const LoginForm = () => {
    const dispatch = useDispatch();

    const { loginLoading, loginError } = useSelector((state) => state.user);

    const [email, onChangeEmail] = useInput('');
    const [password, onChangePassword] = useInput('');


    useEffect(() => {
        if ( loginError ) {
            alert(loginError);
        }
    }, [loginError]);



    const onSubmitLogin = useCallback(() => {
        console.log(email, password);
        return dispatch({
            type: LOG_IN_REQUEST,
            data: {email, password},
        });
    }, [email, password]);


    return (
        <>
            <FormWrapper onFinish={ onSubmitLogin }>

                <div>
                    <center>
                        <Image
                            width={200}
                            preview={false}
                            src="https://gw.alipayobjects.com/zos/rmsportal/KDpgvguMpGfqaHPjicRK.svg"
                        />
                    </center>
                </div>

                <LoginFormDiv>
                    <label htmlFor="user-email"></label>
                    <br/>
                    <Input name="user-email"
                           type="email"
                           value={ email }
                           onChange={ onChangeEmail }
                           required
                           placeholder="Email"
                           size={"large"}
                           prefix={<UserOutlined />}
                    />
                </LoginFormDiv>

                <LoginFormDiv>
                    <label htmlFor="user-password"></label>
                    <Input.Password
                        name="user-password"
                        type="password"
                        value={ password }
                        onChange={ onChangePassword }
                        placeholder="password"
                        size={"large"}
                        prefix={<LockOutlined />}
                        required />
                </LoginFormDiv>

                <RememberDiv>
                    <Checkbox>기억하기</Checkbox>
                </RememberDiv>

                <ButtonWrapper>
                    <Space size={8}>
                        <Button
                            type="primary"
                            htmlType="submit"
                            loading={ loginLoading }
                        >
                            로그인
                        </Button>
                        <Link href="/signup">
                            <a><Button>회원가입</Button></a>
                        </Link>
                    </Space>
                </ButtonWrapper>

                <Divider plain>
                  <span style={{ color: '#CCC', fontWeight: 'normal', fontSize: 14 }}>
                    간편 로그인
                  </span>
                </Divider>

                <div style={{
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                    flexDirection: 'column',
                }}>
                    <Space align="center" size={24}>
                        {/* 카카오 */}
                        <div
                            style={{
                                display: 'flex',
                                justifyContent: 'center',
                                alignItems: 'center',
                                flexDirection: 'column',
                                height: 40,
                                width: 40,
                                border: '1px solid #D4D8DD',
                                borderRadius: '50%',
                            }}
                        >
                            <AlipayOutlined style={{ ...iconStyles, color: '#1677FF' }} />
                        </div>

                        {/* 구글 */}
                        <div
                            style={{
                                display: 'flex',
                                justifyContent: 'center',
                                alignItems: 'center',
                                flexDirection: 'column',
                                height: 40,
                                width: 40,
                                border: '1px solid #D4D8DD',
                                borderRadius: '50%',
                            }}
                        >
                            <AlipayOutlined style={{ ...iconStyles, color: '#1677FF' }} />
                        </div>

                        {/* 네이버 */}
                        <div
                            style={{
                                display: 'flex',
                                justifyContent: 'center',
                                alignItems: 'center',
                                flexDirection: 'column',
                                height: 40,
                                width: 40,
                                border: '1px solid #D4D8DD',
                                borderRadius: '50%',
                            }}
                        >
                            <AlipayOutlined style={{ ...iconStyles, color: '#1677FF' }} />
                        </div>
                    </Space>
                </div>

            </FormWrapper>
        </>
    )
}



export default LoginForm;
