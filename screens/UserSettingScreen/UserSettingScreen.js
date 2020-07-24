/* eslint-disable no-unused-vars */
import React from 'react'
import {View,Text,StyleSheet,TouchableOpacity} from 'react-native'
import UserFollow from '../../components/UserComponent/UserFollow'
import UserInfoHeader from '../../components/UserComponent/UserInfoHeader'
import { AntDesign } from '@expo/vector-icons' 
import {connect} from 'react-redux'
import {logout} from '../LoginScreen/Store/action'


const fields =['Account','Privacy & Security','My Collections','Help','Support']


const FieldItem = ({index,item})=>{
	return(
		<View style={style.fieldItemWapper}>
			<Text style={style.title}>{item}</Text>
			<AntDesign name="rightcircleo" size={24} color="black" />
		</View>
	)
}


const UserSettingScreen = ({navigation,logout})=>{
	return (
		<View style={style.userSettingScreenWapper}>
               
			<UserInfoHeader/>
			<UserFollow/>
        
			<View>

				{
					fields.map((item,index)=>{
						return (
							<TouchableOpacity key={index} onPress={()=>{navigation.navigate(item)}}>                                
								<FieldItem item={item} index={index}>{item}</FieldItem>
							</TouchableOpacity>
						)
					})
				}
                
			</View>

			<TouchableOpacity style={{marginVertical:45,borderColor:'#d9d9d9',borderWidth:3,padding:10,borderRadius:10}} onPress={()=>logout()}>
				<Text style={{fontSize:20,fontWeight:'bold'}}>LogOut</Text>
			</TouchableOpacity>
            
		</View>
   
	)
}

const style = StyleSheet.create({

	userSettingScreenWapper:{   
		flexDirection:'column',
		justifyContent:'center',
		alignItems:'center',
		backgroundColor:'#f0f0f0'
	},


	fieldItemWapper:{
		flexDirection:'row',
		justifyContent:'space-around',
		alignItems:'center',
		width:'90%',
		height:50,
		marginHorizontal:'5%',
		paddingHorizontal:'5%',
		borderBottomColor:'#ffffff',
		borderBottomWidth:2

	},

	title:{
		flex:1,
		fontSize:18,
		fontWeight:'bold'
	}
})

const mapDispatch = (dispatch)=>({
	logout(){
		dispatch(logout())
	}
})

export default connect(null,mapDispatch) (UserSettingScreen)