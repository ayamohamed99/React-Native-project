import React from 'react';
import {View, Text, FlatList, Dimensions ,ActivityIndicator } from 'react-native';
import FoodItem from './../FoodItem'
import styles from './styles';
import foods from './foods';
import Header from './../Header';



 const FoodsList  = ()  => 
{


     return (
    <View style={styles.container}>
      <Header />
      <FlatList
      
        data={foods}
        renderItem={({item}) => <FoodItem food={item} />}
        showsVerticalScrollIndicator={false}
        snapToAlignment={'start'}
        decelerationRate={'fast'}
        snapToInterval={Dimensions.get('window').height}
        keyExtractor={(item, index) => index.toString()}
      />
    </View>
  );
};

export default FoodsList