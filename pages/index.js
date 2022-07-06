import React, {useEffect} from 'react';
import AppLayout from "../components/AppLayout";
import LoginForm from "../components/LoginForm";
import {useSelector} from "react-redux";
import {Avatar, Card, Col} from "antd";
import KakaoLogin from "../components/KakaoLogin";
import PostCard from "../components/PostCard";

const Home = () => {
    const { me } = useSelector((state) => state.user);
    const { mainPosts } = useSelector((state) => state.post );


    useEffect(() => {
        console.log('login result: ', me);
    }, [me]);

  return (
      <>
          {me &&
              <AppLayout>
                  {/* 나중에 리스트 형식으로 바꿀꺼.. */}
                  <PostCard />
              </AppLayout>}

          {/* 로그인이 안되어 있을 경우 */}
          {!me && <LoginForm />}
          {!me && <KakaoLogin />}
      </>
  )
}

export default Home;
