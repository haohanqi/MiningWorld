import React from 'react'
import {View,Text,StyleSheet,Image} from 'react-native'

export default ()=>{
    return (
        <View style={style.container}>
            <Image style={style.Cyele} source={{
                uri: 'https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&w=1000&q=80',
              }}/>
              <Text style={{fontWeight:'bold'}}>Hao HanQi</Text>
        </View>
    )
}

const style = StyleSheet.create({

    container:{
        flexDirection:'column',
        justifyContent:'center',
        alignItems:'center',
    },

    Cyele:{
        width:90,
        height:90,
        borderRadius:50,
        marginVertical:10,
    },

})