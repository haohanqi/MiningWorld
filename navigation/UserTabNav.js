import React from 'react'
import {Text} from 'react-native'
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import BasicInfoTab from '../screens/BasicInfoTab'
import ListingTab from '../screens/ListingTab'
import EnquireTab from '../screens/EnquireTab'
import ListingTabNav from '../navigation/ListingTabNav'
const Tab = createMaterialTopTabNavigator();

export default ()=>{
    return(
        <Tab.Navigator screenOptions={{
            gesturesEnabled: false,

        }}>
             <Tab.Screen name="BasicInfo" component={BasicInfoTab} />
             <Tab.Screen name="Listing" component={ListingTabNav} />
             <Tab.Screen name="Enquire" component={EnquireTab} />
        </Tab.Navigator>
    )

}