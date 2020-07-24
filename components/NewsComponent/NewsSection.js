/* eslint-disable no-unused-vars */
import React from 'react'
import {FlatList} from 'react-native'
import {NewsSectionWapper,NewsTitle} from '../style'
import NewsItem from './NewsItem'

const NewsSection = ({data,title,navigation})=>{
	return (
		<NewsSectionWapper>
			<NewsTitle>{title}</NewsTitle>
			<FlatList data={data} 
				horizontal={true} 
				bounces={true}
				showsHorizontalScrollIndicator={false}
				renderItem={
					({item,index})=><NewsItem item={item} index={index} navigation={navigation}></NewsItem>
				}
			/>
		</NewsSectionWapper>
	)
}

export default NewsSection