import React from 'react';
import { DrawerContentScrollView, DrawerItem } from '@react-navigation/drawer';
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from 'react-native-screens/lib/typescript/native-stack/types';
import { useGlobalContext } from '@/context/GlovalProvider';

export type DrawerParamList = {

  index: undefined;


};

export default function CustomDrawerContent(props: any) {
  const { credentials } = useGlobalContext();
  const navigation = useNavigation<NativeStackNavigationProp<DrawerParamList>>();
  const fullName = `${credentials?.first_name || 'Usuario'} ${credentials?.last_name || ''}`.trim();
  return (
    <DrawerContentScrollView {...props}>
      <DrawerItem
        label={fullName}// Proporcionar un valor predeterminado si first_name es undefined
        onPress={() => {}}  // Empujar una nueva pantalla en la pila de navegación
      />
      <DrawerItem
        label="Salir"
       
        onPress={() => navigation.push('index')} // Volver a la pantalla anterior
      />
    </DrawerContentScrollView>
  );
}