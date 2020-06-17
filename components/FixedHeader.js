import React from 'react'
import {FixedHeaderTitle,FixedHeaderInfo,Bar,PriceInfo} from './style'
import {ResourceListWapper,FixedHeaderWapper} from '../screens/style'
import {View,Text,StyleSheet} from 'react-native'

export default ({target})=>{
    return(
        <FixedHeaderWapper>
          
          <FixedHeaderTitle>
              <Bar/>
              <PriceInfo>
                  <Text style={style.productName}>{target.toUpperCase()}</Text>
                  <View style={style.priceWapper}>
                      <Text style={style.currentPrice}>17.89</Text>
                      <Text style={style.percentage}>0.25(-1.1%)</Text>
                  </View>
              </PriceInfo>
          </FixedHeaderTitle>
          
          <FixedHeaderInfo>
              <View style={style.priceWapper}>
                  <Text style={style.priceTitle}>Highest Price: </Text>
                  <Text style={style.price}>17.99 </Text>
              </View>
              
              <View style={style.priceWapper}>
                  <Text style={style.priceTitle}>Lowest Price: </Text>
                  <Text style={style.price}>17.66 </Text>
              </View>
          </FixedHeaderInfo>
      </FixedHeaderWapper>
    )
}


const style = StyleSheet.create({
    productName:{
      textAlign:"center",
      fontSize:22,
      fontWeight:'700',
      color:'#ff971d'
    },
    priceWapper:{
      flexDirection:"row",
      justifyContent:"center",
      alignItems:"baseline",
    },
    
    currentPrice:{
      flex:1,
      fontSize:20,
      fontWeight:"bold",
      textAlign:"left",
    },
  
    percentage:{
      flex:1,
      fontSize:15,
      textAlign:"left",
      color:'red'
    },
    priceTitle:{
      fontWeight:'bold',
      color:"#ff971d",
    },
    price:{
      fontWeight:'600',

    }
    
  })