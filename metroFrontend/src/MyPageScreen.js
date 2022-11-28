import * as React from 'react';
// import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';


import LogIn from './LogInScreen';
import SignUp from './SignUpScreen';

const Stack = createStackNavigator();
function MyPageScreen() {
    return (

        <Stack.Navigator initialRouteName="MAIN">
            <Stack.Screen name="LOGIN" component={LogIn}
                options={{
                    // title: '로그인'
                }} />
            <Stack.Screen name="SIGNUP" component={SignUp}
                options={{
                    // title: '회원가입'
                }} />
        </Stack.Navigator>
    );
}

export default MyPageScreen;