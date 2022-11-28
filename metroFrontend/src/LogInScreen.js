import React, { Component } from 'react'
import { View, Text, TouchableOpacity, TextInput, StyleSheet, Pressable } from 'react-native'
import "react-native-gesture-handler";
// import { NavigationContainer } from "@react-navigation/native";
// import { createStackNavigator } from '@react-navigation/stack';
import { createStackNavigator, createAppContainer } from 'react-navigation';

// import { isConstructorDeclaration } from 'typescript';
// import { Button } from 'react-native';
class Inputs extends Component {
    state = {
        userId: '',
        password: ''
    }
    handleEmail = (text) => {
        this.setState({ uaserId: text })
    }
    handlePassword = (text) => {
        this.setState({ password: text })
    }
    login = (userId, pass) => {
        alert('userId: ' + userId + ' password: ' + pass)
    }
    render() {
        return (
            <View style={styles.container}>
                <Text style={styles.text}>Log in</Text>
                <TextInput style={styles.input}
                    underlineColorAndroid="transparent"
                    placeholder="Id"
                    placeholderTextColor="ligthgray"
                    autoCapitalize="none"
                    onChangeText={this.handleEmail} />

                <TextInput style={styles.input}
                    underlineColorAndroid="transparent"
                    placeholder="Password"
                    autoCapitalize="none"
                    onChangeText={this.handlePassword} />

                <TouchableOpacity
                    style={styles.submitButton}
                    onPress={
                        () => this.login(this.state.userId, this.state.password)
                    }>
                    <Text style={styles.submitButtonText}> Submit </Text>
                </TouchableOpacity>
                <TouchableOpacity
                    onPress={() => this.onSignUpPressed()}>
                    <Text style={styles.signInText}>회원가입하기</Text>
                </TouchableOpacity>
            </View >
        )
    }
    onSignUpPressed() {
        // DetailScreen으로 화면 이동
        this.props.navigation.navigate('SIGNUP');
    }
}
export default Inputs


const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingBottom: 100,
        justifyContent: "center",
    },
    text: {
        fontSize: "30",
        textAlign: "center",
    },
    input: {
        flex: 0.07,
        margin: 5,
        height: 40,
        borderColor: "black",
        borderWidth: 1,
        paddingLeft: 7,
    },
    submitButton: {
        flex: 0.05,
        backgroundColor: "skyblue",
        padding: 10,
        margin: 5,
        justifyContent: "center",
    },
    submitButtonText: {
        color: "white",
        textAlign: "center",
    },
    signInText: {
        paddingLeft: 5,
        color: "lightgray",
    }
})