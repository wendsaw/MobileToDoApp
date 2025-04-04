import { StyleSheet, Text, TouchableOpacity} from 'react-native';



export default function TodoItems({item, pressHandler}){

    return (


        <TouchableOpacity  onPress={()=>pressHandler(item.id)}>

        <Text style={styles.item}>{item.task}</Text>

        </TouchableOpacity>
    )



}

const styles=StyleSheet.create({

item:{

    padding:16,
    marginTop:16,
    borderColor:"#bbb",
    borderWidth:1,
    borderStyle:"dashed",
    borderRadius:10,

}


})