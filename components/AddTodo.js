
import { StyleSheet, View, Button, TextInput} from 'react-native';
import { useState } from 'react';

const AddTodo = ({submitHandler}) => {

    const [task, setTask]=useState('')

    const handleChange=(val)=>{

        setTask(val)



    }


    return (
        <View>

            <TextInput
            style={styles.input}
            placeholder='add new todo....'
       onChangeText={handleChange}
            />
            <Button onPress={()=>submitHandler(task)} title='Add Todo' color='coral'/>


        </View>


      );
}
 
export default AddTodo;


const styles=StyleSheet.create({

    input:{
        marginBottom:10,
        paddingHorizontal:8,
        paddingVertical:6,
        borderBottomWidth:1,
        borderBottomColor:"#ddd"


    }
})