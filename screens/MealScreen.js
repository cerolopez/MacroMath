import * as React from "react";
import { Text, View, StyleSheet } from "react-native";
import TopHeader from "../components/TopHeader.js";

export default function MealScreen() {
    return (
        <View>
            <TopHeader />
            <Text>Meals</Text>
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
})