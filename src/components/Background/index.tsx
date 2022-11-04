import React, { ReactNode } from "react";
import { LinearGradient } from 'expo-linear-gradient';
import { styles } from './styles';


interface Props {
   children: ReactNode;
}

export function Background({ children }: Props) {
   return (
      <LinearGradient
         style={styles.container}
         colors={['#7BDA6B', '#0F5B2D', '#202823']}
      >
         {children}
      </LinearGradient>
   );
}