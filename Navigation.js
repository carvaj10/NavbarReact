import react from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import MaterialCommunityIcons from '@expo/vector-icons/MaterialCommunityIcons';

import HomeScreens from "./Screens/HomeScreens";
import SettingsScreens from "./Screens/SettingsScreens";
import StackScreens from "./Screens/StackScreens";



const HomeStack = createNativeStackNavigator();

function MyStacks() {
    return (
        <HomeStack.Navigator
            initialRouteName="CasaStack"
        >
            <HomeStack.Screen
                name="CasaStack"
                component={HomeScreens}
            />
            <HomeStack.Screen
                name="Stack"
                component={StackScreens}
            />
        </HomeStack.Navigator>
    );
}


const Tab = createBottomTabNavigator();

function MyTabs() {
    return (
        <Tab.Navigator
            initialRouteName="Casa"
            screenOptions={{
                tabBarActiveTintColor: "Orange",
            }}
        >
            <Tab.Screen 
                name="Casa" 
                component={MyStacks} 
                options={{
                    tabBarLabel: "Inicio",
                    tabBarIcon: ({ color, size }) => (
                        <MaterialCommunityIcons name="home" color={color} size={30} />
                    ),
                    tabBarBadge: 1,
                    headerShown: false,
                }}    
            />
            <Tab.Screen 
                name="Opciones" 
                component={SettingsScreens} 
                options={{
                    tabBarLabel: "Fin",
                    tabBarIcon: ({ color, size }) => (
                        <MaterialCommunityIcons name="brightness-5" color={color} size={30} />
                    )
                }}  
            />
        </Tab.Navigator>
    );
}

export default function Navigation() {
    return (
        <NavigationContainer>
            <MyTabs />
        </NavigationContainer>
    );
}