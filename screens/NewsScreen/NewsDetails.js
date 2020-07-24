/* eslint-disable no-unused-vars */
import React, {useLayoutEffect} from 'react'
import {View,Text,Image,StyleSheet,Dimensions,TouchableOpacity,Share} from 'react-native'
import {NewsDetailsWapper} from '../../components/style'
import {Entypo} from '@expo/vector-icons'
const NewsDetails = ({route,navigation})=>{
	const {news} = route.params ? route.params : 'null'

	const onShare = async ()=>{
		try{
			const result = await Share.share( 
				{
					message:`${news.title}`,
					url:`www.${news.title}.com`,
					subject:`Mining World News-${news.title}`,
					title: `${news.title}`    
				}
			)
		}catch(err){
			return
		}

       
	}

	useLayoutEffect(() => {
		navigation.setOptions({
			headerRight: () => (
				<TouchableOpacity onPress={onShare}>
					<View style={{marginRight:15}}>
						<Entypo name="share-alternative" size={28} color="black" />              
					</View> 
				</TouchableOpacity>
			),
		})
	}, [navigation])

	return (

		<NewsDetailsWapper>
			<View>
				<Image style={style.coverImage}  source={{uri: `${news.imgSrc}`}}/>
			</View>

			<View style={style.titleSection}>
				<Text style={style.titleText}>{news.title}</Text>       
				<Text style={style.reportText}>9 July 2020 | {news.report}</Text>
			</View>

			<View style={style.contentSection}>
				<Text style={style.contentText}>Golden Minerals plans to drill approximately 20 holes to better define the high-grade core of the Rodeo deposit.
            The upcoming drill program will expand on the historic drilling campaigns that successfully tested multiple gold-quartz veins and breccias of the Rodeo low sulfidation vein system with encouraging results, 
            including: The objectives of the drilling program are to provide greater detail on the gold mineralization at Rodeo and to provide sample material for metallurgical and geotechnical testing, 
            an important step towards the future development of the Rodeo project outlined in the recent Preliminary Economic Assessment filed on May 28, 2020 (link),
             Drips, D., April 1, 2020, NI 43-101 Technical Report, Preliminary Economic Assessment, Rodeo Project, 
            Rodeo, Durango, Mexico, Mineral Resources Engineering, Salt Lake City, UT.</Text>
			</View>
		</NewsDetailsWapper>

	)
}

const style = StyleSheet.create({
	coverImage:{
		width:Dimensions.get('window').width,
		height:Dimensions.get('window').height * 0.35,
		resizeMode:'cover'
	},

	titleSection:{
		flexDirection:'column',
		justifyContent:'center',
		alignItems:'flex-start',
		paddingHorizontal:15,
		marginVertical:15
	},

	titleText:{
		fontSize:25,
		fontWeight:'bold',
		textAlign:'left',
		marginBottom:10,
	},

	reportText:{
		textAlign:'left',
		color:'#8c8c8c'
	},

	contentSection:{
		paddingHorizontal:15,
	},

	contentText:{
		fontSize:18,
		lineHeight:25,
	}
})

export default NewsDetails