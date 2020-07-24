/* eslint-disable no-unused-vars */
import * as React from 'react'
import {createStackNavigator} from '@react-navigation/stack'
import EnquireScreen from '../screens/EnquireScreen/EnquireScreen'
import EnuqireDetails from '../screens/EnquireScreen/EnquireDetails'
import {Provider} from '@ant-design/react-native'

const EnquireStack = createStackNavigator()

export default ()=>{
	return (
		<Provider>
			<EnquireStack.Navigator>
				<EnquireStack.Screen name='enquire' component={EnquireScreen} options={{title:'Enquire'}}/>
				<EnquireStack.Screen name='enquireDetails' component={EnuqireDetails} options={{title:'Enquire Details '}}/>
			</EnquireStack.Navigator>
		</Provider>
	)
}