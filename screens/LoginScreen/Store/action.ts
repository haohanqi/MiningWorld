import * as type from './actionType'


export const login = (username:String, password:String) => {
    return {
        type:type.LOGIN,
        payload:{
            username,
            password
        }
    }

}

export const logout = () => {
    return {
        type:type.LOGOUT,
    }

}

export const signUp = (username:String, password:String) => {
    return {
        type:type.SIGNUP,
        payload:{
            username,
            password
        }
    }
}


export const changePassword = (username:String,newPassword:String) => {
    return {
        type:type.CHANGE_PASSWORD,
        payload:{
            newPassword,
            username
        }
    }
}