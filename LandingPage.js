import React from 'react';
import { View, Image, Text, StyleSheet, TouchableOpacity } from 'react-native';

const LandingPage = ({ navigation }) => {
  const handleLoginPress = () => {
    navigation.navigate('LoginPage');
  };

  const handleAboutUsPress = () => {
    navigation.navigate('HomeDevices');
  };

  return (
    <View style={styles.container}>
      <View style={styles.content}>
        <Image
          source={require('./assets/logo.png')}
          style={styles.logo}
        />
        <Text style={styles.companyName}>Home Smart Control</Text>
        <View style={styles.buttonsContainer}>
          <View style={styles.buttonContainer}>
            <TouchableOpacity style={styles.button} onPress={handleLoginPress}>
              <Text style={styles.buttonText}>PROCEED</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#ffffff',
  },
  content: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  logo: {
    width: 200,
    height: 200,
    marginBottom: 20,
  },
  companyName: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    color: '#15317E'
  },
  buttonsContainer: {
    marginTop: 10,
    alignItems: 'center',
  },
  buttonContainer: {
    borderRadius: 5,
    overflow: 'hidden',
    marginVertical: 10,
  },
  button: {
    backgroundColor: '#fff',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 5,
  },
  buttonText: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#15317E',
  },
});

export default LandingPage;
