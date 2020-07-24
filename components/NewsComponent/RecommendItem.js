/* eslint-disable no-unused-vars */
import React from 'react'
import {View,Text,StyleSheet,Image,TouchableOpacity} from 'react-native'
import {RecommendItemWapper} from '../style'

const RecommendItem = ({item,navigation})=>{
	return (
		<TouchableOpacity onPress={()=>navigation.navigate('DetailsNews',{news:item})}>
			<RecommendItemWapper>
				<View style={style.newsContent}>
					<Text style={style.title}>{item.title}</Text>
					<Text style={style.content}>{item.content}</Text>
					<Text style={style.report}>{item.report}</Text>
            
				</View>

				<View style={style.imageContent}>
					<Image style={style.image}
						source={{
							uri: `${item.imgSrc}`,
						}}/>
				</View>

			</RecommendItemWapper>
		</TouchableOpacity>
	)
}

const style = StyleSheet.create({
	newsContent:{
		flex:3,
		flexDirection:'column',
		justifyContent:'space-around',
		alignItems:'flex-start',
		height:'100%',
		marginRight:10
	},

	imageContent:{
		flex:2,
	},

	image:{
		height:'70%',
		width:'100%',
		borderRadius:20
	},

	title:{
		fontSize:20,
		fontWeight:'bold',
		textAlign:'left',
		lineHeight:30

	},
	content:{
		fontSize:14,
		textAlign:'left',
		lineHeight:25
	},
	report:{
		color:'#8c8c8c'
	}
})

export default RecommendItem