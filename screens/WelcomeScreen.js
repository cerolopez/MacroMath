import * as React from "react";
import { Text, ScrollView, View, ImageBackground, StyleSheet, Pressable } from "react-native";
import TopHeader from "../components/TopHeader.js";
import ActivityLog from "../components/ActivityLog.js";

export default function WelcomeScreen({ navigation }) {
    return (
        <ScrollView style={styles.screen}>
            <TopHeader title="Home"/>
            <ImageBackground source={require("../assets/images/fridge-bg.png")} style={styles.img}>
                <Text style={styles.h1Text}>MacroMath</Text>
            </ImageBackground>
            <View style={styles.buttonContainer}>
                <Pressable 
                style={styles.buttonStyle} 
                onPress={() => navigation.navigate("Create Food")}>
                    <Text style={styles.buttonText}>Create Food</Text>
                </Pressable>
                <Pressable 
                style={styles.buttonStyle} 
                onPress={() => navigation.navigate("Create Meal")}>
                    <Text style={styles.buttonText}>Create Meal</Text>
                </Pressable>
            </View>
            <View style={styles.container}>
                <Text style={styles.h2Text}>Recent Activity</Text>
                <ActivityLog />
            </View>
        </ScrollView>
    );
}

const styles = StyleSheet.create({
    screen: {
        backgroundColor: "white"
    },
    container: {
        padding: 30, 
        gap: 10
    },
    img: {
        resizeMode: "cover", 
        width: "100%", 
        height: 150,
        justifyContent: "center"
    }, 
    h1Text: {
        color: 'white',
        fontSize: 50, 
        flexWrap: 'wrap',
        textAlign: 'center',
        fontFamily: "Inter",
        fontWeight: "bold",
        textShadowColor: '#000',
        textShadowOffset: { width: 2, height: 2 },
        textShadowRadius: 5,
    }, 
    h2Text: {
        fontSize: 20
    },
    buttonStyle: {
        backgroundColor: "#FC8EA7", 
        width: 150,
        padding: 15,
        borderRadius: 8,
        alignItems: "center"
    }, 
    buttonText: {
        color: "white", 
        fontSize: 14, 
        fontWeight: "600"
    }, 
    buttonContainer: {
        display: "flex",
        flexDirection: "row", 
        padding: 30,
        justifyContent: "space-between"
    }
})