import React, {useEffect, useState} from 'react';
import { Text, FlatList, RefreshControl } from 'react-native';
import Styles from '../List/Styles';
import ProductItem from './ProductItem';
import {getProducts, deleteProduct} from '../../api'


const ProductList = () => {
    const [productos, setProductos] = useState([])
    const [cargando, setCargando] = useState(false)
    const loadProducts = async () =>{
        const data = await getProducts()
        setProductos(data)
      }
      useEffect(() => {
        loadProducts();
      },[])
      
      const onRefresh = React.useCallback(async()=>{
          setCargando(true)
          await loadProducts()
          setCargando(false)
      })

    const renderItem = ({item})=>{
        return <ProductItem producto={item} handleDelete={handleDelete}/>
    }
    const handleDelete = async(id) =>{
        await deleteProduct(id)
        await loadProducts()
    }
return (
    <FlatList
      refreshControl={<RefreshControl
      colors={["red"]}
      onRefresh={onRefresh}
      refreshing={cargando}
      />}
      style={Styles.StyleFlat}
      data={productos}
      keyExtractor={(item)=> item.id}
      renderItem={renderItem}
      />
)}
    

export default ProductList