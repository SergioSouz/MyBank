import {
   Text,
   View,
   TouchableOpacity
} from 'react-native';

import { Input } from '../../components/Input';
import { ButtonSingIn } from '../../components/ButtonSingIn';


import { styles } from './styles';

export function SingIn() {
   return (
      <View style={styles.container}>
         <Text style={styles.title}>My Bank</Text>
         <View style={styles.content}>
            <Input placeholder='Usuario' />
            <Input placeholder='Senha' />

            <TouchableOpacity>
               <Text style={styles.reset}>Esqueci minha senha</Text>
            </TouchableOpacity>

            <TouchableOpacity>
               <Text style={styles.reset}>Registra-se</Text>
            </TouchableOpacity>

            <ButtonSingIn />

         </View>
      </View>


   );
}