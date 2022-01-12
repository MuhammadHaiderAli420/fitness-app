import React from 'react'
import { StyleSheet, View, Text, Button } from 'react-native'

const Abs = ({ navigation }) => {
    const d=new Date();
    d.setFullYear(2022);
    return (
        <View style={styles.Container}>
            <Text style={styles.text}>
                1.	Front shrugs</Text>
            <Text style={styles.text}> 2.	Reverse shrugs</Text>
            <Text style={styles.text}> 3.	Lower grip handle shrugs</Text>
            <Text style={styles.text}> 4.	Dumbbell flying shrugs
            </Text>
            <Button title="save records" onPress={() => navigation.navigate("Drawer", { screen: "Records",params:{param1:`${d}+"on this date you did Abs exercise"` }})}></Button>
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
export default Abs;