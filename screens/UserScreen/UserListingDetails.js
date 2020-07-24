/* eslint-disable no-unused-vars */
import * as React from 'react'
import {View,Text,ScrollView,TouchableOpacity,StyleSheet} from 'react-native'
import ImageSlider from '../../components/ResourceComponent/ImageSlider'
import TradeSection from '../../components/ResourceComponent/TradeSection'
import DescriptionSection from '../../components/ResourceComponent/DescriptionSection'
import InfoSection from '../../components/ResourceComponent/InfoSection'
import UserSection from '../../components/ResourceComponent/UserSection'

export default function UserListingDetails ({navigation,route}){

	return  (
		<ScrollView style={{backgroundColor:'#ffffff',paddingBottom:20}}  stickyHeaderIndices={[1]} >
			<ImageSlider/>
			<TradeSection/>
			<DescriptionSection/>
			<InfoSection/>
			<UserSection navigation={navigation}/>
			<View style={style.buttonsWapper}>
				<TouchableOpacity onPress={()=>{navigation.goBack()}}>
					<View style={[style.buttonStyle,{backgroundColor:'#f9f6f7'}]}>
						<Text style={style.buttonText}>back</Text>
					</View>     
				</TouchableOpacity>
                
				<TouchableOpacity>
					<View style={style.buttonStyle}>
						<Text style={style.buttonText}>Save</Text>
					</View>  
				</TouchableOpacity>
			</View>
		</ScrollView>
       
	)
}

const style = StyleSheet.create({

	buttonsWapper:{
		flexDirection:'row',
		justifyContent:'space-around',
		alignItems:'center',
		marginTop:30,
		marginBottom:30
	},

	buttonStyle:{
		width:60,
		height:30,
		backgroundColor:'red',
		borderRadius:10
	},

	buttonText:{
		textAlign:'center',
		lineHeight:30,
		fontWeight:'bold',
	}

})