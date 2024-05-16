import React, { useState } from "react";
import { Linking, SafeAreaView, StyleSheet, Text, View } from 'react-native';
import { ConfirmButton, Tips, NavBar,Input } from "../../TestDemo/Common/LoginComponent";
import LoginDao from "../../TestDemo/Common/LoginDao";
import ConstApi from "../../TestDemo/ConstApi";
import NavigationUtil from "./navigator/NavigationUtil";
export default (props: any) => { 
    const { navigation } = props;
    const [userName, setUserName] = useState('');
    const [password, setPassword] = useState('');
    const [imoocId, setImoocId] = useState('');
    const [orderId, setOrderId] = useState('');
    const [msg, setMsg] = useState('ddd');
    const [helpeUrl, setHelpUrl] = useState('https://baidu.com');
   
    const onRegist = () => { 
        if (userName === ''|| password === '' || imoocId === '' || orderId === '') { 
            setMsg('请填写注册信息');
            return;
        }
        setHelpUrl('');
        setMsg('');
        LoginDao.getInstance()
            .registration(userName, password, imoocId, orderId)
            .then((res) => {
                setMsg('注册成功');
                NavigationUtil.login({navigation});
            }).catch((e) => {
                const { code, data: { helpUrl = '' } = {}, msg } = e;
                setMsg(msg);
                setHelpUrl(helpUrl);
            });
    };
    return (
        <SafeAreaView style={styles.root}>
            <NavBar title="注册" rightTitle="登录"
                onRightCick={() => { 
                    NavigationUtil.login({navigation});
                }}
            />
            <View style={styles.line}/>
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
                    onChangeText={(text:string) => { setPassword(text)}}
                />
                 <Input
                    label="慕课网ID"
                    placeholder="请输入慕课网ID"
                    secure={true}
                    onChangeText={(text:string) => { setImoocId(text)}}
                />
                 <Input
                    label="课程订单号"
                    placeholder="请输入课程订单号后4位"
                    secure={true}
                    onChangeText={(text:string) => { setOrderId(text)}}
                />
                <ConfirmButton title='注册' onclick={onRegist} /> 
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
        backgroundColor: '#F1F5F6',
        flexGrow:1
    },
    line: {
        height: 0.5,
        backgroundColor:'#D0D4D5'
    }
}); 