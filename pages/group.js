import {memo} from "react";
import Head from "next/head";
import AppLayout from "../components/AppLayout";
import GroupList from "../components/GroupList";

/* 내 그룹 페이지 */
const Group = memo(() => {

    return (
        <>
            <Head>
                <title>프로필</title>
            </Head>

            <AppLayout>
                <GroupList header="내 조기축구 팀"/>
                <GroupList header="내 3:3 농구 팀"/>
            </AppLayout>
        </>
    )
});

export default Group;

