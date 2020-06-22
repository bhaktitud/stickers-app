import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import {StyleSheet, TextInput, FlatList, Image } from 'react-native';
import { fetchDataList } from '../store/actions';

export const List = () => {

    const [ term, setTerm ] = useState('random')
    const dispatch = useDispatch()
    const gifs = useSelector(state => state.list)
  
    useEffect(() => {
        dispatch(fetchDataList(term))
    }, [])
  
    const onChangeText = (text) => {
        setTerm(text)
        dispatch(fetchDataList(term))
    }
  
    return (
        <>
            <TextInput 
                placeholder='Find Stickers'
                onChangeText={(text) => onChangeText(text)}
                style={styles.textInput}
            />
            <FlatList
            data={gifs}
            renderItem={({item}) => (
                <Image
                    resizeMode='stretch'
                    style={styles.image}
                    source={{uri: item.images.original.url}}
                />
            )}
            numColumns={3}
            />
        </>
    )
}


const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: 'rgba(250, 102, 200, 0.4)',
      alignItems: 'center',
      justifyContent: 'center',
    },
    textInput: {
      width: '100%',
      height: 50,
      marginTop: 24,
      alignItems: "center",
      textAlign: "center"
    },  
    image: {
      width: 125,
      height: 100,
    },
  });