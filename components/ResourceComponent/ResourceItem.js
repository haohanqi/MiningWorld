/* eslint-disable no-unused-vars */
import * as React from 'react'
import {View, Text, StyleSheet,Button,TouchableOpacity} from 'react-native'
import {ResourceItemWapper,ResourceInfoWapper,ButtonCollenctionWapper,ProductTitle,Details,DetailsItem}  from '../style'
import { Entypo ,MaterialCommunityIcons } from '@expo/vector-icons' 
import {Toast} from '@ant-design/react-native'
import {connect} from 'react-redux'
import {changeColor} from '../../utils/utils'
import {like} from '../Store/action'

function ResourceInfo({target}){
	return (
		<ResourceInfoWapper>
            
			<ProductTitle>
				<Text style={{textAlign:'left',lineHeight:40,color:changeColor(target),fontWeight:'bold',fontSize:20}}>Standard: 7DSD-DAAS</Text>
			</ProductTitle>

			<Details>
                
				<DetailsItem>
					<View>
						<Text style={style.info}>$ 17.89</Text>
					</View>
					<View style={style.titleIconWapper}>
						<Entypo name="price-tag" size={24} color="#ff971d" />
						<Text style={style.title}>Price</Text>
					</View> 
				</DetailsItem>
                
				<DetailsItem>
					<View>
						<Text style={style.info}>189 G</Text>
					</View>
					<View style={style.titleIconWapper}>
						<MaterialCommunityIcons name="weight-gram" size={24} color="#ff971d" />
						<Text style={style.title}>Weight</Text>
					</View> 
				</DetailsItem>
           
			</Details>
            
           
			<Details>
                
				<DetailsItem>
					<View>
						<Text style={style.info}>10 km</Text>
					</View>
					<View style={style.titleIconWapper}>
						<MaterialCommunityIcons name="truck-delivery" size={24} color="#ff971d" />
						<Text style={style.title}>Delivery</Text>
					</View>  
				</DetailsItem>
                
				<DetailsItem>
					<View>
						<Text style={style.info}>Toronto</Text>
					</View>
					<View style={style.titleIconWapper}>
						<Entypo name="location" size={24} color="#ff971d" />
						<Text style={style.title}>Location</Text>
					</View>     
				</DetailsItem>
            
			</Details>
        
		</ResourceInfoWapper>

	)
}

function ButtonCollection({like,item}){

	const showSuccess = (isFav)=>{

		if(isFav){
			Toast.success('Add success !!!', 1)
		}else{
			Toast.success('Remove success !!!', 1)
		}
        
      
	}
	return(
		<ButtonCollenctionWapper>
			<TouchableOpacity >
				<View style={style.button}>
                    
					<Entypo name="heart" size={30} color={item.isFav?'red':'black'} onPress={()=>{like(item.id,item.isFav);showSuccess(item.isFav)}} />
				</View>
			</TouchableOpacity>


			<TouchableOpacity>
				<View>
					<MaterialCommunityIcons name="email-outline" size={24} color="black" />
				</View>
			</TouchableOpacity>
		</ButtonCollenctionWapper>
	)
}

const ResourceItem=({item,target,like})=>{
	return (
		<ResourceItemWapper>
			<ResourceInfo target={target}/>
			<ButtonCollection like={like} item={item}/>   
		</ResourceItemWapper>

	)
}


const style = StyleSheet.create({
	titleIconWapper:{
		flexDirection:'row',
		justifyContent:'flex-start',
		alignItems:'center'
	},
	title:{
		marginLeft:'5%',
		fontWeight:'600',
		fontSize:15,
		textAlign:'left'
	},
	info:{
		marginBottom:'10%',  
		fontWeight:'300',
		fontSize:13,
	},
	button:{
		marginBottom:'30%',
		marginTop:'45%'
	}
})

const mapState = (state)=>{
	//console.log(state.screen.data)
	return{
		target: state.screen.target,
		data: state.screen.data
	}
    
}

const mapDispatch = (dispatch)=>({
	like(id,isFav){
		dispatch(like(id,isFav))
	}
})

export default connect(mapState,mapDispatch) (ResourceItem)