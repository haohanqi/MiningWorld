import * as type from './actionType'

export const changeSelectedTypes = (selectedTypes:String[])=>{
    return {
        type:type.SELECTED_TYPES,
        payload:selectedTypes
    }
}

 




