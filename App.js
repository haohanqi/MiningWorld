import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import  React,{  useEffect } from 'react';

import { StyleSheet, View ,Text} from 'react-native';

import useCachedResources from './hooks/useCachedResources';
import BottomTabNavigator from './navigation/BottomTabNavigator';
import * as Font from 'expo-font'


const Stack = createStackNavigator();

export default function App(props) {

  useEffect(()=>{ Font.loadAsync(
    'antoutline',
    require('@ant-design/icons-react-native/fonts/antoutline.ttf')
  );})

  const isLoadingComplete = useCachedResources();

  if (!isLoadingComplete) {
    return null;
  } else {
    return (
      <View style={styles.container}>
        <NavigationContainer >
          <BottomTabNavigator/>
        </NavigationContainer>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
});
