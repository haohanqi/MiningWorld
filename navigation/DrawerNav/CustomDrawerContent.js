/* eslint-disable no-unused-vars */
import React from 'react'
import {DrawerContentScrollView,DrawerItem} from '@react-navigation/drawer'
import UserAvatar from '../../components/UserComponent/UserAvata'
import {changeTarget,getCopperData} from './Store/action'
import {connect} from 'react-redux'


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
      
		<DrawerContentScrollView {...props}>
			<UserAvatar/>
			<DrawerItem label="GOLD" onPress={()=>{ props.changeTarget('GOLD')
				props.navigation.navigate('ResourceList')
			}} 
			{...style}/>

			<DrawerItem label="SLIVER" onPress={()=>{ props.changeTarget('SLIVER');props.navigation.navigate('ResourceList')}} {...style}/>
        
			<DrawerItem label="CU" onPress={()=>{props.changeTarget('CU')
				props.getData('CU')
				props.navigation.navigate('ResourceList')
			}} 
			{...style}/>
		</DrawerContentScrollView>
	)
}

const mapDispatch = (dispatch)=>({
	changeTarget(target){
		dispatch(changeTarget(target))
	},

	getData(target){
		dispatch(getCopperData(target))
	}

})


export default connect(null,mapDispatch)(CustomDrawerContent)