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
    botonStd:{
      width:'80%',
      height:'15%',
      backgroundColor:'red',
      marginTop:'2%',
      borderRadius:5,
      alignItems:'center',
      justifyContent:'center'
    },
    input:{
        width:'80%',
        height:'15%',
        marginTop:'2%',
        borderRadius:5,
        borderColor:'red',
        borderWidth:1
      },
      texto:{
        fontSize:18,
        fontWeight:'bold',
        color:'white'
      }
  });


  
  export default  Styles;