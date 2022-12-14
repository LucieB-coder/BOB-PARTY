import { FC} from "react"
import { Pressable, Text} from "react-native"
import React from "react"
import styles from "./style/ButtonGreySmall"

export const ButtonGreySmall:
FC<{ onPress: any, title: String, state?: String;}>
=
({onPress, title, state}) =>
     {
    switch (state) {
      case 'Profile':
          return(
            <Pressable style={styles.buttonProfile} onPress={onPress}>
              <Text style={styles.text}>{title}</Text>
            </Pressable>
          );
      
      default:
        return(
          <Pressable style={styles.button} onPress={onPress}>
            <Text style={styles.text}>{title}</Text>
          </Pressable>
        );
    }
  }