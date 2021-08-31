import React, {  useEffect, useState } from 'react';
import { Button, View, Text, SafeAreaView, TouchableOpacity, FlatList } from 'react-native';
import Styles from './Styles';
import ProductList from '../List/ProductList';
function Home({ route,navigation }) {
  const { name } = route.params;
  const [activo, setActivo] = useState(false)

  return (
    <SafeAreaView style={Styles.container}>
    <View style={Styles.view}>
    <Text style={Styles.titulo2}>BIENVENIDO(A) {name} A </Text>
    <Text style={Styles.titulo}>VERDURAS EL "BENITO"</Text>
       <TouchableOpacity
       onPress={() => navigation.navigate('Crear', {name:name})}
       style={Styles.botonStd}>
         <Text style={Styles.texto}>CREAR</Text>
       </TouchableOpacity>
    </View>
    <View style={Styles.view}>
    <ProductList/>
    </View>  
    </SafeAreaView>
  );
}

export default Home