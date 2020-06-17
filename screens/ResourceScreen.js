import  React,{useEffect} from 'react';
import { View,FlatList,TouchableWithoutFeedback} from 'react-native';
import FixedHeader from '../components/FixedHeader'
import {ResourceListWapper} from './style'
import ResourceItem  from '../components/ResourceItem'

export default function ResourceScreen({navigation,route}) {

  const {target} = route.params 
  console.log(target)

  const data = ['aaaa','bbbb','ccccc','ssss','ssssss','ssdadad']

  return (
    <ResourceListWapper>
       
      <FlatList style={{marginTop:30}} 
                data={data} 
                renderItem={({item})=><TouchableWithoutFeedback onPress={()=>{navigation.navigate('ResourceDetails',{product:item})}}>
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

    </ResourceListWapper>
  );
}






