import * as React from 'react'
import {createStackNavigator} from '@react-navigation/stack'
import LinksScreen from '../screens/LinksScreen'

const EnquireStack = createStackNavigator()

export default ()=>{
    return (
        <EnquireStack.Navigator>
            <EnquireStack.Screen name='enquire' component={LinksScreen} options={{title:'enquire'}}/>
        </EnquireStack.Navigator>
    )
}