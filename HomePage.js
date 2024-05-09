import React, { useState } from 'react';
import { View, Text, Image, TouchableOpacity, StyleSheet, SafeAreaView, FlatList } from 'react-native';

const HomePage = () => {
  const [mySmartDevices, setMySmartDevices] = useState([
    { name: "Smart Lock", icon: require('./assets/icons/lock.png'), powerOn: true },
    { name: "Smart Camera", icon: require('./assets/icons/camera.png'), powerOn: false },
  ]);

  const powerSwitchChanged = (value, index) => {
    const updatedDevices = [...mySmartDevices];
    updatedDevices[index].powerOn = value;
    setMySmartDevices(updatedDevices);
  };

  const renderSmartDeviceItem = ({ item, index }) => (
    <TouchableOpacity
      style={styles.smartDeviceTile}
      onPress={() => powerSwitchChanged(!item.powerOn, index)}
    >
      <Image
        source={item.icon}
        style={styles.smartDeviceIcon}
      />
      <Text style={styles.deviceName}>{item.name}</Text>
    </TouchableOpacity>
  );

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.smartDevices}>
        <Text style={styles.smartDevicesTitle}>Smart Devices</Text>
        <View style={styles.divider} />
        <FlatList
          data={mySmartDevices}
          renderItem={renderSmartDeviceItem}
          keyExtractor={(item, index) => index.toString()}
          numColumns={1} // Render items in a single column
          contentContainerStyle={styles.flatListContent}
        />
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#E5E5E5',
    justifyContent: 'center', // Center vertically
    alignItems: 'center', // Center horizontally
  },
  smartDevices: {
    width: '100%', // Maximize width
    paddingHorizontal: 20,
    alignItems: 'center', // Center horizontally
  },
  smartDevicesTitle: {
    fontWeight: 'bold',
    fontSize: 24,
    color: '#6C6C6C',
    marginBottom: 10,
  },
  divider: {
    borderBottomWidth: 1,
    borderBottomColor: '#BEBEBE',
  },
  smartDeviceTile: {
    backgroundColor: 'white',
    padding: 80,
    marginVertical: 10,
    alignItems: 'center',
    justifyContent: 'center',
    elevation: 3, // for Android shadow
    shadowColor: '#000',
    shadowOpacity: 0.2,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 2,
    width: '100%', // Take full width of the parent
    borderRadius: 20,
  },
  smartDeviceIcon: {
    width: 100,
    height: 100,
    marginBottom: 10,
  },
  deviceName: {
    fontSize: 16,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  flatListContent: {
    alignItems: 'center', // Center items horizontally within FlatList
  },
});

export default HomePage;
