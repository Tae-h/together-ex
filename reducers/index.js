import { HYDRATE } from 'next-redux-wrapper';
import {combineReducers} from "redux";
import produce from "../util/produce";




const rootReducer = (state, action) => {
    return produce(state, (draft) => {
        switch (action.type) {
            case HYDRATE:
                console.log('HYDRATE', action);
                return action.payload;
            default: {
                const combinedReducer = combineReducers({

                });
                return combinedReducer(state, action);
            }
        }
    });

};


export default rootReducer;
