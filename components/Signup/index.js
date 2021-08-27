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

import React from "react";
import { View, Text, TextInput, TouchableOpacity, ImageBackground, } from "react-native";
import styles from './styles';
import Header from "../Header";
const Signup = ({ navigation }) => {
  return (
    <View style={styles.container}>
      {/* <Header /> */}
      <ImageBackground
        source={require('../../assets/images/signup.jpeg')}
        style={styles.image}
      />
      <View style={styles.containerall}>
        <Text style={styles.title}>
          Order FOOD
        </Text>
        <View style={styles.Boxsuptitle}>
          <Text style={styles.suptitle}>
            SignUP
          </Text>
        </View>
        

        <View style={styles.test}>
         
          <TextInput style={styles.input}
            underlineColorAndroid="transparent"
            placeholderTextColor='black'
            placeholder="FirstName"
            textContentType="username"
          // secureTextEntry={true}
          
          />
           <TextInput style={styles.input}
            underlineColorAndroid="transparent"
            placeholderTextColor='black'
            placeholder="LastName"
            textContentType="username"
          // secureTextEntry={true}

          />
         </View>
         <TextInput style={styles.input}
            underlineColorAndroid="transparent"
            placeholder="Email"
            placeholderTextColor='black'
            keyboardType="email-address"
          />
          <TextInput style={styles.input}
            underlineColorAndroid="transparent"
            placeholder="Password"
            placeholderTextColor='black'
            keyboardType="visible-password"
            secureTextEntry={true}
          />

       
        <TouchableOpacity style={styles.buttonlogin}
         onPress={() => {
          navigation.navigate("FoodsList")
        }}>
          <Text style={styles.button}>
            CONTINUE
          </Text>
        </TouchableOpacity>
        <View style={styles.containerB}>
          <Text style={styles.singup}>
            Already have an account?
          </Text>

          <TouchableOpacity style={styles.buttonlogin}
           onPress={() => {
            navigation.navigate("LoginUiComponent")
          }}>
            <Text style={styles.sigupButton}>
              LOGIN
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export default Signup;