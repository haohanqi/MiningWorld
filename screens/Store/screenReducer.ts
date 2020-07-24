import * as typeNav from '../../navigation/DrawerNav/Store/actionType'
import * as typeComponment from '../../components/Store/actionType'
import * as typeScreen from './actionType'
import {Enquire} from '../EnquireScreen/EnquireScreen'
import {filter} from '../../utils/utils'

interface Mine {
    id:String,
    isFav:Boolean,
}

interface SavingPost {
    title:String,
    subtitle:String,
    description:String
}



interface State {
    target:String,
    data: Mine[],
    enquireData:Enquire[],
    filterEnquireData:Enquire[]
    favItems:Mine[]
    selectedType:String[],
    savedPosts:SavingPost,
  
}


// mock up data
const data : Mine[] = [
    {id:'123',isFav:false},
    {id:'124',isFav:false},
    {id:'125',isFav:false},
    {id:'126',isFav:false},
    {id:'127',isFav:false},
    {id:'128',isFav:false},
    {id:'129',isFav:false}
]

const enquireData : Enquire[] = [
    {
      id:'123',
      productType:'GOLD',
      standard:'SSS-DD-SS',
      description:'Lotsize not over 25 kg / lot'

  },
  {
    id:'124',
    productType:'CU',
    standard:'SSS-DD-SS',
    description:'Lotsize not over 25 kg / lot'

  },

  {
    id:'125',
     productType:'CU',
     standard:'SSS-DD-SS',
    description:'Lotsize not over 25 kg / lot, Transcation will be payed in 2 weeks'

  },
  {
    id:'126',
    productType:'SLIVER',
    standard:'SSS-DD-SS',
    description:'Percentage can be 90%-95%. Delivery range in North American'
  },
]


const initState : State = {
    target:"GOLD", 
    data: data, //testing data
    enquireData:enquireData, //testing data
    filterEnquireData:enquireData,
    favItems:[],
    selectedType:['GOLD','SLIVER','CU'],
    savedPosts:{title:'',subtitle:'',description:''},
}

export default (state=initState,action:any)=>{
    switch (action.type){
        case typeNav.TARGET:
           return {
               ...state,
               target: action.payload
           }

        case typeNav.SETDATA:
            return {
                ...state,
                data:action.payload.data
            }
        
        case typeComponment.LIKE:
            let newData = [...state.data]
            // find the item which need to be changed
            let item = newData.findIndex(item=>item.id===action.payload.id)
            // change isFav status
            newData[item].isFav=action.payload.isFav    
            // if isFav change to true, add it to favItems
            if(action.payload.isFav){
                return {
                    ...state,
                    data:newData,
                    favItems:[...state.favItems, newData[item]]
                }
            }else{
            //if isFav is false, which means remove it from favlist 
            let newFavItems = state.favItems.filter((item)=>item.id !== action.payload.id)
            return {
                ...state,
                data:newData,
                favItems:newFavItems
            }         
            }

        case typeScreen.SELECTED_TYPES:
            
            let filterData = filter(state.enquireData,action.payload)
            
            return {
                ...state,
                filterEnquireData:filterData
            }
        case typeComponment.SAVING_POSTS:
            return {
                ...state,
                savedPosts:action.payload
            }
        
        case typeComponment.CLEAR_POSTS:
            return {
                ...state,
                savedPosts:action.payload
            }
        

        default:
            return state
    }
    
}