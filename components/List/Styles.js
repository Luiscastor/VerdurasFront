import { StyleSheet } from "react-native";

const Styles = StyleSheet.create({
    container: {  
      flex: 1,
    },
    itemContainer:{
        backgroundColor:'red',
        width:'100%',
        marginTop:'5%',
        borderRadius:5,
        alignItems:'flex-start',
        justifyContent:'center',
        flexDirection:'row',
        justifyContent:'space-between'
    },
    StyleFlat:{
        width:'80%',
    },
    texto:{
        fontSize:15,
        fontWeight:'bold',
        color:'white'
      },
    eliminar:{
    backgroundColor:'black',
    padding:7,
    borderRadius:5,
    alignItems:'center',
    justifyContent:'center'
    }
  });


  
  export default  Styles;