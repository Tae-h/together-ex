import {ButtonWrapper, FormWrapper} from "./LoginForm";
import {Button, Image, Space} from "antd";
import {useEffect} from "react";


const kakaoInit = () => {

    Kakao.init(`98620a0c1135f44acb9529edcf4f1f01`);
}

const KakaoLogin = () => {

    useEffect(() => {
        if ( !Kakao.isInitialized() ) {
            kakaoInit();
        }

    }, []);

    const kakaoLogin = () => {
        if ( !Kakao.isInitialized() ) {
            return console.log('Kakao 인스턴스가 없음!');
        }

        Kakao.Auth.login({
            success: auth => {
                console.log('Login', auth);
                getKakaoUserInfo();
            },
            fail: error => {
                console.error('login error', error);
                alert(JSON.stringify(error));
            },
        });
    }

    const getKakaoUserInfo = () => {
        console.log('get Info');
        Kakao.API.request({
            url: '/v2/user/me',
            data: {
                property_keys: ["kakao_account.email","kakao_account.gender"]
            },
            success: function(response) {
                console.log('info: ', response);
            },
            fail: function(error) {
                console.log(error);
            }
        });
    }

    return (
        <>
            <FormWrapper >
                <ButtonWrapper>
                    <Space size={8}>
                        <Button
                            style={{ backgroundColor: '#f9dc02', color: '#361d1c'}}
                            onClick={kakaoLogin}
                        >
                            카카오톡으로 시작하기
                        </Button>

                    </Space>
                </ButtonWrapper>
            </FormWrapper>
        </>

    );
}

export default KakaoLogin;
