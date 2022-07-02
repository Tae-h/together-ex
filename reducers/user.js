import produce from "../util/produce"

export const initialState = {
    me: null,
    userInfo: null,

    loginLoading: false, // 로그인 시도중
    loginDone: false,
    loginError: null,

    logoutLoading: false,
    logoutDone: false,
    logoutError: false,

    signUpLoading: false, // 가입 시도중
    signUpDone: false,
    signUpError: null,

    loadMyInfoLoading: false, // 내 정보
    loadMyInfoDone: false,
    loadMyInfoError: null,

    loadUserLoading: false, // 유저 정보 가져오기 시도중
    loadUserDone: false,
    loadUserError: null,


};



export const LOG_IN_REQUEST = 'LOG_IN_REQUEST';
export const LOG_IN_SUCCESS = 'LOG_IN_SUCCESS';
export const LOG_IN_FAILURE = 'LOG_IN_FAILURE';

export const LOG_OUT_REQUEST = 'LOG_OUT_REQUEST';
export const LOG_OUT_SUCCESS = 'LOG_OUT_SUCCESS';
export const LOG_OUT_FAILURE = 'LOG_OUT_FAILURE';

export const SIGN_UP_REQUEST = 'SIGN_UP_REQUEST';
export const SIGN_UP_SUCCESS = 'SIGN_UP_SUCCESS';
export const SIGN_UP_FAILURE = 'SIGN_UP_FAILURE';

export const FOLLOW_REQUEST = 'FOLLOW_REQUEST';
export const FOLLOW_SUCCESS = 'FOLLOW_SUCCESS';
export const FOLLOW_FAILURE = 'FOLLOW_FAILURE';

export const UNFOLLOW_REQUEST = 'UNFOLLOW_REQUEST';
export const UNFOLLOW_SUCCESS = 'UNFOLLOW_SUCCESS';
export const UNFOLLOW_FAILURE = 'UNFOLLOW_FAILURE';

export const CHANGE_NICKNAME_REQUEST = 'CHANGE_NICKNAME_REQUEST';
export const CHANGE_NICKNAME_SUCCESS = 'CHANGE_NICKNAME_SUCCESS';
export const CHANGE_NICKNAME_FAILURE = 'CHANGE_NICKNAME_FAILURE';

export const ADD_POST_TO_ME = 'ADD_POST_TO_ME';// 본인 게시글 추가
export const REMOVE_POST_OF_ME = 'REMOVE_POST_OF_ME';// 본인 게시글 삭제

export const LOAD_MY_INFO_REQUEST = 'LOAD_MY_INFO_REQUEST'; // 내정보 가져옴
export const LOAD_MY_INFO_SUCCESS = 'LOAD_MY_INFO_SUCCESS';
export const LOAD_MY_INFO_FAILURE = 'LOAD_MY_INFO_FAILURE';

export const LOAD_USER_REQUEST = 'LOAD_USER_REQUEST';
export const LOAD_USER_SUCCESS = 'LOAD_USER_SUCCESS';
export const LOAD_USER_FAILURE = 'LOAD_USER_FAILURE';




const reducer = (state = initialState, action) => {
    return produce(state, (draft) => {
        switch (action.type) {

            case LOAD_MY_INFO_REQUEST: {
                draft.loadMyInfoLoading = true;
                draft.loadMyInfoError = null;
                draft.loadMyInfoDone = false;
                break;
            }
            case LOAD_MY_INFO_SUCCESS: {
                draft.loadMyInfoLoading = false;
                draft.loadMyInfoDone = true;
                draft.me = action.data;
                break;
            }
            case LOAD_MY_INFO_FAILURE: {
                draft.loadMyInfoDone = false;
                draft.loadMyInfoLoading = false;
                draft.loadMyInfoError = action.error;
                break;
            }

            case LOAD_USER_REQUEST:
                draft.loadUserLoading = true;
                draft.loadUserError = null;
                draft.loadUserDone = false;
                break;
            case LOAD_USER_SUCCESS:
                draft.loadUserLoading = false;
                draft.userInfo = action.data;
                draft.loadUserDone = true;
                break;
            case LOAD_USER_FAILURE:
                draft.loadUserLoading = false;
                draft.loadUserError = action.error;
                break;


            /* 로그인 */
            case LOG_IN_REQUEST: {
                draft.loginLoading = true; // 로그인 중
                draft.loginError = null;
                draft.loginDone = false;
                break;
            }
            case LOG_IN_SUCCESS: {
                console.log('login success!!');
                draft.loginLoading = false;
                draft.loginDone = true;
                draft.me = action.data;
                break;
            }
            case LOG_IN_FAILURE: { // 로그인 실패 시
                draft.loginDone = false;
                draft.loginLoading = false;
                draft.loginError = action.error;
                break;
            }
            /* 로그아웃 */
            case LOG_OUT_REQUEST: {
                draft.logoutLoading = true;
                draft.logoutDone = false;
                break;
            }
            case LOG_OUT_SUCCESS: {
                draft.logoutDone = true;
                draft.logoutLoading = false;
                draft.me = action.data;
                break;
            }
            case LOG_OUT_FAILURE: {
                draft.logoutLoading = false;
                draft.logoutError = action.error;
                break;
            }
            /* 회원가입 */
            case SIGN_UP_REQUEST: {
                draft.signUpLoading = true;
                draft.signUpDone = false;
                break;
            }
            case SIGN_UP_SUCCESS: {
                draft.signUpLoading = false;
                draft.signUpDone = true;
                draft.me = null;
                break;
            }
            case SIGN_UP_FAILURE: {
                draft.signUpLoading = false;
                draft.signUpError = action.error;
                break;
            }
            /* 닉네임 변경 */
            case CHANGE_NICKNAME_REQUEST: {
                draft.changeNicknameLoading = true;
                draft.changeNicknameDone = false;
                draft.changeNicknameError = null;
                break;
            }
            case CHANGE_NICKNAME_SUCCESS: {
                alert('닉네임이 변경 되었습니다.');
                draft.changeNicknameLoading = false;
                draft.changeNicknameDone = true;
                draft.me.nickname = action.data.nickname;
                break;
            }
            case CHANGE_NICKNAME_FAILURE: {
                draft.changeNicknameLoading = false;
                draft.changeNicknameError = action.error;
                break;
            }
            case ADD_POST_TO_ME: {
                draft.me.Posts.unshift({id: action.data});
                break;
            }
            case REMOVE_POST_OF_ME: {
                draft.me.Posts = draft.me.Posts.filter((v) => v.id !== action.data);
                break;
            }
            default:
                break;
        }
    });

}

export default reducer;
