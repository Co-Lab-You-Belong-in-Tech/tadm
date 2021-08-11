import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

// Components
import LandingPage from './components/LandingPage';
import Introduction from './components/Introduction';
import Goal from './components/Goal';
import HomePage from './components/HomePage';
import SignupScreen from './screens/SignupScreen';

// Utils
import { UserProvider } from './contexts/UserContext';
import SampleContext from './contexts/SampleContext';

const Stack = createStackNavigator();

export default function App() {
  return (
    <UserProvider>
      <SampleContext.Provider value={{}}>
        <NavigationContainer>
          <Stack.Navigator>
            <Stack.Screen name="Signup" component={SignupScreen} options={{ title: 'Sign Up' }} />
            <Stack.Screen name="Welcome" component={LandingPage} />
            <Stack.Screen name="Introduction" component={Introduction} />
            <Stack.Screen name="Goal" component={Goal} />
            <Stack.Screen name="Home" component={HomePage} />
          </Stack.Navigator>
        </NavigationContainer>
      </SampleContext.Provider>
    </UserProvider>
  );
}
