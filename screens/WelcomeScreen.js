import * as React from "react";
import { Text, View, ImageBackground, StyleSheet } from "react-native";
import TopHeader from "../components/TopHeader.js";

export default function WelcomeScreen() {
    return (
        <View>
            <TopHeader />
            <ImageBackground source={require("../assets/images/fridge-bg.png")} style={styles.img}>
                <Text style={styles.headerText}>MacroMath</Text>
            </ImageBackground>
        </View>
    );
}

const styles = StyleSheet.create({
    img: {
        resizeMode: "cover", 
        width: "100%", 
        height: 150,
        justifyContent: "center"
    }, 
    headerText: {
        color: 'white',
        fontSize: 50, 
        flexWrap: 'wrap',
        textAlign: 'center',
        fontFamily: "Inter",
        fontWeight: "bold",
        textShadowColor: '#000',
        textShadowOffset: { width: 2, height: 2 },
        textShadowRadius: 5,
    }
})