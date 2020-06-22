import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View, TextInput, FlatList, Image } from 'react-native';
import { store } from './src/store';
import { Provider, useDispatch } from 'react-redux';
import { List } from './src/components/List';

export default function App() {
  
  return (
    <Provider store={store}>
        <View style={styles.container}>
          <List />
        </View>
    </Provider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
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
    width: 450,
    height: 150,
  },
});