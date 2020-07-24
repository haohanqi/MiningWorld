/* eslint-disable no-unused-vars */
import React , {useState}from 'react'
import {Modal} from '@ant-design/react-native'
import {Text,Dimensions,Alert} from 'react-native'
import {PostingModalItem,PostingTextInput,PostButton,CancelButton,ButtonsWrapper} from '../style'
import { TextareaItem,Toast } from '@ant-design/react-native'
import {connect} from 'react-redux'
import {savePosts,clearPosts} from '../Store/action'



const PostingListModal = ({showPostListing,changePostListingVisible,save,savedPosts,clear})=>{

	const [title,setTitle] = useState(savedPosts.title)
	const [subtitle,setsubtitle] = useState(savedPosts.subtitle)
	const [description,setdescription] = useState(savedPosts.description)

   
	const cancelButtonAlert = ()=>{
		if(title.length == 0  && subtitle.length == 0 && description.length == 0){
			// if nothing input, close modal
			changePostListingVisible(!showPostListing)
		}else{
			// if someting input, asking save
			Alert.alert(
				'Do you want to keep it ?',
				'',
				[{
					text: 'Not Keep',
					onPress: () =>{clear()
						setTitle('')
						setsubtitle('')
						setdescription('')
						changePostListingVisible(!showPostListing)
					} ,
					style: 'cancel'
				},
				{ text: 'Keep', onPress: () => {save(title,subtitle,description)
					changePostListingVisible(!showPostListing)
				} 
				}
				]
			)
		}      
	}

	const postButtonAlert = ()=>{
		if(title.length == 0){
			Toast.info('Title can not be empty!!!', 1)
		} else if(description.length == 0){
			Toast.info('Description can not be empty!!!', 1)
		}else{
			setTitle('')
			setsubtitle('')
			setdescription('')
			changePostListingVisible(!showPostListing)

		}
	}


	return (
		<Modal
			popup
			animationType="slide-up"
			visible={showPostListing}
			style={{borderTopLeftRadius:20,borderTopRightRadius:20}}
		>
			<PostingModalItem>
				<PostingTextInput width='60%' onChangeText={text=>setTitle(text)} value={title}/>
				<PostingTextInput width='60%' placeholder='Subtitle' onChangeText={text=>setsubtitle(text)} value={subtitle}/>
				<TextareaItem placeholder="Description" count={300} last={true} rows={8} 
					style={{marginLeft:'5%',borderWidth:1,borderRadius:5,width:Dimensions.get('window').width * 0.9}}
					onChangeText={text=>setdescription(text)} 
					value={description}
				/>

        
				<ButtonsWrapper>
					<PostButton onPress={postButtonAlert}>
						<Text>Post</Text>
					</PostButton>
            
					<CancelButton onPress={cancelButtonAlert}>
						<Text>Cancel</Text>
					</CancelButton>
				</ButtonsWrapper>
            

			</PostingModalItem>
		</Modal>
   
	)
}

const mapState = (state)=>{
	return {
		savedPosts: state.screen.savedPosts
	}
}

const mapDispatch = (dispatch)=>({
	save(title,subtitle,description){
		dispatch(savePosts(title,subtitle,description))
	},
	clear(){
		dispatch(clearPosts())
	}
})

export default connect(mapState,mapDispatch) (PostingListModal)

//<Button onPress={buttonAlert} title="close"></Button>
