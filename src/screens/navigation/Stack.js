import React from "react";
import {View,Text} from 'react-native'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import SignUp from "../SignUp";
import SignIn from "../SignIn";
import UserFeatures from "../../UserFeatures";
import DrawerStack from "./DrawerStack";
import Chest from "../Chest";
import Biceps from "../Biceps";
import Legs from "../Legs";
import Triceps from "../Triceps";
import Shoulders from "../Shoulders";
import Back from "../Back";
const Stack=createNativeStackNavigator();

const Stacks=()=>{
    return(
    <Stack.Navigator>
        <Stack.Screen name="Sign In" component={SignIn} />
        <Stack.Screen name="Sign Up" component={SignUp} />
        <Stack.Screen name="Drawer" component={DrawerStack} options={{ headerShown: false }} />
        <Stack.Screen name="Chest" component={Chest} />
        <Stack.Screen name="Legs" component={Legs} />
        <Stack.Screen name="Biceps" component={Biceps} />
        <Stack.Screen name="Triceps" component={Triceps} />
        <Stack.Screen name="Shoulders" component={Shoulders} />
        <Stack.Screen name="Back" component={Back} /> 
        
    </Stack.Navigator>
)
}
export default Stacks;