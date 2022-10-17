import { StatusBar } from 'expo-status-bar'
import { StyleSheet, View, ImageSourcePropType, Pressable, Text} from 'react-native'
import React from 'react';
import stylesScreen from './style/screens.style'
import { TextInput } from 'react-native-gesture-handler';
import { CustomTextInput } from '../components/CustomTextInput';
import { ButtonGameTypeChoice } from '../components/ButtonGameTypeChoice';

import styles from "./style/SignIn.style"

function SignUp(props: { navigation: any; }) {
    const { navigation } = props
    return (
    <View style={stylesScreen.container}>
        <View style={stylesScreen.bodyCenter}>
            <CustomTextInput placeholder={""} text="Pseudo"/>
            <CustomTextInput placeholder={""} text="Mot de passe"/>
            <CustomTextInput placeholder={""} text="Mot de passe"/>
            <CustomTextInput placeholder={""} text="Nationalité"/>
            <CustomTextInput placeholder={""} text="Date de naisance"/>
            <CustomTextInput placeholder={""} text="Sexe"/>
            <Pressable style={styles.button} onPress={navigation.navigate('Home')}>
                <Text style={styles.text}>S'inscrire</Text>
            </Pressable>
        </View>
    </View>
  );
}

export default SignUp
