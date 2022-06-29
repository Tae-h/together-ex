import AppLayout from "../components/AppLayout";
import Head from "next/head";
import {memo} from "react";



const Profile = memo(() => {


    return (
        <>
            <Head>
                <title> 내 정보 </title>
            </Head>
            <AppLayout>
                아이디
                패스워드

            </AppLayout>
        </>
    );
});



export default Profile;
