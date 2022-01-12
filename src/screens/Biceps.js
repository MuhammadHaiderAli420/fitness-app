import React from 'react'
import { StyleSheet,View,Text,Button } from 'react-native'

const Biceps=({navigation})=>{
    const d=new Date();
    d.setFullYear(2022);
    return (
        <View style={styles.Container}>
           <Text style={styles.text}>
                1.	Straight bench dumbbell press</Text>
                <Text style={styles.text}>2.	Straight bench press partial</Text>
                <Text style={styles.text}>3.	Inclined dumbbell press</Text>
                <Text style={styles.text}>4.	Dumbbell flying</Text>
                <Text style={styles.text}>5.	Pullover
            </Text>
            <Button title="save records" onPress={() => navigation.navigate("Drawer", { screen: "Records",params:{param1:`${d}+"on this date you did Biceps exercise"`} })}></Button>
        </View>
    )
}
const styles=StyleSheet.create({
    Container:{
        flex:1,
        alignItems:"center",
        justifyContent:"center"
    },
    text:{
        fontSize:30,
        margin:"2%",
        alignItems:"center",
        justifyContent:"center",
    }
})
export default Biceps;