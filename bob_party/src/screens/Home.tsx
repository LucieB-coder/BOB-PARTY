import { StatusBar } from 'expo-status-bar'
import { StyleSheet, View, Text, Alert, Pressable, Image} from 'react-native'

const avatar = require('../../assets/Icons/BobClassic.png');
const engrenage = require('../../assets/Icons/Engrenage.png');
const gamepad = require('../../assets/Icons/Gamepad.png');
const message = require('../../assets/Icons/Messages.png');
const store = require('../../assets/Icons/Store.png');

function Home(props: { navigation: any; }) {
    const { navigation } = props
    return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Pressable onPress={() => Alert.alert('Profil Joueur')}>
          <Image
          //style={styles.avatar}
          source={avatar}
          />
        </Pressable>
        <Text style={styles.titre}>BOB PARTY</Text>
        <Pressable onPress={() => Alert.alert('Paramètres')}>
          <Image
          //style={styles.engrenage}
          source={engrenage}
          />
        </Pressable>
      </View>
      <View style={styles.body}>
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
          //style={styles.iconFooter}
          source={message}
          />
        </Pressable>
        <Pressable onPress={() => Alert.alert('Menu des jeux')}>
          <Image
          //style={styles.iconFooter}
          source={gamepad}
          />
        </Pressable>
        <Pressable onPress={() => navigation.navigate('Store')}>
          <Image
          //style={styles.iconStore}
          source={store}
          />
        </Pressable>
      </View>
    </View>
  );
}


function Button(props: { onPress: any; title?: string | undefined; }) {
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
    flex : 0.15,
    width: '100%',
    flexDirection: 'row',
    backgroundColor: '#2D2C33',
    alignItems: 'center',
    justifyContent: 'space-around',
  },
  titre: {
    flex: 0.7,
    flexDirection: 'column',
    textAlign: 'center',
    fontSize: 30,
    fontFamily: 'Helvetica',
    fontWeight: 'bold',
    letterSpacing: 0.25,
    color: 'white',
  },
  engrenage: {
    borderRadius: 50,
    width: 50,
    height: 50,
  },
  avatar: {
    borderRadius: 50,
    width: 50,
    height: 50,
  },
  body: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    width: '70%',
  },
  footer: {
    flex: 0.15,
    flexDirection: 'row',
    backgroundColor: '#2D2C33',
    flexWrap: 'wrap',
    width: '100%',
    justifyContent: 'space-evenly',
  },
  iconFooter: {
    marginBottom: 25,
    marginTop: 10,
    width: 65,
    height: 50,
  },
  iconStore: {
    marginBottom: 25,
    marginTop: 10,
    marginLeft: 7,
    marginRight: 8,
    width: 50,
    height: 50,
  },

});

export default Home