import { Enquire } from "../screens/EnquireScreen/EnquireScreen";
import Item from "@ant-design/react-native/lib/list/ListItem";

export const changeColor = (target:String) : String=>{
    if(target === 'GOLD'){
      return  '#ff971d';
    }

    if(target === 'SLIVER'){
      return  '#949494';
    }

    if(target === 'CU'){
      return  '#ef7e56';
    }

    return ''
}

export const filter = (data:Enquire[], selectedTypes:String[]) : Enquire[] => {
  let newData : Enquire[] = []

  selectedTypes.forEach(type => {


   let filterData = data.filter((item)=>{ return item.productType === type})
   
   newData=newData.concat(filterData)
  });

  return newData

}