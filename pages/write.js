import {memo} from "react";
import AppLayout from "../components/AppLayout";
import Head from "next/head";
import {Layout} from "antd";
const { Content } = Layout;

const Write = memo(() => {


    return (
        <>
            <Head>
                <title>
                    글 작성 | 운동할래?
                </title>
            </Head>

            <AppLayout>
                <Content>
                    글 쓰기

                </Content>
            </AppLayout>
        </>

    )
});

export default Write;
