
import  React,{useLayoutEffect,useState} from 'react';
import { StyleSheet, Text,View,FlatList,TouchableWithoutFeedback,TouchableOpacity } from 'react-native';
import EnquireItem from '../../components/EnquireComponent/EnquireItem'
import {Modal,Switch} from '@ant-design/react-native';
import {connect} from 'react-redux'
import {changeSelectedTypes} from '../Store/action'
import { MaterialIcons } from '@expo/vector-icons'; 

console.disableYellowBox = true;


export interface Enquire {
  id: String,
  productType:String,
  standard:String,
  description:String,
}

interface Props {
  navigation:any,
  data:Enquire[],
  //selectedTypes:String[],
  changeSelectTypes:any
}

 const EnquireScreen=({navigation,data,changeSelectTypes}:Props)=> {

  //control switch 
  const [goldSelect, setGoldSelect] = useState(true)
  const [sliverSelect, setSliverSelect] = useState(true)
  const [cuSelect, setCuSelect] = useState(true)

  //show modal
  const [visible, setVisible] = useState(false)


  const sendProductType =()=>{
    let selectedProductTypes = []

    if(goldSelect){
      selectedProductTypes.push('GOLD')
    }

    if(sliverSelect){
      selectedProductTypes.push('SLIVER')
    }

    if(cuSelect){
      selectedProductTypes.push('CU')
    }
    
    changeSelectTypes(selectedProductTypes)

  }


  //headerRight Button
  useLayoutEffect(() => {
    navigation.setOptions({
      headerRight: () => (
        <TouchableOpacity onPress={() => setVisible(true)}>
          <View style={{marginRight:15}}>
            <MaterialIcons name="filter-list" size={34} color="#1890ff" />
          </View> 
        </TouchableOpacity>
      ),
    });
  }, [navigation]);

  return (
    <View>

      <FlatList data={data} renderItem={({item})=>(
          <TouchableWithoutFeedback onPress={()=>{navigation.navigate('enquireDetails',{item:item})}}>
            <View>
               <EnquireItem item={item}></EnquireItem>
            </View>
          </TouchableWithoutFeedback>
      )}/>
      

       <Modal
          popup
          visible={visible}
          animationType="slide-up"
          onClose={()=>{setVisible(false)}}
          style={{borderTopLeftRadius:20,borderTopRightRadius:20}}
        >
        
        <View style={style.modalWapper}>

          <View>
            <Text style={style.title}>Choose Mineral Type</Text>
          </View>
          
          <View style={style.itemToggleWapper}>
            <Text style={[style.typeText,{color:'#ff971d'}]}>GOLD</Text>
            <Switch checked={goldSelect} 
                    onChange={(value)=>{setGoldSelect(value)}}/>
          </View>
           
          <View style={style.itemToggleWapper}>
            <Text style={[style.typeText,{color:'#ff971d'}]}>SLIVER</Text>
            <Switch checked={sliverSelect} onChange={setSliverSelect}/>
          </View>

          <View style={style.itemToggleWapper}>
            <Text style={[style.typeText,{color:'#ff971d'}]}>CU</Text>
            <Switch checked={cuSelect} onChange={setCuSelect} />
          </View>
          
        </View>

        <View style={style.buttonWapper}>
          <TouchableOpacity style={[style.button,{backgroundColor:'#52c41a'}]}
                            onPress={()=>{sendProductType(); setVisible(false)}}>
            <Text style={[style.buttonText,{color:'#ffffff'}]}>
               Apply
            </Text>     
          </TouchableOpacity>

          <TouchableOpacity style={[style.button,{backgroundColor:'#ffffff',borderWidth:1,borderColor:'#8c8c8c'}]}
                            onPress={()=>{setVisible(false)}}>
            
            <Text style={[style.buttonText,{color:"#8c8c8c"}]}>
               Cancel
            </Text> 

          </TouchableOpacity>
        </View>
    
        </Modal>
    </View>
  );
}
        

const style = StyleSheet.create({
  modalWapper :{
    flexDirection:'column',
    justifyContent:'space-around',
    alignItems:'flex-start',
    width:'90%',
    paddingLeft:'10%',
    paddingRight:'5%',
    paddingVertical:'5%',
    marginVertical:'5%'

  },

  itemToggleWapper :{
    flexDirection:'row',
    justifyContent:'space-between',
    alignItems:'center',
    width:'100%',
    height:80,
  },

  typeText:{
    flex:1,
    fontWeight:'bold',
    fontSize:20,
    textAlign:'left'
  },

  title:{
    fontWeight:'bold',
    fontSize:23,
    marginBottom:'3%'
  },

  buttonWapper:{
    flexDirection:'row',
    justifyContent:'space-around',
    alignItems:'center',
    width:'100%',
    marginBottom:40
  },

  
  button:{
    width:'20%',
    height:33,
    backgroundColor:'red',
    borderRadius:10
  },

  buttonText:{
    textAlign:'center',
    lineHeight:33,
    fontWeight:'bold'
  }
});


const mapState = (state:any)=>{
  return {
    data: state.screen.filterEnquireData,
  }
  
}

const mapDispatch =(dispach:any)=>({
  changeSelectTypes(selectedTypes:String[]){
    dispach(changeSelectedTypes(selectedTypes))
  }
})


export default connect(mapState,mapDispatch) (EnquireScreen)
