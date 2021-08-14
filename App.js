import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { View, Image, Text } from 'react-native';
// Screens
import HomeScreen from './screens/HomeScreen';
import ProfileScreen from './screens/ProfileScreen';
import ViewProfileScreen from './screens/ViewProfileScreen';
import LandingScreen from './screens/LandingScreen';
import SigninScreen from './screens/SigninScreen';
import SignupScreen from './screens/SignupScreen';
import ChatScreen from './screens/ChatScreen';
// Utils
import { UserProvider } from './contexts/UserContext';
import useCurrentUser from './hooks/useCurrentUser';
import { icons } from './utils/icons.js'

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

const ApplicationNavigation = () => {
  const { currentUser } = useCurrentUser();

  return currentUser ? (
    <Stack.Navigator>
      <Stack.Screen name="Home" component={HomeTabNavigation} />
    </Stack.Navigator>
  ) : (
    <Stack.Navigator>
      <Stack.Screen name="Landing" component={LandingScreen} />
      <Stack.Screen name="Signup" component={SignupScreen} options={{ title: 'Sign Up' }} />
      <Stack.Screen name="Signin" component={SigninScreen} options={{ title: 'Sign In' }} />
      <Stack.Screen name="Profile" component={ProfileScreen} />
    </Stack.Navigator>
  );
};

function HomeTabNavigation() {
  return (
    <Tab.Navigator
      initialRouteName="HomeScreen"
      screenOptions={{
        headerShown: false,
        tabBarActiveTintColor: 'tomato',
        tabBarInactiveTintColor: 'gray',
        tabBarShowLabel: false,
        tabBarActiveTintColor: 'tomato',
        tabBarStyle: {
          height: 100,
        }
      }}>
      <Tab.Screen name="Chat" component={ChatScreen} 
      options={{
        tabBarIcon: () => <Icon imgSrc={icons.chat}/>,
      }}/>
      <Tab.Screen name="HomeScreen" component={HomeScreen}       
      options={{
        tabBarIcon: () => <Icon imgSrc={icons.home}/>
      }}/>
      <Tab.Screen name="ViewProfile" component={ViewProfileScreen} 
      options={{
        tabBarIcon: () => <Icon imgSrc={icons.profile}/>
      }}/>
    </Tab.Navigator>
  );
}

export default function App() {
  return (
    <UserProvider>
      <NavigationContainer>
        <ApplicationNavigation />
      </NavigationContainer>
    </UserProvider>
  );
}

function Icon ({ imgSrc }) {
  return (
    <View style={{paddingTop: 20}}>
      <Image 
        source={imgSrc}
        resizeMode="contain"
        style={{width: 40}}
      />
    </View>
  )
}

