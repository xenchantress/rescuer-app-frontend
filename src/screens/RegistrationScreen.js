import React, { useState } from 'react';
import { View, TextInput, Button, CheckBox } from 'react-native';

const RegistrationScreen = () => {
    const [civilId, setCivilId] = useState('');
    const [fullName, setFullName] = useState('');
    const [password, setPassword] = useState('');
    const [phoneNumber, setPhoneNumber] = useState('');
    const [termsAccepted, setTermsAccepted] = useState(false);


    const handleRegister = () => {
    };

    return (
      <View>
        <TextInput
          placeholder="Civil ID"
          value={civilId}
          onChangeText={setCivilId}
        />
        <TextInput
          placeholder="Full Name"
          value={fullName}
          onChangeText={setFullName}

          />
      <TextInput
        placeholder="Password"
        secureTextEntry
        value={password}
        onChangeText={setPassword}
      />
      <TextInput
        placeholder="Phone Number"
        value={phoneNumber}
        onChangeText={setPhoneNumber}
        />
      <CheckBox
        value={termsAccepted}
        onValueChange={setTermsAccepted}
      />
      <Button title="Register" onPress={handleRegister} />
    </View>
  );
};
export default RegistrationScreen;
