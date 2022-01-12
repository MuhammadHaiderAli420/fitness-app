import React from 'react'
import { View,Text } from 'react-native'
import { createDrawerNavigator } from '@react-navigation/drawer';
import FullBodyWorkout from '../FullBodyWorkout';
import UserFeatures from '../../UserFeatures';
import Abs from '../Abs';
import Records from '../../Records';
import DietPlan from '../../DietPlan';

const Drawer= createDrawerNavigator();

const DrawerStack=()=>{
    return(
        <Drawer.Navigator>
            <Drawer.Screen name="User Features" component={UserFeatures} options={{
                drawerLabel:()=> null,
                drawerIcon:()=>null,
                drawerItemStyle: { height: 0 }
            }} />
            <Drawer.Screen name="Full body Workout" component={FullBodyWorkout} />
            <Drawer.Screen name="Abs" component={Abs} />
            <Drawer.Screen name="Records" component={Records} />
            <Drawer.Screen name="Diet Plan" component={DietPlan} />
        </Drawer.Navigator>
    )
}
export default DrawerStack;