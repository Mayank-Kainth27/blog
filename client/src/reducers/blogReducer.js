import { FETCH_BLOGS } from "../actions/types"

export default function (state = [], action) {
    //console.log(action);
    switch (action.type) {
        case FETCH_BLOGS:
            return action.payload;
        default:
            return state;
    }
}