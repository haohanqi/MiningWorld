import * as React from 'react';
import {View,Text,Button,StyleSheet,TouchableOpacity} from 'react-native'
import {TradeSectionWapper} from './style'
import { MaterialIcons } from '@expo/vector-icons'; 

export default ()=>{
    return(
        <TradeSectionWapper>
            <View >         
                <View style={style.priceNumberWapper}>
                    <MaterialIcons name="payment" size={30} color="#ff971d" style={{marginRight:10}}/> 
                    <Text style={style.priceNumber}>$28900</Text>
                </View>
                <Text style={style.desription}>Not include shipping fee</Text>   
            </View>

            <Text style={style.delivey}>Deliverible</Text>

            <TouchableOpacity  style={style.tradeButton}>
                <Text style={style.tradeButtonText}>Trade</Text>
            </TouchableOpacity>
        
        </TradeSectionWapper>

    )
}

const style = StyleSheet.create({
    priceNumberWapper:{
        flexDirection:'row',
        justifyContent:'flex-start',
        alignItems:'center',
        marginBottom:'5%'
    },
    priceNumber:{
        fontSize:20,
        fontWeight:'bold'
    },
    desription:{
        fontSize:14,
        color:'#949494'
    },
    delivey:{
        fontWeight:'bold',
        fontSize:16
    },
    tradeButton:{     
        backgroundColor:'#ff971d',
        width:65,
        height:30,
        borderRadius:10       
    },
    tradeButtonText:{
        lineHeight:30,
        fontSize:16,
        color:'#ffffff',
        textAlign:'center',
        fontWeight:'bold'
    }
})