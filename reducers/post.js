import produce from "../util/produce";

export const initialState = {
    mainPosts: [

    ],
    imagePaths: [], // <-- 이미지 업로드시 경로 저장

    loadPostsLoading: false,
    loadPostsDone: false,
    loadPostsError: null,

    loadPostLoading: false,
    loadPostDone: false,
    loadPostError: null,

    addPostLoading: false,
    addPostDone: false,
    addPostError: null,

    addCommentLoading: false,
    addCommentDone: false,
    addCommentError: null,

    removePostLoading: false,
    removePostDone: false,
    removePostError: null,

    hasMorePosts: true, // true 일때만 가져올거임!

    likePostLoading: false,
    likePostDone: false,
    likePostError: null,

    unlikePostLoading: false,
    unlikePostDone: false,
    unlikePostError: null,

    deletePostLoading: false,
    deletePostDone: false,
    deletePostError: null,

    uploadImagesLoading: false,
    uploadImagesDone: false,
    uploadImagesError: null,

    retweetLoading: false,
    retweetDone: false,
    retweetError: null,

    singlePost: null,
};


/* 화면 로드 */
export const LOAD_POSTS_REQUEST = 'LOAD_POSTS_REQUEST';
export const LOAD_POSTS_SUCCESS = 'LOAD_POSTS_SUCCESS';
export const LOAD_POSTS_FAILURE = 'LOAD_POSTS_FAILURE';

// 포스트 단건
export const LOAD_POST_REQUEST = 'LOAD_POST_REQUEST';
export const LOAD_POST_SUCCESS = 'LOAD_POST_SUCCESS';
export const LOAD_POST_FAILURE = 'LOAD_POST_FAILURE';

export const ADD_POST_REQUEST = 'ADD_POST_REQUEST';
export const ADD_POST_SUCCESS = 'ADD_POST_SUCCESS';
export const ADD_POST_FAILURE = 'ADD_POST_FAILURE';

export const REMOVE_POST_REQUEST = 'REMOVE_POST_REQUEST';
export const REMOVE_POST_SUCCESS = 'REMOVE_POST_SUCCESS';
export const REMOVE_POST_FAILURE = 'REMOVE_POST_FAILURE';




// reducer : 이전 상태를 액션을 통해 다음 상태로 만들어내는 함 (불변성은 지켜야함)
const reducer = (state = initialState, action) => {
    // immer 사용 기본 꼴 --> 불변성 보장
    return produce(state, (draft) => {
        // state 기 draft (다음 상태) 로 변함 state --> draft 불변성 보장

        switch (action.type) {

            case LOAD_POST_REQUEST:
                draft.loadPostLoading = true;
                draft.loadPostDone = false;
                draft.loadPostError = null;
                break;
            case LOAD_POST_SUCCESS:
                draft.loadPostLoading = false;
                draft.loadPostDone = true;
                draft.singlePost = action.data;
                break;
            case LOAD_POST_FAILURE:
                draft.loadPostLoading = false;
                draft.loadPostError = action.error;
                break;

            default:
                break;
        }
    });

}

export default reducer;

