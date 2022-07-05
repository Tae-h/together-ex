import React, {useEffect} from 'react';
import AppLayout from "../components/AppLayout";
import LoginForm from "../components/LoginForm";
import {useSelector} from "react-redux";
import {Avatar, Card, Col} from "antd";
import KakaoLogin from "../components/KakaoLogin";

const Home = () => {
    const { me } = useSelector((state) => state.user);



    useEffect(() => {
        console.log('login result: ', me);
    }, [me]);

  return (
      <>
          {me &&
          <AppLayout>


          </AppLayout>}
            {/* 로그인이 안되어 있을 경우 */}
          {!me && <LoginForm />}
          {!me && <KakaoLogin />}
      </>
  )
}

export default Home;
