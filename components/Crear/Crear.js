import React, { useEffect, useState } from 'react';
import { View, Text, SafeAreaView, TouchableOpacity, TextInput, Alert } from 'react-native';
import Styles from './Styles'
import Styles2 from '../Home/Styles'
import {saveProduct} from '../../api'




function Crear({ route,navigation }) {

  const { name } = route.params;
  const [nombre, setNombre] = useState('')
  const [marca, setMarca] = useState('')
  const [clasi, setClasi] = useState('')
  const [precio, setPrecio] = useState('')

  const  GuardarProducto  = ()  =>{
    var data = {
      nombre: nombre,
      marca: marca,
      clasificacion: clasi,
      precio: precio,
      autor: name
    }
    if(nombre == '' || marca == '' || clasi == '' || precio == '' || name == '')
    {
      Alert.alert('Error. 1 o mas campos vacios.')
    }else{
      saveProduct(data)
      navigation.navigate('Home')
    }
    console.log(data)
  }

  return (
    <SafeAreaView style={Styles.container}>
      <View style={Styles.view}>
        <Text style={Styles2.titulo}>CREAR PRODUCTO</Text>
        <TextInput
          value={nombre}
          onChangeText={(e)=>setNombre(e)}
          placeholder="NOMBRE..."
          style={Styles.input}>
        </TextInput>
        <TextInput
          value={marca}
          onChangeText={(e)=>setMarca(e)}
          placeholder="MARCA..."
          style={Styles.input}>
        </TextInput>
        <TextInput
          value={clasi}
          onChangeText={(e)=>setClasi(e)}
          placeholder="CLASIFICACION..."
          style={Styles.input}>
        </TextInput>
        <TextInput
          value={precio}
          onChangeText={(e)=>setPrecio(e)}
          keyboardType="numbers-and-punctuation"
          placeholder="PRECIO..."
          style={Styles.input}>
        </TextInput>
      </View>
      <View style={Styles.ButtonView}>
        <TouchableOpacity
          onPress={() => navigation.navigate('Home')}
          style={Styles.ButtonLeft}>
          <Text style={Styles.texto}>CANCELAR</Text>
        </TouchableOpacity>
        <TouchableOpacity 
        onPress={GuardarProducto}
        style={Styles.ButtonRight}>
          <Text style={Styles.texto}>GUARDAR</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}

export default Crear