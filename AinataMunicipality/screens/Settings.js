import React from 'react';

import {SafeAreaView, Text, View} from 'react-native';
import BottomTabs from "../componets/BottomTabs";

const Settings = () => {
    return (
        <SafeAreaView>
            <View style={{flex: 1, justifyContent: "center", alignItems: "center", backgroundColor: "#F4F5F7"}}>
                <Text>
                    Settings screen
                </Text>
            </View>
            <BottomTabs/>
        </SafeAreaView>
    );
};

export default Settings;
