import React from 'react'
import { StyleSheet,View,Text,TouchableOpacity } from 'react-native'

const FullBodyWorkout=({navigation})=>{
    return(
        <View style={styles.Container}>
            <TouchableOpacity style={styles.button} onPress={()=>navigation.navigate("Chest")}>
                <Text style={styles.text}> Chest </Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.button} onPress={()=>navigation.navigate("Legs")}>
                <Text style={styles.text}> legs </Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.button} onPress={()=>navigation.navigate("Biceps")}>
                <Text style={styles.text}>Biceps</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.button} onPress={()=>navigation.navigate("Triceps")}>
                <Text style={styles.text}>Triceps</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.button} onPress={()=>navigation.navigate("Shoulders")}>
                <Text style={styles.text}>Shoulders</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.button} onPress={()=>navigation.navigate("Back")}>
                <Text style={styles.text}>Back</Text>
            </TouchableOpacity>

        </View>
    )
}
const styles=StyleSheet.create({
    Container:{
        flex:1,
        alignItems:"center",
        justifyContent:"center",
        

    },
    button:{
        backgroundColor:"red",
        width:"80%",
        height:"15%",
        margin:"2%",
        alignItems:"center",
        justifyContent:"center"


    },
    text:{
        alignItems:"center",
        fontSize:20,
        color:"white"
    }
})
export default FullBodyWorkout;