import * as React from 'react';
import { View, Text, Pressable, StyleSheet } from 'react-native';

export default function TopHeader({title}) {
    return (
        <View style={styles.container}>
            <Text style={styles.headerText}>{title}</Text>
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
    }
  });