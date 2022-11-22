import { StatusBar } from 'expo-status-bar'
import { View, Text } from 'react-native'
import React, { useState } from 'react';
import stylesScreen from './style/screens.style';
import styles from './style/Settings.style';
import { TopBar } from '../components/TopBar';
import { ButtonGreySmall } from '../components/ButtonGreySmall';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../redux/store';
import Dialog from "react-native-dialog"
import RNPickerSelect from "react-native-picker-select";
import tabNat from '../constNat';
import tabSex from '../constSex';
import DialogInput from 'react-native-dialog/lib/Input';

function Settings(props: { navigation: any; }) {
    const { navigation } = props

    const currentUser = useSelector((state: RootState) => state.currentUser.value)[0];

    const [dialogPseudoVisible, setDialogPseudoVisible] = useState(false);
    const [dialogPasswordVisible, setDialogPasswordVisible] = useState(false);
    const [dialogNationalityVisible, setDialogNationalityVisible] = useState(false);
    const [dialogSexVisible, setDialogSexVisible] = useState(false);

    const [selectedSex, setSelectedSex] = useState("");
    const [selectedNationality, setSelectedNationality] = useState("");

    const dispatch=useDispatch();

    return (
    <View style={stylesScreen.container}>
      <TopBar
          nav={navigation}
          state='settings'
        />
      <View style={stylesScreen.bodyStartCenter}>
        <Text style={styles.title}>Informations du Joueur</Text>
        <View style={styles.infoView}>
          <View style={{flexDirection: 'row', justifyContent: 'space-between',}}>
            <View>
              <View>
                <Text style={styles.text}>Pseudo: {currentUser.getUsername()}</Text>
                <ButtonGreySmall onPress={() => setDialogPseudoVisible(true)} title='Changer le pseudo'/>
              </View>
              <View>
                <Text style={styles.text}>Mot de passe: {currentUser.getPassword()}</Text>
                <ButtonGreySmall onPress={() => setDialogPasswordVisible(true)} title='Changer le mot de passe'/>
              </View>
              <View>
                <Text style={styles.text}>Nationalité: {currentUser.getNationality()}</Text>
                <ButtonGreySmall onPress={() => setDialogNationalityVisible(true)} title='Changer la nationnalité'/>
              </View>
              <View>
                <Text style={styles.text}>Sexe: {currentUser.getSexe()}</Text>
                <ButtonGreySmall onPress={() => setDialogSexVisible(true)} title='Changer le sexe'/>
              </View>
            </View>
            <Text style={styles.textID}>ID: {currentUser.getId()}</Text>
          </View>
        </View>
      </View>

      <DialogInput
        isDialogVisible={dialogPseudoVisible}
        title="Inserer le nouveau pseudo"
        hintInput ="Pseudo"
        submitInput={ (inputText: string) => { setDialogPseudoVisible(false)} }
        closeDialog={ () => {setDialogPseudoVisible(false)}}>
      </DialogInput>

      <DialogInput 
        isDialogVisible={dialogPasswordVisible}
        title="Inserer le nouveau mot de passe"
        hintInput ="Mot de passe"
        submitInput={ (inputText: string) => {setDialogPasswordVisible(false)} }
        closeDialog={ () => {setDialogPasswordVisible(false)}}>
      </DialogInput>

      <Dialog.Container visible={dialogNationalityVisible}>
        <Dialog.Title>Changer de nationalité</Dialog.Title>
        <View style={styles.RNPView}>
          <RNPickerSelect
            placeholder={{label:"Cliquez pour changer", value: null}}
            onValueChange={(value:string) => setSelectedNationality(value)}
            items={tabNat}
          />
        </View>  
        <Dialog.Button label="Cancel" onPress={() => setDialogNationalityVisible(false)} />
        <Dialog.Button label="Valider" onPress={() => { setDialogNationalityVisible(false)}} />
      </Dialog.Container>

      <Dialog.Container visible={dialogSexVisible}>
        <Dialog.Title>Changer de sexe</Dialog.Title>
        <View style={styles.RNPView}>
          <RNPickerSelect
            placeholder={{label:"Cliquez pour changer", value: null}}
            onValueChange={(value:string) => setSelectedSex(value)}
            items={tabSex}
          />
        </View>  
        <Dialog.Button label="Cancel" onPress={() => setDialogSexVisible(false)} />
        <Dialog.Button label="Valider" onPress={() => { setDialogSexVisible(false)}} />
      </Dialog.Container>

    </View>
  );
}

export default Settings