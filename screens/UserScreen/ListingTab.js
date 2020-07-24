/* eslint-disable no-unused-vars */
import React from 'react'
import {View,FlatList,TouchableWithoutFeedback} from 'react-native'
import ResourceItem from '../../components/ResourceComponent/ResourceItem'
import {connect} from 'react-redux'

const ListingTab = ({navigation,data})=>{
	return (
        
		<View style={{flex:1,backgroundColor:'#ffffff'}}>
			<FlatList style={{marginTop:30}} 
				data={data} 
				renderItem={({item})=><TouchableWithoutFeedback onPress={()=>{navigation.navigate('details',{product:item})}}>
					<View>
						<ResourceItem item={item}/>
					</View>
				</TouchableWithoutFeedback>} 
			/>
            
		</View>
	)
}

const mapState = (state)=> ({
	data: state.screen.data

})

export default connect(mapState)(ListingTab)


