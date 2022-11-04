import React, { ReactNode } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';


import { styles } from './styles';



export function ButtonSingIn() {
   return (
      <TouchableOpacity style={styles.container}>
         <LinearGradient
            style={styles.linear}
            colors={['rgba(88, 214, 141, 1)', 'rgba(10, 236, 106, 0)']}
         >
            <Text style={styles.title}>Entrar</Text>
         </LinearGradient >
      </TouchableOpacity>
   );
}