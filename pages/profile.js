import AppLayout from "../components/AppLayout";
import Head from "next/head";
import {memo} from "react";
import GroupList from "../components/GroupList";



const Profile = memo(() => {


    return (
        <>
            <Head>
                <title>프로필</title>
            </Head>

            <AppLayout>
                <GroupList header="그룹1"/>
                <GroupList header="그룹2"/>
            </AppLayout>
        </>
    );
});



export default Profile;
