import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Image } from 'react-native';
import { useNavigation } from '@react-navigation/native'; // Import useNavigation hook

import RegisterPage from './RegisterPage';
import HomePage from './HomePage';

const LoginPage = () => {
  const navigation = useNavigation(); // Use useNavigation hook to get navigation object

  const [isChecked, setIsChecked] = useState(false);

  const handleLogoPress = () => {
    navigation.navigate('LandingPage');
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={handleLogoPress}>
        <View style={styles.logoContainer}>
          <Image
            source={require('./assets/homelogo.png')}
            style={styles.logo}
          />
        </View>
      </TouchableOpacity>
      <Text style={styles.title}>SIGN IN</Text>
      <View style={styles.formContainer}>
        <Text style={styles.checkboxText}>Email</Text>
        <TextInput
          style={styles.input}
          placeholder="Email"
        />
        <Text style={styles.checkboxText}>Password</Text>
        <TextInput
          style={styles.input}
          placeholder="Password"
          secureTextEntry={true}
        />
        <View style={styles.checkboxContainer}>
          <TouchableOpacity
            onPress={() => setIsChecked(!isChecked)}
            style={styles.checkbox}
          >
            {isChecked && <View style={styles.checked} />}
          </TouchableOpacity>
          <Text style={styles.checkboxText}>Keep me signed in</Text>
        </View>
        <TouchableOpacity
          style={styles.loginButton}
          onPress={() => navigation.navigate('MainScreen')} // Navigate to HomePage
        >
          <Text style={styles.lbuttonText}>Login</Text>
        </TouchableOpacity>
      </View>
      <TouchableOpacity
        style={styles.registerButton}
        onPress={() => navigation.navigate('RegisterPage')} // Navigate to RegisterPage
      >
        <Text style={styles.buttonText}>Create an account</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#7184A9',
  },
  logoContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 20,
  },
  logo: {
    width: 300,
    height: 150,
    marginRight: 10,
  },
  companyName: {
    fontSize: 18,
    color: '#fff',
    fontWeight: 'bold',
  },
  title: {
    fontSize: 42,
    fontWeight: 'bold',
    color: '#fff',
    marginBottom: 20,
  },
  formContainer: {
    width: '80%',
    backgroundColor: 'rgba(255, 255, 255, 0.7)',
    padding: 20,
    borderRadius: 20,
  },
  input: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    borderRadius: 5,
    marginBottom: 10,
    paddingHorizontal: 10,
    backgroundColor: 'white',
    color:'black',
  },
  checkboxContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 20,
  },
  checkbox: {
    width: 20,
    height: 20,
    borderWidth: 1,
    borderColor: '#000',
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 10,
  },
  checked: {
    width: 10,
    height: 10,
    backgroundColor: 'darkblue',
  },
  checkboxText: {
    color: '#000',
  },
  loginButton: {
    width: 290,
    backgroundColor: '#FEEB88',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 100,
    marginBottom: 10,
    padding: 12,
  },
  registerButton: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  lbuttonText: {
    color: '#000',
    fontSize: 16,
  },
  buttonText: {
    color: '#000',
    fontSize: 16,
    paddingTop: 20,
  },
});

export default LoginPage;
