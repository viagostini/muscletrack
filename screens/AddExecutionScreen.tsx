import * as React from 'react';
import { StyleSheet } from 'react-native';

import EditScreenInfo from '../components/EditScreenInfo';
import SpeechToTextButton from '../components/SpeechToTextButton';
import { Text, View } from '../components/Themed';

export default function AddExecutionScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Add Execution</Text>
      <View style={styles.separator} lightColor="#eee" darkColor="rgba(255,255,255,0.1)" />
      <SpeechToTextButton />
      {/* <EditScreenInfo path="/screens/AddExecutionScreen.tsx" /> */}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 2,
    alignItems: 'center',
    justifyContent: 'flex-start',
  },
  title: {
    paddingTop: '75.5%',
    fontSize: 20,
    fontWeight: 'bold',
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: '80%',
  },
});
