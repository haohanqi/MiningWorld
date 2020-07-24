/* eslint-disable no-unused-vars */
import React from 'react'
import {View,Dimensions} from 'react-native'
import { Tabs } from '@ant-design/react-native'
import { ScrollView } from 'react-native-gesture-handler'
import BasicInfoTab from './BasicInfoTab'
import EnquireTab from './EnquireTab'
import ListingTabNav from '../../navigation/ListingTabNav'


const tabs = [
	{ title: 'Basic Info' },
	{ title: 'Listing' },
	{ title: 'Enquire' },
]

//Goal: I want to do a collapsible header, when user scroll up or down, the header will change. Which can give user more screen space
//For example: https://itnext.io/react-native-collapsible-headers-explained-78584ff133d8

//What I did: put header inside a "screen", wapper it with scrollview, use onScroll event to control it. 

// <ScrollView>
//       <UserInfoHeader/>
//       <UserTabNav/> 
// </ScrollView>

//Problem: UserTabNav is a component I create with react-navigation, but I don't know how to directly use it inside the "screen"
//Solution: I create a top tab nav by using antdesign Tabs component

//Question: 
//1.If I set the header in the react navigation, is that possible to do collapsible header? Which means header is outside "screen"
//2.How to use UserTabNav inside screen? In other word, is that possible to have another view(header) above tab navigation?

export default ()=>{
	const screenHeight = Math.round(Dimensions.get('window').height)-155

	return (
		<ScrollView stickyHeaderIndices={[1]} style={{backgroundColor:'#ffffff'}}> 
			<View style={{height:screenHeight}}>
				<Tabs tabs={tabs} >
					<BasicInfoTab/>
					<ListingTabNav/>
					<EnquireTab/>
				</Tabs>   
			</View>      
       
		</ScrollView>
	)
}

