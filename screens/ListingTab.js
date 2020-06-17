import React from 'react'
import {View,Text,FlatList,TouchableWithoutFeedback} from 'react-native'
import ResourceItem from '../components/ResourceItem'

const data = ['aaaa','bbbb','ccccc','ssss','ssssss','ssdadad']

export default ({navigation})=>{
    return (
        
        <View>
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

// {
                
//     data.map((item,index)=> <ResourceItem key={index} item={item}/>)

// }
