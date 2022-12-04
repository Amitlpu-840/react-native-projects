import React from 'react';
import {ScrollView, StyleSheet, View} from 'react-native';
import {Text, Button, Header, Container, Body, H1, H3} from 'native-base';
import Icons from './components/Icons';

const App = () => {
  return (
    <>
      <View>
        <Icons/>
      </View>
    </>
  );
};
 
export default App;

const styles = StyleSheet.create({
  grid: {
    flex: 1,
    flexDirection: "row",
    flexWrap: "wrap",
    marginTop: 20
  },
  box: {
    width: '33%',
    marginBottom: 6
  },
  card: {
    height: 120,
    justifyContent: "center",
    alignItems: "center"
  },
  message: {
    textAlign: "center",
    textTransform: "uppercase",
    color: "#FFF",
    marginTop: 20,
    backgroundColor: "#4652B3",
    paddingVertical: 10,
    marginVertical: 10
  },
})