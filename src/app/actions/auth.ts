import actionTypes from "./actionTypes";

export const loginAuth: any = (currentUser: any) => {
    if (currentUser) {
        return {
            type: actionTypes.LOGIN,
            token: currentUser.accessToken
        }
    }
}

export const logoutAuth: any = () => ({
    type: actionTypes.LOGOUT
})