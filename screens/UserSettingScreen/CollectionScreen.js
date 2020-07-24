/* eslint-disable no-unused-vars */
import React from 'react'
import { Tabs } from '@ant-design/react-native'
import {View,Text,FlatList,StyleSheet, Dimensions,TouchableHighlight} from 'react-native'
import ResourceItem from '../../components/ResourceComponent/ResourceItem'
import {connect} from 'react-redux'


const tabs = [{title:'Listing'},{title:'Enquire'}]

const CollectionScreen = ({favListing,navigation})=>{
    
	const FavListings = (data)=>{
		return (
			favListing.length > 0 ? <FlatList data={favListing} 
				renderItem={({item})=>( <TouchableHighlight onPress={()=>{navigation.navigate('ResourceDetails',{product:item,isFavScreen:true})}}>
					<ResourceItem item={item}/>
				</TouchableHighlight>)}/> : 
                                                                      
				<View style={style.reminderTextWapper}>
					<Text style={style.reminderText}>No Collections</Text>
				</View>)
	}

	return(      
		<Tabs tabs={tabs} >
			<View>
				{
					FavListings(favListing)
				}
			</View>
            
			<View>
				<Text>enquire</Text>
			</View>
		</Tabs>
	)
}

const window = Dimensions.get('window')

const style = StyleSheet.create({
	reminderTextWapper:{
		width:'100%',
		height:window.height,
		justifyContent:'center',
		alignItems:'center'
	},
	reminderText:{
		fontWeight:'500',
		color:'#bfbfbf',
		fontSize:20
	}
    
})


const mapState =(state)=>{    
	return {
		favListing: state.screen.favItems
	}
}

export default connect(mapState) (CollectionScreen)