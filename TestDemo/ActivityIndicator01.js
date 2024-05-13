import React from "react";
import { ActivityIndicator, StyleSheet, View, Button, Alert } from "react-native";
//()=>expression  函数体是表达式，省略函数体的大括号和return关键字
const ActivityIndicator01 = () => (
    <View style={[styles.container, styles.x]}>
        <ActivityIndicator />
        <ActivityIndicator size="large" />
        <ActivityIndicator size="small" color="#0000ff" />
        <ActivityIndicator size="large" color='#00ff00' />
    </View>
);
    
const ActivityIndicator02 = () => (
    <View style={[styles.container, styles.x]}>
        <Button
            onPress={() => {Alert.alert('点我') }}
            title="Learn More"
            color="#841584"
            accessibilityLabel="Learn more about this purple button"
            text
        />
    </View>

);

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center"
    },

    x: {
        flexDirection: "row",
        justifyContent: "space-around",
        padding: 20
    }
});

export default ActivityIndicator01;
