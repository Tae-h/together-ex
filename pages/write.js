import {memo} from "react";
import AppLayout from "../components/AppLayout";
import Head from "next/head";
import {Layout} from "antd";
const { Content, Footer } = Layout;

const Write = memo(() => {


    return (
        <>
            <AppLayout>
                <Head>
                    <title>
                        글 작성 | 운동할래?
                    </title>
                </Head>

                <Content>

                    글쓰기
                </Content>
            </AppLayout>
        </>

    )
});

export default Write;
