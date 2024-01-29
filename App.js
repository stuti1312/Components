import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import SoundImplementation from './src/components/SoundImplementation';
import Permissions from './src/components/Permissions';

const App = () => {
  return (
    <View>
      <SoundImplementation />
      <Permissions/>
    </View>
  );
};

export default App;

const styles = StyleSheet.create({});
