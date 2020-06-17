import * as React from 'react';
import {Text} from 'react-native'
import { createStackNavigator } from '@react-navigation/stack';
import ResourceDetails from '../screens/ResourceDetails'
import ResourceScreen from '../screens/ResourceScreen'
import UserScreen from '../screens/UserScreen'
import UserTabNav from '../navigation/UserTabNav'
import {Provider} from '@ant-design/react-native'
import UserInfoHeader from '../components/UserInfoHeader'


const ResStack = createStackNavigator()

export default function ResStackNav (){
    return(
    
    <Provider>
        <ResStack.Navigator initialRouteName="ResourceList-Details" screenOptions={{
            headerShown: false,
            gesturesEnabled:false,
          }}>
            <ResStack.Screen
                name="ResourceList"
                component={ResourceScreen}
                initialParams={{ target: 'gold'}}
                // options={
                //  ({ route }) => ({title: route.params?route.params.target.toUpperCase():'null'})
                // }
            />


            <ResStack.Screen
                name="ResourceDetails"
                component={ResourceDetails}
                options={
                   ({route})=>({title:route.params?route.params.product.toUpperCase():'null',
                   headerShown:true,
                })
                }
            />
            
      {
        // Use UserTabNav for component has problem with how to wapper header inside the "screen"
        // Use UserScreen for component has problem with Tabs how to access navigation props 
       }
            <ResStack.Screen 
                name="userInfo" 
                component={UserScreen} 
                options={
                 {
                     headerShown:false,
                     //header:({navigation})=>( <UserInfoHeader navigation={navigation}/>),
                     gesturesEnabled: false,
                } 
            }
            />

           
        </ResStack.Navigator>
    </Provider>
    );
}




