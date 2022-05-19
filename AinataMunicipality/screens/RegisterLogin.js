import React, {useState} from 'react';

import {Image, StyleSheet, Text, TextInput, TouchableOpacity, View} from 'react-native';
import {Ionicons} from '@expo/vector-icons';
import {ScrollView} from "react-native";


const RegisterLogin = () => {
    const [name, setName] = useState("");
    const [password, setPassword] = useState("");

    return (
        <View style={styles.container}>
            <View style={styles.circle}/>
            <View style={{marginTop: 64}}>
                <Image source={require("../assets/logo.png")}
                       style={{width: 150, height: 100, alignSelf: "center"}}/>
            </View>
            <ScrollView style={{marginHorizontal: 32}}>

                <Text style={styles.header}>Username</Text>
                <TextInput
                    style={styles.input}
                    placeholder="enter your username"
                    onChangeText={(name)=>setName(name)}
                    value={name}
                />

                <Text style={styles.header}>Password</Text>
                <TextInput
                    style={styles.input}
                    placeholder="enter your password"
                    onChangeText={(password)=>setPassword(password)}
                    value={password}
                />

                <View style={{alignItems: "flex-end", marginTop: 64}}>
                    <TouchableOpacity style={styles.continue}>
                        <Ionicons name="arrow-forward" size={30} color="#FFF" />
                    </TouchableOpacity>

                </View>
            </ScrollView>
        </View>
    );
};

export default RegisterLogin;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        width: "100%",
        backgroundColor: "#F4F5F7"
    },
    circle: {
        flex: 1,
        width: 500,
        height: 500,
        borderRadius: 500 / 2,
        backgroundColor: "#FFF",
        position: "absolute",
        left: -120,
        top: -20
    },
    header: {
        fontWeight: "800",
        fontSize: 30,
        color: '#514E5A',
        marginTop: 32
    },
    input: {
        marginTop: 15,
        height: 50,
        borderWidth: StyleSheet.hairlineWidth,
        borderColor: "#BAB7C3",
        borderRadius: 30,
        paddingHorizontal: 16,
        color: "#514E5A",
        fontWeight: "600"
    },
    continue: {
        width: 70,
        height: 70,
        borderRadius: 70 / 2,
        backgroundColor: "#9075E3",
        alignItems: "center",
        justifyContent: "center"
    }
});