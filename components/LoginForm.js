import {Button, Form, Input} from 'antd';
import {useCallback, useEffect, useMemo, useState} from "react";
import Link  from 'next/link';
import styled from 'styled-components';
import useInput from "../hooks/useInput";

const ButtonWrapper = styled.div`
  margin-top: 10px;
`
const FormWrapper = styled(Form)`
      padding: 10px;
    `;

const LoginForm = () => {


    const [email, onChangeEmail] = useInput('');
    const [password, onChangePassword] = useInput('');

    return (
        <>
            <FormWrapper>
                <div>
                    <label htmlFor="user-email">이메일</label>
                    <br/>
                    <Input name="user-email"  type="email" value={ email }  onChange={ onChangeEmail } required />
                </div>
                <div>
                    <label htmlFor="user-password">비밀번호</label>
                    <br/>
                    <Input
                        name="user-password"
                        type="password"
                        value={ password }
                        onChange={ onChangePassword }
                        required />
                </div>
                <ButtonWrapper>
                    <Button
                        type="primary"
                        htmlType="submit"
                    >
                        로그인
                    </Button>
                    <Link href="/signup"><a><Button>회원가입</Button></a></Link>
                </ButtonWrapper>

            </FormWrapper>
        </>
    )
}



export default LoginForm;
