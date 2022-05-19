import React from 'react';

import {SafeAreaView, Text, View} from 'react-native';
import BottomTabs from "../../componets/BottomTabs";

const Home = ({ navigation }) => {
    return (
        <View style={{flex: 1, width: "100%", justifyContent: "center", alignItems: "center", backgroundColor: "#F4F5F7"}}>
            <View style={{alignItems: "center", justifyContent: "center", height: "90%"}}>
                <Text>
                    Home screen
                </Text>
            </View>
            <BottomTabs navigation={navigation}/>
        </View>

    );
};

export default Home;
