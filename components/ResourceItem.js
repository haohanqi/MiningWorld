import * as React from 'react'
import {View, Text, StyleSheet,Button,TouchableOpacity} from 'react-native'
import {ResourceItemWapper,ResourceInfoWapper,ButtonCollenctionWapper,ProductTitle,Details,DetailsItem}  from './style'
import { Entypo ,MaterialCommunityIcons } from '@expo/vector-icons'; 
import {Toast} from '@ant-design/react-native'

function ResourceInfo(){
    return (
        <ResourceInfoWapper>
            
            <ProductTitle>
                <Text style={{textAlign:'left',lineHeight:40,color:"#ff971d",fontWeight:'bold',fontSize:20}}>Standard: 7DSD-DAAS</Text>
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

function ButtonCollection(){

    const showSuccess = ()=>{
        console.log('s')
      Toast.success('Add success !!!', 1)
    }
    return(
        <ButtonCollenctionWapper>
            <TouchableOpacity >
                <View style={style.button}>
                    <Entypo name="heart-outlined" size={30} color="black" onPress={showSuccess}/>
                </View>
             </TouchableOpacity>


             <TouchableOpacity onPress={()=>{console.log('ge')}}>
                <View>
                    <MaterialCommunityIcons name="email-outline" size={24} color="black" />
                </View>
             </TouchableOpacity>


        </ButtonCollenctionWapper>

    )
}

export default ({item})=>{
    return (
        <ResourceItemWapper onPress={()=>{console.log('ss')}}>
             <ResourceInfo/>
             <ButtonCollection/>   
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