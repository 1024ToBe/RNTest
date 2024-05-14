import React, { useState } from "react";
import { StyleSheet, Text, TextInput, View } from 'react-native';
export const Input = (props: any) => { 
    const {label,placeholder,shortline,secure,onChangeText  } = props;
    return (
        <View style={{backgroundColor:'white'} }>
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
                height:0.5
            }}> 
            </View>
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
        fontSize:16,
        width:90,
    },
    input: {
        flex: 1,
        marginLeft:15
    }
});