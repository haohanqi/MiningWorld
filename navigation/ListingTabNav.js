import React from 'react'
import { createStackNavigator } from '@react-navigation/stack';
import ListingTab from '../screens/ListingTab'
import UserListingDetails from '../screens/UserListingDetails'

const Stack = createStackNavigator()

export default ()=>{
    return(
        <Stack.Navigator screenOptions={{
            headerShown:false
        }}>
            <Stack.Screen name='listing' component={ListingTab} />
            <Stack.Screen name='details' component={UserListingDetails}/>
        </Stack.Navigator>
        

    )
}