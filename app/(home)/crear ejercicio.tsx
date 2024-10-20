import React from 'react';
import { View, Text, TextInput, TouchableOpacity, Image, ScrollView } from 'react-native';
import { useFonts, Inter_400Regular, Inter_700Bold } from '@expo-google-fonts/inter';
import { ActivityIndicator } from 'react-native';
import { Link } from 'expo-router';
import { Ionicons, MaterialIcons } from '@expo/vector-icons';

export default function ExerciseCreator() {
  const [fontsLoaded] = useFonts({
    Inter_400Regular,
    Inter_700Bold,
  });

  if (!fontsLoaded) {
    return <ActivityIndicator size="large" color="#fff" />;
  }

  return (
    <ScrollView style={{ flex: 1, backgroundColor: '#2C36FF', padding: 16 }}>
      {/* Header */}
      <View style={{ backgroundColor: 'white', borderRadius: 16, padding: 16, flexDirection: 'row', alignItems: 'center', marginBottom: 24 }}>
        <View style={{ width: 48, height: 48, borderRadius: 24, backgroundColor: '#E0E0E0', marginRight: 16, overflow: 'hidden', justifyContent: 'center', alignItems: 'center' }}>
          <Ionicons name="person" size={32} color="#999" />
        </View>
        <View style={{ flex: 1 }}>
          <Text style={{ fontFamily: 'Inter_700Bold', fontSize: 16, color: '#000' }}>
            Daniel David Lorenzo Ramos
          </Text>
          <View style={{ flexDirection: 'row', alignItems: 'center' }}>
            <View style={{ width: 8, height: 8, borderRadius: 4, backgroundColor: '#2C36FF', marginRight: 4 }} />
            <Text style={{ fontFamily: 'Inter_400Regular', fontSize: 14, color: '#2C36FF' }}>PROFESOR</Text>
          </View>
        </View>
        <Image
          source={require('@/assets/images/logo1.png')}
          style={{ width: 42, height: 42 }}
        />
      </View>

      {/* Exercise Creation Form */}
      <View style={{ backgroundColor: 'white', borderRadius: 16, padding: 16 }}>
        <Text style={{ fontFamily: 'Inter_700Bold', fontSize: 18, color: '#000', marginBottom: 16 }}>CREAR EJERCICIO</Text>
        
        <Text style={{ fontFamily: 'Inter_400Regular', fontSize: 14, color: '#666', marginBottom: 4 }}>Materia</Text>
        <TextInput
          style={{
            borderWidth: 1,
            borderColor: '#E0E0E0',
            borderRadius: 8,
            padding: 8,
            marginBottom: 16,
            fontFamily: 'Inter_400Regular',
          }}
          placeholder="Ingrese la materia"
        />

        <Text style={{ fontFamily: 'Inter_400Regular', fontSize: 14, color: '#666', marginBottom: 4 }}>Tema</Text>
        <TextInput
          style={{
            borderWidth: 1,
            borderColor: '#E0E0E0',
            borderRadius: 8,
            padding: 8,
            marginBottom: 16,
            fontFamily: 'Inter_400Regular',
          }}
          placeholder="Ingrese el tema"
        />

        <Text style={{ fontFamily: 'Inter_400Regular', fontSize: 14, color: '#666', marginBottom: 4 }}>Pregunta</Text>
        <View style={{ borderWidth: 1, borderColor: '#E0E0E0', borderRadius: 8, padding: 8, marginBottom: 16 }}>
          <TextInput
            style={{
              height: 100,
              textAlignVertical: 'top',
              fontFamily: 'Inter_400Regular',
            }}
            multiline
            placeholder="Ingrese la pregunta"
          />
          <View style={{ flexDirection: 'row', justifyContent: 'flex-end' }}>
            <TouchableOpacity style={{ padding: 4 }}>
              <Ionicons name="image" size={24} color="#666" />
            </TouchableOpacity>
            <TouchableOpacity style={{ padding: 4 }}>
              <Ionicons name="checkmark" size={24} color="#666" />
            </TouchableOpacity>
            <TouchableOpacity style={{ padding: 4 }}>
              <Ionicons name="save" size={24} color="#666" />
            </TouchableOpacity>
          </View>
        </View>

        <Text style={{ fontFamily: 'Inter_400Regular', fontSize: 14, color: '#666', marginBottom: 4 }}>Respuesta</Text>
        {['A', 'B', 'C', 'D', 'E'].map((option) => (
          <View key={option} style={{ flexDirection: 'row', alignItems: 'center', marginBottom: 8 }}>
            <Text style={{ fontFamily: 'Inter_700Bold', fontSize: 16, marginRight: 8 }}>{option}</Text>
            <View style={{ flex: 1, borderWidth: 1, borderColor: '#E0E0E0', borderRadius: 8, flexDirection: 'row', alignItems: 'center' }}>
              <TextInput
                style={{
                  flex: 1,
                  padding: 8,
                  fontFamily: 'Inter_400Regular',
                }}
                placeholder={`Opción ${option}`}
              />
              <TouchableOpacity style={{ padding: 8 }}>
                <MaterialIcons name="check-circle-outline" size={24} color="#666" />
              </TouchableOpacity>
              <TouchableOpacity style={{ padding: 8 }}>
                <MaterialIcons name="highlight-off" size={24} color="#666" />
              </TouchableOpacity>
            </View>
          </View>
        ))}

        <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginTop: 16 }}>
          <TouchableOpacity
            style={{
              backgroundColor: '#FF4B4B',
              borderRadius: 8,
              paddingVertical: 12,
              paddingHorizontal: 24,
            }}
          >
            <Text style={{ color: 'white', fontFamily: 'Inter_700Bold', fontSize: 16 }}>VOLVER</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={{
              backgroundColor: '#7C4DFF',
              borderRadius: 8,
              paddingVertical: 12,
              paddingHorizontal: 24,
            }}
          >
            <Text style={{ color: 'white', fontFamily: 'Inter_700Bold', fontSize: 16 }}>PUBLICAR</Text>
          </TouchableOpacity>
        </View>
      </View>
    </ScrollView>
  );
}