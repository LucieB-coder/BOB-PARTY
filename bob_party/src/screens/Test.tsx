import { StatusBar } from 'expo-status-bar'
import { useState } from 'react';
import { StyleSheet, View, Text, Alert, Pressable, Image, ImageBackground} from 'react-native'
import React from 'react';
import { FlatList } from 'react-native-gesture-handler';
import { SkinComponent } from '../components/Skin';
import { Skin } from '../core/skin';

const skinTest = new Skin("Bob",require('../../assets/BobsSkins/BobClassic.png'));
const skinBleu = new Skin("Bob Bleu", require('../../assets/BobsSkins/BobBlue.png'))
const skinBW = new Skin("Bob BW", require('../../assets/BobsSkins/BobBW.png'))
const skinGreen = new Skin("Bob Vert", require('../../assets/BobsSkins/BobGreen.png'))
const skinPT = new Skin("Bob R&T", require('../../assets/BobsSkins/BobPinkTurquoise.png'))

let listSkin: Array<Skin> = [skinTest, skinBleu, skinBW, skinGreen, skinPT]

function Test(props: { navigation: any; }) {
    const { navigation } = props

    const ItemSeprator = () => <View style={{
        height: 2,
        width: "100%",
        backgroundColor: "red",
    }}/>

    return (
        <View style={{backgroundColor: 'blue', flex: 0.7, alignSelf: 'center'}}>
            <FlatList 
                data={listSkin}
                numColumns={2}
                columnWrapperStyle={{ flex: 1, justifyContent: "space-around"}}
                keyExtractor={item =>item.getSkinName()}
                renderItem={({item}) => <SkinComponent skin={item} state='shop'/>} />
        </View>
    );
}

export default Test