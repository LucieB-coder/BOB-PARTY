import { StatusBar } from 'expo-status-bar'
import { useState } from 'react';
import { StyleSheet, View, Text, Alert, Pressable, Image, ImageBackground} from 'react-native'
import React from 'react';
import { FlatList } from 'react-native-gesture-handler';

const BobClassic = require('../../assets/BobsSkins/BobClassic.png');
const BobBW = require('../../assets/BobsSkins/BobBW.png');
const BobBlue = require('../../assets/BobsSkins/BobBlue.png');
const BobGreen = require('../../assets/BobsSkins/BobGreen.png');



function Test(props: { navigation: any; }) {
    const { navigation } = props

    const [skin, setSkin] = useState([
        { name : 'BobClassic', image: BobClassic, price: 0, id: 's0001'},
        { name : 'BobBW', image: BobBW, price: 150, id: 's0002'},
        { name : 'BobBlue', image: BobBlue, price: 200, id: 's0003'},
        { name : 'BobGreen', image: BobGreen, price: 200, id: 's0004'},
    ]);

    const ItemSeprator = () => <View style={{
        height: 2,
        width: "100%",
        backgroundColor: "red",
    }}/>

    return (
        <View style={styles.imageWrapper}>
            <FlatList
                numColumns={2}
                keyExtractor={( item ) => item.id }
                data={skin}
                ItemSeparatorComponent={ItemSeprator}
                renderItem={({ item }) => (
                    <ImageBackground
                        style={styles.theImage}
                        source={item.image}
                    >
                        <Text>{item.price}</Text>
                        <Text>{item.name}</Text>
                    </ImageBackground>
                )}
            />
        </View>
    );
}

const styles = StyleSheet.create({
    imageWrapper: {
        height: 200,
        width: 200,
        overflow : "hidden"
    },
    theImage: {
        flex: 1,
        alignItems: "flex-end",
        margin: 10,
        width: "100%",
        height: "100%",
    },
    container: {
        backgroundColor: '#45444E',
        flex: 1,
        paddingTop: "50%",
        paddingBottom: "50%",
        alignItems: 'center',
        justifyContent: 'center',
        height: '100%',
    },
    Text: {
        margin: 15,
        paddingVertical: 12,
        width: '40%',
        borderRadius: 10,
        backgroundColor: '#0085FF',
      },
    item: {
        marginTop: 24,
        backgroundColor: 'pink',
        fontSize: 24,
    },
    debug:{
        flex: 0.2,
        backgroundColor: "red",
        padding: 50,
    },
});

export default Test