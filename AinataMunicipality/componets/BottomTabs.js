import React from 'react';
import {ScrollView, View} from "react-native";
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import {TouchableOpacity, Text} from "react-native";



function BottomTabs(props) {
    return (
        <View style={{
            flexDirection: "row",
            marginVertical: 3,
            padding: 5,
            marginHorizontal: 30,
            justifyContent: "space-between",
            backgroundColor: "white"
        }}>
            <Icon name="home" title="Home"/>
            <Icon name="bar-chart" title="Dashboard"/>
            <Icon name="briefcase" title="Services"/>
            <Icon name="users" title="Media"/>
            <Icon name="tasks" title="Settings"/>

        </View>
    );
}

export default BottomTabs;


const Icon = (props) => (
    <TouchableOpacity>
        <View style={{ marginHorizontal: 15}}>
            <FontAwesome name={props.name} size={30} style={{ alignSelf: "center"}}/>
            <Text style={{
                fontSize:12
            }}>{props.title}</Text>
        </View>
    </TouchableOpacity>
);
