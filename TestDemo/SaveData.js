import React, { useState } from "react";
import { StyleSheet, View, SafeAreaView, TouchableOpacity, Text, Button, TextInput } from "react-native";
import AsyncStorage from '@react-native-async-storage/async-storage';
const KEY = 'come.apple.all';
const SaveData = () => {
    const [text, onChangeText] = useState('');
    const [showText, setShowText] = useState('');

    const saveDate = async () => { 
        try { 
            await AsyncStorage.setItem(KEY,text);
        } catch(error) { 
            console.log(error);
        }
    }
    const getDate = async () => { 
        try { 
            const value = await AsyncStorage.getItem(KEY);
            setShowText(value || '');
            console.log(value);
        } catch(error) { 
            console.log(error);
        }
    }

    return (
        <SafeAreaView style={styles.container}>
            <TextInput
                style={styles.input}
                onChangeText={onChangeText}
                value={ text}
            />
            <Button onPress={saveDate} title="Save"/>
            <Button onPress={getDate} title="Get"/>
            <Text>读取到的数据:{showText}</Text>
        </SafeAreaView >
    );
    
};
const styles = StyleSheet.create({
    container: {
        flex: 1,
        marginTop:200
    },

    input: {
        
        width: 300,
        height: 40,
        borderWidth: 1
    }
});
 
export default SaveData;