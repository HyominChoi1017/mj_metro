import React, { useEffect, useState } from 'react';
import { StyleSheet, Text, View, ActivityIndicator, FlatList } from 'react-native';

import Home from './Home';
import FindingWay from './FindingWay';

import ReportScreen from './ReportScreen';
import OptionScreen from './OptionScreen';
import MyPageScreen from './MyPageScreen';

import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';


import ServerTestScreen from './ServerTestScreen';

const Tab = createBottomTabNavigator();

export default function App() {

  return (
      <NavigationContainer style = {main.container}>
          <Tab.Navigator>
            <Tab.Screen name="Home" component={HomeScreen} />
            <Tab.Screen name="길 찾기" component={FindingWayScreen} />
            <Tab.Screen name="지연 신고" component={ReportScreen}/>
            <Tab.Screen name="설정" component={OptionScreen}/>
            <Tab.Screen name="My" component={MyPageScreen}/>
            <Tab.Screen name="serverTest" component={ServerTestScreen}/>
          </Tab.Navigator>
      </NavigationContainer>
  );
}

const main = StyleSheet.create({
  container: {
  flex: 1,
  backgroundColor: 'rgb(243, 243, 243)',
  alignItems: 'center',
  justifyContent: 'center',
  },
});


const HomeScreen = () => {
  return(
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Home/>
    </View>
  )
}

const FindingWayScreen = () => {
  return(
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <FindingWay />
    </View>
  )
}
