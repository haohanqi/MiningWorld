import React,{useState}from 'react'
import {Image,StyleSheet,Dimensions,Text,View} from 'react-native'
import {ImageSliderWapper,PageWapper,Page} from './style'

const images = ['https://images.unsplash.com/photo-1555158337-edaa542c8f79?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&w=1000&q=80',
                'https://images.unsplash.com/photo-1543788454-3738a5885682?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&w=1000&q=80',
                'https://images.unsplash.com/photo-1586658066617-501acf76eafc?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&w=1000&q=80',
                ]


export default ()=>{
    const [active,setActive] = useState(0)

    const scrollChange = ({nativeEvent})=>{
        const slider = Math.ceil(nativeEvent.contentOffset.x / nativeEvent.layoutMeasurement.width)
        if(slider !==active){
            setActive(slider)
        }
    }
    
    return(
        <View>
            <ImageSliderWapper 
                horizontal 
                pagingEnabled 
                showsHorizontalScrollIndicator={false}
                onScroll={scrollChange}
                >
                 {
                    images.map((item,index)=><Image style={style.image} key={index} source={{uri: item}}/>)
                 }
             </ImageSliderWapper>
             <PageWapper>
                 {
                    images.map((item,index)=><View style={index==active ? style.inactivepage : style.activepage} key={index} active={active}/>)
                 }
             </PageWapper>
        </View>
    )
}

const style = StyleSheet.create({
    image:{
        width:Dimensions.get('window').width,
        height:300,
        backgroundColor:'red',
        resizeMode:'cover'
    },

    activepage:{
        width:20,
        height:20,
        borderRadius:20,
        marginLeft:'2%',
        backgroundColor:'#f9f6f7'
    },
    inactivepage:{
        width:20,
        height:20,
        borderRadius:20,
        marginLeft:'2%',
        backgroundColor:'#ff971d'
    }
})