// /**
//  *
//  * This file was generated with Adobe XD React Exporter
//  * Exporter for Adobe XD is written by: Johannes Pichler <j.pichler@webpixels.at>
//  *
//  **/
/**
 *
 * This file was generated with Adobe XD React Exporter
 * Exporter for Adobe XD is written by: Johannes Pichler <j.pichler@webpixels.at>
 *
 **/

import React  from "react";
import { View, Text, TextInput, TouchableOpacity, ImageBackground } from "react-native";
import styles from './styles';

const LoginUiComponent = ( {navigation} ) => {

  return (
    <View style={styles.container}>
      <ImageBackground
        source={require('../../assets/images/Home.jpeg')}
        style={styles.image}
      />
      <View style={styles.containerall}>
        <Text style={styles.title}>
          Order FOOD
        </Text>
        <View style={styles.Boxsuptitle}>
          <Text style={styles.suptitle}>
            LOG IN
          </Text>
        </View>
        <View style={styles.inputBox}>
          <TextInput style={styles.input}
            underlineColorAndroid="transparent"
            placeholder="Email"
            placeholderTextColor='black'
            keyboardType="email-address"
                      />

          <TextInput style={styles.input}
            underlineColorAndroid="transparent"
            placeholderTextColor='black'
            placeholder="Password"
            secureTextEntry={true}

          />
        </View>
        <TouchableOpacity style={styles.buttonlogin}
          onPress={() => {
            navigation.navigate("FoodsList")
          }}
        >
          <Text style={styles.button}>
            CONTINUE
          </Text>
        </TouchableOpacity>
        <View style={styles.containerB}>
          <Text style={styles.singup}>
            Don't have an account , create new one
          </Text>

          <TouchableOpacity style={styles.buttonlogin}
           onPress={() => {
            navigation.navigate("Signup")
          }}>
            <Text style={styles.sigupButton}>
              SIGNUP
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};


export default LoginUiComponent;