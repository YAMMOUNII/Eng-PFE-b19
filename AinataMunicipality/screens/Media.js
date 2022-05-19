import React from 'react';

import {SafeAreaView, Text, View} from 'react-native';
import BottomTabs from "../componets/BottomTabs";

const Media = () => {
    return (
        <SafeAreaView>
            <View style={{flex: 1, justifyContent: "center", alignItems: "center", backgroundColor: "#F4F5F7"}}>
                <Text>
                    Media screen
                </Text>
            </View>
            <BottomTabs/>
        </SafeAreaView>
    );
};

export default Media;
