import React, { useState } from 'react';
import { View, TextInput, Button, StyleSheet, Text, Alert, Image } from 'react-native';
import ImagePicker from 'react-native-image-picker';

const RegisterScreen = () => {
  const [image, setImage] = useState('');
  const [skills, setSkills] = useState('');
  const [plateNumber, setPlateNumber] = useState('');

  const handleImageUpload = () => {
    const options = {
      title: 'Select Avatar',
      storageOptions: {
        skipBackup: true,
        path: 'images',
      },
    };

    ImagePicker.showImagePicker(options, response => {
      if (response.didCancel) {
        console.log('User cancelled image picker');
      } else if (response.error) {
        console.log('ImagePicker Error: ', response.error);
      } else {
        const source = { uri: response.uri };
        setImage(source);
      }
    });
  };
  const handleRegister = () => {
    if (!image || !skills || !plateNumber) {
      Alert.alert('Please fill in all fields');
      return;
    }
    const formData = new FormData();
    formData.append('image', {
      uri: image.uri,
      name: 'image.jpg',
      type: 'image/jpeg',
    });
    // ENDPOINT MISSING HERE
    fetch(' need to upload a pic yo', {
      method: 'POST',
      body: formData,
      headers: {
        'Content-Type': 'multipart/form-data',
      },
    })
      .then(response => response.json())
      .then(data => {
        console.log('Image uploaded successfully:', data);
      })
      .catch(error => {
        console.error('Error uploading image:', error);
      });
  };

  return (
    <View>
      <View style={styles.uploadContainer}>
        <Button title="Upload Image" onPress={handleImageUpload} />
        {image && <Image source={image} style={styles.image} />}
      </View>
      <TextInput
        style={styles.input}
        placeholder="Skills"
        onChangeText={text => setSkills(text)}
        value={skills}
      />
      <TextInput
        style={styles.input}
        placeholder="Plate Number"
        onChangeText={text => setPlateNumber(text)}
        value={plateNumber}
      />
      <Button title="Register" onPress={handleRegister} />
    </View>
  );
};

const styles = StyleSheet.create({
  uploadContainer: {
    alignItems: 'center',
    marginBottom: 20,
  },
  image: {
    width: 200,
    height: 200,
    marginTop: 10,
  },
  input: {
    width: '100%',
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 20,
    paddingHorizontal: 10,
  },
});

export default RegisterScreen;



















































// import React, { useState } from 'react';
// import { View, TextInput, Button, CheckBox } from 'react-native';

// const RegistrationScreen = () => {
//     const [civilId, setCivilId] = useState('');
//     const [fullName, setFullName] = useState('');
//     const [password, setPassword] = useState('');
//     const [phoneNumber, setPhoneNumber] = useState('');
//     const [termsAccepted, setTermsAccepted] = useState(false);


//     const handleRegister = () => {
//     };

//     return (
//       <View>
//         <TextInput
//           placeholder="Civil ID"
//           value={civilId}
//           onChangeText={setCivilId}
//         />
//         <TextInput
//           placeholder="Full Name"
//           value={fullName}
//           onChangeText={setFullName}

//           />
//       <TextInput
//         placeholder="Password"
//         secureTextEntry
//         value={password}
//         onChangeText={setPassword}
//       />
//       <TextInput
//         placeholder="Phone Number"
//         value={phoneNumber}
//         onChangeText={setPhoneNumber}
//         />
//       <CheckBox
//         value={termsAccepted}
//         onValueChange={setTermsAccepted}
//       />
//       <Button title="Register" onPress={handleRegister} />
//     </View>
//   );
// };
// export default RegistrationScreen;
