import { StatusBar } from 'expo-status-bar'
import { StyleSheet, View, ImageSourcePropType, Pressable, Text, Alert, Platform, Modal} from 'react-native'
import React, { useState } from 'react';
import stylesScreen from './style/screens.style'
import { TextInput } from 'react-native-gesture-handler';
import { BigBlueButton } from '../components/BigBlueButton';
import styles from "./style/SignUp.style";
import { useDispatch, useSelector } from 'react-redux';
import { checkNewUserValidity } from '../core/Auth/newUser';
import { DateTimePickerEvent } from '@react-native-community/datetimepicker';
import { PickerGreySmall } from '../components/PickerGreySmall';
import { RootState } from '../redux/store';
import { updateImpossibleBirthDate, updateInvalidPassword, updateInvalidPseudo, updateTooLongPseudo, updateTooShortPassword, updateUndefinedBirthDate, updateUndefinedNationality, updateUndefinedPassword, updateUndefinedPseudo, updateUndefinedSex } from '../redux/features/credentialErrorsSlice';
import { getSystemErrorMap } from 'util';
import DateTimePicker from '@react-native-community/datetimepicker';
import DatePicker from '@dietime/react-native-date-picker';
import { MANAGER_USER } from '../../appManagers';
import { Dispatch, AnyAction } from '@reduxjs/toolkit';
import { User } from '../core/User/user';
import { useUserStore } from '../context/userContext';
import { socket } from '../../socketConfig';

function SignUp(props: { navigation: any; }) {
    const { navigation } = props

    const [pseudo, setPseudo] = useState('');
    const [password, setPassword] = useState('');
    const [date, setDate] = useState(new Date());
    const [visible, setVisible] = useState(true);

    const setUser = useUserStore((state) => state.setUser);


    function onDateSelected(event : DateTimePickerEvent, value : Date | undefined) {
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
            Alert.alert("Votre Password doit contenir au moins une majuscule, une majuscule, un chiffre et un caractère spécial (#?!@$%^&*-)");
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
            
            <Text style={styles.text}>Login</Text>
            <TextInput style={styles.textInput} placeholder='Login' onChangeText={(val) => setPseudo(val) } autoCapitalize='none' />
            
            <Text style={styles.text}>Password</Text>
            <TextInput style={styles.textInput} placeholder='Password' onChangeText={(val) => setPassword(val)} autoCapitalize='none' secureTextEntry={true}/>
            
            
            <View style={{width: '70%', alignItems: 'center'}}>
                <Text style={styles.text}>Date de naissance</Text>
                
                {   Platform.OS === 'ios' && (
                    <View style={{width: 150, margin: 20}}>
                        <DateTimePicker
                            style= {{ width: '100%', height: 40, }}
                            value={date}
                            is24Hour={false}
                            display="default"
                            onChange={(event, value) => onDateSelected(event, value)}
                        />
                    </View>
                )}
                {   Platform.OS === 'android' && (
                    <DatePicker
                        value={date}
                        onChange={(value) => setDate(value)}
                        format="dd-mm-yyyy"
                        width="100%"
                        height={100}
                        endYear={new Date().getFullYear()-13}
                        fadeColor="#45444E"
                    />
                )}
                            
                
            </View>

            <View style={{width: '60%', alignItems: 'center'}}>
                <Text style={styles.text}>Nationalité</Text>
                <PickerGreySmall title='Choisir la Nationalité' valueChange={(value:string) => 
                setSelectedNationality(value)} values={[ { label: 'France', value: 'Francais(e)' }, { label: 'Royaume-Uni', value: 'Anglais(e)' }, { label: 'Espagne', value: 'Espagnol(e)' }, { label: 'Belgique', value: 'Belge' }, { label: 'Allemagne', value: 'Allemand(e)' }, ]} />
            </View>

            <View style={{width: '60%', alignItems: 'center'}}>
                <Text style={styles.text}>Sexe</Text>
                <PickerGreySmall title='Choisir le sexe' valueChange={(value:string) => setSelectedSex(value)} values={[ { label: 'Homme', value: 'Homme' }, { label: 'Femme', value: 'Femme' }, {label: 'Autre', value: 'Autre' } ]} />
            </View>
            <Pressable style={styles.button} onPress={() => createAccount(pseudo,password,date,selectedNationality,selectedSex, dispatch, navigation)}>
                <Text style={styles.text}>S'inscrire</Text>
            </Pressable>
            <Pressable onPress={() => navigation.navigate('SignIn')}>
                <Text style={styles.textLink}>J'ai déjà un compte</Text>
            </Pressable>
        </View>
    </View>
  );

  async function createAccount(pseudo: string,password: string,date: Date,selectedNationality: string,selectedSex: string, dispatch: any, navigation: any) {
    if (checkNewUserValidity(pseudo,password,date,selectedNationality,selectedSex, dispatch)){
        const tmp:User|null = await MANAGER_USER.getLoaderUser().loadByUsername(pseudo);
        if (tmp!=null){
            Alert.alert("Ce pseudo existe déjà");
        }
        await MANAGER_USER.getsaverUser().saveUser(pseudo, password, selectedNationality, selectedSex, date).then((res)=>{
            MANAGER_USER.setCurrentUser(res);
            setUser(MANAGER_USER.getCurrentUser());
            socket.emit("signIn", res);
            navigation.navigate('HomeTab');
        })
    }
  }
}

export default SignUp