import React from 'react'
import { StyleSheet, View, Text,Button } from 'react-native'

const Legs = ({navigation}) => {
    const d=new Date();
    d.setFullYear(2022);
    return (
        <View style={styles.Container}>
            <Text style={styles.text}>
                1.	Squats</Text>
                <Text style={styles.text}>2.	Leg extension</Text>
                <Text style={styles.text}>3.	Leg press(standard +close)</Text>
                <Text style={styles.text}>4.	Smith machine (hamstring)</Text>
                <Text style={styles.text}>5.	Sumo squats


            </Text>
            <Button title="save records" onPress={() => navigation.navigate("Drawer", { screen: "Records",params:{param1:`${d}+"on this date you did legs exercise"`} })}></Button>
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
export default Legs;