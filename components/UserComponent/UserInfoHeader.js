/* eslint-disable no-unused-vars */
import React from 'react'
import {View,Text,StyleSheet,TouchableOpacity} from 'react-native'
import UserAvata from './UserAvata'
import { AntDesign } from '@expo/vector-icons' 
import { MaterialIcons } from '@expo/vector-icons' 

const Buttons = ({display})=>{
	return (
		<View style={ display? [style.buttonsWapper,{display:'flex'}]:[style.buttonsWapper,{display:'none'}]}>
			<TouchableOpacity>
				<View style={style.buttonWapper}>
					<AntDesign name="adduser" size={25} color="#ff971d" />
					<Text style={style.buttonText}>Follow</Text>
				</View>
			</TouchableOpacity>

			<TouchableOpacity>
				<View style={style.buttonWapper}>
					<MaterialIcons name="contact-mail" size={25} color="#ff971d" />
					<Text style={style.buttonText}>Contact</Text>
				</View>
			</TouchableOpacity>
		</View>
	)
}



export default ({displayButtons})=>{
	return (
		<View style={style.headerwapper}>
           
			<UserAvata style={{flex:1}}/>
            
			<Buttons display={displayButtons}/>
            
		</View>
	)
}

const style = StyleSheet.create({
	headerwapper:{
		flexDirection:'column',
		justifyContent:'flex-start',
		alignItems:'center',
		width:'100%',
		height:250,
		backgroundColor:'#ffe8d6',
		paddingTop:15
	},
	buttonsWapper:{
		width:'100%',
		marginTop:10,
		flexDirection:'row',
		alignItems:'flex-end',
		justifyContent:'space-around'
	},
	buttonWapper:{
		flexDirection:'column',
		justifyContent:'flex-end',
		alignItems:'center'
	},
	buttonText:{
		marginTop:5,
		fontWeight:'bold'
	},
})