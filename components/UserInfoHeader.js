import React from 'react'
import {View,Text,StyleSheet,Image,TouchableOpacity} from 'react-native'
import UserAvata from './UserAvata'
import { AntDesign } from '@expo/vector-icons'; 
import { MaterialIcons } from '@expo/vector-icons'; 


export default ({navigation})=>{
    return (
        <View style={style.headerwapper}>
           
                <TouchableOpacity style={style.back} onPress={()=>{navigation.navigate('ResourceDetails')}}>
                    <View>
                         <Text>Back</Text>
                    </View>
                </TouchableOpacity>
           
            <UserAvata style={{flex:2}}/>
            <View style={style.buttonsWapper}>
                <TouchableOpacity>
                    <View style={style.buttonWapper}>
                        <AntDesign name="adduser" size={25} color="#ff971d" />
                        <Text style={style.buttonText}>Follow</Text>
                    </View>
                </TouchableOpacity>

                <TouchableOpacity>
                    <View style={style.buttonWapper}>
                         <MaterialIcons name="contact-mail" size={25} color="#ff971d" />
                        <Text style={style.buttonText}>Contact</Text>
                    </View>
                </TouchableOpacity>
            </View>     
        </View>
    )
}

const style = StyleSheet.create({
    headerwapper:{
        flexDirection:'column',
        justifyContent:'center',
        alignItems:'center',
        width:'100%',
        height:280,
        backgroundColor:'#ffe8d6'
    },
    buttonsWapper:{
        width:'100%',
        marginTop:20,
        flexDirection:'row',
        alignItems:'flex-end',
        justifyContent:'space-around'
    },

    buttonWapper:{
        flexDirection:'column',
        justifyContent:'flex-end',
        alignItems:'center'
    },
    buttonText:{
        marginTop:5,
        fontWeight:'bold'
    },
    back:{
        position:'absolute',
        top:60,
        left:20

    }

    
})