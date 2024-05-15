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
import WelcomPage from "../WelcomPage";
import AboutMePage from "../about/AboutMePage";
import AboutPage from "../about/AboutPage";

const Stack = createNativeStackNavigator();
export default function App(){
        return (
            <NavigationContainer>
                <Stack.Navigator>
                    <Stack.Screen
                        name="LoginPage"
                        component={LoginPage}
                        options={{ headerShown:false }}
                    />
                    <Stack.Screen
                        name="RegistPage"
                        component={RegistPage}
                        options={{ headerShown:false }}
                    />
                    <Stack.Screen
                        name="HomePage"
                        component={HomePage}
                        options={{ headerShown:false }}
                    />
                    <Stack.Screen
                        name="CodePushPage"
                        component={CodePushPage}
                        options={{ headerShown:false }}
                    />
                    <Stack.Screen
                        name="CustomKeyPage"
                        component={CustomKeyPage}
                        options={{ headerShown:false }}
                    />
                    <Stack.Screen
                        name="DetailPage"
                        component={DetailPage}
                        options={{ headerShown:false }}
                    />
                    <Stack.Screen
                        name="PopularPage"
                        component={PopularPage}
                        options={{ headerShown:false }}
                    />
                    <Stack.Screen
                        name="SearchPage"
                        component={SearchPage}
                        options={{ headerShown:false }}
                    />
                    <Stack.Screen
                        name="SortKeyPage"
                        component={SortKeyPage}
                        options={{ headerShown:false }}
                    />
                    <Stack.Screen
                        name="WebviewPage"
                        component={WebviewPage}
                        options={{ headerShown:false }}
                    />
                    <Stack.Screen
                        name="WelcomPage"
                        component={WelcomPage}
                        options={{ headerShown:false }}
                    />
                    <Stack.Screen
                        name="AboutMePage"
                        component={AboutMePage}
                        options={{ headerShown:false }}
                    />
                    <Stack.Screen
                        name="AboutPage"
                        component={AboutPage}
                        options={{ headerShown:false }}
                    />
                </Stack.Navigator>
           </NavigationContainer>
        );
}

const styles = StyleSheet.create({
    container: {
        flex: 1
    }
})