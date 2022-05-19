import React from 'react';
import {ScrollView, View} from "react-native";
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import {TouchableOpacity, Text} from "react-native";



function BottomTabs({navigation, ...props}) {
    return (
        <View style={{
            flexDirection: "row",
            marginVertical: 3,
            padding: 5,
            marginHorizontal: 30,
            justifyContent: "space-between",
            backgroundColor: "white",
        }}>
            {/*<TouchableOpacity onPress={*/}
            {/*    () => navigation.navigate("Services", {})*/}
            {/*}>*/}
            {/*    <View style={{ marginHorizontal: 15}}>*/}
            {/*        <FontAwesome name="home" size={30} style={{ alignSelf: "center"}}/>*/}
            {/*        <Text style={{*/}
            {/*            fontSize:12*/}
            {/*        }}>Home</Text>*/}
            {/*    </View>*/}
            {/*</TouchableOpacity>*/}
            <Icon name="home" title="Home" navigation={navigation}/>
            <Icon name="bar-chart" title="Dashboard" navigation={navigation}/>
            <Icon name="briefcase" title="Services" navigation={navigation}/>
            <Icon name="users" title="Media" navigation={navigation}/>
            <Icon name="tasks" title="Settings"  navigation={navigation}/>

        </View>
    );
}

export default BottomTabs;


const Icon = ({navigation, ...props}) => (
    <TouchableOpacity onPress={
        () => navigation.navigate(props.title, {})
    }>
        <View style={{ marginHorizontal: 15}}>
            <FontAwesome name={props.name} size={30} style={{ alignSelf: "center"}}/>
            <Text style={{
                fontSize:12
            }}>{props.title}</Text>
        </View>
    </TouchableOpacity>
);
