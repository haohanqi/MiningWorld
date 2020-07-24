/* eslint-disable no-unused-vars */
import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import BottomTabNavigator from '../navigation/BottomTabNavigator'
import LoginNav from '../navigation/LoginNav'
import {connect} from 'react-redux'

const RootStack = createStackNavigator()
const RootNav = ({isLogined})=>{
	return(
		<RootStack.Navigator>
			{
				isLogined ? (      
					<RootStack.Screen component={BottomTabNavigator} name='main' 
						options={
							{headerShown:false}
						}
					/>
				) : (      
					<RootStack.Screen component={LoginNav} name='login'
						options={
							{headerShown:false}
						}
					/>
				)
			} 
		</RootStack.Navigator>
	)
}

const mapState=(state)=>{
	return {
		isLogined: state.login.isLogined
	}
}

export default connect(mapState)(RootNav)