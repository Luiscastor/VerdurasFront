import React, { useEffect, useState } from 'react';
import { View, Text, SafeAreaView, TouchableOpacity, TextInput, Alert } from 'react-native';
import Styles from './Styles'
import Styles2 from '../Home/Styles'
import {updateProduct, getProduct} from '../../api'




function Editar({ route,navigation }) {

  const [nombre, setNombre] = useState('')
  const [marca, setMarca] = useState('')
  const [clasi, setClasi] = useState('')
  const [precio, setPrecio] = useState('')

  const  ActualizarProducto  = async()  =>{
    var data = {
      nombre: nombre,
      marca: marca,
      clasificacion: clasi,
      precio: precio,
    }
    await updateProduct(route.params.id, data)
    .then(()=>{
      navigation.navigate("Home")
    })
  }

  useEffect(() => {
    if (route.params && route.params.id){
      (async()=>{
        const prod = await getProduct(route.params.id)
        prod.map((e)=>{
          setNombre(e.nombre)
          setMarca(e.marca)
          setClasi(e.clasificacion)
          setPrecio(e.precio)
        })
      })();
    }
  },[])

  return (
    <SafeAreaView style={Styles.container}>
      <View style={Styles.view}>
        <Text style={Styles2.titulo}>EDITAR PRODUCTO</Text>
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
        onPress={ActualizarProducto}
        style={Styles.ButtonRight}>
          <Text style={Styles.texto}>GUARDAR</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}

export default Editar