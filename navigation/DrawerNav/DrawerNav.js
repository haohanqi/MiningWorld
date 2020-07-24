/* eslint-disable no-unused-vars */
import * as React from 'react'
import { createDrawerNavigator} from '@react-navigation/drawer'
import ResScreenNav from '../ResScreenNav'
import CustomDrawerContent from './CustomDrawerContent'

const DrawerNav = createDrawerNavigator()

export default ()=>{
	return (
		<DrawerNav.Navigator  drawerContent={props => <CustomDrawerContent {...props} />}>
			<DrawerNav.Screen name="mining" component={ResScreenNav} />        
		</DrawerNav.Navigator>
	)
}