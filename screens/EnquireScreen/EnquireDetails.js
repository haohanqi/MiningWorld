/* eslint-disable no-unused-vars */
import React from 'react'
import {View,Text} from 'react-native'

const EnquireDetails = ({route})=>{
	const {item} = route.params ? route.params : null
	return (
		<View>
			<Text>Details</Text>
		</View>
	)
}

export default EnquireDetails