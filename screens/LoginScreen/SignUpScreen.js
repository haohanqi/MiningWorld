/* eslint-disable no-unused-vars */
import React , {useState}from 'react'
import {View,Text,TextInput,StyleSheet,TouchableOpacity} from 'react-native'
import {LoginScreenWapper} from '../style'
import {signUp} from './Store/action'
import {connect} from 'react-redux'


const SignUpScreen = ({signUpUser})=>{
	const [password,setPassword] = useState('')
	const [confirmPassword,setConfirmPassword] = useState('')
	const [username,setUsername] = useState('')


	return (
		<LoginScreenWapper>
			<View style={style.inputWapper}>
				<Text style={style.title}>Username</Text>
				<TextInput style={style.inputField} value={username} onChangeText={text=>setUsername(text)}/>
			</View>

			<View style={style.inputWapper}>
				<Text style={style.title}>Password</Text>
				<TextInput style={style.inputField} secureTextEntry={true} value={password} onChangeText={text=>setPassword(text)}/>
			</View>

			<View style={style.inputWapper}>
				<Text style={style.title}>Confirm Password</Text>
				<TextInput style={style.inputField} secureTextEntry={true} value={confirmPassword} onChangeText={text=>setConfirmPassword(text)}/>
			</View>

			<TouchableOpacity style={password.length > 0 && username.length > 0 && password == confirmPassword ? style.buttonStyle:[style.buttonStyle,{backgroundColor:'#d9d9d9'}]} 
				disabled={!(password.length > 0 && username.length > 0 && password == confirmPassword)}
				onPress={()=>{signUpUser(username,password)}}
			>
				<Text style={style.buttonText}>Sign Up</Text>
			</TouchableOpacity>
          

		</LoginScreenWapper>
	) }

export const style = StyleSheet.create({

	title:{
		fontSize:20,
		fontWeight:'bold'
	},

	inputWapper:{
		flexDirection:'column',
		justifyContent:'space-around',
		alignItems:'flex-start',
		width:'90%',
		height:'12%',
		marginVertical:20
	},

	inputField:{
		width:'80%',
		marginHorizontal:'20%',
		height:40,
		borderRadius:10,
		backgroundColor:'#f0f0f0',
		paddingLeft:10
	},
	buttonStyle:{
		marginTop:20,
		justifyContent:'center',
		alignItems:'center',
		borderRadius:10,
		height:40,
		width:'25%',
		backgroundColor:'#73d13d'
	},


	buttonText:{
		fontWeight:'bold',
		fontSize:16,
		color:'white'
	}

})

const mapDispatch = (dispatch)=>({
	signUpUser(username,password){
		dispatch(signUp(username,password))
	}
})


export default connect(null,mapDispatch) (SignUpScreen)