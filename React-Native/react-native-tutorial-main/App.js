import { View , FlatList,Text,Alert} from "react-native";
import { myStyle } from "./styles/myStyle";
import Person from "./components/Person";
import { useState } from "react";
import AddForm from "./components/AddForm";

export default function App() {
  const [data,setData]=useState([
    {id:1,name:"ก้อง",age:30},
    {id:2,name:"โจโจ้",age:20},
    {id:3,name:"ชาลี",age:18},
    {id:4,name:"เจน",age:15},
    {id:5,name:"น้ำ",age:10}
  ])

  const deleteData=(id)=>{//1,2,4,5
    setData((prevData)=>{
      return prevData.filter((item)=>item.id!=id);
    })
  }

  const insertData=(name,age)=>{
    if(name){
        setData((prevData)=>{
          return[
            {id:Math.random().toString(),name,age},
            ...prevData
          ]
        })
    }else{
        Alert.alert("แจ้งเตือน","กรุณาป้อนชื่อประชากร")
    }
  }

  return (
    <View style={myStyle.container}>
        <FlatList 
          data={data}
          renderItem={({item})=>(
              <Person item={item} deleteData={deleteData}/>
          )}
          keyExtractor={(item)=>item.id}
          ListHeaderComponent={<Text style={{alignSelf:"center",fontSize:25,fontWeight:"bold"}}>ข้อมูลประชากร</Text>}
          ListEmptyComponent={<Text style={{alignSelf:"center",fontSize:18}}>No Data</Text>}
        />
        <AddForm insertData={insertData}/>
    </View>
  );
}
