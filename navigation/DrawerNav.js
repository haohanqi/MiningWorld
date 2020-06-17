import * as React from 'react'
import { createDrawerNavigator, DrawerContentScrollView,
    DrawerItemList,DrawerItem} from '@react-navigation/drawer';
import ResScreenNav from './ResScreenNav'
import UserAvatar from '../components/UserAvata'
import {Text} from 'react-native'



const DrawerNav = createDrawerNavigator()


function CustomDrawerContent(props) {
    const style = {
       labelStyle:{
           fontSize:18,
           fontWeight:'700',
           color:'black',
           textAlign:'center'
       },
       inactiveBackgroundColor:'#ffe8d6',
       activeBackgroundColor:'#fffdf6',
       activeTintColor:'#ffffff',
       style:{
           marginTop:15,
           width:'90%',
           textAlign:'center'
       }

    }
    return (
      <DrawerContentScrollView {...props} >
        <UserAvatar/>
        <DrawerItem label="GOLD" onPress={()=>{props.navigation.navigate('ResourceList',{target:'gold'})}} {...style}/>
        <DrawerItem label="SLIVER" onPress={()=>{props.navigation.navigate('ResourceList',{target:'sliver'})}} {...style}/>
        <DrawerItem label="CU" onPress={()=>{props.navigation.navigate('ResourceList',{target:'cu'})}} {...style}/>
      </DrawerContentScrollView>
    );
  }


export default ()=>{
    return (
        <DrawerNav.Navigator  drawerContent={props => <CustomDrawerContent {...props} />}>
            <DrawerNav.Screen name="mining" component={ResScreenNav} />        
        </DrawerNav.Navigator>
    )
}