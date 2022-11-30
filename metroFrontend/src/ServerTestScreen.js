import React, { useEffect, useState } from 'react';
import { StyleSheet, Text, View, ActivityIndicator, FlatList, TouchableOpacity, SafeAreaView } from 'react-native';

import axios from 'axios';

// 3
const API = axios.create({
    baseURL: 'http://127.0.0.1:8000/api/',
    headers: {
        'Content-Type' : 'application/json',
    },
});


const ServerTestScreen = () => {

    // fetch('http://127.0.0.1:8000/api/Station/?format=api', {
    //     method: 'POST',
    //     headers: {
    //         'Content-Type' : 'application/json',
    //     },
    // })

    // const st = {
    //     id: '',
    //     lineNumber : '',
    //     stationName: '',
    //     stationNum: '',
    // }

    const [loading, setLoading] = useState(true);
    const [error, setError] = useState('');
    const [station, setStation] = useState([])

    const getStation = async () => {
        try {
            setError(null);
            setLoading(true);

            // 4 이게 그나마...
            // axios.get('https://e054-118-34-138-189.jp.ngrok.io/api/Station/', {
            //     headers: {'Content-Type' : 'application/json'},
            // }).then((response) => 
            // console.log(JSON.stringify(response)) //이거
            // )
            // .then((json) => { 
            //     alert('1')
            //     setStation(json)
            // }).catch(function (error) {
            //     alert('2')
            //     console.log(error.response);
            //     console.log(error.response);
            // })

            ///////////////
            axios.post("https://72d6-2001-e60-9157-6a08-11b5-2f71-ccf5-e2c4.jp.ngrok.io/api/Station/", {
                'Username': 'test1',
                'Password': '1111',
                'Reported': 1
            })
            .then((response) => {
                    alert('실행')
                    console.log(JSON.stringify(response))
            })
            .catch(function (error) {
                alert('에러')
                // console.log(error.toJSON());
                if (error.response) {
                    // The client was given an error response (5xx, 4xx)
                    alert('에러1')
                    console.log(error.response.data);
                    console.log(error.response.status);
                    console.log(error.response.headers);
                } else if (error.request) {
                    // The client never received a response, and the request was never left
                    alert('에러2');
                    console.log(error.request);
                } else {
                    // Anything else
                    alert('에러3')
                    console.log('Error', error.message);
                }
            });        


            //post

            //1
            // axios({
            //     method: 'POST',
            //     url: 'https://72d6-2001-e60-9157-6a08-11b5-2f71-ccf5-e2c4.jp.ngrok.io',
            //     headers: {
            //         'Accept': 'application/json',
            //         'Content-Type': 'application/json;charset=UTF-8'
            //     },
            //     data:{
            //         id: 'test'
            //     }
            // });

            //2
            // const data = {
            //     id: 'test'
            // }

            // API.post(data)
            // .then(function(response) {
            //     alert('완료!!!!');
            // })
            // .catch(function (error) {
            //     console.log(error.response);
            // });


            } catch(e) {
                setError(e);
                console.error(error);
            } finally {
                setLoading(false);
            }
        }

    useEffect(() => {
        getStation();
        }, []);

    const [now, setNow] = useState(-1);

    const MyButton = props => {
        console.log(props);

        return (
        <TouchableOpacity
            style={{
            backgroundColor: "#4B778D",
            padding: 16,
            margin: 10,
            borderRadius: 8,
            }}
            onPress={() => {
                setNow(props.num);
            }}
        >
            <Text style={{ fontSize: 24, color: "white" }}>{props.num}</Text>
        </TouchableOpacity>
        );
    };


    return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
            <MyButton num='0' />
            <MyButton num='1' />
            <MyButton num='2' />
            <MyButton num='3' />
            <Text>{now}</Text>
            {loading ? <Text>True</Text> : 
            <Text>false</Text>
        }
            
        {loading ? <ActivityIndicator/> : (
            <SafeAreaView style={{ flex: 1, padding: 24, fontSize:14 }}>
                <Text>{station}</Text>
            
    
        </SafeAreaView>
        ) }
                
        </View>
    )

}


export default ServerTestScreen;