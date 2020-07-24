/* eslint-disable no-unused-vars */
import React,{useState} from 'react'
import {View, Text,TextInput,TouchableOpacity} from 'react-native'
import {AccountScreenWapper} from '../style'
import {style} from '../LoginScreen/SignUpScreen'
import {connect} from 'react-redux'
import {changePassword} from '../LoginScreen/Store/action'

const AccountScreen = ({currentPassword,currentUsername,changePassword})=>{

	const [newPassword,setNewPassword] = useState('')

	return (
		<AccountScreenWapper>
            
			<View style={style.inputWapper}>
				<Text style={{fontSize:30,fontWeight:'bold'}}>Change Password</Text>
			</View>

			<View style={style.inputWapper}>
				<Text style={style.title}>Username</Text>
				<TextInput style={style.inputField} 
					value={currentUsername} 
					editable={false}
				/>
			</View>

			<View style={style.inputWapper}>
				<Text style={style.title}>Password</Text>
				<TextInput style={style.inputField} 
					secureTextEntry={true} 
					value={currentPassword}
					editable={false} 
				/>
			</View>

			<View style={style.inputWapper}>
				<Text style={style.title}>Confirm New Password</Text>
				<TextInput style={style.inputField} secureTextEntry={true} value={newPassword} onChangeText={text=>setNewPassword(text)}/>
			</View>


			<TouchableOpacity style={ newPassword.length > 0  ? style.buttonStyle:[style.buttonStyle,{backgroundColor:'#d9d9d9'}]} 
				disabled={!newPassword.length > 0}
				onPress={()=>changePassword(currentUsername,newPassword)}
			>
				<Text style={style.buttonText}>Change</Text>
			</TouchableOpacity>

           
		</AccountScreenWapper>
	)
}

const mapState =(state)=>{
	return{
		currentUsername:state.login.currentUser.username,
		currentPassword:state.login.currentUser.username
	}
}

const mapDispatch = (dispatch)=>({
	changePassword(username,newPassword){
		dispatch(changePassword(username,newPassword))
	}
})

export default connect(mapState,mapDispatch) (AccountScreen)