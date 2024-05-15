import React, { Component } from "react";
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from "@react-navigation/native"; 
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import LoginPage from "../LoginPage";
import RegistPage from "../RegistPage";
import HomePage from "../HomePage";
import CodePushPage from "../CodePushPage";
import CustomKeyPage from "../CustomKeyPage";
import DetailPage from "../DetailPage";
import PopularPage from "../PopularPage";
import SearchPage from "../SearchPage";
import SortKeyPage from "../SortKeyPage";
import WebviewPage from "../WebviewPage";
import AboutMePage from "../about/AboutMePage";
import AboutPage from "../about/AboutPage";

export default class Index extends Component {
    render() {
        return (
            <View style={styles.container}>
                <Text>最热</Text>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1
    }
})