import actionTypes from "../app/actions/actionTypes";

const initState = {
    isLogined: false,
    token: null
}

const authReducer = (state = initState, action: any) => {
    switch (action.type) {
        case actionTypes.LOGIN:
            return {
                ...state,
                isLogined: true,
                token: action.token
            }
        case actionTypes.LOGOUT:
            return {
                ...state,
                isLogined: false,
                token: null
            }

        default:
            return state;
    }
}

export default authReducer
