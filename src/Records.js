import React,{useState} from 'react'
import { StyleSheet,View,Text } from 'react-native'

const Records=({route})=>{
    const {param1}=route.params; 

    return(
        <View styles={styles.Container}>
            <Text style={{fontSize:25}}>{(param1)}</Text>


        </View>
    )
}
const styles=StyleSheet.create({
    Container:{
        flex:1,
        alignItems:"center",
        justifyContent:"center"
    }
})
export default Records;