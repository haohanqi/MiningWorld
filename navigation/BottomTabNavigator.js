/* eslint-disable no-unused-vars */
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import * as React from 'react'
import TabBarIcon from '../components/TabBarIcon'
import EnquireScreenNav from './EnquireScreenNav'
import DrawerNav from './DrawerNav/DrawerNav'
import UserSettingNav from './UserSettingNav'
import NewsNav from './NewsNav'


const BottomTab = createBottomTabNavigator()
const INITIAL_ROUTE_NAME = 'Home'

export default function BottomTabNavigator() {

	return (
		<BottomTab.Navigator initialRouteName={INITIAL_ROUTE_NAME}>

			<BottomTab.Screen 
				name='News' 
				component={NewsNav} 
				options={{
					tabBarIcon: ({ focused }) => <TabBarIcon focused={focused} name="newspaper" />,
				}}
			/>
     
			<BottomTab.Screen
				name='Resource'
				component={DrawerNav}
				options={{
					tabBarIcon: ({ focused }) => <TabBarIcon focused={focused} name="list" />,
				}}
			/>
      
			<BottomTab.Screen
				name='Enquire'
				component={EnquireScreenNav}
				options={{
					tabBarLabel:'enquire',
					tabBarIcon: ({ focused }) => <TabBarIcon focused={focused} name="question" />,
				}}
			/>

			<BottomTab.Screen
				name='Setting'
				component={UserSettingNav}
				options={{
					tabBarLabel:'Setting',
					tabBarIcon: ({ focused }) => <TabBarIcon focused={focused} name="headset" />,
				}}
			/>
		</BottomTab.Navigator>
	)
}

