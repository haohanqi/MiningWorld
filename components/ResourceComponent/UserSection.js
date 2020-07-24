/* eslint-disable no-unused-vars */
import React from  'react'
import {View,Text,StyleSheet,Image,TouchableOpacity} from 'react-native'
import {UserSectionWapper,UserInfoWapper} from '../style'
import { MaterialCommunityIcons } from '@expo/vector-icons' 
import { AntDesign } from '@expo/vector-icons' 



function UserAvatar({avatar}){
	return(
		<View style={{ marginLeft:'5%', marginRight:'3%'}}>
			<Image style={style.avatar} source={{
				uri: avatar,
			}}/>
		</View>
	)
}

function UserInfo(){
	return(
		<View style={style.userInfo}>
			<View>
				<Text style={{textAlign:'left',fontWeight:'bold',fontSize:18,marginBottom:'3%'}}>Henry Lee</Text>
			</View>
            
			<View style={{flexDirection:'row',  marginBottom:'2%'}}>
				<Text style={{fontWeight:'bold'}}>Company:</Text>
				<Text> Moken Exchange co</Text>
			</View>

			<View style={{flexDirection:'row'}}>
				<Text style={{fontWeight:'bold'}}>Position:</Text>
				<Text> CEO and Tech leader</Text>
			</View>     
		</View>
	)
}


export default ({navigation})=>{
	const avatar ='https://images.unsplash.com/photo-1542909192-2f2241a99c9d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&w=1000&q=80'
	return(

   
		<UserSectionWapper>
			<View style={style.detailsWapper}>
				<MaterialCommunityIcons name="information" size={30} color="#ff971d" style={{marginRight:10}} />
				<Text style={style.title}>Posted By</Text>
			</View> 
           
			<TouchableOpacity style={{width:'100%'}} onPress={()=>{navigation.navigate('userInfo',{name:'Henry Lee'})}}>
				<UserInfoWapper>
					<UserAvatar avatar={avatar}/>
					<UserInfo/>
					<TouchableOpacity>
						<AntDesign name="adduser" size={30} color="#ff971d" />
					</TouchableOpacity>
				</UserInfoWapper>       
			</TouchableOpacity>
                 
		</UserSectionWapper>


	)
}

const style = StyleSheet.create({
	detailsWapper:{
		width:'33%',
		paddingTop:15,
		marginLeft:'5%',
		flexDirection:'row',
		justifyContent:'space-around',
		alignItems:'center',
		marginBottom:20
	},
	title:{
		fontSize:20,
		fontWeight:'bold',
	},

	avatar:{
		width:50,
		height:50,
		borderRadius:50,
		backgroundColor:'red',
	},
	userInfo:{
		flexDirection:'column',
		justifyContent:'space-around',
		alignItems:'flex-start',
		marginRight:'10%'
	}
})