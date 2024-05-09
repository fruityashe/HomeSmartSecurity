import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const HomeDevices = () => {
  const navigation = useNavigation();

  const handleBackPress = () => {
    navigation.goBack();
  };

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity onPress={handleBackPress} style={styles.backButton}>
          <Text style={styles.backButtonText}>Back</Text>
        </TouchableOpacity>
        <Text style={styles.title}>Home Devices</Text>
      </View>
      <View style={styles.content}>
        <Text style={styles.sectionTitle}>What app is all about</Text>
        <Text style={styles.description}>
          Home Smart Control empowers users to monitor their property remotely, ensuring peace of mind and security at all times.
        </Text>
        <Text style={styles.servicesTitle}>Services Offered</Text>
        <View style={styles.servicesList}>
          <View style={styles.serviceContainer}>
            <Text style={styles.service}>CCTV Devices</Text>
          </View>
          <View style={styles.serviceContainer}>
            <Text style={styles.service}>Security Locks</Text>
          </View>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    padding: 20,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 20,
    marginTop: 40,
  },
  backButton: {
    paddingHorizontal: 10,
  },
  backButtonText: {
    fontSize: 16,
    color: '#007AFF',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
  },
  content: {
    alignItems: 'center',
  },
  sectionTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  description: {
    fontSize: 16,
    textAlign: 'center',
    marginBottom: 20,
    marginTop: 20,
  },
  servicesTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  servicesList: {
    alignItems: 'center',
  },
  serviceContainer: {
    backgroundColor: '#f0f0f0',
    padding: 70,
    borderRadius: 5,
    marginBottom: 10,
    width: '80%',
  },
  service: {
    fontSize: 16,
  },
});

export default HomeDevices;
