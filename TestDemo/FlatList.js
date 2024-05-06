import React, { useState } from "react";
import { Alert, FlatList, SafeAreaView, StatusBar, StyleSheet, Text, TouchableOpacity, View } from 'react-native';

const DATA = [
    {
        id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
        title: 'First Item',
    },
    {
        id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f63',
        title: 'Second Item',
    },
    {
        id: '58694a0f-3da1-471f-bd96-145571e29d72',
        title: 'Third Item',
    },
];

//(param)=>expression;  省去函数体的大括号和return
const Item = ({ item, onPress, backGroundColor, textColor }) => (
    <TouchableOpacity onPress={onPress} style={[styles.item, {backGroundColor }]}>
        <Text style={[styles.title, {color:textColor}]}>{item.title}</Text>
    </TouchableOpacity>
);

//(param)=>{声明语句}
const App02 = () => {
    const [selectId, setSeleId] = useState();
    const renderItem = ({ item }) => {
        const backGroundColor = item.id == selectId ? '#6e366e' : '#f9c2ff';
        const color = item.id == selectId ? 'white' : 'black';
        return (
            <Item
                item={item}
                onPress={() => setSeleId(item.id)}
                backGroundColor={backGroundColor}
                textColor={color}
            />
        );
    };


    return (
        <SafeAreaView style={styles.container}>
            <FlatList
                data={DATA}
                renderItem={renderItem} 
                keyExtractor={item => item.id} //该属性指定使用id作为列表每一项的key param=>expression
                extraData={selectId}
            />
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        marginTop: StatusBar.currentHeight || 0,
    },
    item: {
        backgroundColor: '#f9c2ff',
        padding: 20,
        marginVertical: 8,
        marginHorizontal: 16
    },
    title: {
        fontSize: 17
    }
});

export default App02;