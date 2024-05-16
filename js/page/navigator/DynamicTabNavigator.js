import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import React, { Component } from 'react';

//图标库
import Entypo from 'react-native-vector-icons/Entypo';
import Ionicons from 'react-native-vector-icons/Ionicons';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';

import FavoritePage from '../FavoritePage';
import MyPage from '../MyPage';
import PopularPage from '../PopularPage';
import TrendingPage from '../TrendingPage';
const Tab = createBottomTabNavigator();
const TABS = {
    //在这里配置页面的路由
    PopularPage: {
        screen: PopularPage,
        navigationOptions: {
            tabBarLabel: '最热',
            headerShown: false,
            tabBarIcon: ({ color, focused }) => (
                <MaterialIcons name={'whatshot'} size={26} style={{ color: color }} />
            ),
        },
    },
    TrendingPage: {
        screen: TrendingPage,
        navigationOptions: {
            tabBarLabel: '趋势',
            headerShown: false,
            tabBarIcon: ({ color, focused }) => (
                <Ionicons name={'md-trending-up'} size={26} style={{ color: color }} />
            ),
        },
    },
    FavoritePage: {
        screen: FavoritePage,
        navigationOptions: {
            tabBarLabel: '收藏',
            headerShown: false,
            tabBarIcon: ({ color, focused }) => (
                <MaterialIcons name={'favorite'} size={26} style={{ color: color }} />
            ),
        },
    },
    MyPage: {
        screen: MyPage,
        navigationOptions: {
            tabBarLabel: '我的',
            headerShown: false,
            tabBarIcon: ({ color, focused }) => (
                <Entypo name={'user'} size={26} style={{ color: color }} />
            ),
        },
    },
};

export default class DynamicTabNavigator extends Component {
    _tabNavigator() {
        const { PopularPage, TrendingPage, FavoritePage, MyPage } = TABS;
        const tabs = { PopularPage, TrendingPage, FavoritePage, MyPage }; //根据需要定制显示的tab
        PopularPage.navigationOptions.tabBarLabel = '最热'; //动态配置Tab属性
        return (
            <Tab.Navigator>
                {Object.entries(tabs).map((item) => {
                    return (
                        <Tab.Screen
                            key={item[0]}
                            name={item[0]}
                            component={item[1].screen}
                            options={{ ...(item[1].navigationOptions)}}
                        />
                    );
                })}
            </Tab.Navigator>
        );
    }

    render() {
        const Tab = this._tabNavigator();
        return Tab;
    }
}