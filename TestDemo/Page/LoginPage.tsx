import React, { useState } from "react";
import { SafeAreaView, StyleSheet, Text, View } from 'react-native';
import { Input } from "../Common/LoginComponent";
export default (props: any) => { 
    const [userName, setUserName] = useState('');
    const [pwd, setPwd] = useState('');
    return (
        <SafeAreaView style={styles.root}>
            <View style={styles.content}>
                <Input
                    label="用户名"
                    placeholder="请输入用户名"
                    shortline={true}
                    onChangeText={(text:string) => { setUserName(text)}}
                />
                <Input
                    label="密码"
                    placeholder="请输入密码"
                    secure={true}
                    onChangeText={(text:string) => { setUserName(text)}}
                />
            </View>
        </SafeAreaView>
    );
};
const styles = StyleSheet.create({
    root: {
        flex: 1,
        
    },
    content: {
        paddingTop: 20,
        backgroundColor:'#F1F5F6',
        flexGrow:1
    }
}); 