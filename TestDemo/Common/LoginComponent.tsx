import React, { useState } from "react";
import { Button, Linking, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';
export const Input = (props:any) => {
    const { label, placeholder, shortline, secure, onChangeText } = props;
    return (
        <View style={{ backgroundColor: 'white' }}>
            <View style={styles.row}>
                <Text style={styles.inputLabel}>{label}</Text>
                <TextInput
                    style={styles.input}
                    placeholder={placeholder}
                    secureTextEntry={secure}
                    autoCapitalize={'none'}
                    onChangeText={onChangeText}
                />
            </View>
            <View style={{
                backgroundColor: '#D0D4D4',
                marginLeft: shortline ? 20 : 0,
                height: 0.5
            }}>
            </View>
        </View>
    );
};

export const ConfirmButton = (props:any) => {
    const { title, onclick } = props;
    return (
        <TouchableOpacity style={styles.confirmLayout} onPress={onclick}>
            <Text style={styles.confirmTitle}>{title}</Text>
        </TouchableOpacity>
    );
};

export const Tips = (props:any) => {
    const { msg, helpUrl } = props;
    return (
        <View style={styles.tipsLayout}>
            <Text style={styles.tips}>{msg}</Text>
            {!!helpUrl && (<Button title='查看帮助' onPress={() => {
                Linking.openURL(helpUrl);
            }} />)}
        </View>
    );
};

export const NavBar = (props:any) => {
    const { title, rightTitle, onRightCick } = props;
    return (
        <View style={styles.navBar}>
            {/*左侧添加view占位，让登录文字居中*/}
            <View /> 
            <View style={styles.titleLayout}>
                <Text style={styles.title}>{title}</Text>
            </View>
            <TouchableOpacity onPress={onRightCick}>
                <Text style={styles.button}>{rightTitle}</Text>
            </TouchableOpacity>
        </View>
    );
};

const styles = StyleSheet.create({
    row: {
        flexDirection: 'row'
    },
    inputLabel: {
        marginLeft: 15,
        marginTop: 10,
        marginBottom: 10,
        fontSize: 16,
        width: 90,
    },
    input: {
        flex: 1,
        marginLeft: 15
    },
    confirmLayout: {
        backgroundColor: '#2196F3',
        alignItems: 'center',
        padding: 12,
        margin: 20,
        marginTop: 30,
        borderRadius: 5

    },
    confirmTitle: {
        fontSize: 16,
        color: 'white'
    },
    tipsLayout: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center'
    },
    tips: {
        fontSize: 14,
        color: 'red'
    },
    navBar: {
        flexDirection: 'row',
        /**
         * alignItems：交叉轴方向（Y轴colum-垂直布局）
         * justifyContent：主轴方向布局（X轴row-水平布局）
         */
        alignItems: 'center',
        
        /**
         * space-between：完全两侧分布对齐 左右不留任何空隙
         * space-round：两侧留一部分然后分布对齐
         */
        justifyContent: 'space-between',
        height: 44
    },
    titleLayout: {
        alignItems: 'center',
        justifyContent: 'center',
        position:'absolute', //绝对布局
        color: 'red',
        left: 40,
        right: 40,
        top: 0,
        bottom: 0
    },
    title: {
        fontSize: 20,
        color: 'black'
    },
    button: {
        fontSize: 16,
        color: '#007AFF',
        paddingRight: 15 // 内边距，增加按钮可点击范围
    }
});