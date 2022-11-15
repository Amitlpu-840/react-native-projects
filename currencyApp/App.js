import React, {useState} from 'react';

import {
  Text,
  SafeAreaView,
  ScrollView,
  View,
  StyleSheet,
  TextInput,
} from 'react-native';

const currencyPerRuppee = {
  DOLLAR: 0.014,
  EURO: 0.012,
  POUND: 0.011,
  RUBEL: 0.93,
  AUSDOLLAR: 0.2,
  CANDOLLAR: 0.019,
  YEN: 1.54,
  DINAR: 0.0043,
  BITCOIN: 0.000004,
};

const App = () => {
  return (
    <>
      <ScrollView backgroundColor="#6D7676">
        <SafeAreaView style={styles.container}>
          <View style={styles.resultContainer}>
            <Text style={styles.resultValue}>some value</Text>
          </View>
          <View style={styles.inputField}>
            <TextInput
              style={styles.input}
              keyboardType='numeric'
              placeholder="Enter value"
              placeholderTextColor={'#c1c1c1'}>

              </TextInput>
          </View>
        </SafeAreaView>
      </ScrollView>
    </>
  );
};

export default App;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#6D7676',
  },
  resultValue: {
    fontSize: 30,
    fontWeight: 'bold',
  },
  resultContainer: {
    height: 70,
    marginTop: 80,
    alignItems: 'center',
    borderColor: '#f0d7c4',
    justifyContent: 'center',
    borderWidth: 2,
  },
  inputField: {
   //flex: 1,
    height: 70,
    borderColor: '#f0d7c4',
    borderWidth: 2,
    marginTop: 10,
    borderRadius: 5,
    alignItems: 'center',
    justifyContent: 'center',
  },

  input: {
    fontSize: 20,
    textAlign: 'center',
  },
});
