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
                <GroupList header="축구"/>
                <GroupList header="농구"/>
            </AppLayout>
        </>
    );
});



export default Profile;
