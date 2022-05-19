import React from 'react';

import Home from './navigation/screens/Home';
import Dashboard from "./navigation/screens/Dashboard";
import Media from "./navigation/screens/Media";
import Services from "./navigation/screens/Services";
import Settings from "./navigation/screens/Settings";
import RegisterLogin from "./navigation/screens/RegisterLogin";
import {createStackNavigator} from "@react-navigation/stack";
import {NavigationContainer} from "@react-navigation/native";
import MainContainer from "./navigation/MainContainer";


function RootNavigation({ navigation }) {
    const Stack = createStackNavigator();

    const screenOptions = {
        headerShown: false,
    };

    return (
        <NavigationContainer>
            <Stack.Navigator initialRouteName="RegisterLogin" screenOptions={screenOptions}>
                <Stack.Screen name="Home" component={Home} />
                <Stack.Screen name="Dashboard" component={Dashboard} />
                <Stack.Screen name="Media" component={Media} />
                <Stack.Screen name="Services" component={Services} />
                <Stack.Screen name="Settings" component={Settings} />
                <Stack.Screen name="RegisterLogin" component={RegisterLogin} />
                <Stack.Screen name="MainContainer" component={MainContainer} />
            </Stack.Navigator>
        </NavigationContainer>
    );
}

export default RootNavigation;
