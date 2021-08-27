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
import ViewBuddyProfileScreen from './screens/ViewBuddyProfileScreen';
import EditBioScreen from './screens/editScreens/EditBio'
import EditInterestsScreen from './screens/editScreens/EditInterests'
import EditMainGoalScreen from './screens/editScreens/EditMainGoal'
import EditPersonalityScreen from './screens/editScreens/EditPersonality'
import LandingScreen from './screens/LandingScreen';
import SigninScreen from './screens/SigninScreen';
import SignupScreen from './screens/SignupScreen';
import ChatScreen from './screens/ChatScreen';
import GenderScreen from './screens/GenderScreen';
import PronounsScreen from './screens/PronounsScreen';
import PersonalityScreen from './screens/PersonalityScreen';
import NameScreen from './screens/NameScreen';
import BioScreen from './screens/BioScreen';
import InterestsScreen from './screens/InterestsScreen';
import DistractionsScreen from './screens/DistractionsScreen';
import MainGoalScreen from './screens/MainGoalScreen';
import GoalsScreen from './screens/GoalsScreen';
import ProfilePicScreen from './screens/ProfilePicScreen';
import PreferencesScreen from './screens/PreferencesScreen';
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
      <Stack.Screen name="Landing" component={LandingScreen} />
      <Stack.Screen name="Signup" component={SignupScreen} options={{ title: 'Sign Up' }} />
      <Stack.Screen name="Signin" component={SigninScreen} options={{ title: 'Sign In' }} />
      <Stack.Screen name="Name" component={NameScreen} />
      <Stack.Screen name="Bio" component={BioScreen} />
      <Stack.Screen name="Pronouns" component={PronounsScreen} />
      <Stack.Screen name="Personality" component={PersonalityScreen} />
      <Stack.Screen name="Interests" component={InterestsScreen} />
      <Stack.Screen name="ProfilePic" component={ProfilePicScreen} />
      <Stack.Screen name="Distractions" component={DistractionsScreen} />
      <Stack.Screen name="MainGoal" component={MainGoalScreen} />
      <Stack.Screen name="Goals" component={GoalsScreen} />
      <Stack.Screen name="Preferences" component={PreferencesScreen} />
    </Stack.Navigator>
  );
};

function HomeTabNavigation() {
  return (
    <Tab.Navigator
      initialRouteName="HomeScreenStackNavigation"
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
      <Tab.Screen name="HomeScreenStackNavigation" component={HomeScreenStackNavigation}       
      options={{
        tabBarIcon: ({focused}) => <Icon imgSrc={focused ? icons.homeFocused : icons.home}/>,
      }}/>
      <Tab.Screen name="ViewProfileStackNavigation" component={ViewProfileStackNavigation} 
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

function ViewProfileStackNavigation() {
  return (
      <Stack.Navigator>
        <Stack.Screen name="ViewProfile" options={{ headerMode:"none" }} component={ViewProfileScreen} />
        <Stack.Screen name="EditBio" options={{ headerBackTitle: '', title: '' }} component={EditBioScreen} />
        <Stack.Screen name="EditInterests" options={{ headerBackTitle: '', title: '' }} component={EditInterestsScreen} />
        <Stack.Screen name="EditPersonality" options={{ headerBackTitle: '', title: '' }} component={EditPersonalityScreen} />
        <Stack.Screen name="EditMainGoal" options={{ headerBackTitle: '', title: '' }} component={EditMainGoalScreen} />
      </Stack.Navigator>
  );
}
function HomeScreenStackNavigation() {
  return (
      <Stack.Navigator>
        <Stack.Screen name="Home" options={{ headerMode:"none" }} component={HomeScreen} />
        <Stack.Screen name="ViewBuddyProfile" options={{ headerBackTitle: '', title: '' }} component={ViewBuddyProfileScreen} />
      </Stack.Navigator>
  );
}