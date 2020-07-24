/* eslint-disable no-unused-vars */
import * as React from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import NewsScreen from '../screens/NewsScreen/NewsScreen'
import NewsDetails from '../screens/NewsScreen/NewsDetails'
const NewsStackNav = createStackNavigator()

const NewsNav = ()=>{
	return(
		<NewsStackNav.Navigator>
			<NewsStackNav.Screen 
				name='MainNews' 
				component={NewsScreen}
				options={
					{headerShown:false}
				}
			/>
            
			<NewsStackNav.Screen 
				name='DetailsNews' 
				component={NewsDetails}
				options={
					{headerShown:true}
				}
			/>
            
        
		</NewsStackNav.Navigator>
	)
}

export default NewsNav