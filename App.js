import 'react-native-gesture-handler';
import React from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';
import SignIn from "./src/screens/SignIn"
import { NavigationContainer } from '@react-navigation/native';
import Stacks from "./src/screens/navigation/Stack"
import DrawerStack from './src/screens/navigation/DrawerStack';


const App =()=>{
  return(
   <NavigationContainer>
     <Stacks />
   </NavigationContainer>
  )
}

const styles = StyleSheet.create({
  Container:{
    flex:1,
    alignItems:"center",
    justifyContent:"center",
  },
});

export default App;
