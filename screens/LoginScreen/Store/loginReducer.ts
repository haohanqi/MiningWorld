import * as  type from './actionType'
interface User {
    username:String,
    password:String
}

interface State {
    currentUser?: User,
    isLogined:Boolean
}

const initState : State = {
   
    isLogined:false
}

const users = [{username:'Haohanqi',password:'12345678'},{username:'Christinewang',password:'12345678'}]

export default (state=initState,action:any)=>{
    switch (action.type){
    case type.LOGIN:
        let user = users.findIndex(item => item.username == action.payload.username && item.password == action.payload.password)
        if (user >= 0) {
            return {
                ...state,
                currentUser:action.payload,
                isLogined:true
            }
        }else{
            return {
                ...state
            }
        }
    
    case type.LOGOUT:
        return{
            ...state,
            isLogined:false,
            currentUser:null
        }
        case type.SIGNUP:
            let newUser = users.findIndex(item => item.username == action.payload.username && item.password == action.payload.password)
            if(newUser < 0){
                users.push(action.payload)
                return {
                    ...state,
                    currentUser:newUser,
                    isLogined:true
                }
            }else{
                return{
                    ...state
                }
            }
        case type.CHANGE_PASSWORD:
            if(state.isLogined){
                let newUser ={
                    username:action.payload.username,
                    password:action.payload.newPassword
                }
                let user = users.findIndex(item => item.username == action.payload.username )
                if (user > -1){
                    users.splice(user,1)
                    users.push(newUser)
                }
                return {
                    currentUser:newUser,
                    isLogined:true
                }
            }else{
               
            }

        default:
            return state
}
}

