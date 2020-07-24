import styled from 'styled-components'

export const ResourceListWapper = styled.View`
flexDirection:column;
justifyContent:center;
alignItems:stretch;
width:100%;
background-color:#ffffff;
`

export const FixedHeaderWapper= styled.View`
flexDirection:row;
justifyContent:center;
alignItems:center;
width:100%;
borderBottomWidth:2px;
borderBottomColor:#f4f3f3;
`

export const UserSettingScreenWapper = styled.View`
flexDirection:column;
justifyContent:center;
alignItems:center;
background-color:white
`
export const NewsScreenWapper = styled.ScrollView.attrs({
	contentContainerStyle: {
		flexDirection:'column',
		justifyContent:'center',
		alignItems:'flex-start',
	}
})`
background-color:white;
width:100%;
padding-left:5%;
`

export const LoginScreenWapper = styled.View`
flexDirection: column;
justifyContent:flex-start;
alignItems: center;
height:100%;
background-color:white
`
export const AccountScreenWapper = styled(LoginScreenWapper)`

`








