import { StyleSheet } from "react-native";

const coinSkinGap = 10;
const infoGap = 20;

export default StyleSheet.create({
    coinSkinView: {
        flexDirection:'row',
    },
    coinView: {
        width: '50%',
        alignItems: 'center',
        justifyContent: 'center',
    },
    skinView: {
        width: '50%',
    },
    coin: {
      width: 75,
      height: 75,
      marginVertical: (coinSkinGap/2),
    },
    coinText: {
      fontSize: 16,
      lineHeight: 21,
      fontWeight: 'bold',
      letterSpacing: 0.25,
      color: 'white',
      marginVertical: (coinSkinGap/2),
    },
    infoView: {
        marginLeft: '5%',
        marginTop: '5%',
    },
    infoText: {
      fontSize: 16,
      lineHeight: 21,
      fontWeight: 'bold',
      letterSpacing: 0.25,
      color: 'white',
      marginVertical: (infoGap/2),
    },
    pseudoText: {
      fontSize: 24,
      lineHeight: 21,
      fontWeight: 'bold',
      letterSpacing: 0.25,
      color: 'white',
      marginTop :25,
      alignSelf: 'center',
    }
});