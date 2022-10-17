import { StatusBar } from 'expo-status-bar'
import { StyleSheet, View, ImageSourcePropType, Pressable, Text} from 'react-native'
import React from 'react';
import stylesScreen from './style/screens.style'
import { TextInput } from 'react-native-gesture-handler';
import { CustomTextInput } from '../components/CustomTextInput';
import { ButtonGameTypeChoice } from '../components/ButtonGameTypeChoice';

import styles from "./style/SignIn.style"

function SignIn(props: { navigation: any; }) {
    const { navigation } = props
    return (
    <View style={stylesScreen.container}>
        <View style={stylesScreen.bodyCenter}>
            <CustomTextInput placeholder={""} text="ID"/>
            <CustomTextInput placeholder={""} text="Password"/>
            <Pressable style={styles.button} onPress={navigation.navigate('Home')}>
                <Text style={styles.text}>Se connecter</Text>
            </Pressable>
            <Pressable>
                <Text style={styles.signup}>Pas de compte? Inscrivez vous !</Text>
            </Pressable>
        </View>
    </View>
  );
}

export default SignIn
