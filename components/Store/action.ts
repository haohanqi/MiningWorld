import * as type from './actionType'
export const like = (id:String,isFav:Boolean)=>{
    let payload  = {
        isFav,
        id,
    }
    
    if(payload.isFav){
        payload.isFav=false
    }else{
        payload.isFav=true
    }
    return {
        type:type.LIKE,
        payload,
    }
}

export const savePosts = (title?:String,subtitle?:String,description?:String)=>{
    return {
        type:type.SAVING_POSTS,
        payload: {
            title,
            subtitle,
            description
        }
    }

}

export const clearPosts = ()=>{
    return {
        type:type.CLEAR_POSTS,
        payload: {
            title:'',
            subtitle:'',
            description:''
        }
    }

}