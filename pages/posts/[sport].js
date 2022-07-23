import {memo, useEffect, useState} from "react";
import Head from "next/head";
import AppLayout from "../../components/AppLayout";
import {useRouter} from "next/router";
import {Layout} from "antd";
const { Content, Footer } = Layout;
import PostCard from "../../components/PostCard";
import {useDispatch, useSelector} from "react-redux";
import {SOCCER_POSTS_REQUEST} from "../../reducers/post";


const Posts = () => {
    const dispatch = useDispatch();
    const router = useRouter();
    const { sport } = router.query;

    const [sportName, setSportName] = useState('');
    const { soccerPosts } = useSelector((state) => state.post)

    useEffect(() => {

        if ( sport === 'soccer' ) {
            setSportName('축구');

            dispatch({
               type: SOCCER_POSTS_REQUEST
            });
        } else if ( sport === 'basket' ) {
            setSportName('농구');
        }

    }, [sport]);

    return (
        <AppLayout>
            <Head>
                <title>{ sportName } 같이히자!</title>
            </Head>

            <PostCard />
        </AppLayout>
    )
};

export default Posts;
