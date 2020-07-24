/* eslint-disable no-unused-vars */
import React,{useState} from 'react'
import {Text,View,TextInput,StyleSheet,TouchableOpacity} from 'react-native'
import { MaterialIcons } from '@expo/vector-icons' 
import {LoginScreenWapper} from '../style'
import {connect} from 'react-redux'
import {login} from './Store/action'

const LoginScreen = ({loginUser,navigation})=>{
	const [username,setUsername] = useState('')
	const [password,setPassword] = useState('')
    
	return (
		<LoginScreenWapper>
           
			<View style={{flex:1,justifyContent:'center'}}>
				<Text style={style.title}>Mining World</Text>
			</View> 
          
			<View style={{flex:1,marginBottom:'15%'}}>
				<View style={style.inputFieldWapper}>
					<View style={style.iconWapper}>
						<MaterialIcons name="account-circle" size={30} color="#bfbfbf" />
					</View>
					<TextInput style={style.inputField} value={username} onChangeText={text=>setUsername(text)}/>
				</View>

				<View style={style.inputFieldWapper}>
					<View style={style.iconWapper}>
						<MaterialIcons name="security" size={30} color="#bfbfbf" />
					</View>
					<TextInput style={style.inputField} secureTextEntry={true} value={password} onChangeText={text=>setPassword(text)}/>
				</View>
				<Text>Forget your password ?</Text>
			</View>
         
      
			<View style={style.buttonWapper}>
				<TouchableOpacity style={[style.buttonStyle, {backgroundColor:'#73d13d'}]} onPress={()=>{loginUser(username,password)}}>
					<Text style={[style.buttonText]}>Log In</Text>
				</TouchableOpacity>

				<TouchableOpacity style={[style.buttonStyle, {backgroundColor:'#ffa940'}]} onPress={()=>navigation.navigate('SignUp')}>
					<Text style={[style.buttonText]} >Sign Up</Text>
				</TouchableOpacity>
			</View>
  

			<View style={style.loginOtherWapper}>
				<Text>Login with other accounts</Text>
				<View style={style.buttonWapper}>
					<TouchableOpacity style={[style.buttonStyle,{width:'30%',height:80, backgroundColor:'#ff4d4f'}]}>
						<Text style={style.buttonText}>Gmail</Text>
					</TouchableOpacity>

					<TouchableOpacity style={[style.buttonStyle,{width:'30%',height:80, backgroundColor:'#40a9ff'}]}>
						<Text style={style.buttonText}>Facebook</Text>
					</TouchableOpacity>
				</View>
            
			</View>
		</LoginScreenWapper>
	)
}

const style = StyleSheet.create({
	title:{
		fontSize:35,
		fontWeight:'bold'
	},
	inputFieldWapper:{
		flexDirection:'row',
		justifyContent:'center',
		alignItems:'center',
		width:'90%',
		height:50,
		marginVertical:'10%'
	},

	inputField:{
		flex:3,
		height:50,
		borderBottomColor:'black',
		borderBottomWidth:3,
		paddingLeft:5
	},

	iconWapper:{
		flex:1,
		height:50,
		borderRightColor:'black',
		borderRightWidth:3,
		borderBottomWidth:3,
		justifyContent:'center',
		alignItems:'center'
	},

	buttonWapper:{
		flex:1,
		flexDirection:'row',
		justifyContent:'space-around',
		alignItems:'center',
		width:'100%'
	},

	buttonText:{
		fontWeight:'bold',
		fontSize:16,
		color:'white'
	},

	buttonStyle:{
		justifyContent:'center',
		alignItems:'center',
		borderRadius:10,
		height:40,
		width:'25%'
	},

	loginOtherWapper:{
		flex:1,
		flexDirection:'column',
		justifyContent:'center',
		alignItems:'center',
		width:'100%'
	}
})

const mapDispatch = (dispatch)=>({
	loginUser(username,password){
		dispatch(login(username,password)) 
	}
})

export default connect(null,mapDispatch)(LoginScreen)