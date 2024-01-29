import {Platform, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';
import {request, PERMISSIONS} from 'react-native-permissions';

const Permissions = () => {
  const requestPermissions = permissionType => {
    request(permissionType).then(result => {
      console.log('results', result);
    });
  };

  return (
    <View>
      <TouchableOpacity
        style={styles.btn}
        onPress={() => {
          if (Platform.OS == 'ios') {
            requestPermissions(PERMISSIONS.IOS.CAMERA);
          } else {
            requestPermissions(PERMISSIONS.ANDROID.CAMERA);
          }
        }}>
        <Text style={styles.text}>Access Camera</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.btn}
        onPress={() => {
          if (Platform.OS == 'ios') {
            requestPermissions(PERMISSIONS.IOS.MICROPHONE);
          } else {
            requestPermissions(PERMISSIONS.ANDROID.RECORD_AUDIO);
          }
        }}>
        <Text style={styles.text}>Access Microphone</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.btn}
        onPress={() => {
          if (Platform.OS == 'ios') {
            requestPermissions(PERMISSIONS.IOS.CALENDARS);
          } else {
            requestPermissions(PERMISSIONS.ANDROID.READ_CALENDAR);
          }
        }}>
        <Text style={styles.text}>Access Calendar</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.btn}
        onPress={() => {
          if (Platform.OS == 'ios') {
            requestPermissions(PERMISSIONS.IOS.CONTACTS);
          } else {
            requestPermissions(PERMISSIONS.ANDROID.READ_CONTACTS);
          }
        }}>
        <Text style={styles.text}>Access Contacts</Text>
      </TouchableOpacity>
    </View>
  );
};

export default Permissions;

const styles = StyleSheet.create({
  btn: {
    borderWidth: 1,
    borderRadius: 35,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
    backgroundColor: 'skyblue',
    margin: 10,
  },
  text: {fontSize: 20, fontWeight: 'bold', color: 'black'},
});
