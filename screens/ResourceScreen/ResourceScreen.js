/* eslint-disable no-unused-vars */
import  React,{useState} from 'react'
import { View,FlatList,TouchableWithoutFeedback} from 'react-native'
import FixedHeader from '../../components/Common/FixedHeader'
import {ResourceListWapper} from '../style'
import ResourceItem  from '../../components/ResourceComponent/ResourceItem'
import {connect} from 'react-redux'
import FloatingButton from '../../components/Common/FloatingButton'
import PostingModal from '../../components/Common/PostingModal'


const ResourceScreen=({navigation,target,data}) =>{
  

	const [modalVisible, changeModalVisible] = useState(false)

	return (
		< ResourceListWapper >
       
			<FlatList style={{marginTop:30}} 
				data={data} 
				renderItem={({item})=><TouchableWithoutFeedback onPress={()=>{navigation.navigate('ResourceDetails',{product:item,isFavScreen:false})}}>
					<View>
						<ResourceItem item={item}/>
					</View>
				</TouchableWithoutFeedback>} 
				ListHeaderComponent={()=><TouchableWithoutFeedback onPress={()=>navigation.openDrawer()}>
					<View>
						<FixedHeader target={target} />
					</View>
				</TouchableWithoutFeedback>}
				stickyHeaderIndices={[0]}
			/>
        
			<FloatingButton  changeModalVisible={()=>{changeModalVisible(!modalVisible)}}/>
			<PostingModal visible={modalVisible} changeModalVisible={changeModalVisible}/>
        

		</ResourceListWapper>
	)
}

const mapState = (state)=>{
	return {
		target: state.screen.target,
		data: state.screen.data
	}
}


export default connect(mapState) (ResourceScreen)






