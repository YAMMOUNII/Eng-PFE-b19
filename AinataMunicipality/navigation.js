import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {NavigationContainer} from '@react-navigation/native';
import Home from './screens/Home';
import Dashboard from "./screens/Dashboard";
import Media from "./screens/Media";
import Services from "./screens/Services";
import Settings from "./screens/Settings";
import RegisterLogin from "./screens/RegisterLogin";


function RootNavigation() {
    const Stack = createStackNavigator();

    const screenOptions = {
        headerShown: false,
    };

    return (
        <NavigationContainer>
            <Stack.Navigator initialRouteName="Home" screenOptions={screenOptions}>
                <Stack.Screen name="Home" component={Home} />
                <Stack.Screen name="Dashboard" component={Dashboard} />
                <Stack.Screen name="Media" component={Media} />
                <Stack.Screen name="Services" component={Services} />
                <Stack.Screen name="Settings" component={Settings} />
                <Stack.Screen name="RegisterLogin" component={RegisterLogin} />
            </Stack.Navigator>
        </NavigationContainer>
    );
}

export default RootNavigation;
