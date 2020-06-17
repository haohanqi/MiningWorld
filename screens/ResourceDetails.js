import * as React from 'react';
import {View,Text,ScrollView} from 'react-native'
import ImageSlider from '../components/ImageSlider'
import TradeSection from '../components/TradeSection'
import DescriptionSection from '../components/DescriptionSection'
import InfoSection from '../components/InfoSection'
import UserSection from '../components/UserSection'

export default function ResourceDetails ({navigation,route}){
    console.log(route.params?route.params.product:null)
    return  (
        <ScrollView style={{backgroundColor:'#ffffff'}}  stickyHeaderIndices={[1]} >
            <ImageSlider/>
            <TradeSection/>
            <DescriptionSection/>
            <InfoSection/>
            <UserSection navigation={navigation}/>
        </ScrollView>
       
    )
}