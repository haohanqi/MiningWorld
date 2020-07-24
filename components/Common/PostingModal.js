/* eslint-disable no-unused-vars */
import React,{useState} from 'react'
import {View,Text,TouchableOpacity,StyleSheet} from 'react-native'
import {Modal} from '@ant-design/react-native'
import { Entypo,AntDesign,MaterialCommunityIcons } from '@expo/vector-icons'
import * as Animatable from 'react-native-animatable'
import PostListingModal from './PostingListModal'

const PostingItem =({title,iconName,changeModalVisible})=>{

	const renderIcon = (iconName)=>{
		if (iconName === 'news'){return <Entypo name="new-message" size={34} color="black" />}
		if (iconName === 'list'){return <Entypo name="list" size={34} color="black" />}
		if (iconName === 'enquire'){return <AntDesign name="question" size={34} color="black" />}
		if (iconName === 'lab'){return <MaterialCommunityIcons name="test-tube" size={34} color="black" />}
	}

	return (
		<View style={style.postingItem}>
			<TouchableOpacity style={style.iconCycle} onPress={changeModalVisible}>       
				{
					renderIcon(iconName)
				}
			</TouchableOpacity>
			<Text style={style.title}>{title}</Text>
		</View>
	)
}

const PostingModal = ({visible,changeModalVisible})=>{

	const [showPostNews,changePostNewsVisible] = useState(false)

	return(    

		<View>
			<Modal
				popup
				animationType="slide-up"
				visible={visible}
				style={style.modalWapper}
			>
        
				<Animatable.View style={style.postingItemWapper} animation="bounce"> 
					<PostingItem title='Listing' iconName='list' />
					<PostingItem title='Enquire' iconName='enquire'/>
				</Animatable.View>

				<Animatable.View style={style.postingItemWapper} animation="bounce"> 
					<PostingItem title='News' iconName='news' changeModalVisible={()=>{changePostNewsVisible(!showPostNews)}}/>
					<PostingItem title='Lab' iconName='lab'/>
				</Animatable.View>
            
				<TouchableOpacity onPress={()=>{changeModalVisible(!visible)}}>
					<View style={{alignItems:'center'}}>
						<AntDesign name="closecircleo" size={34} color="black" />
					</View>
				</TouchableOpacity>
			</Modal>


			<PostListingModal showPostListing={showPostNews} changePostListingVisible={changePostNewsVisible}/>
		</View>
	)
}

const style = StyleSheet.create({
	modalWapper:{
		flexDirection:'column',
		justifyContent:'space-around',
		alignItems:'center',
		borderTopLeftRadius:20,
		borderTopRightRadius:20,
		width:'100%',
		backgroundColor:'#f5f5f5'
	},
   
	iconCycle:{
		width:68,
		height:68,
		borderRadius:68,
		backgroundColor:'#ffffff',
		alignItems:'center',
		justifyContent:'center'

	},
	postingItem:{
		alignItems:'center',
		justifyContent:'center',
		marginHorizontal:'15%',
		marginVertical:'8%'
	},
	postingItemWapper:{
		flexDirection:'row',
		justifyContent:'center',
		alignItems:'center',
	},
	title:{
		marginTop:10,
		color:'#8c8c8c'
	}
})


export default PostingModal