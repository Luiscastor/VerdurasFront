import React from 'react'
import { View, Text, TouchableOpacity} from 'react-native'
import Styles from './Styles'
import { useNavigation } from '@react-navigation/core'

const ProductItem = ({producto, handleDelete}) => {
    navigation = useNavigation();
    return (
        <View style={Styles.itemContainer}>
            <TouchableOpacity
            onPress={() => navigation.navigate('Editar',{id: producto.id})}
            >
            <Text style={Styles.texto}>NOMBRE:{producto.nombre}</Text>
            <Text style={Styles.texto}>MARCA:{producto.marca}</Text>
            <Text style={Styles.texto}>CLASIFICACION:{producto.clasificacion}</Text>
            <Text style={Styles.texto}>PRECIO:{producto.precio}</Text>
            <Text style={Styles.texto}>AUTOR:{producto.autor}</Text>
            </TouchableOpacity>
            <TouchableOpacity 
            onPress={()=>handleDelete(producto.id)}
            style={Styles.eliminar}>
                <Text style={Styles.texto}>Eliminar</Text>
            </TouchableOpacity>
        </View>
    )
}

export default ProductItem
