/* eslint-disable no-unused-vars */
import React from 'react'
import {View,ScrollView} from 'react-native'
import UserInfoHeader from '../../components/UserComponent/UserInfoHeader'
import UserFollow from '../../components/UserComponent/UserFollow'
import UserInfoSection from '../../components/UserComponent/UserInfoSection'

export default ()=>{
	return (
		<ScrollView style={{width:'100%'}} stickyHeaderIndices={[0]}>
			<View>
				<UserInfoHeader displayButtons={true}/>
				<UserFollow/>
			</View>
			<UserInfoSection/>
		</ScrollView>
	)
}
