import React, { useEffect, useState, Component } from 'react';

import { StatusBar } from 'expo-status-bar';
import { Button, StyleSheet, Text, View, TextInput, ScrollView, SafeAreaView } from 'react-native';

export default function FindingWay() {
    class Inputs extends Component {
        state = {
            StartingStation: '',
            DestinationStation: ''
        }
        handleStart = (text) => {
            this.setState({ StartingStation: text })
        }
        handleDest = (text) => {
            this.setState({ DestinationStation: text })
        }
        routeSearch = (st, ds) => {
            alert('출발역: ' + st + ' 도착역: ' + ds)
        }
    }
    return (
        <View style={findingWay.temp}>
            <View style={findingWay.top}>
                {/* <SafeAreaView style={findingWay.container}> */}
                <View style={findingWay.searchSpace}>
                    <View style={[findingWay.container, { flexDirection: 'row' }]}>
                        <TextInput style={findingWay.textInput}
                            placeholder="출발역"
                            autoCapitalize="none"
                            onChangeText={Inputs.handleStart} />
                    </View>
                    <View style={[findingWay.container, { flexDirection: 'row' }]}>
                        <TextInput style={findingWay.textInput}
                            placeholder="경유역"
                            autoCapitalize="none"
                            onChangeText={findingWay.searchStation}
                        />
                    </View>
                    <View style={[findingWay.container, { flexDirection: 'row' }]}>
                        <TextInput style={findingWay.textInput}
                            placeholder='도착역'
                            onChangeText={findingWay.handleDest} />
                    </View>
                </View>
                <View style={findingWay.nav}>
                    <Button title='즐겨찾기' style={findingWay.btn} ></Button>
                    <Button title='경유지 추가' style={findingWay.btn} ></Button>
                    <Button title='검색' style={findingWay.btn}
                        onPress={() => this.routeSearch(this.state.StartingStation, this.state.DestinationStation)}>
                    </Button>
                </View>
            </View>
            <View style={findingWay.resultSpace}>
                <ScrollView style={{ flex: 1, margin: 0, }}>
                    <Text style={
                        {
                            flex: 1, fontSize: 42,
                        }
                    }>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                        eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
                        minim veniam, quis nostrud exercitation ullamco laboris nisi ut
                        aliquip ex ea commodo consequat. Duis aute irure dolor in
                        reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
                        pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
                        culpa qui officia deserunt mollit anim id est laborum.
                    </Text>
                </ScrollView>
            </View>
            <StatusBar style="auto"></StatusBar>
            {/* </SafeAreaView> */}
        </View>
    );
}

const SearchSt = ({ whatSt }) => {

    return (
        <View style={[findingWay.container, { flexDirection: 'row' }]}>
            <Text>{whatSt}</Text>
            <TextInput style={findingWay.textInput} placeholder='asdf'></TextInput>
        </View>
    )
}

const findingWay = StyleSheet.create({
    temp: {
        flex: 1,
        justifyContent: "center",
    },
    top: {
        flex: 2,
        justifyContent: 'center',
        flexDirection: 'row'
    },
    container: {
        flex: 1,
        flexDirection: 'row',
    },
    searchSpace: {
        flex: 1,
    },
    nav: {
        justifyContent: 'center'
    },
    resultSpace: {
        flex: 8,
        backgroundColor: 'gray',
    },
    textInput: {
        flex: 1,
        backgroundColor: 'white',
        borderWidth: 1,
        padding: 5,

    },
    btn: {
        // fontSize: 5,
        // alignContent: 'center',
        // justifyContent: 'center',
    },
})