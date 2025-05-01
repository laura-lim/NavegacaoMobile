import React from "react";
import {View, Text, Button, StyleSheet, Dimensions, TextInput, useState } from 'react-native';

const windowWidht = Dimensions.get('window').width;

export default function LoginScreen ({navigation}) {

    const [login, setLogin] = useState('');
    const [senha, setSenha] = useState('');
    const msg = "Bem vindo" + {login};

return (
   <View style={styles.container}>
   <Text style={styles.container}>Login</Text>
   <TextInput 
   style={styles.container2}>
   placeholder = "Email: ",
   value = {login};
   onPress= {setLogin};
   </TextInput>
   <TextInput 
   style={styles.container2}>
   placeholder = "Senha: ",
   value = {senha};
   onPress= {setSenha};
   </TextInput>
   <Button 
       title="Logar"       
       onPress={() => msg}/>

   <View style={styles.buttonContainer}>
       <Button 
       title="Go to Home"
       onPress={()=>  navigation.navigate('Home')}
       />
   </View>

   <View style={styles.buttonContainer}>
       <Button 
       title="Go to Profile"
       onPress={()=>  navigation.navigate('Profile')}
       />
   </View>
   
       <View style={styles.buttonContainer}>
           <Button
           title="Go to Details"
           onPress={() => navigation.navigate('Details')}
           />
   </View>
   </View>
    );
   }

   const styles = StyleSheet.create({
       container: {
           flex: 1,
           justifyContent: 'center',
           alignItems: 'center',
           backgroundColor: '##a52a2a',
       },
       container2: {
        fontSize: 12,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '##a52a2a',
    },
       title: {
           fontSize: 24,
           marginBottom: 20,
       },
       buttonContainer: {
           backgroundColor: '##a52a2a',
           margin: 10,
           width: windowWidht * 0.5,
           borderRadius: 5,
       }
   });