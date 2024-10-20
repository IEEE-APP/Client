import React from 'react';
import { View, Text, TouchableOpacity, Image, ScrollView } from 'react-native';
import { useFonts, Inter_400Regular, Inter_700Bold } from '@expo-google-fonts/inter';
import { ActivityIndicator } from 'react-native';
import { Feather } from '@expo/vector-icons';
import MaterialCommunityIcons from '@expo/vector-icons/MaterialCommunityIcons';

export default function HomeScreen() {
  const [fontsLoaded] = useFonts({
    Inter_400Regular,
    Inter_700Bold,
  });

  if (!fontsLoaded) {
    return <ActivityIndicator size="large" color="#fff" />;
  }

  const subjects = [
    { name: 'GEOMETRIA', color: '#FF0000' },
    { name: 'ARITMETICA', color: '#FFFF00' },
    { name: 'ALGEBRA', color: '#0000FF' },
  ];

  return (
    <View style={{ flex: 1, backgroundColor: '#2C36FF', padding: 16 }}>
      {/* Header */}
      <View style={{ backgroundColor: 'white', borderRadius: 16, padding: 16, flexDirection: 'row', alignItems: 'center', marginBottom: 24 }}>
        <View style={{ width: 48, height: 48, borderRadius: 24, backgroundColor: '#E0E0E0', marginRight: 16 }} />
        <View style={{ flex: 1 }}>
          <Text style={{ fontFamily: 'Inter_700Bold', fontSize: 16 }}>
            Daniel David Lorenzo Ramos
          </Text>
          <Text style={{ fontFamily: 'Inter_400Regular', fontSize: 14, color: '#2C36FF' }}>PROFESOR</Text>
        </View>
        <Image
          source={require('@/assets/images/logo1.png')}
          style={{ width: 42, height: 42 }}
        />
      </View>

      {/* Subjects */}
      <View style={{ backgroundColor: 'white', borderRadius: 16, padding: 18, flex: 1 }}>
        {/* Title with Icon */}
        <View style={{ flexDirection: 'row', justifyContent: 'center', alignItems: 'center', marginBottom: 36 }}>
          <Text style={{ fontFamily: 'Inter_700Bold', fontSize: 24 }}>MATERIAS</Text>
        </View>

        {/* ScrollView for subjects */}
        <ScrollView style={{ flexGrow: 1 }}>
          {subjects.map((subject, index) => (
            <View key={index}>
              <TouchableOpacity 
                style={{ 
                  flexDirection: 'row', 
                  alignItems: 'center', 
                  justifyContent: 'space-between',
                  backgroundColor: '#F0F0F0', 
                  borderRadius: 8, 
                  padding: 12, 
                  marginBottom: 8,
                  borderWidth: 1,   
                  borderColor: '#000000',
                }}
              >
                <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                  <Feather size={24} name='book' color="#000000" style={{ marginRight: 12 }} />
                  <Text style={{ fontFamily: 'Inter_400Regular', fontSize: 16 }}>{subject.name}</Text>
                </View>
                <View style={{ 
                  width: 14, 
                  height: 14, 
                  borderRadius: 10, 
                  backgroundColor: subject.color,
                  borderWidth: 1,
                  borderColor: '#000000'  // Borde para los círculos de colores
                }} />
              </TouchableOpacity>
              
              {/* Line separator */}
              <View style={{ height: 1, backgroundColor: '#000000', marginBottom: 8 }} />
            </View>
          ))}
        </ScrollView>

        {/* Add Button */}
        <View style={{ flexDirection: 'row', justifyContent: 'flex-end', alignItems: 'flex-end' }}>
          <TouchableOpacity 
            style={{ 
              backgroundColor: '#6E6EFF', 
              borderRadius: 200,  
              width: 60,
              height: 60,
              justifyContent: 'center', 
              alignItems: 'center',
              marginTop: 16,
              borderWidth: 1,     // Borde para el botón de agregar
              borderColor: '#000000',
            }}
          >
            <Text style={{ color: 'white', fontFamily: 'Inter_700Bold', fontSize: 36 }}>+</Text>
          </TouchableOpacity>
        </View>

      </View>
    </View>
  );
}
