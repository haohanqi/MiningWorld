/* eslint-disable no-unused-vars */
import React from 'react'
import {FixedHeaderTitle,FixedHeaderInfo,Bar,PriceInfo} from '../style'
import {FixedHeaderWapper} from '../../screens/style'
import {View,Text,StyleSheet} from 'react-native'
import {connect} from 'react-redux'
import {changeColor} from '../../utils/utils'

const FiexedHeader = ({target})=>{
  
	// const changeColor = (target)=>{
	//   console.log("ss"+target)
	//   if(target === 'GOLD'){
	//     return  '#ff971d'
	//   }

	//   if(target === 'SLIVER'){
	//     return  '#dfdfdf'
	//   }

	//   if(target === 'CU'){
	//     return  '#ffe5ab'
	//   }
    
	// }
    
	return(
		<FixedHeaderWapper>
          
			<FixedHeaderTitle>
				<Bar backgroundColor={changeColor(target)}/>
				<PriceInfo>
					<Text style={[style.productName,{color:changeColor(target)}]}>{target.toUpperCase()}</Text>
					<View style={style.priceWapper}>
						<Text style={style.currentPrice}>17.89</Text>
						<Text style={style.percentage}>0.25(-1.1%)</Text>
					</View>
				</PriceInfo>
			</FixedHeaderTitle>
          
			<FixedHeaderInfo>
				<View style={style.priceWapper}>
					<Text style={[style.priceTitle,{color:changeColor(target)}]}>Highest Price: </Text>
					<Text style={style.price}>17.99 </Text>
				</View>
              
				<View style={style.priceWapper}>
					<Text style={[style.priceTitle,{color:changeColor(target)}]}>Lowest Price: </Text>
					<Text style={style.price}>17.66 </Text>
				</View>
			</FixedHeaderInfo>
		</FixedHeaderWapper>
	)
}


const style = StyleSheet.create({
	productName:{
		textAlign:'center',
		fontSize:22,
		fontWeight:'700',
    
	},
	priceWapper:{
		flexDirection:'row',
		justifyContent:'center',
		alignItems:'baseline',
	},
    
	currentPrice:{
		flex:1,
		fontSize:20,
		fontWeight:'bold',
		textAlign:'left',
	},
  
	percentage:{
		flex:1,
		fontSize:15,
		textAlign:'left',
		color:'red'
	},
	priceTitle:{
		fontWeight:'bold',
		color:'#ff971d',
	},
	price:{
		fontWeight:'600',

	}
    
})

const mapState = (state)=>({
	target: state.screen.target
})

export default connect(mapState)(FiexedHeader)