import * as React from "react";
import { Text, View, Image, ImageBackground, StyleSheet, Pressable } from "react-native";
import TopHeader from "../components/TopHeader.js";

export default function WelcomeScreen() {
    return (
        <View>
            <TopHeader />
            <ImageBackground source={require("../assets/images/fridge-bg.png")} style={styles.img}>
                <Text style={styles.h1Text}>MacroMath</Text>
            </ImageBackground>
            <View style={styles.buttonContainer}>
                <Pressable style={styles.buttonStyle} onPress={() => {}}>
                    <Text style={styles.buttonText}>Create Food</Text>
                </Pressable>
                <Pressable style={styles.buttonStyle} onPress={() => {}}>
                    <Text style={styles.buttonText}>Create Meal</Text>
                </Pressable>
            </View>
            <View style={styles.container}>
                <Text style={styles.h2Text}>Recent Activity</Text>
                <View style={styles.feedContainer}>
                    <Image source={require("../assets/images/fridge-bg.png")} style={styles.icon}></Image>
                    <View style={styles.activityContainer}>
                        <Text style={styles.regularText}>Logged <Text style={styles.bold}>protein powder</Text> as a meal</Text>
                        <Text style={styles.subtitleText}>2 hours ago</Text>
                    </View>
                </View>
                <View style={styles.line} />
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
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
    }, 
    icon: {
        width: 45,
        height: 45,
        borderRadius: 50
    }, 
    feedContainer: {
        flexDirection: "row", 
        gap: 25, 
        paddingTop: 20
    }, 
    regularText: {
        fontSize: 14
    },
    subtitleText: {
        fontSize: 12
    }, 
    activityContainer: {
        gap: 20
    }, 
    line: {
        height: 1,
        backgroundColor: "#ccc",
        marginVertical: 25
    }, 
    bold: {
        fontWeight: 700,
        color: "#47101E"
    }
})