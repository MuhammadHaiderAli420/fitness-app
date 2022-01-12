
import React, { useState } from 'react'
import { StyleSheet, View, Text, TextInput, TouchableOpacity } from 'react-native'
import auth from '@react-native-firebase/auth';

const SignIn = ({ navigation }) => {
    const [email, setEmail] = useState();
    const [password, setPassword] = useState();
    const sign=()=>{
        auth()
        .signInWithEmailAndPassword(email, password)
        .then(() => {
            console.log('signed in!');
            navigation.navigate("Drawer", { screen: "User Features" })
        })
        .catch(error => {
            if (error.code === 'auth/email-already-in-use') {
                console.log('That email address is already in use!');
            }

            if (error.code === 'auth/invalid-email') {
                console.log('That email address is invalid!');
            }

            console.error(error);
        });
    
    

    }
    return (
        <View style={styles.Container}>
            <Text style={{ alignItems: "center", justifyContent: "center", fontSize: 30, margin: "3%" }}>Sign In</Text>
            <TextInput style={styles.input} placeholder='enter your email' onChangeText={text=>setEmail(text)} />
            <TextInput style={styles.input} placeholder='enter your password' secureTextEntry={true} onChangeText={text=>setPassword(text)} />
            <TouchableOpacity style={styles.button} onPress={sign}><Text style={styles.text}>Sign In</Text></TouchableOpacity>
            <TouchableOpacity onPress={() => navigation.navigate("Sign Up")}><Text>Dont have an account? Sign up</Text></TouchableOpacity>
        </View>

    )
}
const styles = StyleSheet.create({
    Container: {
        flex: 1,
        alignItems: "center",
        justifyContent: "center"
    },
    input: {
        borderWidth: 1,
        width: "80%",
        height: "10%",
        margin: "2%"
    },
    button: {
        borderWidth: 1,
        backgroundColor: "blue",
        width: "70%",
        height: "10%",
        margin: "2%",
        alignItems: "center",
        justifyContent: "center"
    },
    text: {
        color: "white",
        fontSize: 20,
        alignItems: "center",


    }
})

export default SignIn;