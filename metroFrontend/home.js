import React, {useEffect, useState} from 'react';

import { StatusBar } from 'expo-status-bar';
import { Button, StyleSheet, Text, View } from 'react-native';

import { Image } from 'react-native';
import bubbleRight from './assets/bubbleRight.png';
import bubbleLeft from './assets/bubbleLeft.png';

export default function Home() {

    return (
        <View className="App" style = {home.container}>
            {/* <Text style = {main.appTitle}>MJMetro</Text> */}
            <View style = {home.map}></View>

            <View style = {[home.stationBar, {flexDirection: 'row'}]}>
            <View style = {[home.stationBeAf, {
                borderTopRightRadius: 10,
                borderBottomRightRadius: 10,
                marginTop: 10,
        }]}>
            <Text style = {home.nearbyHere}>629</Text>
        </View>
        <View style = {[home.station, {
            borderRadius: 10,
            margin: 30,
        }]}>
            <Text style = {home.myStation}>630</Text>
        </View>
        <View style = {[home.stationBeAf, {
            borderTopLeftRadius: 10,
            borderBottomLeftRadius: 10,
            marginTop: 10,
        }]}>
            <Text style = {home.nearbyHere}>631</Text>
        </View>
        </View>
        <View style = {{flexDirection: 'row'}}>
            <Image source = {bubbleLeft} style = {home.bubble}></Image>
            <Text style = {home.infoLeft}>asdfasdf</Text>
            <Image source = {bubbleRight} style = {home.bubble}></Image>
            <Text style = {home.infoRight}>asdfasdf</Text>
        </View>
        
        <StatusBar style = "auto"></StatusBar>
    </View>
    );
}

const home = StyleSheet.create({
    container: {
    flex: 1,
    backgroundColor: 'rgb(243, 243, 243)',
    alignItems: 'center',
    justifyContent: 'center',
    },
    // appTitle: {
    // flex: 1,
    // alignItems: 'center',
    // justifyContent: 'center',
    // marginTop: 0,
    // fontSize: 24,
    // padding: 30,
    // },
    map: {
    flex: 1,
    backgroundColor: 'white',
    borderColor: 'rgb(152, 152, 152)',
    borderWidth: 2,
    paddingBottom: 300,
    paddingLeft: 200,
    paddingRight: 200,
    marginBottom: 0,
    },
    stationBar: {
    flex: 1,
    borderColor: 'rgb(152, 152, 152)',
    borderBottomWidth: 2,
    paddingBottom: 45,
    marginTop: 0,
    justifyContent: 'space-around',
    },
    station: {
    flex: 1,   
    backgroundColor: 'rgb(152, 152, 152)',
    padding: 25,
    marginTop: 5,
    marginBottom: 10,
    alignItems: 'flex-start',
    textAlign: 'center'
    },
    stationBeAf: {
    flex: 1,
    backgroundColor: 'rgb(152, 152, 152)',
    marginTop: 15,  
    padding: 20,
    alignItems: 'flex-start',
    },
    statusSpace: {
    flex: 1,
    padding: 120,
    paddingHorizontal: 200,
    //backgroundColor: 'red', //이건 나중에 지움. 확인용
    margin: 0,
    },
    bubble: {
        flex: 1,
        marginVertical: 10,
        marginHorizontal: 15,
        width: 80,
        height: 235,
    },

    myStation: {
        flex: 1,
        position: 'absolute',
        left: 28,
        top: 7,
        fontSize: 30,
    },
    nearbyHere: {
        flex: 1,
        position: 'absolute',
        left: 28,
        top: 5,
        fontSize: 26,
    },

    infoLeft: {
        flex: 1,
        position: 'absolute',
        left: 30,
        top: 60,
        fontSize: 16,
    },
    infoRight: {
        flex: 1,
        position: 'absolute',
        right: 30,
        top: 60,
        fontSize: 16,
    }
});

// export function postData(url = '', data = FormData) {
//     return fetch(url, {
//     method: 'POST',
//     mode: 'cors',
//     cache: 'no-cache',
//     credentials: 'same-origin',
//     headers: {
//         'Content-Type': 'application/json',
//     },
//     redirect: 'follow',
//     referrer: 'no-referrer',
//     body: data,
//     }).then(response => response.json);
// }