import React from 'react'
import { StyleSheet, View, Text,Button } from 'react-native'

const Shoulders = ({navigation}) => {
    const d=new Date();
    d.setFullYear(2022);
    return (
        <View style={styles.Container}>
                <Text style={styles.text}>1.	Military press</Text>
                <Text style={styles.text}>2.	Standing barbell press behind</Text>
                <Text style={styles.text}>3.	Front dumbbell raises</Text>
                <Text style={styles.text}>4.	Side lateral</Text>
                <Text style={styles.text}>5.	Open lateral</Text>
                <Button title="save records" onPress={() => navigation.navigate("Drawer", { screen: "Records",params:{param1:`${d}+"on this date you did Shoulders exercise"`} })}></Button>
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
export default Shoulders;