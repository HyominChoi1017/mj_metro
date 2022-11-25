import React, { useEffect, useState } from 'react';
import { StyleSheet, Text, View, ActivityIndicator, FlatList, TouchableOpacity } from 'react-native';

import axios from 'axios';

const API = axios.create({
    baseURL: 'http://127.0.0.1:8000/api/Station',
    headers: {
        'Content-Type' : 'application/json',
    },
});


const ServerTestScreen = () => {

    // fetch('127.0.0.1:8000/api/Station/', {
    //     method: 'POST',
    //     headers: {
    //         'Content-Type' : 'application/json',
    //     },
    // }


    const [loading, setLoading] = useState(true);
    const [error, setError] = useState('');
    const [station, setStation] = useState(
        {
            id: '',
            lineNumber : '',
            stationName: '',
            stationNum: '',
        }
    )

    const setInfo = props => {
        setStation({
            id: props.id,
            lineNumber : props.lineNum,
            stationName: props.name,
            stationNum: props.staNum,
        })
    }

    const getData = async () => {
        try {
            setError(null);
            setLoading(true);

            //1
            // const response = await fetch(
            //     'http://127.0.0.1:8000/api/Station/'
            // );
            // const json = await response.json();
            // setData(json.data);

            //2
            // fetch('http://127.0.0.1:8000/api/Station')
            //     .then((res) => res.json())
            //     .then((res) => setData(res))

            //3
            await API.get(
                // `/notes/${noteId}`
            )
            .then(function (response) {
                
                <setInfo id={response.data[now]['id']}
                linNum={response.data[now]['lineNumber']}
                name={response.data[now]['stationName']}
                staNum={response.data[now]['stationNum']} />
                // for(let i = 0; i < response.data.result.keywords.length; i++){
                //     _keyword.push(response.data.result.keywords[i]['keyword']);
                // }
                // setKeywords(keywords.concat(_keyword));
            })
        .catch(function (error) {
            console.log(error.response);
        })

        } catch(e) {
            setError(e);
            console.error(error);
        } finally {
            setLoading(false);
        }

        useEffect(() => {
        getData();
        }, []);
    }

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
            <Text>{station.stationName}</Text> 
            
            {loading ? <ActivityIndicator/> : (
                <Text>{station.stationName}</Text> 
                /* <FlatList>
                    data={station}
                    renderItem={({ item }) => (
                    <Text>{item.stationName}, {item.lineNumber}</Text>
                    )}
                </FlatList> */
            ) }
                
        </View>
    )

}


export default ServerTestScreen;