/* eslint-disable no-unused-vars */
import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import ListingTab from '../screens/UserScreen/ListingTab'
import UserListingDetails from '../screens/UserScreen/UserListingDetails'

const Stack = createStackNavigator()

export default ()=>{
	return(
		<Stack.Navigator mode="modal" screenOptions={{
			headerShown:false
		}}>
			<Stack.Screen name='listing' component={ListingTab} />
			<Stack.Screen name='details' component={UserListingDetails}/>
		</Stack.Navigator>
        

	)
}