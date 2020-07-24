/* eslint-disable no-unused-vars */
import React from 'react'
import {View,Text,StyleSheet} from 'react-native'

const FollowItem = ({title,number})=>{
	return (
		<View style={style.followItem}>
			<Text style={style.title}>{number}</Text>
			<Text style={style.number}>{title}</Text>
		</View>
	)
}

const VerticalDivider = ()=>{
	return (
		<View style={style.VerticalDivider}>
        
		</View>
	)
}


export default ()=>{
	return(
		<View style={style.followWapper}>
			<FollowItem title="Activities" number="30"/>
			<VerticalDivider/>
			<FollowItem title="Followers" number="10k"/>
			<VerticalDivider/>
			<FollowItem title="Follows" number="120" />
		</View>
	)
}

const style = StyleSheet.create({
	followWapper:{
		zIndex:1,
		position:'relative',
		width:'90%',
		marginTop:10,
		height:70,
		bottom:45,
		marginHorizontal:'5%',
		backgroundColor:'#f9f6f7',
		borderRadius:25,
		flexDirection:'row',
		justifyContent:'space-around',
		alignItems:'center'
	},

	followItem:{
		flexDirection:'column',
		justifyContent:'space-around',
		alignItems:'center',
		width:'30%',
		height:'80%',
	},

	title:{
		fontWeight:'bold',
		fontSize:22,
	},
	number:{
		fontWeight:'600',
		fontSize:14,
	},
	VerticalDivider:{
		width:2,
		height:'60%',
		borderWidth:3,
		borderColor:'#ffffff',
		backgroundColor:'#ffffff'
	}

})