import React, { useEffect, useReducer } from 'react';
import { Button, StyleSheet, Text, Vibration, View } from 'react-native';

import Home from './home';
import FindingWay from './FindingWay';

import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import axios from 'axios';

const Tab = createBottomTabNavigator();

export default function App() {
  
  return (
      <NavigationContainer style = {main.container}>
          <Tab.Navigator>
            <Tab.Screen name="Home" component={HomeScreen} />
            <Tab.Screen name="길 찾기" component={FindingWayScreen} />
              <Tab.Screen name="지연 신고" component={ReportScreen}/>
              <Tab.Screen name="설정" component={OptionsScreen}/>
              <Tab.Screen name="My" component={MyPageScreen}/>
          </Tab.Navigator>
      </NavigationContainer>
  );
}

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

const ReportScreen = () => {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text key = {}>test3</Text>
    </View>
  )
}

const OptionsScreen = () => {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>test4</Text>
    </View>
  )
}

const MyPageScreen = () => {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>test5</Text>
    </View>
  )
}

const main = StyleSheet.create({
  container: {
  flex: 1,
  backgroundColor: 'rgb(243, 243, 243)',
  alignItems: 'center',
  justifyContent: 'center',
  },
})

const [station, setStation] = useState('');
const [loading, setLoading] = useState('');
const [error, setError] = useState('');

const fetch = async () => {
  try {
    setError(null);
    setStation(null);

    setLoading(true);

    const response = await axios.get(
      'http://127.0.0.1:8000/api/'
    );

    setStation(response.data.data);
  } catch(e) {
    setError(e);
  };

  useEffect(() => {
    fetch();
  }, []);
}