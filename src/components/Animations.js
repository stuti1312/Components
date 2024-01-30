import {StyleSheet, Text, View} from 'react-native';
import React from 'react';

const Animations = ({navigation}) => {
  return (
    <View style={styles.main}>
      <Text onPress={() => navigation.navigate('ScreenA')} style={styles.txt}>
        Example 1: Food app
      </Text>
    </View>
  );
};

export default Animations;

const styles = StyleSheet.create({
    main:{justifyContent:"center",alignItems:"center",flex:1},
    txt:{backgroundColor:"black",color:"white",padding:10,borderRadius:10}
});
