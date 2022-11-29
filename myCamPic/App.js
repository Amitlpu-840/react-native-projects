import React, {useState} from 'react';

import {
  SafeAreaView,
  StyleSheet,
  Text,
  View,
  Button,
  TouchableOpacity,
} from 'react-native';

import {RNCamera} from 'react-native-camera'

const pendingView = () => (
  <View
    style={{
      justifyContent: 'center',
      alignItems: 'center',
      flex: 1,
    }}>
    <Text style={{fontSize: 30, color: 'red'}}>Loading...</Text>
  </View>
);

const App = () => {
  const [image, setImage] = useState(null);
  const takePicture = async (camera) => {
    try {
      const options = {quality: 0.9, base64: false};
      const data = await camera.takePictureAsync(options);
      setImage(data.uri);
    } catch (error) {
      console.warn(error);
    }
  };

  return (
    <>
      <View style={styles.container}>
        {image ? (
          <Text>image is present</Text>
        ) : (
          <RNCamera
            style={styles.preview}
      type={RNCamera.Constants.Type.back}
      captureAudio={false}
      flashMode={RNCamera.Constants.FlashMode.on}
      androidCameraPermissionOptions={{
        title: "Permission to use camera",
        message: "longer text to use camera",
        buttonPositive: "OK",
        buttonNegative: "Cancel"
      }}
      androidRecordAudioPermissionOptions={{
        title: "Permission to use audio",
        message: "longer text to use audio",
        buttonPositive: "OK",
        buttonNegative: "Cancel"
      }}
      >
        {({camera, status}) => {
          if(status !== 'READY') return <PendingView/>
          return(
            <View
            style={{
              flex: 0,
              flexDirection: 'row',
              justifyContent: "center"
            }}
            >
              <TouchableOpacity
              style={styles.capture}
              onPress={() => takePicture(camera)}
              >
                <Text>SNAP</Text>
              </TouchableOpacity>
            </View>
          )
        }}
      </RNCamera>
        )}
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    backgroundColor: '#0A79DF',
  },
  preview:{
    flex: 1,
    justifyContent: 'space-around',
    alignContent: 'center',
  },
  capture: {
    flex: 0,
    backgroundColor: 'orange',
    padding: 20,
    alignSelf: 'center',
  },
});

export default App;
