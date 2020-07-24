/* eslint-disable no-unused-vars */
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'
import  React,{  useEffect } from 'react'
import { Provider } from 'react-redux'
import store from './Store/store'
import { StyleSheet, View} from 'react-native'
import useCachedResources from './hooks/useCachedResources'
import RootNav from './navigation/RootNav'
import * as Font from 'expo-font'



const App=(props)=>{

	useEffect(()=>{ Font.loadAsync(
		'antoutline',
		require('@ant-design/icons-react-native/fonts/antoutline.ttf')
	)})

	const isLoadingComplete = useCachedResources()

	if (!isLoadingComplete) {
		return null
	} else {
		return (
			<Provider store={store}>
				<View style={styles.container}>
					<NavigationContainer> 
						<RootNav/>
					</NavigationContainer>
				</View>
			</Provider>
		)
	}
}

// const mapState=(state)=>{
//   console.log(state.screen.isLogined)
//   return {
//     isLogined: state.screen.isLogined
//   }
// }

export default App

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: '#fff',
	},
})


// <Stack.Navigator>
//             {
//               logined ? (      
//                   <Stack.Screen component={BottomTabNavigator} name='main' 
//                     options={
//                     {headerShown:false}
//                     }
//                   />
//                 ) : (      
//                   <Stack.Screen component={LoginNav} name='login'
//                   options={
//                     {headerShown:false}
//                     }
//                   />
//                 )
//             } 
//           </Stack.Navigator>