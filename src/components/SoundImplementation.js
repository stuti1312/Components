import {Button, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import Sound from 'react-native-sound';

const SoundImplementation = () => {
  const playsound = () => {
    var sound = new Sound('whoosh.mp3', Sound.MAIN_BUNDLE, error => {
      if (error) {
        console.log('failed to load the sound', error);
        return;
      }
      // loaded successfully
      console.log(
        'duration in seconds: ' +
          sound.getDuration() +
          'number of channels: ' +
          sound.getNumberOfChannels(),
      );

      // Play the sound with an onEnd callback
      sound.play(success => {
        if (success) {
          console.log('successfully finished playing');
        } else {
          console.log('playback failed due to audio decoding errors');
        }
      });
    });
  };
  return (
    <View>
      <Text
        onPress={() => playsound()}
        style={{
          borderWidth: 1,
          backgroundColor: 'pink',
          padding: 20,
          alignSelf: 'center',
          margin: 20,
        }}>
        play sound
      </Text>
    </View>
  );
};

export default SoundImplementation;

const styles = StyleSheet.create({});
