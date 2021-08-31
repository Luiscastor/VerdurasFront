import React, { useEffect, useState } from 'react';
import { View, Text, SafeAreaView, TouchableOpacity, TextInput } from 'react-native';
import Styles from './Styles'
import Styles2 from '../Home/Styles'

function Persona({ navigation }) {
  const [nombres, setNombre] = useState('')

  const formatName = (e) =>{
      setNombre(e.toUpperCase())
  }
  return (
    <SafeAreaView style={Styles.container}>
      <View style={Styles.view}>
        <Text style={Styles2.titulo}>INGRESAR NOMBRE</Text>
        <TextInput
          value={nombres}
          autoCapitalize="characters"
          onChangeText={(e)=>formatName(e)}
          placeholder="NOMBRE..."
          style={Styles.input}>
        </TextInput>
        <TouchableOpacity 
        onPress={() => navigation.navigate('Home',{name:nombres})}
        style={Styles.botonStd}>
          <Text style={Styles.texto}>CONTINUAR</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}

export default Persona