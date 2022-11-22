import { StatusBar } from 'expo-status-bar'
import { View, Pressable, Text} from 'react-native'
import React, { useState } from 'react';
import stylesScreen from './style/screens.style'
import { TextInput } from 'react-native-gesture-handler';
import tabUS from "../constUser";
import styles from "./style/SignIn.style"





function SignIn(props: { navigation: any; }) {

    const { navigation } = props
    {/*
    const [pseudo, setPseudo] = useState('');
    const [password, setPassword] = useState('');
    
    const dispatch=useDispatch();

    function userVerif(login: string, password: string, nav: any){
        if((tabUS.map((User) => User.getUsername()).indexOf(login)) !== -1){
            let id = (tabUS.map((User) => User.getUsername()).indexOf(login))
            if ((tabUS.map((User) => User.getUsername()).indexOf(login) === id) && ( tabUS[id].getPassword() === password) ){
                dispatch(loginUser(tabUS[id]));
                nav.navigate('HomeTab');
            }
        }
    }
*/}

    return (
    <View style={stylesScreen.container}>
        <View style={stylesScreen.bodyCenter}>
            {/*
            <TextInput style={styles.textInput} placeholder='Login' onChangeText={(val) => setPseudo(val)} autoCapitalize='none' />
            <TextInput style={styles.textInput} placeholder='Password' onChangeText={(val) => setPassword(val)} autoCapitalize='none' />
            <Pressable style={styles.button} onPress={() => userVerif(pseudo, password, navigation)}>
                <Text style={styles.text}>Se connecter</Text>
            </Pressable>
    */}
            <Pressable onPress={() => navigation.navigate('SignUp')}>
                <Text style={styles.signup}>Pas de compte? Inscrivez vous !</Text>
            </Pressable>
        </View>
    </View>
  );
}

export default SignIn
