import React, { useEffect, useState } from 'react';
import { StyleSheet, Text, View, ActivityIndicator, FlatList, TouchableOpacity } from 'react-native';

import axios from 'axios';

// const API = axios.create({
//     baseURL: 'http://127.0.0.1:8000/api/Station?format=api',
//     headers: {
//         'Content-Type' : 'application/json',
//     },
// });


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

    const getData = async () => {
        try {
            setError(null);
            setLoading(true);

            //1
            const response = await fetch('http://127.0.0.1:8000/api/Station/?format=api');
            const json = await response.json();
            setStation(json.Station)

            //2
            // fetch('http://127.0.0.1:8000/api/Station?format=api')
            //     .then((response) => response.json())
            //     .then((response) => {
            //         <setInfo id={response.data[now]['id']}
            //     linNum={response.data[now]['lineNumber']}
            //     name={response.data[now]['stationName']}
            //     staNum={response.data[now]['stationNum']} />
            //     })

            //3
            // await API.get(
            //     // `/notes/${noteId}`
            // )
            // .then(function (response) {
                
            //     <setInfo id={response.data[now]['id']}
            //     linNum={response.data[now]['lineNumber']}
            //     name={response.data[now]['stationName']}
            //     staNum={response.data[now]['stationNum']} />
                // for(let i = 0; i < response.data.result.keywords.length; i++){
                //     _keyword.push(response.data.result.keywords[i]['keyword']);
                // }
                // setKeywords(keywords.concat(_keyword));
            //})
            // .catch(function (error) {
            //     console.log(error.response);
            // })

        // 4
        // const data = await axios.get('http://127.0.0.1:8000/api/Station/?format=api')
        // method:'GET',
        // setStation(data.data[now].id)

        //5
        // const requset = new Request('http://127.0.0.1:8000/api/Station/?format=api', {
        //     method: 'GET',

        // })
        // fetch(requset)
        // .then((response) => response)
        //tq


        } catch(e) {
            setError(e);
            console.error(error);
        } finally {
            setLoading(false);
        }
    }

    useEffect(() => {
        getData();
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
        <FlatList
            data={station}
            keyExtractor={({ id }, index) => id}
            renderItem={({ item }) => (
            <Text>{item.stationName}, {item.lineNumber}</Text>
            )}
        />
        ) }
                
        </View>
    )

}


export default ServerTestScreen;