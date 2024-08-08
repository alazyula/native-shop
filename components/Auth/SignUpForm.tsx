// SignUpForm.js
import React, { useState } from 'react';
import {Text, View, StyleSheet, TextInput, Button, Alert, Pressable } from 'react-native';


const SignUpForm = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSignUp = () => {
    if (!email || !password) {
      Alert.alert('Hata', 'Lütfen gerekli tüm bölgeleri doldurunuz.');
      return;
    }

    
    Alert.alert('Success', `Email: ${email}, Password: ${password}`);
  };

  return (
    <View style={styles.container}>
      <TextInput
        placeholder="Eposta"
        value={email}
        onChangeText={setEmail}
        keyboardType="email-address"
        autoCapitalize="none"
        style={styles.input}
      />
      <TextInput
        placeholder="Şifre"
        value={password}
        onChangeText={setPassword}
        secureTextEntry
        style={styles.input}
      />
      <Pressable style={styles.button} onPress={handleSignUp} >
        <Text style={styles.buttontext}> Giriş Yap</Text>
        </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column",
    justifyContent: 'center',
    padding: 16,
  },
  input: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 16,
    paddingHorizontal: 8,
    borderRadius: 4,
  },
  button: {
    backgroundColor: '#0a7ea4',
    color: 'white',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 16,
    borderRadius: 4,
  },
  buttontext: {
    color: 'white',
  },
});

export default SignUpForm;
