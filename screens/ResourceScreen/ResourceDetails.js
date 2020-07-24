/* eslint-disable no-unused-vars */
import * as React from 'react'
import {Text,ScrollView,StyleSheet} from 'react-native'
import ImageSlider from '../../components/ResourceComponent/ImageSlider'
import TradeSection from '../../components/ResourceComponent/TradeSection'
import DescriptionSection from '../../components/ResourceComponent/DescriptionSection'
import InfoSection from '../../components/ResourceComponent/InfoSection'
import UserSection from '../../components/ResourceComponent/UserSection'
import {BottomButtonsWapper,ButtonStyle} from '../../components/style'
import {connect} from 'react-redux'
import {like} from '../../components/Store/action'
import { StackActions } from '@react-navigation/native'


const ResourceDetails =  ({navigation,route,like})=>{
	const item = route.params?route.params.product:null
	const isFavScreen = route.params?route.params.isFavScreen:null

	return  (
		<ScrollView style={{backgroundColor:'#ffffff'}}  stickyHeaderIndices={[1]} >
			<ImageSlider/>
			<TradeSection/>
			<DescriptionSection/>
			<InfoSection/>
			<UserSection navigation={navigation}/>

			<BottomButtonsWapper>
             
				<ButtonStyle positive={true} onPress={()=>{like(item.id,item.isFav)}}>
					<Text style={[style.buttonText,{color:'#ffffff'}]}>
						{item.isFav ? 'Saved':'Save'}
					</Text>
				</ButtonStyle>

				<ButtonStyle positive={false} onPress={()=>{if(!isFavScreen){
					navigation.navigate('ResourceList')
				}else{ 
					navigation.dispatch(StackActions.popToTop())
					navigation.navigate('My Collections')}}}>
					<Text style={[style.buttonText,{color:'#8c8c8c'}]}>Back</Text>
				</ButtonStyle>

            
            
			</BottomButtonsWapper>

		</ScrollView>
       
	)
}

const style = StyleSheet.create({
	buttonText:{
		fontWeight:'bold',
		lineHeight:33,
		textAlign:'center'
	}
})

const mapDispatch = (dispatch)=>({
	like(id,isFav){
		dispatch(like(id,isFav))
	}
})

export default connect(null,mapDispatch) (ResourceDetails)

