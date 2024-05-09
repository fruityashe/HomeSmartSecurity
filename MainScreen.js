import React, { Component } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image, Switch } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Icon from 'react-native-vector-icons/FontAwesome';
import { createStackNavigator } from '@react-navigation/stack';
 
const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();
 
const MainScreen = () => (
  <Tab.Navigator
    tabBarOptions={{
      activeTintColor: '#7184A9', // Set the active tab color
      style: {
        backgroundColor: '#FFFFFF', // Background color of the tab bar
      },
    }}
  >
    <Tab.Screen
      name="Devices"
      component={DevicesScreen}
      options={{
        tabBarIcon: ({ focused, color, size }) => (
          <Icon name={focused ? 'home' : 'home'} size={size} color={color} />
        ),
      }}
    />
    <Tab.Screen
      name="Events"
      component={EventsScreen}
      options={{
        tabBarIcon: ({ focused, color, size }) => (
          <Icon name={focused ? 'calendar' : 'calendar'} size={size} color={color} />
        ),
      }}
    />
    <Tab.Screen
      name="Settings"
      component={SettingsScreen}
      options={{
        tabBarIcon: ({ focused, color, size }) => (
          <Icon name={focused ? 'cog' : 'cog'} size={size} color={color} />
        ),
      }}
    />
  </Tab.Navigator>
);
 
const DevicesScreen = ({ navigation }) => (
  <Stack.Navigator>
    <Stack.Screen
      name=""
      component={MainpageScreen}
      options={{
        headerStyle: {
          backgroundColor: '#7184A9',
        },
        headerLeft: () => (
          <View style={styles.profileContainer}>
            <Image source={{ uri: 'https://lh3.googleusercontent.com/a/ACg8ocKOprBlFBGhcYMMEjKmBSP0YNP7Oc0rJGhUqL86xLQaR7VXEXbH=s360-c-no' }} style={styles.profileImage} />
            <View style={styles.profileInfo}>
              <Text style={styles.nameText}>John Doe</Text>
              <Text style={styles.locationText}>Philippines, Quezon City</Text>
            </View>
          </View>
        ),
      }}
    />
  </Stack.Navigator>
);
 
const MainpageScreen = ({ navigation }) => {
  const handleDevice = () => {
    navigation.navigate('Device');
  };
 
  return (
    <View style={styles.container}>
      <Image
        source={require('./assets/home.png')}
        style={styles.image}
      />
      <Text>No devices yet.</Text>
        <TouchableOpacity
          style={styles.button}
          onPress={() => navigation.navigate('HomePage')} // Navigate to HomePage
        >
          <Text style={styles.buttonText}>ADD DEVICE</Text>
        </TouchableOpacity>
    </View>
  );
};
 
const EventsScreen = ({ navigation }) => (
  <Stack.Navigator>
    <Stack.Screen
      name=""
      component={EventsPageScreen}
      options={{
        headerStyle: {
          backgroundColor: '#7184A9',
        },
        headerLeft: () => (
          <View style={styles.profileContainer}>
            <Image source={{ uri: 'https://lh3.googleusercontent.com/a/ACg8ocKOprBlFBGhcYMMEjKmBSP0YNP7Oc0rJGhUqL86xLQaR7VXEXbH=s360-c-no' }} style={styles.profileImage} />
            <View style={styles.profileInfo}>
              <Text style={styles.nameText}>John Doe</Text>
              <Text style={styles.locationText}>Philippines, Quezon City</Text>
            </View>
          </View>
        ),
      }}
    />
  </Stack.Navigator>
);
 
const EventsPageScreen = () => (
  <View style={styles.container}>
    <Image
      source={require('./assets/events.png')}
      style={styles.image}
    />
    <Text>No events yet.</Text>
  </View>
);
 
class SettingsScreen extends Component {
  state = {
    isScreenshotPopupOn: false,
  };
 
  render() {
    return (
      <View style={styles.container}>
        <TouchableOpacity style={styles.sbutton}>
          <Text style={styles.sbuttonText}>Device Display Order</Text>
          <Text style={styles.arrow}> &gt;</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.sbutton}>
          <Text style={styles.sbuttonText}>Region</Text>
          <Text style={styles.sbuttonTextRight}>Philippines</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.sbutton}>
          <Text style={styles.sbuttonText}>App Permission</Text>
          <Text style={styles.arrow}> &gt;</Text>
        </TouchableOpacity>
        <View style={styles.sbutton}>
          <Text style={styles.sbuttonText}>Screenshot Popup</Text>
          <Switch
            trackColor={{ false: "#767577", true: "#81b0ff" }}
            thumbColor={this.state.isScreenshotPopupOn ? "#f5dd4b" : "#f4f3f4"}
            ios_backgroundColor="#3e3e3e"
            onValueChange={(value) => this.setState({ isScreenshotPopupOn: value })}
            value={this.state.isScreenshotPopupOn}
          />
        </View>
        <TouchableOpacity style={styles.sbutton}>
          <Text style={styles.sbuttonText}>About</Text>
          <Text style={styles.arrow}> &gt;</Text>
        </TouchableOpacity>
        <TouchableOpacity style={[styles.sbutton, styles.centerButton]}>
          <Text style={styles.sbuttonTextCenter}>Log out</Text>
        </TouchableOpacity>
      </View>
    );
  }
}
 
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  button: {
    backgroundColor: '#7184A9',
    padding: 15,
    borderRadius: 100,
    marginTop: 20,
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
  },
  buttonText: {
    color: 'white',
    fontSize: 16,
  },
  image: {
    width: 200,
    height: 200,
    marginBottom: 20,
  },
  profileContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginLeft: 10,
  },
  profileImage: {
    width: 40,
    height: 40,
    borderRadius: 20,
  },
  profileInfo: {
    marginLeft: 10,
  },
  nameText: {
    fontSize: 14,
    fontWeight: 'bold',
    color: 'white',
  },
  locationText: {
    fontSize: 12,
    color: 'white',
  },
  sbutton: {
    backgroundColor: '#ffffff',
    paddingVertical: 15,
    paddingHorizontal: 20,
    marginVertical: 10,
    borderRadius: 10,
    width: '90%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    shadowColor: '#000000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  centerButton: {
    justifyContent: 'center',
  },
  sbuttonText: {
    color: '#000000',
    fontSize: 16,
    fontWeight: 'bold',
    textAlign: 'left',
  },
  sbuttonTextRight: {
    color: '#7184A9',
    fontSize: 16,
    fontWeight: 'bold',
    textAlign: 'right',
  },
  sbuttonTextCenter: {
    color: '#000000',
    fontSize: 16,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  arrow: {
    color: '#7184A9',
    fontWeight: 'bold',
    fontSize: 20,
  },
});
 
export default MainScreen;