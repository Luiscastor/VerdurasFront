import { StyleSheet } from "react-native";

const Styles = StyleSheet.create({
    container: {  
      flex: 1,
    },
    view:{
      alignItems: 'center', 
      justifyContent: 'center' 
    },
    input:{
      width:'80%',
      height:'10%',
      marginTop:'2%',
      borderRadius:5,
      borderColor:'red',
      borderWidth:1
    },

    ButtonView:{
      flexDirection:'row',
      justifyContent:'space-between',
      alignItems:'center',
      width:'100%',
      height:'10%',
    },
    ButtonLeft:{
      width:'35%',
      height:'50%',
      marginLeft:'10%',
      backgroundColor:'red',
      borderRadius:5,
      alignItems:'center',
      justifyContent:'center'
    },
    ButtonRight:{
      width:'35%',
      height:'50%',
      marginRight:'10%',
      backgroundColor:'red',
      borderRadius:5,
      alignItems:'center',
      justifyContent:'center'
    },
    ButtonUpload:{
      width:'80%',
      height:'10%',
      marginTop:'2%',
      backgroundColor:'red',
      borderRadius:5,
      alignItems:'center',
      justifyContent:'center'
    }
  });


  
  export default  Styles;