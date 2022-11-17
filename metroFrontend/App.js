import { StatusBar } from 'expo-status-bar';
import { Button, StyleSheet, Text, Vibration, View } from 'react-native';

export default function App() {
  
  return (
    <View className="App" style = {main.container}>
      <Text style = {main.appTitle}>MJMetro</Text>
      <View style = {main.map}></View>

      <View style = {[main.stationBar, {flexDirection: 'row'}]}>
        <View style = {[main.stationBeAf, {
          borderTopRightRadius: 10,
          borderBottomRightRadius: 10,
        }]}></View>
        <View style = {[main.station, {
          borderRadius: 10,
          margin: 30,
        }]}><Text style = {main.station}>asdf</Text></View>
        <View style = {[main.stationBeAf, {
          borderTopLeftRadius: 10,
          borderBottomLeftRadius: 10,
        }]}></View>
      </View>

      <View style = {main.statusSpace}></View>

      <View style = {{flexDirection: 'row'}}>
        <Button style = {main.button} title = '1'></Button>
        <Button style = {main.button} title = '2'></Button>
        <Button style = {main.button} title = '3'></Button>
        <Button style = {main.button} title = '4'></Button>
      </View>
      <StatusBar style = "auto"></StatusBar>
    </View>
  );
}

const main = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'rgb(243, 243, 243)',
    alignItems: 'center',
    justifyContent: 'center',
  },
  appTitle: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 50,
    fontSize: 24,
    border: 10,
  },
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
    paddingBottom: 35,
    marginTop: 0,
    justifyContent: 'space-around',
  },
  station: {
    flex: 1,   
    backgroundColor: 'rgb(152, 152, 152)',
    padding: 25,
    marginTop: 10,
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
    padding: 100,
    paddingLeft: 200,
    paddingRight: 200,
    borderBottomWidth: 1,
    borderBottomColor: 'rgb(152, 152, 152)',
  },
  button: {
    flex: 1,
    borderRadius: 10,
    backgroundColor: 'rgb(152, 152, 152)',
    padding: 25,
    margin: 10,
    marginBottom: 30,
  }
});
