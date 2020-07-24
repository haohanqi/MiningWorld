/* eslint-disable no-unused-vars */
import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import LoginScreen from '../screens/LoginScreen/LoginScreen'
import SignUpScreen from '../screens/LoginScreen/SignUpScreen'
const LoginStackNav = createStackNavigator()
 
const LoginNav = ()=>{

	return (
		<LoginStackNav.Navigator>
			<LoginStackNav.Screen component={LoginScreen} name='Login' options={{
				headerShown:false
			}}/>

			<LoginStackNav.Screen component={SignUpScreen} name='SignUp' />
		</LoginStackNav.Navigator>
	)
}

export default LoginNav
