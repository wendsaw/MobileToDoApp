import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button, TextInput, FlatList, TouchableOpacity } from 'react-native';
import { useState } from 'react';

import Header from './components/Header';

export default function App() {
  const [toDos, setToDos]=useState([
    {
      id: 1,
      task: "Complete project proposal",
      completed: false,
      priority: "high",
      dueDate: "2025-04-10"
    },
    {
      id: 2,
      task: "Buy groceries",
      completed: true,
      priority: "medium",
      dueDate: "2025-04-05"
    },
    {
      id: 3,
      task: "Schedule team meeting",
      completed: false,
      priority: "high",
      dueDate: "2025-04-07"
    },
    {
      id: 4,
      task: "Workout for 30 minutes",
      completed: false,
      priority: "low",
      dueDate: "2025-04-06"
    },
    {
      id: 5,
      task: "Read 20 pages of a book",
      completed: true,
      priority: "low",
      dueDate: "2025-04-04"
    }


  ])

  return (
    <View style={styles.container}>
     <Header/>
     <View style={styles.content}>
      {/* {form} */}
      <View style={styles.list}>
        <FlatList
        data={toDos}
        renderItem={({item})=>(
          <Text>{item.task}</Text>
        )}
        />
      </View>
     </View>
      
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
   
    flex: 1,
    backgroundColor: '#fff',
    
  },

  content:{

    padding:40,

  },
  list:{
    marginTop:20,

  }
  

});
