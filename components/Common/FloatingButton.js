/* eslint-disable no-unused-vars */
import React from 'react'
import {FloatingButtonWapper} from '../style'
import { Entypo } from '@expo/vector-icons' 

const FloatingButton = ({changeModalVisible})=>{
	return (
 
		<FloatingButtonWapper onPress={changeModalVisible}> 
			<Entypo name="pencil" size={24} color="#8c8c8c" />
		</FloatingButtonWapper>
	)
}

export default FloatingButton