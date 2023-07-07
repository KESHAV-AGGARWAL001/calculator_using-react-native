import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { Alert, Pressable, StyleSheet, Text, View } from 'react-native';

export default function App() {
  const [name, setName] = useState('');
  const calj = "Calculator";
  const Output = () => {
    try {
      setName(eval(name));
    }
    catch {
      Alert.alert('You Entered Invalid Input', 'Enter the valid input', [
        {
          text: 'Cancel',
          onPress: () => { setName(''); },
        },
        { text: 'OK', onPress: () => { } },
      ]);
    }
  }
  return (
    <View style={styles.main}>
      <View style={styles.container}>
        <Text style={styles.inputCalc}>Calculator</Text>
        <Text style={styles.input}> {name} </Text>
      </View>
      <View style={styles.fl}>
        <View style={styles.flexBox}>
          <Pressable onPress={() => { setName(name + '9') }}><Text style={styles.output}>{9}</Text></Pressable>
          <Pressable onPress={() => { setName(name + '8') }}><Text style={styles.output}>{8}</Text></Pressable>
          <Pressable onPress={() => { setName(name + '7') }}><Text style={styles.output}>{7}</Text></Pressable>
          <Pressable onPress={() => { setName(name + '/') }}><Text style={styles.output}>{"/"}</Text></Pressable>
        </View>
        <View style={styles.flexBox}>
          <Pressable onPress={() => { setName(name + '6') }}><Text style={styles.output}>{6}</Text></Pressable>
          <Pressable onPress={() => { setName(name + '5') }}><Text style={styles.output}>{5}</Text></Pressable>
          <Pressable onPress={() => { setName(name + '4') }}><Text style={styles.output}>{4}</Text></Pressable>
          <Pressable onPress={() => { setName(name + '*') }}><Text style={styles.output}>{"*"}</Text></Pressable>
        </View>
        <View style={styles.flexBox}>
          <Pressable onPress={() => { setName(name + '3') }}><Text style={styles.output}>{3}</Text></Pressable>
          <Pressable onPress={() => { setName(name + '2') }}><Text style={styles.output}>{2}</Text></Pressable>
          <Pressable onPress={() => { setName(name + '1') }}><Text style={styles.output}>{1}</Text></Pressable>
          <Pressable onPress={() => { setName(name + '-') }}><Text style={styles.output}>{"-"}</Text></Pressable>
        </View>
        <View style={styles.flexBox}>
          <Pressable onPress={() => { setName(name + '0') }}><Text style={styles.output}>{0}</Text></Pressable>
          <Pressable onPress={() => { setName(name + '.') }}><Text style={styles.output}>{"."}</Text></Pressable>
          <Pressable onPress={() => { setName(name + '+') }}><Text style={styles.output}>{"+"}</Text></Pressable>
          <Pressable onPress={Output}><Text style={styles.output}>{"="}</Text></Pressable>
        </View>
      </View>
      <View><Pressable onPress={() => { setName("") }}><Text style={styles.btn}>{"CLEAR"}</Text></Pressable></View>
    </View >
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    width: 300,
    height: 200,
    marginHorizontal: 30,
    marginVertical: 100,
    display: 'flex',
    flexDirection: 'column',
    gap: 5,
  },
  input: {
    fontSize: 30,
    color: 'black',
    fontStyle: 'italic',
    fontWeight: '600',
    borderBottomColor: '#9292F1',
    borderBottomWidth: 2,
    borderRadius: 2,
    borderRadius: 2,

  },
  inputCalc: {
    fontSize: 50,
    color: '#3333ff',
    fontStyle: 'normal',
    fontWeight: '900',
    marginBottom: 30
  },
  output: {
    display: 'flex',
    color: '#3333ff',
    fontStyle: 'italic',
    fontWeight: '900',
    justifyContent: 'center',
    textAlign: 'center',
    fontSize: 45,
    width: 70,
    height: 70
  },
  flexBox: {
    display: 'flex',
    flexDirection: 'row',
    marginHorizontal: 7,
    gap: 0
  },
  fl: {
    marginBottom: 0,
    alignSelf: 'flex-end',
    marginHorizontal: 30
  },
  main: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
  },
  btn: {
    marginHorizontal: 120,
    fontSize: 25,
    paddingHorizontal: 20,
    paddingVertical: 10,
    color: '#3333ff',
    fontWeight: '900',
    fontStyle: 'normal',
  }
});
