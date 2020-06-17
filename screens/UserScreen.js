import React, {useRef}from 'react'
import {View,Text,Animated,StyleSheet} from 'react-native'
import { Tabs } from '@ant-design/react-native';
import { ScrollView } from 'react-native-gesture-handler';
import UserInfoHeader from '../components/UserInfoHeader'
import BasicInfoTab from '../screens/BasicInfoTab'
import EnquireTab from '../screens/EnquireTab'
import ListingTab from '../screens/ListingTab'


const tabs = [
  { title: 'Basic Info' },
  { title: 'Listing' },
  { title: 'Enquire' },
];

export default ({navigation})=>{
    return (
      <View> 


      <UserInfoHeader />
         
        <View style={{height:800}} >
          <Tabs tabs={tabs} >
            <BasicInfoTab/>
            <ListingTab navigation={navigation}/>
            <EnquireTab/>
          </Tabs>        
        </View>
       
      </View>
    )
}

const style = StyleSheet.create({
 

})