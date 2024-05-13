import React, { useState } from "react";
import { StyleSheet, View, SafeAreaView, TouchableOpacity, Text } from "react-native";
import { get } from "./HiNet";
import ConstApi from "./ConstApi";
const NetTest = () => {
    const [msg, setMsg] = useState('');

    const doFetch = () => {
        // let url = 'https://api.devio.org/uapi/test/test?requestPrams=Test';
        // fetch(url)
        //     .then(response => response.json())
        //     .then(response => {
        //         setMsg(JSON.stringify(response));
        //     }).catch(e => {
        //         console.log(e);
        //         setMsg(JSON.stringify(e));
        //     });
        get(ConstApi.test.api)({ requestPrams: 'RN' }).then(result => {
            setMsg(JSON.stringify(result));
            console.log('1=====',JSON.stringify(result));
        }).catch(e => {
            console.log(e);
            setMsg(JSON.stringify(e));
        });
    }

    return (
        <SafeAreaView style={styles.container}>
            <TouchableOpacity onPress={doFetch}>
                <Text>加载</Text>
            </TouchableOpacity>
            <Text>{msg}</Text>
        </SafeAreaView >
    );

};
const styles = StyleSheet.create({
    container: {
        flex: 1
    }
});

export default NetTest;