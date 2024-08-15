import { View ,Text,TouchableOpacity} from "react-native"
import { myStyle } from "../styles/myStyle"
import {MaterialIcons} from "@expo/vector-icons"

export default function Person({item,deleteData}){
    return(
        <TouchableOpacity onPress={()=>deleteData(item.id)}>
        <View style={myStyle.content}>
            <Text style={myStyle.header}>ชื่อ {item.name} , อายุ {item.age} ปี</Text>
            <MaterialIcons name="delete" size={30} color="#333"/>
        </View>
        </TouchableOpacity>
    )
}