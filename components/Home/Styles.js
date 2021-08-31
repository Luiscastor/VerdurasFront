import { StyleSheet } from "react-native";

const Styles = StyleSheet.create({
    container: {  
      flex: 1,
    },
    view:{
      alignItems: 'center', 
      justifyContent: 'center' 
    },
    titulo:{
      fontSize: 20,
      fontWeight:'bold',
      marginBottom:'10%',
    },
    titulo2:{
      fontSize: 20,
      fontWeight:'bold',
    },
    botonStd:{
      width:'80%',
      height:'15%',
      backgroundColor:'red',
      marginTop:'2%',
      borderRadius:5,
      alignItems:'center',
      justifyContent:'center'
    },
    texto:{
      fontSize:18,
      fontWeight:'bold',
      color:'white'
    }
  });


  
  export default  Styles;