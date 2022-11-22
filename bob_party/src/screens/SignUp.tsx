import { StatusBar } from 'expo-status-bar'
import { StyleSheet, View, ImageSourcePropType, Pressable, Text, Alert} from 'react-native'
import React, { useState } from 'react';
import stylesScreen from './style/screens.style'
import { TextInput } from 'react-native-gesture-handler';
import { ButtonGameTypeChoice } from '../components/ButtonGameTypeChoice';
import styleScreen from "./style/screens.style";
import styles from "./style/SignUp.style";
import { useDispatch, useSelector } from 'react-redux';
import { checkNewUserValidity } from '../core/Auth/newUser';
import DateTimePicker, { DateTimePickerEvent } from '@react-native-community/datetimepicker';
import RNPickerSelect from "react-native-picker-select";
import tabSex from '../constSex';
import tabNat from '../constNat';
import { PickerGreySmall } from '../components/PickerGreySmall';
import { loginUser } from '../redux/features/currentUserSlice';
import { RootState } from '../redux/store';
import { updateImpossibleBirthDate, updateInvalidPassword, updateInvalidPseudo, updateTooLongPseudo, updateTooShortPassword, updateUndefinedBirthDate, updateUndefinedNationality, updateUndefinedPassword, updateUndefinedPseudo, updateUndefinedSex } from '../redux/features/credentialErrorsSlice';
import { getSystemErrorMap } from 'util';
import RNDateTimePicker from '@react-native-community/datetimepicker';

function SignUp(props: { navigation: any; }) {
    const { navigation } = props

    const [pseudo, setPseudo] = useState('');
    const [password, setPassword] = useState('');
    const [date, setDate] = useState(new Date())


    function onDateSelected(event : DateTimePickerEvent, value : Date | undefined) {
        console.log(value);
        if (value != undefined) {
            setDate(value);
        }
    }
    
    const [selectedSex, setSelectedSex] = useState('');
    const [selectedNationality, setSelectedNationality] = useState('')

    const errorList = useSelector((state: RootState) => state.credentialErrors.newUserErrorList);


    const dispatch=useDispatch();

    switch(true){
        case (errorList.undefinedPseudo):
            Alert.alert("Veuillez définir un pseudo");
            dispatch(updateUndefinedPseudo(false));
            break;
        
        case (errorList.undefinedPassword):
            Alert.alert("Veuillez définir un mot de passe");
            dispatch(updateUndefinedPassword(false));
            break;

        case (errorList.undefinedBirthDate):
            Alert.alert("Veuillez définir une date de naissance");
            dispatch(updateUndefinedBirthDate(false));
            break;

        case (errorList.undefinedNationality):
            Alert.alert("Veuillez définir une nationalité");
            dispatch(updateUndefinedNationality(false))
            break;

        case (errorList.undefinedSex):
            Alert.alert("Veuillez définir un sexe");
            dispatch(updateUndefinedSex(false));
            break;

        case (errorList.tooLongPseudo):
            Alert.alert("Votre pseudo ne doit pas dépasser 22 caractères");
            dispatch(updateTooLongPseudo(false));
            break;

        case (errorList.invalidPseudo):
            Alert.alert("Votre pseudo doit contenir uniquement des lettres des chiffres et des - ou _");
            dispatch(updateInvalidPseudo(false));
            break;

        //ALREADY USED PSEUDO

        case (errorList.tooShortPassword):
            Alert.alert("Votre mot de passe doit faire au moins 8 caractères");
            dispatch(updateTooShortPassword(false));
            break;
        
        case (errorList.invalidPassword):
            Alert.alert("Votre pseudo doit contenir au moins une majuscule, une majuscule, un chiffre et un caractère spécial (#?!@$%^&*-)");
            dispatch(updateInvalidPassword(false));
            break;

        case (errorList.impossibleBirthDate):
            Alert.alert("Vous devez avoir au moins 13 ans");
            dispatch(updateImpossibleBirthDate(false));
            break;
    }
    
    return (
    <View style={stylesScreen.container}>
        <View style={stylesScreen.bodyCenter}>
            
            <View style={{width: '60%', alignItems: 'center'}}>
                <Text style={styles.text}>Login</Text>
                <TextInput style={styles.textInput} placeholder='Login' onChangeText={(val) => setPseudo(val)} autoCapitalize='none' />
            </View>
            
            <View style={{width: '60%', alignItems: 'center'}}>
                <Text style={styles.text}>Password</Text>
                <TextInput style={styles.textInput} placeholder='Password' onChangeText={(val) => setPassword(val)} autoCapitalize='none' />
            </View>
            
            
            <View style={{width: '70%', alignItems: 'center'}}>
                <Text style={styles.text}>Date de naissance</Text>
                <View style={{width: 150, margin: 10}}>
                    <RNDateTimePicker onChange={(event, value) => onDateSelected(event, value)} mode='date' value={date} themeVariant='dark'/>
                </View>
            </View>

            <View style={{width: '60%', alignItems: 'center'}}>
                <Text style={styles.text}>Nationalité</Text>
                <PickerGreySmall title='Choisir la Nationalité' valueChange={(value:string) => 
                setSelectedNationality(value)} values={tabNat} />
            </View>

            <View style={{width: '60%', alignItems: 'center'}}>
                <Text style={styles.text}>Sexe</Text>
                <PickerGreySmall title='Choisir le sexe' valueChange={(value:string) => setSelectedSex(value)} values={tabSex} />
            </View>
            <Pressable style={styles.button} onPress={() => checkNewUserValidity(pseudo,password,date,selectedNationality,selectedSex, dispatch, navigation)}>
                <Text style={styles.text}>S'inscrire</Text>
            </Pressable>
            <Pressable onPress={() => navigation.navigate('SignIn')}>
                <Text style={styles.textLink}>J'ai déjà un compte</Text>
            </Pressable>
        </View>
    </View>
  );
}

export default SignUp
