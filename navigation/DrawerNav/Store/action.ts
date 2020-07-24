import * as type from './actionType'

interface ActionReturn {
    type: String,
    payload?:any
}

export const changeTarget = (target:String) : ActionReturn =>{
    return {
        type: type.TARGET,
        payload: target
    }
}

export const setData = (data:any) : ActionReturn =>{
    return {
        type:type.SETDATA,
        payload:data
    }
}

export const getCopperData = (target:String) => {
   return (dispatch:any)=>{
    console.log('target'+target)
    fetch('http://localhost:3000/api/products/list/Copper').
    then(response=>response.json()).
    then(
        data=>{
            console.log(data)
            dispatch(setData(data))
        }
    )
   }

}

