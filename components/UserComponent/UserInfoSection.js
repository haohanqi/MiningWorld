/* eslint-disable no-unused-vars */
import React from 'react'
import {View,Text,StyleSheet} from 'react-native'
import {AboutSection,ContactSection,CompanySection} from '../style'

const InfoItem = ({title,info})=>{
	return (
		<View style={style.contactItemWapper}>
			<View style={style.contactItem}>
				<Text style={{flex:1,textAlign:'left', fontSize:14,fontWeight:'bold'}}>{title}</Text>
				<Text style={{flex:1,textAlign:'left',}}>{info}</Text>
			</View>
            
			<View style={style.divider}></View>
		</View>
	)
}

export default ()=>{
	return (
		<View>
			<AboutSection>
				<Text style={style.title}>About</Text>
               
				<View style={style.info}>
					<Text style={style.textStyle}>I am a mature, positive and hardworking individual, 
                who always strives to achieve the highest standard possible, 
                at any given task. In my previous role as a Sales Representative, 
                I demonstrated the ability to work under intense pressure, 
                sell products and services to customers from all backgrounds, 
                handle customer complaints and solve problematic situations as and when they arose. </Text>
				</View>
			</AboutSection>

			<CompanySection>
				<Text style={style.title}>Company</Text>
				<View style={style.info}> 
					<InfoItem title="Current Company" info="Moken Exchange co"/>
					<InfoItem title="Position" info="Tech Leader"/>
					<InfoItem title="Location" info="Toronto-ON-NorthYork"/>
					<InfoItem title="Business" info="Mineral Trading"/>

				</View>
			</CompanySection>


			<ContactSection>
				<Text style={style.title}>Contact</Text>
				<View style={style.info}> 
					<InfoItem title="Phone" info="6478295577"/>
					<InfoItem title="Website" info="www.haohanqi.com"/>
					<InfoItem title="Email" info="haohanqi@gmail.com"/>
				</View>
			</ContactSection>


		</View>
	)
}

const style = StyleSheet.create({
	contactItemWapper:{
		flexDirection:'column',
		justifyContent:'space-around',
		alignItems:'center',
		width:'100%',
		height:50,
		marginBottom:10
		// backgroundColor:'white'
	},

	contactItem:{
		flexDirection:'row',
		justifyContent:'space-around',
		alignItems:'center',
		width:'100%'

	},

	divider:{
		width:'100%',
		borderWidth:1,
		borderColor:'#ffffff',
	},

	title:{
		flex:1,
		fontWeight:'bold',
		fontSize:24,
		marginTop:20,
		marginBottom:60,
		height:30,
	},

	info:{
		flex:3,
		width:'90%'
	},
	textStyle:{
		fontSize:16,
		lineHeight:25,
	}

})