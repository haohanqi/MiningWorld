/* eslint-disable no-unused-vars */
import * as React from 'react'
import {View,Text,StyleSheet} from 'react-native'
import {InfoSectionWapper} from '../style'
import { MaterialCommunityIcons } from '@expo/vector-icons' 

const data =[
	{'standard':'ss-ddd-90'},
	{'price':'$ 16.89 / g'},
	{'weight':'1000 kg'},
	{'percentage':'90%'},
	{'shipment':'25 kg / pitch'},
	{'shipping range':'North American'},
	{'document status':'Ready'}
]

const DetailsItem =({position,data})=>{

	const title = Object.keys(data)[0]
	const value = Object.values(data)[0]
	const index = position%2

	return (
		<View style={ index==0 ? [style.detailsItemWapper,{backgroundColor:'#f9f6f7'}]:style.detailsItemWapper }>
			<Text style={style.keyName}>{title.toUpperCase()}</Text>
			<Text style={style.value}>{value}</Text>
		</View>
	)
}

export default ()=>{
	return (
		<InfoSectionWapper>
			<View style={style.detailsWapper}>
				<MaterialCommunityIcons name="information" size={30} color="#ff971d" style={{marginRight:10}} />
				<Text style={style.title}>Detail Info</Text>
			</View>

			<View style={{width:'100%'}}>
				{
					data.map((item,index)=><DetailsItem key={index} position={index} data={item}/>)
				}
			</View>
        
		</InfoSectionWapper>
        
	)
}

const style = StyleSheet.create({
	detailsWapper:{
		width:'33%',
		paddingTop:15,
		marginLeft:'5%',
		flexDirection:'row',
		justifyContent:'space-around',
		alignItems:'center',
		marginBottom:'5%'
	},
	title:{
		fontSize:20,
		fontWeight:'bold',
	},

	detailsItemWapper:{
		flexDirection:'row',
		justifyContent:'space-around',
		alignItems:'center',
		width:'100%',
		height:50,
		backgroundColor:'#ffffff'
	},

	keyName:{
		flex:1,
		textAlign:'center',
		fontWeight:'900'
	},
	value:{
		flex:1,
		textAlign:'center'
	}
}
)