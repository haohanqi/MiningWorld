/* eslint-disable no-unused-vars */
import React from 'react'
import {Text,StyleSheet,TouchableOpacity} from 'react-native'
import {NewsItemWapper} from '../style'

const NewsItem = ({item,index,navigation})=>{

	return (
		<TouchableOpacity onPress={()=>navigation.navigate('DetailsNews',{news:item})}>
			<NewsItemWapper>
				<Text style={style.topTitle}>Top: {index+1}</Text>
				<Text style={style.content}>{item.content}</Text>
				<Text style={style.bottomNews}>{item.report} </Text>
			</NewsItemWapper>
		</TouchableOpacity>
	)

}

const style = StyleSheet.create({
	topTitle:{
		fontWeight:'bold',
		fontSize:17,
		color:'black'
	},

	content:{
		fontSize:16,
		color:'black',
		fontWeight:'bold'
	},

	bottomNews:{
		color:'#8c8c8c'
	}

})

export default NewsItem