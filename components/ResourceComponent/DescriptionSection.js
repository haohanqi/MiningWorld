/* eslint-disable no-unused-vars */
import * as React from 'react'
import {View,Text,Button,StyleSheet,TouchableOpacity} from 'react-native'
import {DescriptionSectionWapper} from '../style'
import { MaterialIcons } from '@expo/vector-icons' 
export default ()=>{
	return(
		<DescriptionSectionWapper>
			<View style={style.descriptionWapper}>
				<MaterialIcons name="description" size={30} color="#ff971d" style={{marginRight:10}} />
				<Text style={style.title}>Description</Text>
			</View>
            
			<Text style={style.descriptionText}>
                    Mining is the extraction of valuable minerals or other geological materials from the Earth,
             usually from an ore body, lode, vein, seam, reef or placer deposit. 
             ... Mining is required to obtain any material that cannot be grown through agricultural processes
			</Text>

        
		</DescriptionSectionWapper>
	)
}

const style = StyleSheet.create({
	descriptionWapper:{
		width:'33%',
		paddingTop:15,
		marginLeft:'5%',
		flexDirection:'row',
		justifyContent:'space-around',
		alignItems:'center',
		marginBottom:20
	},
	title:{
		fontSize:20,
		fontWeight:'bold'
	},

	descriptionText:{
		width:'80%',
		alignSelf:'center',
		fontSize:16,
		lineHeight:23
	}

})