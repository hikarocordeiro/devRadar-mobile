import 'react-native-gesture-handler';
import React from 'react';

import {NavigationContainer} from '@react-navigation/native';

import {StyleSheet, View, Text} from 'react-native';

export default function App() {
  return (
    <NavigationContainer>
      <View style={styles.container}>
        <Text style={styles.sectionTitle}>Step One</Text>
      </View>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#7159c1',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
