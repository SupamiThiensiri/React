import { StyleSheet } from "react-native";

export const myStyle = StyleSheet.create({
  container: {
    flex: 1,
    marginVertical:50,
    marginHorizontal:10
  },
  header: {
    fontSize: 20,
    fontWeight: "bold",
  },
  content: {
    backgroundColor:"orange",
    padding:30,
    marginTop:15,
    borderWidth:2,
    borderColor:"black",
    borderStyle:"dashed",
    borderRadius:10,
    flexDirection:"row",
    justifyContent:"space-between"
  },
  input:{
    borderBottomColor:"#ddd",
    borderBottomWidth:1,
    paddingHorizontal:8,
    paddingVertical:6,
    marginBottom:15
  }
});
