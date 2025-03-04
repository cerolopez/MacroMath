import * as React from "react";
import { Text, View, StyleSheet, Pressable } from "react-native";
import BackHeader from "../components/BackHeader.js";

export default function CreateFoodScreen({navigation}) {
    return (
        <View style={styles.screen}>
            <View style={styles.container}>
                <Pressable onPress={() => navigation.goBack()}>
                    <BackHeader />
                </Pressable>
            </View>
        </View>

    );
}

const styles = StyleSheet.create({
    screen: {
        backgroundColor: "white"
    },
    img: {
        resizeMode: "cover", 
        width: "100%", 
        height: 150,
        justifyContent: "center"
    },
    container: {
        paddingTop: 50,
        paddingLeft: 25,
        paddingBottom: 15,
      },
      headerText: {
          color: 'black',
          fontSize: 18, 
          flexWrap: 'wrap',
          textAlign: 'left',
          fontFamily: "Inter",
      },
})