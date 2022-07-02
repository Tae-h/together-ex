import {Button, Checkbox, Form, Image, Input, Space} from 'antd';
import Link  from 'next/link';
import styled from 'styled-components';
import useInput from "../hooks/useInput";
import {useDispatch, useSelector} from "react-redux";
import {useCallback, useEffect} from "react";
import {LOG_IN_REQUEST} from "../reducers/user";

const ButtonWrapper = styled.div`
  margin-top: 10px;
  text-align: center;
`
const FormWrapper = styled(Form)`
      padding: 10px;
    `;

const RememberDiv = styled.div`
  margin-top: 5px;
  text-align: right;
`
const LoginFormDiv = styled.div`
  margin-top: 10px;
`

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
`
                <LoginFormDiv>
                    <label htmlFor="user-email">이메일</label>
                    <br/>
                    <Input name="user-email"  type="email" value={ email }  onChange={ onChangeEmail } required placeholder="Email" />
                </LoginFormDiv>

                <LoginFormDiv>
                    <label htmlFor="user-password">비밀번호</label>
                    <br/>
                    <Input.Password
                        name="user-password"
                        type="password"
                        value={ password }
                        onChange={ onChangePassword }
                        placeholder="password"
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

            </FormWrapper>
        </>
    )
}



export default LoginForm;
