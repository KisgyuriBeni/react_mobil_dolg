import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { Pressable, StyleSheet, Text, View } from 'react-native';
import { FlatList } from 'react-native-web';

export default function App() {

  const host = "http://localhost:8000/"
  const endpoint = "orszagok"
  const url = host + endpoint

  const [orszagok, setorszagok] = useState([]);

  function getOrszagok(){
    fetch(url)
    .then(response => response.json())
    .then( result => {
      // console.log(result)
      setorszagok(result)
    })
  }


  return (
    <View style={styles.container}>
      <Text style={styles.plainHeader}>Országok listája</Text>
      <Pressable style={styles.Pressable}
      onPress={getOrszagok}
      >
        <Text>Nyomj meg</Text>
      </Pressable>
      <View style={styles.header}>
        <Text style={styles.header}>Név</Text>
        <Text style={styles.header}>Terület</Text>
        <Text style={styles.header}>Népesség</Text>
      </View>
      <FlatList
        data={orszagok}
        renderItem={({item})=>(
          <View style={styles.item}>
            <Text style={styles.column}>{item.nev}</Text>
            <Text style={styles.column}>{item.terulet}km²</Text>
            <Text style={styles.column}>{item.nepesseg}</Text>
          </View>
        )}
        
      />
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  item:{
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 20,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
  },
  column:{
    flex: 1,
    textAlign: 'center',
    marginRight: 20
  },
  header:{
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 20,
    fontWeight: 'bold',
    fontSize:20
  },
  headerText:{
    flex: 1,
    textAlign: 'center',
  },
  Pressable:{
    marginTop: 20,
    padding: 10,
  },
  plainHeader:{
    fontSize:40,
    fontWeight: 'bold',
  }
});
