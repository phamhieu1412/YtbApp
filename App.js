import React from 'react';
import {Image, StyleSheet, Text, Pressable} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {createStackNavigator} from '@react-navigation/stack';
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';

import HomeScreen from './src/Screens/HomeScreen';
import SplashScreen from './src/Screens/SplashScreen';
import Explore from './src/Screens/Explore';
import Player from './src/Screens/Player';
import ChannelScreen from './src/Screens/Channel';
import AboutScreen from './src/Screens/About';
import Videos from './src/Screens/Videos';
import UserScreen from './src/Screens/User';
import UserData from './src/Utils/User.json';
import EditVideo from './src/Screens/EditVideo';
import EditChannel from './src/Screens/EditChannel';
import UserVideo from './src/Screens/UserVideo';
import Library from './src/Screens/Library';
import Search from './src/Screens/Search';
import Notifications from './src/Screens/Notifications';
import Settings from './src/Screens/Settings';
import Purchases from './src/Screens/Purchases';
import Earnings from './src/Screens/Earnings';
import BlockedUser from './src/Screens/Block';
import Verification from './src/Screens/Verification';
import AboutUs from './src/Screens/AboutUs';
import AboutComp from './src/Screens/AboutUs_2';
import Login from './src/Screens/Login';
import Signup from './src/Screens/Signup';
import PrivacyPolicy from './src/Screens/PrivacyPolicy';
import Terms from './src/Screens/Terms';
import HelpandSupport from './src/Screens/HelpSupport';

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();
const TopBar = createMaterialTopTabNavigator();

const MainTabs = () => {
  return (
    <Tab.Navigator
      tabBarOptions={{
        style: {
          position: 'absolute',
          elevation: 0,
          shadowOpacity: 0,
          borderTopWidth: 0.5,
          bottom: 0,
          height: 48,
        },
        labelStyle: {
          fontSize: 12,
        },
        activeTintColor: '#000',
      }}
      initialRouteName="SplashScreen"
      backBehavior="history">
      <Tab.Screen
        name="Home"
        component={HomeScreen}
        options={{
          tabBarLabel: 'Home',
          tabBarIcon: tabInfo => (
            <Icon
              name={tabInfo.focused ? 'home' : 'home-outline'}
              size={25}
              color="#282828"
            />
          ),
        }}
      />
      <Tab.Screen
        name="Explore"
        component={Explore}
        options={{
          tabBarLabel: 'Explore',
          tabBarIcon: tabInfo => (
            <Icon
              name={tabInfo.focused ? 'compass' : 'compass-outline'}
              size={25}
              color="#282828"
            />
          ),
        }}
      />
      <Tab.Screen
        name="Library"
        component={Library}
        options={{
          tabBarLabel: 'Library',
          tabBarIcon: tabInfo => (
            <Icon
              name={tabInfo.focused ? 'apps' : 'apps-outline'}
              size={25}
              color="#282828"
            />
          ),
        }}
      />
      <Tab.Screen
        name="User"
        component={UserChannel}
        options={{
          tabBarLabel: 'User',
          tabBarIcon: tabInfo => (
            <Image source={{uri: UserData?.avtar}} style={styles.tabAvtar} />
          ),
        }}
      />
    </Tab.Navigator>
  );
};

const ChannelStack = () => {
  return (
    <TopBar.Navigator
      backBehavior="history"
      tabBarOptions={{
        activeTintColor: '#040201',
        labelStyle: {
          fontSize: 16,
        },
        indicatorStyle: {
          backgroundColor: '#040201',
        },
      }}>
      <TopBar.Screen name="Home" component={ChannelScreen} />
      <TopBar.Screen name="Videos" component={Videos} />
      <TopBar.Screen name="About" component={AboutScreen} />
    </TopBar.Navigator>
  );
};

function UserChannel() {
  return (
    <TopBar.Navigator
      lazy
      removeClippedSubviews={false}
      backBehavior="history"
      tabBarOptions={{
        style: {
          borderBottomWidth: 0,
        },
        activeTintColor: '#212121',
        labelStyle: {
          fontSize: 15,
        },
        indicatorStyle: {
          backgroundColor: '#212121',
        },
      }}>
      <TopBar.Screen name="User" component={UserScreen} />
      <TopBar.Screen name="Video" component={UserVideo} />
      <TopBar.Screen name="About" component={AboutScreen} />
    </TopBar.Navigator>
  );
}

const App = props => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="Main"
        screenOptions={{headerStyle: {elevation: 0, shadowOpacity: 0}}}>
        <Stack.Screen
          name="SplashScreen"
          component={SplashScreen}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="Search"
          component={Search}
          options={({navigation}) => ({
            headerLeft: () => (
              <Pressable
                style={styles.headerLeft}
                onPress={() => navigation.goBack()}>
                <Icon name="arrow-back-outline" color="#212121" size={32} />
              </Pressable>
            ),
          })}
        />
        <Stack.Screen
          name="Notifications"
          component={Notifications}
          options={({navigation}) => ({
            headerLeft: () => (
              <Pressable
                style={styles.headerLeft}
                onPress={() => navigation.goBack()}>
                <Icon name="arrow-back-outline" color="#212121" size={32} />
              </Pressable>
            ),
          })}
        />
        <Stack.Screen
          name="Settings"
          component={Settings}
          options={({navigation}) => ({
            headerStyle: {
              height: 45,
              elevation: 0,
              shadowOpacity: 0,
            },
            headerLeft: () => (
              <Pressable
                style={styles.headerLeft}
                onPress={() => navigation.goBack()}>
                <Icon name="arrow-back-outline" color="#212121" size={32} />
              </Pressable>
            ),
          })}
        />
        <Stack.Screen
          name="Main"
          component={MainTabs}
          options={({navigation, roue}) => ({
            headerStyle: {
              height: 45,
              elevation: 0,
              shadowOpacity: 0,
            },
            headerTitleAlign: 'left',
            headerTitle: () => (
              <Image
                source={require('./src/assets/logo.png')}
                style={styles.logo}
                resizeMode="contain"
              />
            ),
          })}
        />
        <Stack.Screen
          name="Player"
          component={Player}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="ChannelScreen"
          initialParams={{optionsModal: false}}
          component={ChannelStack}
          options={({navigation, route}) => ({
            headerStyle: {
              height: 45,
              elevation: 0,
              shadowOpacity: 0,
            },
            headerTitleAlign: 'left',
            headerTitle: () => (
              <Text style={styles.channelName}>
                {route?.params.channelName}
              </Text>
            ),
          })}
        />
        <Stack.Screen
          name="EditVideo"
          initialParams={{optionsModal: false}}
          component={EditVideo}
          options={({navigation, route}) => ({
            headerStyle: {
              height: 45,
              elevation: 0,
              shadowOpacity: 0,
            },
            headerTitleAlign: 'left',
            headerTitle: () => (
              <Text style={styles.channelName}>{route?.params.videoTitle}</Text>
            ),
          })}
        />
        <Stack.Screen
          name="EditProfile"
          initialParams={{optionsModal: false}}
          component={EditChannel}
          options={({navigation, route}) => ({
            headerStyle: {
              height: 45,
              elevation: 0,
              shadowOpacity: 0,
            },
            headerTitleAlign: 'left',
            headerTitle: () => (
              <Text style={styles.channelName}>
                {route?.params.channelName}
              </Text>
            ),
          })}
        />
        <Stack.Screen
          name="Earnings"
          initialParams={{optionsModal: false}}
          component={Earnings}
          options={({navigation, route}) => ({
            headerStyle: {
              height: 45,
              elevation: 0,
              shadowOpacity: 0,
            },
          })}
        />
        <Stack.Screen
          name="Purchases"
          initialParams={{optionsModal: false}}
          component={Purchases}
          options={({navigation, route}) => ({
            headerStyle: {
              height: 45,
              elevation: 0,
              shadowOpacity: 0,
            },
            headerLeft: () => (
              <Pressable
                style={styles.headerLeft}
                onPress={() => navigation.goBack()}>
                <Icon name="arrow-back-outline" color="#212121" size={28} />
              </Pressable>
            ),
          })}
        />
        <Stack.Screen
          name="Verification"
          initialParams={{optionsModal: false}}
          component={Verification}
          options={({navigation, route}) => ({
            headerStyle: {
              height: 45,
              elevation: 0,
              shadowOpacity: 0,
            },
            headerLeft: () => (
              <Pressable
                style={styles.headerLeft}
                onPress={() => navigation.goBack()}>
                <Icon name="arrow-back-outline" color="#212121" size={28} />
              </Pressable>
            ),
          })}
        />
        <Stack.Screen
          name="AboutUs"
          initialParams={{optionsModal: false}}
          component={AboutUs}
          options={({navigation, route}) => ({
            headerStyle: {
              height: 45,
              elevation: 0,
              shadowOpacity: 0,
            },
            headerLeft: () => (
              <Pressable
                style={styles.headerLeft}
                onPress={() => navigation.goBack()}>
                <Icon name="arrow-back-outline" color="#212121" size={28} />
              </Pressable>
            ),
          })}
        />
        <Stack.Screen
          name="AboutComp"
          initialParams={{optionsModal: false}}
          component={AboutComp}
          options={({navigation, route}) => ({
            headerStyle: {
              height: 45,
              elevation: 0,
              shadowOpacity: 0,
            },
            headerTitle: 'About US RN',
            headerLeft: () => (
              <Pressable
                style={styles.headerLeft}
                onPress={() => navigation.goBack()}>
                <Icon name="arrow-back-outline" color="#212121" size={28} />
              </Pressable>
            ),
          })}
        />
        <Stack.Screen
          name="Login"
          initialParams={{optionsModal: false}}
          component={Login}
          options={({navigation, route}) => ({
            headerStyle: {
              height: 45,
              elevation: 0,
              shadowOpacity: 0,
            },
            headerTitle: 'Login',
            headerLeft: () => (
              <Pressable
                style={styles.headerLeft}
                onPress={() => navigation.goBack()}>
                <Icon name="arrow-back-outline" color="#212121" size={28} />
              </Pressable>
            ),
          })}
        />
        <Stack.Screen
          name="Signup"
          initialParams={{optionsModal: false}}
          component={Signup}
          options={({navigation, route}) => ({
            headerStyle: {
              height: 45,
              elevation: 0,
              shadowOpacity: 0,
            },
            headerTitle: 'Signup',
            headerLeft: () => (
              <Pressable
                style={styles.headerLeft}
                onPress={() => navigation.goBack()}>
                <Icon name="arrow-back-outline" color="#212121" size={28} />
              </Pressable>
            ),
          })}
        />
        <Stack.Screen
          name="PrivacyPolicy"
          initialParams={{optionsModal: false}}
          component={PrivacyPolicy}
          options={({navigation, route}) => ({
            headerStyle: {
              height: 45,
              elevation: 0,
              shadowOpacity: 0,
            },
            headerTitle: 'Privacy Policy',
            headerLeft: () => (
              <Pressable
                style={styles.headerLeft}
                onPress={() => navigation.goBack()}>
                <Icon name="arrow-back-outline" color="#212121" size={28} />
              </Pressable>
            ),
          })}
        />
        <Stack.Screen
          name="Terms"
          initialParams={{optionsModal: false}}
          component={Terms}
          options={({navigation, route}) => ({
            headerStyle: {
              height: 45,
              elevation: 0,
              shadowOpacity: 0,
            },
            headerTitle: 'Terms of Use',
            headerLeft: () => (
              <Pressable
                style={styles.headerLeft}
                onPress={() => navigation.goBack()}>
                <Icon name="arrow-back-outline" color="#212121" size={28} />
              </Pressable>
            ),
          })}
        />
        <Stack.Screen
          name="Help"
          initialParams={{optionsModal: false}}
          component={HelpandSupport}
          options={({navigation, route}) => ({
            headerStyle: {
              height: 45,
              elevation: 0,
              shadowOpacity: 0,
            },
            headerTitle: 'Support',
            headerLeft: () => (
              <Pressable
                style={styles.headerLeft}
                onPress={() => navigation.goBack()}>
                <Icon name="arrow-back-outline" color="#212121" size={28} />
              </Pressable>
            ),
          })}
        />
        <Stack.Screen
          name="BlockedList"
          initialParams={{optionsModal: false}}
          component={BlockedUser}
          options={({navigation, route}) => ({
            headerStyle: {
              height: 45,
              elevation: 0,
              shadowOpacity: 0,
            },
            headerTitle: 'Blocked Users',
            headerLeft: () => (
              <Pressable
                style={styles.headerLeft}
                onPress={() => navigation.goBack()}>
                <Icon name="arrow-back-outline" color="#212121" size={28} />
              </Pressable>
            ),
          })}
        />
        <Stack.Screen
          name="VideosScreen"
          initialParams={{optionsModal: false}}
          component={Videos}
          options={({navigation, route}) => ({
            headerStyle: {
              height: 45,
              elevation: 0,
              shadowOpacity: 0,
            },
            headerTitleAlign: 'left',
            headerTitle: () => (
              <Text style={styles.channelName}>{route?.params.screenName}</Text>
            ),
          })}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

const styles = StyleSheet.create({
  logo: {
    width: 90,
  },
  channelName: {
    fontSize: 17.5,
    color: '#040201',
  },
  channelButton: {
    marginHorizontal: 3,
    alignSelf: 'center',
    width: 30,
    height: 30,
    borderRadius: 30 / 2,
  },
  tabAvtar: {
    width: 20,
    height: 20,
    borderRadius: 10,
  },
  headerLeft: {
    marginLeft: 10,
  },
});

export default App;
