import React, { Component, useState } from "react";
import { StyleSheet, Text, View } from 'react-native';
import { getBoarding } from "../../TestDemo/Util/BoardingUtil";
import NavigationUtil from "./navigator/NavigationUtil";
export default class Index extends Component {
    componentDidMount() {
        this.doLaunch();
    }
    componentWillUnmount() {
        this.timer && clearTimeout(this.timer);
    }

    async doLaunch() {
        const boarding = await getBoarding();
        const { navigation } = this.props;
        this.timer = setTimeout(() => {
          if (boarding) {
            NavigationUtil.resetToHomePage({
              navigation,
            });
          } else {
            NavigationUtil.login({
              navigation,
            });
          }
        }, 200);
      }


    render() {
        return (
            <View style={styles.container}>
                <Text>欢迎</Text>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1
    }
})
