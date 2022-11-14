import React, {useState} from 'react';

import {
  Text,
  View,
  StyleSheet,
  TouchableOpacity,
  Image,
  ScrollView,
} from 'react-native';

import Sound from 'react-native-sound';

const soundList = [
  require('./assests/one.wav'),
  require('./assests/two.wav'),
  require('./assests/three.wav'),
  require('./assests/four.wav'),
  require('./assests/five.wav'),
  require('./assests/six.wav'),
  require('./assests/seven.wav'),
  require('./assests/eight.wav'),
  require('./assests/nine.wav'),
  require('./assests/ten.wav'),
];

const App = () => {
  const playSound = sound => {
    const varSound = new Sound(sound, Sound.MAIN_BUNDLE, err => {
      if (err) {
        console.log('not able to play');
      }
    });

    setTimeout(()=>{
      varSound.play()
    },1000)
    

    varSound.release();
  };

  return (
    <>
      <ScrollView style={styles.container}>
        <Image style={styles.logo} source={require('./assests/logo.png')} />
        <View style={styles.gridContainer}>
          {soundList.map((sound) => (
          <TouchableOpacity
          key={sound}
              onPress={()=>{playSound(sound)}}
              style={styles.box}>
              <Text style={styles.text}>{sound}</Text>
          </TouchableOpacity>
          ))}
        </View>
      </ScrollView>
    </>
  );
};

export default App;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#1b262c',
  },
  logo: {
    alignSelf: 'center',
    marginTop: 15,
  },
  gridContainer: {
    flex: 1,
    margin: 5,
    flexDirection: 'row',
    flexWrap: 'wrap',
    alignItems: 'flex-start',
    justifyContent: 'space-around',
  },
  box: {
    height: 90,
    alignItems: 'center',
    justifyContent: 'center',
    width: '40%',
    backgroundColor: '#E74C3C',
    margin: 10,
    borderRadius: 15,
    shadowColor: '#ff4301',
    elevation: 5,
    shadowRadius: 4,
  },
  text: {
    fontSize: 50,
    color: '#FDFEFE',
  },
});
