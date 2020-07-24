/* eslint-disable no-unused-vars */
import * as React from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import ResourceDetails from '../screens/ResourceScreen/ResourceDetails'
import ResourceScreen from '../screens/ResourceScreen/ResourceScreen'
import UserScreen from '../screens/UserScreen/UserScreen'
import {Provider} from '@ant-design/react-native'


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
						({route})=>({title:route.params?route.params.product.id.toUpperCase():'null',
							headerShown:false,
						})
					}
				/>
    
				<ResStack.Screen 
					name="userInfo" 
					component={UserScreen} 
					options={
						({route})=>( {title:route.params?route.params.name.toUpperCase():'null',
							headerShown:true,
							gesturesEnabled: false,
						})  
					} 
				/>

            

			</ResStack.Navigator>
		</Provider>
	)
}




