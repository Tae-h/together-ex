import {memo, useEffect, useState} from "react";
import Head from "next/head";
import AppLayout from "../../components/AppLayout";
import {useRouter} from "next/router";
import {Layout} from "antd";
const { Content, Footer } = Layout;
import PostCard from "../../components/PostCard";


const Posts = () => {

    const router = useRouter();
    const { sport } = router.query;

    const [sportName, setSportName] = useState('');


    useEffect(() => {
        console.log(router.query);

        if ( sport === 'soccer' ) {
            setSportName('축구');
        } else if ( sport === 'basket' ) {
            setSportName('농구');
        }

        console.log(sportName)
    }, []);

    return (
        <AppLayout>
            <Head>
                <title>{ sport } 히자!</title>
            </Head>

            <PostCard />
        </AppLayout>
    )
};

export default Posts;
