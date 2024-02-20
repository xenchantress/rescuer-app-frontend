import React, { useState } from 'react';
import { View, TextInput, Button, Alert } from 'react-native';

const LoginScreen = () => {
    const [phoneNumber, setPhoneNumber] = useState('');
    const [password, setPassword] = useState('');

    const handleLogin = async () => {
        try {
            const response = await fetch('', {
                method: 'POST',
                headers: {
                  'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                  phoneNumber,
                  password,
                }),
              });
              if (!response.ok) {
                const errorData = await response.json();
                 throw new Error(errorData.message || 'Login failed');
              }
            } catch (error) {
                console.error('Login error:', error.message);
                Alert.alert('Login Failed', 'Incorrect phone number or password');
            }
    };

    return (
      <View>
        <TextInput
          placeholder="Phone Number"
          value={phoneNumber}
          onChangeText={setPhoneNumber}
        />
        <TextInput
          placeholder="Password"
          secureTextEntry
          value={password}
          onChangeText={setPassword}
        />
         <Button title="Login" onPress={handleLogin} />
    </View>
  );
};

export default LoginScreen;