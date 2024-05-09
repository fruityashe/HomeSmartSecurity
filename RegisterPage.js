import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native'; // Import useNavigation hook
import LoginPage from './LoginPage';

const RegisterPage = () => {
  const navigation = useNavigation(); // Use useNavigation hook to get navigation object

  const [isChecked, setIsChecked] = useState(false);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Sign Up for Free</Text>
      <View style={styles.formContainer}>
       <Text>Name</Text>
        <TextInput
          style={styles.input}
          placeholder="Name"
        />
        <Text>Username</Text>
        <TextInput
          style={styles.input}
          placeholder="Username"
        />
        <Text>Location</Text>
        <TextInput
          style={styles.input}
          placeholder="Location"
        />
        <Text>Email</Text>
        <TextInput
          style={styles.input}
          placeholder="Email"
        />
        <Text>Password</Text>
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
          <Text style={styles.checkboxText}>I have read and agree to the terms and conditions.</Text>
        </View>
        <TouchableOpacity
          style={styles.signupButton}
          onPress={() => {
            // Perform registration action here
          }}
        >
          <Text style={styles.rbuttonText}>Sign Up</Text>
        </TouchableOpacity>
      </View>
      <TouchableOpacity
        style={styles.backButton}
        onPress={() => navigation.navigate('LoginPage')} // Navigate back to LoginPage
      >
        <Text style={styles.buttonText}>Already have an account? Sign In</Text>
      </TouchableOpacity>
    </View>
  );
};


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#7184A9',
    justifyContent: 'center',
    alignItems: 'center',
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
    fontSize: 12,
  },
  signupButton: {
    width: 290,
    height: 40,
    backgroundColor: '#FEEB88',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 100,
    marginBottom: 20,
  },
  backButton: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttonText: {
    color: '#000',
    fontSize: 16,
    marginTop: 20,
  },
  rbuttonText: {
    color: '#000',
    fontSize: 16,
  },
});

export default RegisterPage;