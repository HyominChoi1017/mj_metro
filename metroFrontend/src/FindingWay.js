import React, {useEffect, useState} from 'react';

import { StatusBar } from 'expo-status-bar';
import { Button, StyleSheet, Text, View, TextInput, ScrollView,  SafeAreaView  } from 'react-native';

export default function FindingWay() {

    return(
        <SafeAreaView style = {findingWay.container}>
            <View style = {findingWay.searchSpace}>
                <View style = {[findingWay.container, {flexDirection: 'row'}]}>

                </View>
                <View style = {[findingWay.container, {flexDirection: 'row'}]}>
                    <SearchSt whatSt = '경유역' />
                    <Button title = '경유지추가'></Button>
                </View>
                <View style = {[findingWay.container, {flexDirection: 'row'}]}>
                    <Text>도착역</Text>
                    <TextInput style = {findingWay.input} placeholder = 'asdf'></TextInput>
                    <Button title = '검색'
                    style = {findingWay.btn}></Button>
                </View>
                
            </View>
            <View style = {findingWay.resultSpace}>
                <ScrollView style = {{flex: 1, margin: 0,}}>
                <Text style = {
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
            <StatusBar style = "auto"></StatusBar>
        </SafeAreaView>
        
    );
}

const SearchSt = ({ whatSt }) => {

    return(
        <View style = {[findingWay.container, {flexDirection: 'row'}]}>
            <Text>{whatSt}</Text>
            <TextInput style = {findingWay.input} placeholder = 'asdf'></TextInput>
        </View>
    )
}

const findingWay = StyleSheet.create({
    container: {
    flex: 1,
    backgroundColor: 'rgb(243, 243, 243)',
    alignItems: 'center',
    justifyContent: 'center',
    },
    searchSpace: {
        flex: 1,
        padding: 400,
        alignItems: 'center',
        justifyContent: 'center',
    },
    resultSpace: {
        flex: 1,
        padding: 500,
        backgroundColor: 'rgb(152, 152, 152)',
    },
    input: {
        flex: 1,
        backgroundColor: 'rgb(152, 152, 152)',
        borderWidth: 1,

    },
    btn: {
        flex: 1,
        backgroundColor: 'rgb(152, 152, 152)',
        padding: 10,
    }
})