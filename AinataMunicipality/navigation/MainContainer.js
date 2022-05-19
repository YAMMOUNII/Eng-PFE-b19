import React from 'react';

import {Text, View} from 'react-native';
import {SafeAreaView} from "react-native";
import Services from "./screens/Services";
import BottomTabs from "../componets/BottomTabs";

const MainContainer = ({ navigation }) => {
    return (
        <SafeAreaView style={{flex:1, alignItems: "center", justifyContent: "center"}}>
         <View style={{flex:1}}>
             <Services/>
         </View>
            <BottomTabs navigation={navigation}/>
        </SafeAreaView>
    );
};

export default MainContainer;
