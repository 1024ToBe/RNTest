import React, { Component, useState } from "react";
import { StyleSheet, Text, View } from 'react-native';
import NavigationUtil from "./navigator/NavigationUtil";
export default class Index extends Component{
    render() {
        //方便其他页面跳转的时候不传navigation
        NavigationUtil.navigation = this.props.navigation;
        return (
            <View style={styles.container}>
                <Text>首页</Text>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingTop:100,
    }
})