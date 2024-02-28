import React, { useState } from 'react';
import { View, TextInput, Button, StyleSheet, TouchableOpacity, Text } from 'react-native';
import RegisterScreen from '../screens/RegistrationScreen';

const LoginScreen = () => {
  const [cid, setCID] = useState('');
  const [password, setPassword] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [fullName, setFullName] = useState('');
  const [userType, setUserType] = useState(null);

  const handleLogin = () => {
    console.log('CID:', cid);
    console.log('Password:', password);
    console.log('Phone Number:', phoneNumber);
    console.log('Full Name:', fullName);

    if (userType === 'Helper') {
      console.log('Redirect to Helper Registration');
    } else if (userType === 'User') {
      console.log('Redirect to User Dashboard');
    } else {
      console.log('Please select a user type');
    }
  };

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        placeholder="CID"
        onChangeText={text => setCID(text)}
        value={cid}
      />
      <TextInput
        style={styles.input}
        placeholder="Password"
        onChangeText={text => setPassword(text)}
        value={password}
        secureTextEntry={true}
      />
      <TextInput
        style={styles.input}
        placeholder="Phone Number"
        onChangeText={text => setPhoneNumber(text)}
        value={phoneNumber}
        keyboardType="phone-pad"
      />
      <TextInput
        style={styles.input}
        placeholder="Full Name"
        onChangeText={text => setFullName(text)}
        value={fullName}
      />
      <Button title="Login" onPress={handleLogin} />
      <View style={styles.buttonContainer}>
        <TouchableOpacity
          style={styles.userTypeButton}
          onPress={() => setUserType('Helper')}
        >
          <Text style={styles.buttonText}>Helper</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.userTypeButton}
          onPress={() => setUserType('User')}
        >
          <Text style={styles.buttonText}>User</Text>
        </TouchableOpacity>
      </View>
      {userType === 'Helper' && <RegisterScreen />}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  input: {
    width: '100%',
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 20,
    paddingHorizontal: 10,
  },
  buttonContainer: {
    flexDirection: 'row',
    marginTop: 20,
  },
  userTypeButton: {
    flex: 1,
    backgroundColor: 'blue',
    justifyContent: 'center',
    alignItems: 'center',
    height: 40,
    marginHorizontal: 5,
  },
  buttonText: {
    color: 'white',
  },
});

export default LoginScreen;














// import React, { useState } from 'react';
// import { View, TextInput, Button, Alert } from 'react-native';

// const LoginScreen = () => {
//     const [phoneNumber, setPhoneNumber] = useState('');
//     const [password, setPassword] = useState('');

//     const handleLogin = async () => {
//         try {
//             const response = await fetch('', {
//                 method: 'POST',
//                 headers: {
//                   'Content-Type': 'application/json',
//                 },
//                 body: JSON.stringify({
//                   phoneNumber,
//                   password,
//                 }),
//               });
//               if (!response.ok) {
//                 const errorData = await response.json();
//                  throw new Error(errorData.message || 'Login failed');
//               }
//             } catch (error) {
//                 console.error('Login error:', error.message);
//                 Alert.alert('Login Failed', 'Incorrect phone number or password');
//             }
//     };

//     return (
//       <View>
//         <TextInput
//           placeholder="Phone Number"
//           value={phoneNumber}
//           onChangeText={setPhoneNumber}
//         />
//         <TextInput
//           placeholder="Password"
//           secureTextEntry
//           value={password}
//           onChangeText={setPassword}
//         />
//          <Button title="Login" onPress={handleLogin} />
//     </View>
//   );
// };

// export default LoginScreen;