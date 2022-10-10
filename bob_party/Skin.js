import React, { Component } from "react";
import { StyleSheet, View, Text, Alert, Pressable, Image} from 'react-native'


class Skin extends Component{
    constructor (props) {
        super(props);
      }

    render(){
        return(
            <View>
                <Image source={this.props.Photo} style={this.props.Type}/>
                <Text>{this.props.Name}</Text>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    avatar: {
        marginTop: 25,
        marginLeft: 10,
        width: 50,
        height: 50,
        borderRadius: '50%',
      }
    });

export default Skin;

