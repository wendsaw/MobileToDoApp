
import { StyleSheet, Text, View, Button, TextInput} from 'react-native';
import { useState } from 'react';

const AddTodo = ({submitHandler}) => {

    const [text, settext]=useState('')

    const handleChange=(val)=>{

        settext(val)



    }


    return (
        <View>

            <TextInput
            style={styles.input}
            placeholder='add new todo....'
       onChangeText={handleChange}
            />
            <Button onPress={()=>submitHandler(text)} title='Add Todo' color='coral'/>


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