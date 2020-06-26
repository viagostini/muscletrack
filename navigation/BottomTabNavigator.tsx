import { Ionicons, FontAwesome, Entypo } from '@expo/vector-icons';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';
import * as React from 'react';

import Colors from '../constants/Colors';
import useColorScheme from '../hooks/useColorScheme';
import AddExecutionScreen from '../screens/AddExecutionScreen';
import TrackExercisesScreen from '../screens/TrackExercisesScreen';
import ListExecutionsScreen from '../screens/ListExecutionsScreen';
import { BottomTabParamList, AddExecutionParamList, TrackExercisesParamList, ListExecutionsParamList } from '../types';

const BottomTab = createBottomTabNavigator<BottomTabParamList>();

export default function BottomTabNavigator() {
  const colorScheme = useColorScheme();

  return (
    <BottomTab.Navigator
      initialRouteName="TabOne"
      tabBarOptions={{ activeTintColor: Colors[colorScheme].tint,  showLabel: false }}>
      <BottomTab.Screen
        name="Add"
        component={AddExecutionNavigator}
        options={{
          tabBarIcon: ({ color }) => <FontAwesome name="plus-circle" size={28} color={color} />,
        }}
      />
      <BottomTab.Screen
        name="Track"
        component={TrackExercisesNavigator}
        options={{
          tabBarIcon: ({ color }) => <Entypo name="area-graph" size={28} color={color} />,
        }}
      />
    <BottomTab.Screen
        name="List"
        component={ListExecutionsNavigator}
        options={{
          tabBarIcon: ({ color }) => <FontAwesome name="list" size={24} color={color} />,
        }}
      />
    </BottomTab.Navigator>
  );
}

// You can explore the built-in icon families and icons on the web at:
// https://icons.expo.fyi/
//function TabBarIcon(props: { name: string; color: string }) {
//  return <Ionicons size={30} style={{ marginBottom: -3 }} {...props} />;
//}

// Each tab has its own navigation stack, you can read more about this pattern here:
// https://reactnavigation.org/docs/tab-based-navigation#a-stack-navigator-for-each-tab
const AddExecutionStack = createStackNavigator<AddExecutionParamList>();

function AddExecutionNavigator() {
  return (
    <AddExecutionStack.Navigator>
      <AddExecutionStack.Screen
        name="AddExecutionScreen"
        component={AddExecutionScreen}
        options={{ headerTitle: 'Add execution' }}
      />
    </AddExecutionStack.Navigator>
  );
}

const TrackExercisesStack = createStackNavigator<TrackExercisesParamList>();

function TrackExercisesNavigator() {
  return (
    <TrackExercisesStack.Navigator>
      <TrackExercisesStack.Screen
        name="TrackExercisesScreen"
        component={TrackExercisesScreen}
        options={{ headerTitle: 'Track exercises' }}
      />
    </TrackExercisesStack.Navigator>
  );
}

const ListExecutionsStack = createStackNavigator<ListExecutionsParamList>();

function ListExecutionsNavigator() {
  return (
    <ListExecutionsStack.Navigator>
      <ListExecutionsStack.Screen
        name="ListExecutionsScreen"
        component={ListExecutionsScreen}
        options={{ headerTitle: 'List executions' }}
      />
    </ListExecutionsStack.Navigator>
  );
}