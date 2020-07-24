/* eslint-disable no-unused-vars */
import React from 'react'
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs'
import BasicInfoTab from '../screens/UserScreen/BasicInfoTab'
import EnquireTab from '../screens/UserScreen/EnquireTab'
import ListingTabNav from '../navigation/ListingTabNav'
const Tab = createMaterialTopTabNavigator()

export default ()=>{
	return(
		<Tab.Navigator screenOptions={{
			gesturesEnabled: false,

		}}>
			<Tab.Screen name="BasicInfo" component={BasicInfoTab} />
			<Tab.Screen name="Listing" component={ListingTabNav} />
			<Tab.Screen name="Enquire" component={EnquireTab} />
		</Tab.Navigator>
	)

}