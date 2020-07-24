/* eslint-disable no-unused-vars */
import React from 'react'
import {View} from 'react-native'
import {NewsTitle} from '../style'
import RecommendItem from './RecommendItem'
const RecommendNews = ({data,navigation})=>{
	return (
		<View>
			<NewsTitle>Recommend</NewsTitle>
			{
				data ? data.map((item)=>(
					<RecommendItem navigation={navigation} key={item.content} item={item}/>
				)) : 'none'
			}
		</View>
	)
}

export default RecommendNews