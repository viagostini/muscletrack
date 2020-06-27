import React, { Component } from 'react';
import { StyleSheet, View, TouchableOpacity } from 'react-native';

import { FontAwesome5 } from '@expo/vector-icons';

const styles = StyleSheet.create({
    container: {
      paddingTop: 140,
      backgroundColor: '#fff',
      alignItems: 'center',
    },
    button: {
      borderWidth: 1,
      borderColor: 'rgba(0,0,0,0.2)',
      alignItems: 'center',
      justifyContent: 'center',
      width: 100,
      height: 100,
      backgroundColor: '#1e88e5',
      borderRadius: 50,
    },
    text: {
      color: '#fff',
    }
  })

export default class SpeechToTextButton extends Component {
    render() {
        return (
            <View style={styles.container}>
                <TouchableOpacity style={styles.button}>
                <FontAwesome5 name='microphone' size={32} color='white' />
                </TouchableOpacity>
            </View>
        )
    }
};