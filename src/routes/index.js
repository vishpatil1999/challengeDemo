import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import React, {useRef} from 'react';
import {
  NavigationContainer,
  useNavigationContainerRef,
} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import HomeScreen from '../screens/homeScreen/index';
import LeaderboardScreen from '../screens/leaderboardScreen';
import LeagueScreen from '../screens/leagueScreen';
import ResearchScreen from '../screens/researchScreen';
import ProfileScreen from '../screens/profileScreen';
import Icon from '../components/Icon';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

const Stack = createNativeStackNavigator();
const Tabs = createBottomTabNavigator();

const StackOptions = {
  headerTitleAlign: 'left',
  elevation: 0
};
const RootProvider = ({}) => {
  const navigationRef = useNavigationContainerRef();
  const routeNameRef = useRef();
  const TabOptions = {
    headerTitleAlign: 'left',
    tabBarActiveTintColor: '#6231AD',
    tabBarInactiveTintColor: '#B5C0C8',
    tabBarStyle: {
      paddingTop: 4,
      borderLeftWidth: 0.2,
      borderRightWidth: 0.2,
      position: 'absolute',
      overflow: 'hidden',
    },
  };
  const BottomTabs = () => {
    return (
      <Tabs.Navigator
        sceneContainerStyle={{backgroundColor: 'white'}}
        screenOptions={TabOptions}>
        <Tabs.Screen
          name="Home"
          component={HomeScreen}
          options={{
            headerShown: false,
            tabBarIcon: ({color, size}) => (
              <Icon.FontIcon name="home" color={color} size={size} />
            ),
          }}
        />
        <Tabs.Screen
          name="Leagues"
          component={LeagueScreen}
          options={{
            headerShown: false,
            tabBarIcon: ({color, size}) => (
              <Icon.FontIcon name="trophy" color={color} size={size} />
            ),
          }}
        />
        <Tabs.Screen
          name="Research"
          component={ResearchScreen}
          options={{
            headerShown: false,
            tabBarIcon: ({color, size}) => (
              <Icon.FontIcon name="search" color={color} size={size} />
            ),
          }}
        />
        <Tabs.Screen
          name="Leaderboard"
          component={LeaderboardScreen}
          options={{
            headerShown: false,
            tabBarIcon: ({color, size}) => (
              <Icon.MaterialIcon name="leaderboard" color={color} size={size} />
            ),
          }}
        />
        <Tabs.Screen
          name="Profile"
          component={ProfileScreen}
          options={{
            headerShown: false,
            tabBarIcon: ({color, size}) => (
              <Icon.FontIcon name="user" color={color} size={size} />
            ),
          }}
        />
      </Tabs.Navigator>
    );
  };

  return (
    <NavigationContainer
      ref={navigationRef}
      onReady={() => {
        routeNameRef.current = navigationRef.getCurrentRoute().name;
      }}>
      <Stack.Navigator screenOptions={StackOptions}>
        <Stack.Screen
          name="Tabs"
          component={BottomTabs}
          options={{headerShown: false}}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};
export default RootProvider;
