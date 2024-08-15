import { View, TextInput, Button } from "react-native";
import { myStyle } from "../styles/myStyle";
import { useState } from "react";

export default function AddForm({insertData}) {
  const [name, setName] = useState("");
  const [age, setAge] = useState(15);
  return (
    <View>
      <TextInput
        placeholder="ป้อนชื่อประชากร"
        keyboardType="default"
        style={myStyle.input}
        onChangeText={(value)=>setName(value)}
      />
      <TextInput
        placeholder="ป้อนอายุประชากร"
        keyboardType="number-pad"
        style={myStyle.input}
        onChangeText={(value)=>setAge(value)}
      />
      <Button title="เพิ่มข้อมูล" onPress={()=>insertData(name,age)}/>
    </View>
  );
}
