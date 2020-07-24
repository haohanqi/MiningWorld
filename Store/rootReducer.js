import { combineReducers } from 'redux'
import screenReducer from '../screens/Store/screenReducer'
import loginReducer from '../screens/LoginScreen/Store/loginReducer'
export default combineReducers({
	screen: screenReducer,
	login:loginReducer
})