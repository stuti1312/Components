import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';
import * as Animatable from 'react-native-animatable';

const ScreenA = ({navigation}) => {
  const AnimatedButton = Animatable.createAnimatableComponent(TouchableOpacity);
  return (
    <View style={styles.main}>
      <Animatable.Image
        source={require('../../assets/meal.jpeg')}
        style={styles.img1}
        animation={'zoomIn'}
        duration={1400}
      />
      <Animatable.Image
        source={require('../../assets/veges.jpeg')}
        style={styles.img2}
        animation={'zoomIn'}
        duration={1400}
      />
      <Animatable.Image
        source={require('../../assets/logo.png')}
        style={styles.logo}
        animation={'zoomIn'}
        duration={1400}
      />
      <Animatable.Text style={styles.txt} animation="zoomInUp" duration={1400}>
        EatHealthy
      </Animatable.Text>
      <AnimatedButton
        style={styles.button}
        activeOpacity={0.5}
        onPress={() => navigation.navigate('ScreenB')}
        animation={'zoomIn'}
        duration={1400}>
        <Text style={styles.btn}>Get Started</Text>
      </AnimatedButton>
    </View>
  );
};

export default ScreenA;

const styles = StyleSheet.create({
  main: {
    flex: 1,
    backgroundColor: 'white',
  },
  img1: {
    width: 300,
    height: 300,
    left: -70,
    top: -80,
    borderRadius: 70,
    borderColor: 'black',
    borderWidth: 1,
  },
  img2: {
    width: 150,
    height: 150,
    borderRadius: 75,
    borderColor: 'black',
    borderWidth: 1,
    right: -310,
    top: -80,
  },
  logo: {
    width: 150,
    height: 100,
    alignSelf: 'center',
    top: -50,
  },
  txt: {
    color: 'black',
    fontSize: 20,
    fontWeight: 'bold',
    borderRadius: 40,
    alignSelf: 'center',
    top: -60,
  },
  button: {
    backgroundColor: '#fc3503',
    alignItems: 'center',
    justifyContent: 'center',
    alignSelf: 'center',
    padding: 15,
    borderRadius: 25,
    width: '90%',
    position: 'absolute',
    bottom: 20,
  },
  btn: {
    color: 'white',
    fontWeight: 'bold',
  },
});
