import * as React from 'react';
import { StyleSheet } from 'react-native';

import EditScreenInfo from '../components/EditScreenInfo';
import { Text, View } from '../components/Themed';
import ListExecutions from '../components/ListExecutions';

export default function ListExecutionsScreen () {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>List executions</Text>
      <View style={styles.separator} lightColor="#eee" darkColor="rgba(255,255,255,0.1)" />

      <ListExecutions />

      {/* <EditScreenInfo path="/screens/ListExecutionsScreen.tsx" />*/}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 3,
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    marginTop: '50%',
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: '80%',
  },
});
