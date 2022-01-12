import React from 'react'
import { StyleSheet, View, Text,Button } from 'react-native'

const Back = ({navigation}) => {
    const d=new Date();
    d.setFullYear(2022);
    return (
        <View style={styles.Container}>
            <Text style={styles.text}>
                1.	Pull down(front And back)</Text>
                <Text style={styles.text}>    2.	Over hand bent over rowing</Text>
                <Text style={styles.text}>3.	Close grip handle pull down</Text>
                <Text style={styles.text}>4.	Reverse grip pull down</Text>
                <Text style={styles.text}>5.	Seated cable rowing


            </Text>
            <Button title="save records" onPress={() => navigation.navigate("Drawer", { screen: "Records",params:{param1:`${d}+"on this date you did back exercise"`} })}></Button>
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
        fontSize: 30,
        margin: "2%",
        alignItems: "center",
        justifyContent: "center",
    }
})
export default Back;