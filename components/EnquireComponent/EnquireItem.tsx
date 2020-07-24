import React from 'react'
import {Text,View,StyleSheet,Image} from 'react-native'
import {Enquire} from '../../screens/EnquireScreen/EnquireScreen'
import {EnquireItemWapper} from '../style' 
import {changeColor} from '../../utils/utils'

interface ItemProps {
    item:Enquire
}

interface UserProps {
    imgSrc:String
}

interface TitleProps {
    title:String
    name:String
}
interface DescriptionProps {
    description:String
}
interface ProductProps {
    name:String
}


const UserHeader = ({imgSrc}:UserProps)=>{
    return (
        <View style={style.userHeaderWapper}>
    
            <Image style={style.cycle} source={{ uri: `${imgSrc}`}}/>    
    

           <View style={{marginRight:25}}>
             <Text>Haohanqi</Text>
             <Text>Moken Exchange CO</Text>
           </View>
           

            <Text>2020 06/25</Text>
        </View>
    )
}


const Product = ({name}:ProductProps)=>{
    return (
        <View style={{flex:1,flexDirection:'row',justifyContent:'flex-start',alignItems:'center'}}>
            <Text style={[style.titleText,{color:changeColor(name)}]}>{name}</Text>
        </View>
    )
}


const Title =({title,name}:TitleProps)=>{
    return (
        <View style={style.titleWapper}>
            <Text style={style.titleText}>Standard</Text>
            <Text style={style.infoText}>{title}</Text>
        </View>
    )
}

const Description =({description}:DescriptionProps)=>{
    return (
        <View style={style.descriptionWapper}>
            <Text style={[style.titleText,{flex:1}]}>Description</Text>
            <Text style={style.description}>{description}</Text>
        </View>
    )
}



const EnquireItem = ({item}:ItemProps)=>{
    return (
        <EnquireItemWapper>
           
                <UserHeader imgSrc='https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&w=1000&q=80'/>
                <Product name={item.productType}/>
                <Title title={item.standard} name={item.productType}/>
                <Description description={item.description}/>
      
        </EnquireItemWapper>
    )
}

const style = StyleSheet.create({
    userHeaderWapper:{
        flex:1,
        width:'90%',
        flexDirection:'row',
        justifyContent:'flex-start',
        alignItems:'center',
        paddingBottom:10,
        marginBottom:10,
        borderBottomWidth:2,
        borderBottomColor:'#ffffff'
    },

    titleWapper:{
        flex:1,
        flexDirection:'row',
        justifyContent:'flex-start',
        alignItems:'center',
        marginBottom:10
    },

    descriptionWapper:{
        flex:3,
        flexDirection:'column',
        justifyContent:'space-around',
        alignItems:'flex-start',
        width:'90%',
        height:'80%',
    },
    titleText:{
        fontSize:20,
        fontWeight:'bold'
    },

    infoText:{
        marginLeft:'30%',
        fontWeight:'500'
    },

    description:{
        flex:2,
        lineHeight:22,
        fontWeight:'500',
        marginLeft:'10%'
    },

    cycle:{
        width:45,
        height:45,
        borderRadius:45,
        marginVertical:10,
        marginRight:10
    }
})

export default EnquireItem