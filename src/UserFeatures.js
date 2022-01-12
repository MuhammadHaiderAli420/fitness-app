import React, { useEffect, useState } from 'react'
import { TextInput, StyleSheet, View, Text, TouchableOpacity, Button } from 'react-native';
import { DrawerActions } from '@react-navigation/native';


const UserFeatures = ({ navigation }) => {
    const [height, setHeight] = useState();
    const [weight, setWeight] = useState();
    const [bmi, setBmi] = useState();
    const [ans, setAns] = useState();

    const CalBmi = () => {
        const x = Math.round((weight / Math.pow(height, 2)) * 10000);
        setBmi(x);
        if (bmi >= 16 && bmi <= 18) {
            setAns("YOU ARE UNDERWEIGHT");
        }
        if (bmi >= 19 && bmi <= 24) {
            setAns("YOU ARE NORMAL WEIGHT");
        }
        if (bmi >= 25 && bmi <= 29) {
            setAns("YOU ARE OVERWEIGHT");
        }
        if (bmi >= 30) {
            setAns("YOU ARE OBESE");
        }
    }

    useEffect(() => {
        navigation.setOptions({
            headerLeft: () => {
                return (
                    <Button title="Exercise" onPress={() => navigation.dispatch(DrawerActions.openDrawer())}>
                    </Button>
                )
            }
        })
    }, [])

    return (
        <View style={styles.Container}>
            <TextInput style={styles.input} placeholder='Height in cm' onChangeText={text => setHeight(text)} />
            <TextInput style={styles.input} placeholder='Weight in kg' onChangeText={text => setWeight(text)} />
            <TextInput style={styles.input} placeholder='Age' />
            <Button onPress={CalBmi} title="Calculate Bmi"></Button>
            <Text style={styles.Text}>"Your BMI is: " {bmi}</Text>
            <Text style={styles.Text}>{ans}</Text>
        </View>
    )
}
const styles = StyleSheet.create({
    Container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: "center",
    },
    input: {
        width: "80%",
        height: "10%",
        borderWidth: 1,
        margin: "3%"
    },
    Text: {
        fontSize: 20,
        alignItems: "center",
        justifyContent: "center",
        margin: "2%"
    }
}
)
export default UserFeatures;