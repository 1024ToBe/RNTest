import React, { Component, useState } from "react";
import { StyleSheet, Text, View } from 'react-native';
import NavigationUtil from "./navigator/NavigationUtil";
import DynamicTabNavigator from "./navigator/DynamicTabNavigator";
export default class Index extends Component{
    render() {
        //方便其他页面跳转的时候不传navigation
        NavigationUtil.navigation = this.props.navigation;
        return (
           <DynamicTabNavigator/>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingTop:100,
    }
})