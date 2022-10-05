import { StatusBar } from 'expo-status-bar'
import { StyleSheet, View, Text, Alert, Pressable, Image} from 'react-native'

const avatar = require('./src/BobsSkins/BobClassic.png');
const engrenage = require('./src/Icons/Engrenage.png');
const gamepad = require('./src/Icons/Gamepad.png');
const message = require('./src/Icons/Messages.png');
const store = require('./src/Icons/Store.png');

export default function App() {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Pressable onPress={() => Alert.alert('Profil Joueur')}>
          <Image
          style={styles.avatar}
          source={avatar}
          />
        </Pressable>
        <Text style={styles.titre}>BOB PARTY</Text>
        <Pressable onPress={() => Alert.alert('Paramètres')}>
          <Image
          style={styles.engrenage}
          source={engrenage}
          />
        </Pressable>
      </View>
      <View style={styles.buttons}>
        <Button 
        title='Jouer Seul'
        onPress={() => Alert.alert('On Joue seul')}
        />
        <Button 
        title='Défier mes amis'
        onPress={() => Alert.alert('On Joue avec les potos')}
        />
      </View>
      <View style={styles.footer}>
        <Pressable onPress={() => Alert.alert('Messagerie')}>
          <Image
          style={styles.iconFooter}
          source={message}
          />
        </Pressable>
        <Pressable onPress={() => Alert.alert('Menu des jeux')}>
          <Image
          style={styles.iconFooter}
          source={gamepad}
          />
        </Pressable>
        <Pressable onPress={() => Alert.alert('le magasin')}>
          <Image
          style={styles.iconStore}
          source={store}
          />
        </Pressable>
      </View>
    </View>
  );
}


export function Button(props) {
  const { onPress, title = 'Save' } = props;
  return (
    <Pressable style={styles.button} onPress={onPress}>
      <Text style={styles.text}>{title}</Text>
    </Pressable>
  );
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#45444E',
    flexDirection: "column",
    justifyContent: "flex-start",
    alignItems: "center",
  },
  button: {
    alignItems: 'center',
    justifyContent: 'center',
    height: '30%',
    width: '100%',
    marginTop: '10%',
    paddingVertical: 12,
    paddingHorizontal: 32,
    borderRadius: 10,
    elevation: 3,
    backgroundColor: '#0085FF',
  },
  text: {
    fontSize: 16,
    lineHeight: 21,
    fontWeight: 'bold',
    letterSpacing: 0.25,
    color: 'white',
  },
  header: {
    flexDirection: 'row',
    backgroundColor: '#2D2C33',
    flexWrap: 'wrap',
    width: '100%',
    justifyContent: 'space-evenly',
  },
  titre: {
    paddingHorizontal: '10%',
    paddingTop: 50,
    paddingBottom: 10,
    fontSize: 30,
    fontFamily: 'Helvetica',
    lineHeight: 25,
    fontWeight: 'bold',
    letterSpacing: 0.25,
    color: 'white',
  },
  engrenage: {
    marginTop: 25,
    marginRight: 10,
    width: 50,
    height: 50,
    borderRadius: '50%',
  },
  avatar: {
    marginTop: 25,
    marginLeft: 10,
    width: 50,
    height: 50,
    borderRadius: '50%',
  },
  buttons: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    width: '70%',
  },
  footer: {
    flexDirection: 'row',
    backgroundColor: '#2D2C33',
    flexWrap: 'wrap',
    width: '100%',
    height: 70,
    justifyContent: 'space-evenly',
  },
  iconFooter: {
    marginBot: 25,
    marginTop: 10,
    width: 65,
    height: 50,
  },
  iconStore: {
    marginBot: 25,
    marginTop: 10,
    marginLeft: 7,
    marginRight: 8,
    width: 50,
    height: 50,
  },

});
