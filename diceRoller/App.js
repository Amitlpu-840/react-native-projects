import React, {useState} from 'react';

import {
  Text,
  Image,
  View,
  TouchableOpacity,
  StyleSheet,
  Pressable,
} from 'react-native';

import DiceOne from './assets/dice1.png';
import DiceTwo from './assets/dice2.png';
import DiceThree from './assets/dice3.png';
import DiceFour from './assets/dice4.png';
import DiceFive from './assets/dice5.png';
import DiceSix from './assets/dice6.png';

const App = () => {
  const [uri, setUri] = useState(DiceOne);
  const Tapped = () => {
    const randomNumber = Math.floor(Math.random() * 6) + 1;

    switch (randomNumber) {
      case 1:
        setUri(DiceOne);
        break;
      case 2:
        setUri(DiceTwo);
        break;
      case 3:
        setUri(DiceThree);
        break;
      case 4:
        setUri(DiceFour);
        break;
      case 5:
        setUri(DiceFive);
        break;
      case 6:
        setUri(DiceSix);
        break;
      default:
        setUri(DiceOne);
        break;
    }
  };
  return (
    <>
      <View style={styles.container}>
        <Pressable onPress={Tapped}>
          <Image source={uri} style={styles.image} />
        </Pressable>
        <TouchableOpacity onPress={Tapped}>
          <Text style={styles.buttonPlay}>Play</Text>
        </TouchableOpacity>
      </View>
      <Text style={styles.fut}>By Amit Giri</Text>
    </>
  );
};

export default App;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#292d38',
    alignItems: 'center',
    justifyContent: 'center',
  },
  image: {
    width: 200,
    height: 200,
  },
  buttonPlay: {
    fontSize: 20,
    marginTop: 30,
    color: '#F2A365',
    borderColor: '#30475E',
    borderWidth: 3,
    borderRadius: 7,
    paddingHorizontal: 30,
    paddingVertical: 5,
    fontWeight: 'bold',
  },
  fut: {
    color: '#152c60',
    fontWeight: 'bold',
    justifyContent: 'flex-end',
    backgroundColor: '#88aaf8',
    textAlign: 'center',
  },
});
