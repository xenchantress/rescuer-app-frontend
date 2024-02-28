//import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import React from 'react';
import RegistrationScreen from './src/api/screens/RegistrationScreen';
import LoginScreen from './src/api/screens/LoginScreen';

const App = () => {
  return (
    <View>
      <Text></Text>
<RegistrationScreen />
<LoginScreen />
    </View>
     );
    };
    
    export default App;
// export default function App() {
//   return (
//     <View style={styles.container}>
//       <Text>Open up App.js to start working on your app!</Text>
//       <StatusBar style="auto" />
//     </View>
//   );
  
// }

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
