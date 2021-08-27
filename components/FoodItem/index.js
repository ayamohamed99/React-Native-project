import React, {Component} from 'react';
import {View, Text, ImageBackground} from 'react-native';
import StyledButton from "./../StyledButton";
import styles from './styles';
import { useNavigation } from '@react-navigation/native';

const FoodItem = (props) => {

  const { name, tagline, taglineCTA, image } = props.food;
  const navigation = useNavigation();
  return (
    <View style={styles.foodContainer}>
      <ImageBackground
        source={image}
        style={styles.image}
      />

      <View style={styles.titles}>
        <Text style={styles.title}>{name}</Text>
        <Text style={styles.subtitle}>
          {tagline}
          {' '}
          <Text style={styles.subtitleCTA}>
            {taglineCTA}
          </Text>
        </Text>
      </View>

      <View style={styles.buttonsContainer}>
        <StyledButton
          type="primary"
          content={"Custom Order"}
          onPress={() => {
            console.warn("Custom Order was pressed");
          }}
        />

        <StyledButton
          type="secondary"
          content={"Logout"}
          onPress={() => {
            // console.warn("Add Food type was pressed");
            navigation.navigate("LoginUiComponent");
          }}
        />
      </View>

    </View>
  );
};

export default FoodItem;
