import * as React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';
import logs from "../content/activity.json";

export default function ActivityLog() {
    return (
        <View style={styles.logContainer}>
            {logs.map((log) => (
                <View key={log.id}>
                    <View style={styles.feedContainer}>
                        <Image source={require("../assets/images/fridge-bg.png")} style={styles.icon}></Image>
                        <View style={styles.activityContainer}>
                            <Text style={styles.regularText}>Logged <Text style={styles.bold}>{log.item}</Text> as a {log.type}</Text>
                            <Text style={styles.subtitleText}>{log.timestamp}</Text>
                        </View>
                    </View>
                    <View style={styles.line} />
                </View>
              ))}
        </View>
    );
};

const styles = StyleSheet.create({
    logContainer: {
        marginTop: 20
    },
    feedContainer: {
        flexDirection: "row", 
        gap: 25, 
    }, 
    icon: {
        width: 45,
        height: 45,
        borderRadius: 50
    }, 
    activityContainer: {
        gap: 20
    },
    bold: {
        fontWeight: 700,
        color: "#47101E"
    },
    regularText: {
        fontSize: 14
    },
    subtitleText: {
        fontSize: 12
    }, 
    line: {
        height: 1,
        backgroundColor: "#ccc",
        marginVertical: 30
    }, 
  });