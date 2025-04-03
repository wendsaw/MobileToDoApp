import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button, TextInput, FlatList, TouchableOpacity } from 'react-native';
import { useState } from 'react';

export default function App() {
  const [name, setName]=useState('wend');
  const [age, setAge]=useState('30');
  const [person, setPerson]=useState([
    {name:"wend", age:23, id:1},
    {name:"hello", age:25 ,id:2},
    {name:"love", age:25, id :3},
    {name:"wend", age:23, id:4},
    {name:"hello", age:25 ,id:5},
    {name:"love", age:25, id :6},
    {name:"wend", age:23, id:7},
    {name:"hello", age:25 ,id:8},
    {name:"love", age:25, id :9},
    {name:"wend", age:23, id:10},
    {name:"hello", age:25 ,id:11},
    {name:"love", age:25, id :12},
    {name:"wend", age:23, id:13},
    {name:"hello", age:25 ,id:14},
    {name:"love", age:25, id :15}
  ])

  const pressHandler=(id)=>{
    console.log(id);
    setPerson((prePeople)=>{

      return prePeople.filter(person =>person.id !=id)
    })
  }
  return (
    <View style={styles.container}>
      <FlatList
      // keyExtractor={(item)=>item.id}
      numColumns={3}
      data={person}
      renderItem={({item})=>(
        <TouchableOpacity onPress={()=>{pressHandler(item.id)}}>

        <View style={styles.items}>
        <Text> {item.name}</Text>
        <Text> {item.age}</Text>
        

      </View>
      </TouchableOpacity>

      )}

      />

{/* <ScrollView>
      {person.map(per=>(

          <View style={styles.items} key={per.id}>
            <Text> {per.name}</Text>
            <Text> {per.age}</Text>

          </View>
        )
        

      )}
      </ScrollView> */}

      
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    paddingTop:40,
    paddingHorizontal:20
    // alignItems: 'center',
    // justifyContent: 'center',
  },
  items:{
    marginTop:24,
    padding:30,
    backgroundColor:"pink",
    fontSize:24,
    marginHorizontal:10,
    marginTop:24,

  }

});
