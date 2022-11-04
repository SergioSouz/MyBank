import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';


import { Background } from './src/components/Background';
import { SingIn } from './src/screen/SingIn';


export default function App() {
  return (
    <Background >
      <StatusBar style="auto" />
      <SingIn />
    </Background>
  );
}


