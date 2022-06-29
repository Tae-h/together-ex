import AppLayout from "../components/AppLayout";
import Head from "next/head";
import {Button, Checkbox, Form, Input} from "antd";
import {memo, useCallback, useEffect, useState} from "react";
import styled from "styled-components";


const ErrorMessage = styled.div`
  color: red;
`;

const Signup = memo(() => {



    return (
        <>
            <AppLayout>
                <Head>
                    <title>
                        회원가입
                    </title>
                </Head>
                <Form>
                    <div>
                        <label htmlFor="user-email">아이디</label>
                        <br/>
                        <Input name="user-email" type="email" required/>
                    </div>
                    <div>
                        <label htmlFor="user-nickname">닉네임</label>
                        <br/>
                        <Input name="user-nickname" required />
                    </div>
                    <div>
                        <label htmlFor="phone">휴대전화</label>
                        <br/>
                        <Input name="phone" required />
                    </div>
                    <div>
                        <label htmlFor="user-password">비밀번호</label>
                        <br/>
                        <Input name="user-password" type="password" required />
                    </div>

                    <div>
                        <label htmlFor="user-password-check">비밀번호 체크</label>
                        <br/>
                        <Input name="user-password-check"
                               type="password"
                               required
                               />
                        {/*{passwordError && <ErrorMessage>비밀번호가 일치하지 않습니다.</ErrorMessage>}*/}
                    </div>


                    <div style={{ marginTop: 10 }}>
                        <Button type="primary" htmlType="submit" >가입하기</Button>
                    </div>

                </Form>
            </AppLayout>
        </>
    )
});



export default Signup;
