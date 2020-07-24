/* eslint-disable no-unused-vars */
import React from 'react'
import {NewsScreenWapper} from '../style'
import {NewsHeader} from '../../components/style'
import NewsSection from '../../components/NewsComponent/NewsSection'
import RecommendNews from '../../components/NewsComponent/RecommendNews'


const topNewsData = [{
	title:'Gold Price Drop',
	content:'Gold Price Drop Today',
	report:'CNC news',
	imgSrc:'https://images.unsplash.com/photo-1517508522977-c4e8a987ade3?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&w=1000&q=80',
},
{  
	title:'Tax Increased',
	content:'Import Tax Increased in North American',
	report:'CBC news',
	imgSrc:'https://images.unsplash.com/photo-1517508522977-c4e8a987ade3?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&w=1000&q=80',
},
{
	title:'Sliver Price Drop',
	content:'Sliver Price Drop Today',
	report:'MiningWorld news',
	imgSrc:'https://images.unsplash.com/photo-1517508522977-c4e8a987ade3?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&w=1000&q=80',
}]

const recommendNewsData = [{
	title:'Gold Price Drop Today',
	content:'Canada found largerst Gold Ore, the location is around ON.It will influence current gold price.',
	report:'CNC news',
	imgSrc:'https://images.unsplash.com/photo-1517508522977-c4e8a987ade3?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&w=1000&q=80',
},
{
	title:'Tax Increased',
	content:'Import Tax Increased in North American',
	report:'CBC news',
	imgSrc:'https://images.unsplash.com/photo-1517771530547-3f31e47eeb04?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&w=1000&q=80'
},
{
	title:'China Open New Port',
	content:'Sliver Price Drop Today',
	report:'MiningWorld news',
	imgSrc:'https://images.unsplash.com/photo-1497008386681-a7941f08011e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&w=1000&q=80'
}]


const NewsScreen = ({navigation})=>{
	return (
		<NewsScreenWapper>
			<NewsHeader>NEWS</NewsHeader>
			<NewsSection data={topNewsData} title='Top Tending' navigation={navigation}/>
			<NewsSection data={topNewsData} title='24 Hours' navigation={navigation} />
			<RecommendNews data={recommendNewsData} navigation={navigation}/>
		</NewsScreenWapper>
	)
}

export default NewsScreen