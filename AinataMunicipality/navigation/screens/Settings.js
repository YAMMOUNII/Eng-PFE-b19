import React from 'react';

import {SafeAreaView, Text, View} from 'react-native';
import BottomTabs from "../componets/BottomTabs";

const Settings = ({ navigation }) => {
    return (
        <SafeAreaView style={{flex: 1, width: "100%", justifyContent: "center", alignItems: "center", backgroundColor: "#F4F5F7"}}>
            <View style={{flex: 1, justifyContent: "center", alignItems: "center", backgroundColor: "#F4F5F7"}}>
                <Text>
                    Settings screen
                </Text>
            </View>
            <BottomTabs navigation={navigation}/>
        </SafeAreaView>
    );
};

export default Settings;
