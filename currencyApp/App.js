import React, {useState} from 'react';

import Snackbar from 'react-native-snackbar';

import {
  Text,
  SafeAreaView,
  ScrollView,
  View,
  StyleSheet,
  TextInput,
  TouchableOpacity,
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
  const [inputValue, setInputValue] = useState(0);
  const [resutValue, setResultValue] = useState(0);

  const buttonPressed = (currency) => {
    if (!inputValue) {
      return Snackbar.show({
        text: 'please enter a value',
        backgroundColor: '#B4161B',
        textColor: '#fffff',
      });
    }
  };

  return (
    <>
      <ScrollView
        backgroundColor="#6D7676"
        keyboardDismissMode="handled"
        contentInsetAdjustmentBehavior="automatic">
        <SafeAreaView style={styles.container}>
          <View style={styles.resultContainer}>
            <Text style={styles.resultValue}>{resutValue}</Text>
          </View>
          <View style={styles.inputField}>
            <TextInput
              style={styles.input}
              keyboardType="numeric"
              placeholder="Enter value"
              placeholderTextColor={'#c1c1c1'}
              value={inputValue}
              onChangeText={(inputValue) => setInputValue(inputValue)}>
              </TextInput>
          </View>
          <View style={styles.convertButtonContainer}>
            {Object.keys(currencyPerRuppee).map(currency => (
              <TouchableOpacity key={currency} style={styles.convertButton}>
                <Text style={styles.convertButtonText}>{currency}</Text>
            </TouchableOpacity>
            ))}
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
  convertButtonContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    marginTop: 10,
  },
  convertButton: {
    alignItems: 'center',
    justifyContent: 'center',
    height: 100,
    width: '33.33%',
    borderColor: '#f0d7c4',
    borderWidth: 2,
    backgroundColor: '#0f4c75',
    marginTop: 10,
  },
  convertButtonText: {
    fontSize: 15,
  },
});
