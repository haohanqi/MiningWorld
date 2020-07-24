/* eslint-disable no-unused-vars */
import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import UserSettingScreen from '../screens/UserSettingScreen/UserSettingScreen'
import CollectionScreen from '../screens/UserSettingScreen/CollectionScreen'
import AccountScreen from '../screens/UserSettingScreen/AccountScreen'
import SupportScreen from '../screens/UserSettingScreen/SupportScreen'
import SecurityScreen from '../screens/UserSettingScreen/SecurityScreen'
import HelpScreen from '../screens/UserSettingScreen/HelpScreen'




const UserSettingStack = createStackNavigator()

const UserSettingNav = ()=>{
	return (
		<UserSettingStack.Navigator>
			<UserSettingStack.Screen 
				name="Setting"
				component={UserSettingScreen}
			/>  
            
			<UserSettingStack.Screen 
				name='My Collections'
				component={CollectionScreen}
			/>

			<UserSettingStack.Screen 
				name='Account' 
				component={AccountScreen} 
			/>

			<UserSettingStack.Screen 
				name='Help' 
				component={HelpScreen} 
			/>

			<UserSettingStack.Screen 
				name='Support' 
				component={SupportScreen} 
			/>

			<UserSettingStack.Screen 
				name='Privacy & Security' 
				component={SecurityScreen} 
			/>
            
		</UserSettingStack.Navigator>

	)
}

export default UserSettingNav
