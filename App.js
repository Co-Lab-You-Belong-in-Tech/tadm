import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { View, Image, Text } from 'react-native';
import { Provider } from 'react-redux'
// Screens
import HomeScreen from './screens/HomeScreen';
import ProfileScreen from './screens/ProfileScreen';
import ViewProfileScreen from './screens/ViewProfileScreen';
import LandingScreen from './screens/LandingScreen';
import SigninScreen from './screens/SigninScreen';
import SignupScreen from './screens/SignupScreen';
import ChatScreen from './screens/ChatScreen';
import GenderScreen from './screens/GenderScreen';
import PronounsScreen from './screens/PronounsScreen';
import PersonalityScreen from './screens/PersonalityScreen';
import NameScreen from './screens/NameScreen';
// Utils
import { UserProvider } from './contexts/UserContext';
import useCurrentUser from './hooks/useCurrentUser';
import { icons } from './utils/icons.js'
import { store } from './utils/store'


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
      {/* <Stack.Screen name="Landing" component={LandingScreen} />
      <Stack.Screen name="Signup" component={SignupScreen} options={{ title: 'Sign Up' }} />
      <Stack.Screen name="Signin" component={SigninScreen} options={{ title: 'Sign In' }} /> */}
      <Stack.Screen name="Name" component={NameScreen} />
      <Stack.Screen name="Pronouns" component={PronounsScreen} />
      <Stack.Screen name="Personality" component={PersonalityScreen} />
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
        tabBarShowLabel: false,
        tabBarStyle: {
          height: 100,
        }
      }}>
      <Tab.Screen name="Chat" component={ChatScreen} 
      options={{
        tabBarIcon: ({focused}) => <Icon imgSrc={focused ? icons.chatFocused : icons.chat}/>,
      }}/>
      <Tab.Screen name="HomeScreen" component={HomeScreen}       
      options={{
        tabBarIcon: ({focused}) => <Icon imgSrc={focused ? icons.homeFocused : icons.home}/>,
      }}/>
      <Tab.Screen name="ViewProfile" component={ViewProfileScreen} 
      options={{
        tabBarIcon: ({focused}) => <Icon imgSrc={focused ? icons.profileFocused : icons.profile}/>,
      }}/>
    </Tab.Navigator>
  );
}

export default function App() {
  return (
    <Provider store={store}>
    <UserProvider>
      <NavigationContainer>
        <ApplicationNavigation />
      </NavigationContainer>
    </UserProvider>
    </Provider>
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

