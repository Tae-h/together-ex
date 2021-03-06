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
const inputWrap = {
    margin: '0 auto',
    maxWidth: '500px',
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

                <div className="input-wrap" style={{...inputWrap}}>
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
                        <Checkbox>????????????</Checkbox>
                    </RememberDiv>
                </div>


                <ButtonWrapper>
                    <Space size={8}>
                        <Button
                            type="primary"
                            htmlType="submit"
                            loading={ loginLoading }
                        >
                            ?????????
                        </Button>
                        <Link href="/signup">
                            <a><Button>????????????</Button></a>
                        </Link>
                    </Space>
                </ButtonWrapper>

                <Divider plain>
                  <span style={{ color: '#CCC', fontWeight: 'normal', fontSize: 14 }}>
                    ?????? ?????????
                  </span>
                </Divider>

                <div style={{
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                    flexDirection: 'column',
                }}>
                    <Space align="center" size={24}>
                        {/* ????????? */}
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

                        {/* ?????? */}
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

                        {/* ????????? */}
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
