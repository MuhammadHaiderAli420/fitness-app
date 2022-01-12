import React from 'react'
import { StyleSheet, View, Text,Button } from 'react-native'

const Triceps = ({navigation}) => {
    const d=new Date();
    d.setFullYear(2022);
    return (
        <View style={styles.Container}>
            <Text style={styles.text}>
                1.	Rod push down</Text>
               <Text style={styles.text}> 2.	Rope extension</Text>
                <Text style={styles.text}>3.	U bar push down</Text>
                <Text style={styles.text}>4.	Kick backs</Text>
                <Button title="save records" onPress={() => navigation.navigate("Drawer", { screen: "Records",params:{param1:`${d}+"on this date you did triceps exercise"`} })}></Button>
        </View>
    )
}
const styles = StyleSheet.create({
    Container: {
        flex: 1,
        alignItems: "center",
        justifyContent: "center"
    },
    text: {
        fontSize: 25,
        margin: "2%",
        alignItems: "center",
        justifyContent: "center",
    }
})
export default Triceps;