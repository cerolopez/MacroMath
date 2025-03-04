import * as React from 'react';
import { View, Text, Pressable, StyleSheet } from 'react-native';
import { Ionicons } from "@expo/vector-icons";

export default function BackHeader() {
    return (
        <View style={styles.backStyle}>
            <Ionicons name="chevron-back-outline" size={18} color="black" />
            <Text style={styles.headerText}>Back</Text>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
      backgroundColor: '#FEC7CB',
      paddingTop: 50,
      paddingLeft: 25,
      paddingBottom: 15,
    },
    headerText: {
        color: 'black',
        fontSize: 15, 
        flexWrap: 'wrap',
        textAlign: 'left',
        fontFamily: "Inter",
    }, 
    backStyle: {
        display: "flex",
        flexDirection: "row", 
        gap: 10, 
        alignItems: "center"
      }
  });