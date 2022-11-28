import React, { Component } from 'react'
import { View, Text, TouchableOpacity, TextInput, StyleSheet, Pressable } from 'react-native'
class Inputs extends Component {
    state = {
        userId: '',
        password: ''
    }
    handleEmail = (text) => {
        this.setState({ userId: text })
    }
    handlePassword = (text) => {
        this.setState({ password: text })
    }
    handleRePassword = (text) => {
        this.setState({ repassword: text })
    }
    login = (userId, pass) => {
        alert('userId: ' + userId + ' password: ' + pass)
    }
    render() {
        return (
            <View style={styles.container}>
                <Text style={styles.text}>Sign Up</Text>
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
                
                <TextInput style={styles.input}
                    underlineColorAndroid="transparent"
                    placeholder="Retype Password"
                    autoCapitalize="none"
                    onChangeText={this.handleRePassword} />

                <TouchableOpacity
                    style={styles.submitButton}
                    onPress={
                        () => this.login(this.state.userId, this.state.password)
                    }>
                    <Text style={styles.submitButtonText}> Submit </Text>
                </TouchableOpacity>
            </View>
        )
    }
}
export default Inputs

const onSignUpPressed = () => {
    console.warn("onSocialPressed");
}

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