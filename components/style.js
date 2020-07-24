import styled from 'styled-components'
import {Dimensions} from 'react-native'


export const FloatingButtonWapper =  styled.TouchableOpacity`
z-index:1;
position:absolute;
bottom:50px;
right:50px;
width:50px;
height:50px;
border-radius:50px;
background-color:#adc6ff;
flexDirection:column;
justifyContent:center;
alignItems:center;
shadow-color: #000;
shadowOffset: {
	width: 0,
	height: 7,
};
shadowOpacity: 0.31;
shadowRadius: 9.11;
elevation: 14;
`
//------------------------------------------
export const NewsHeader = styled.Text`
font-weight:900;
font-size:35px;
margin-top:15%;
margin-bottom:10%;
`

export const NewsTitle = styled.Text`
font-weight:bold;
font-size:30px;
margin:5% 0;
` 
export const NewsSectionWapper = styled.View`
width:100%;
flexDirection:column;
justifyContent:center;
alignItems:flex-start;
margin-bottom:25px;
`

export const NewsItemWapper = styled.View`
flexDirection:column;
justifyContent:space-around;
alignItems:flex-start;
margin-top:10px;
margin-right:15px;
padding-left:10px;
padding-right:10px;
padding-bottom:10px;
width:${Dimensions.get('window').width * 0.45};
height:130px;
background-color:#f5f5f5;
border-radius:20px;
shadowColor: #000;
shadowOffset: {
	width: 0,
	height: 2,
};
shadowOpacity: 0.17;
shadowRadius: 3;

elevation: 2;
`

export const RecommendItemWapper = styled(NewsItemWapper)`
flexDirection:row;
justifyContent:center;
alignItems:center;
height:250px;
width:${Dimensions.get('window').width * 0.9};
margin-bottom:15px;

`

export const NewsDetailsWapper =styled.ScrollView.attrs({
	contentContainerStyle: {
		flexDirection:'column',
		justifyContent:'center',
		alignItems:'flex-start',
	}
})`
background-color:white;
width:100%;
`





//------------------------------------------


export const ResourceItemWapper = styled.View`
width:90%;
flexDirection:row
margin-left:5%;
margin-right:5%;
margin-top:5%;
background-color:#f9f6f7;
border-radius:20px;
`

export const ResourceInfoWapper = styled.View`
flex:2;
height:250px;
flexDirection:column;
justifyContent: center;
alignItems:stretch;
padding:3%;

`
export const ButtonCollenctionWapper = styled.View`
flex:1;
height:250px;
flexDirection:column;
justifyContent:center;
alignItems:center;

`

export const ProductTitle = styled.View`
flex:1;
height:20%;
width:100%;
`

export const Details = styled.View`
flex:2;
height:20%;
width:100%;
flexDirection:row;
justifyContent: space-around;
alignItems: center;
margin-top:5%;
margin-bottom:5%

`

export const DetailsItem = styled.View`
flex:1;
flexDirection:column;
justifyContent:center;
alignItems:center;
height:100%;
margin-left:3%;
margin-right:3%;
background-color:#ffffff;
border-radius:20px;
`

export const FixedHeaderTitle= styled.View`
flex:1;
background-color:#ffffff;
height:80px;
flexDirection:row;
justifyContent:space-around;
alignItems:center;
`

export const Bar = styled.View`
height:90%;
width:10px;
background-color:${props => props.backgroundColor || 'palevioletred'};
margin-left:5%;
`

export const PriceInfo = styled.View`
flex:1;
flexDirection:column;
justifyContent:space-around;
alignItems:flex-start;
height:90%;
background-color:#ffffff;
margin-left:5%;
`

export const FixedHeaderInfo = styled.View`
flex:1;
flexDirection:column;
justifyContent:space-around;
alignItems:center;
height:80px;
background-color:#ffffff;
padding-left:3%;
`

//--------------------------------------------------------

export const ImageSliderWapper = styled.ScrollView`
width:100%;
`

export const PageWapper = styled.View`
flexDirection:row;
justifyContent:flex-start;
alignItems:center;
width:100%;
height:30px;
margin-top:-30px;
`

export const Page = styled.View`
width:20px;
height:20px;
border-radius:20;
margin-left:2%;
`
export const TradeSectionWapper = styled.View`
flexDirection: row;
justifyContent:space-around;
alignItems:center;
width:100%;
height:80px;
background-color:#f9f6f7
margin-bottom:5%
`

export const DescriptionSectionWapper = styled.View`
flexDirection:column;
justifyContent:flex-start;
alignItems:flex-start;
width:100%;
margin-bottom:15px;
` 

export const InfoSectionWapper = styled.View`
flexDirection:column;
justifyContent:space-around;
alignItems:flex-start;
width:100%;
margin-bottom:15px;
`

export const UserSectionWapper = styled.View`
flexDirection:column;
justifyContent:space-around;
alignItems:flex-start;
width:100%;
`
export const UserInfoWapper = styled.View`
flexDirection:row;
justifyContent:flex-start;
alignItems:center;
width:100%;
background-color:#f9f6f7;
padding:2%
`

export const BottomButtonsWapper = styled.View`
width:100%;
flexDirection:row;
justifyContent:space-around;
alignItems:center;
margin-top:30;
margin-bottom:30;
`
export const ButtonStyle = styled.TouchableOpacity`
width:20%;
height:33;
borderRadius:10;
background-color:${props=>props.positive ? '#52c41a' : '#ffffff'}
border: ${props=>props.positive ? 'none' : '1px solid #8c8c8c'}
`



//--------------------------------------------------------

export const UserInfoSectionWapper = styled.View`
width:90%;
border-radius:30px;
background-color:red;
margin:5% 5%
padding-left:20px
padding-top:20px
padding-bottom:20px
`

export const AboutSection = styled(UserInfoSectionWapper)`
flexDirection:column;
justifyContent:space-around;
alignItems:flex-start;
background-color:#ffe8d6;

`

export const ContactSection = styled(UserInfoSectionWapper)`
flexDirection:column;
justifyContent:space-around;
alignItems:flex-start;
background-color:#e3f6f5;
`

export const CompanySection = styled(ContactSection)`
background-color:#fd5e53
`

//--------------------------------------------

export const EnquireItemWapper = styled.View`
flexDirection:column;
justifyContent:space-around;
alignItems:flex-start;
background-color:#ffe8d6;
width:90%;
height:260px;
margin:5% 5%;
border-radius:20px;
padding-left:20px;
padding-top: 20px;
`
//--------------------------------------------

export const PostingModalItem = styled.View`
flexDirection:column;
justifyContent:space-around;
alignItems:flex-start;
height:500px;
width:100%;
border-top-left-radius:20px;
border-top-right-radius:20px;
`

export const PostingTextInput = styled.TextInput.attrs(props=>({
	height: props.height || 40,
	width: props.width || Dimensions.get('window').width * 0.7,
	placeholder:props.placeholder || 'Title'
}))`

border: 1px solid black;
border-radius:5px;
padding-left:10px;
margin-left:5%;
font-size:16px;
`

export const ButtonsWrapper = styled.View`
width:90%;
flexDirection:row;
justifyContent:space-around;
alignItems:center;
`

export const PostButton = styled.TouchableOpacity`
width:70px;
height:30px;
border-radius:10px;
background-color:#73d13d;
alignItems:center;
justifyContent:center;
`

export const CancelButton = styled(PostButton)`
background-color:white;
border:1px solid black;
`

//-----------------------------------------
