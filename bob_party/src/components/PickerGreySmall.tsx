import { FC} from "react"
import { Pressable, Text} from "react-native"
import React from "react"
import styles from "./style/PickerGreySmall"
import RNPickerSelect from "react-native-picker-select";

export const PickerGreySmall:
FC<{ valueChange: any, title: string, donePress?: any, values?: any;}>
=
({valueChange, donePress, title, values}) =>
     {
        return(
            <RNPickerSelect
                  placeholder={{label:title, value: null}}
                  onValueChange={valueChange}
                  onDonePress={donePress}
                  items={values}
                  style={styles}
                  
             />
        )
    }