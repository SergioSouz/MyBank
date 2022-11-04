import React from 'react';
import { TextInput, View } from 'react-native';

import { styles } from './styles';

interface Props {
   placeholder: string
}

export function Input({ placeholder }: Props) {
   return (
      <TextInput
         style={styles.container}
         placeholder={placeholder}
         placeholderTextColor={'#ffffff'}
      >
      </TextInput>
   );
}