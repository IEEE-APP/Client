import React from 'react';
import { View, Text, TouchableOpacity, Image } from 'react-native';
import { useFonts, Inter_400Regular, Inter_700Bold } from '@expo-google-fonts/inter';
import { ActivityIndicator } from 'react-native';
import { Link } from 'expo-router';
import { Feather } from '@expo/vector-icons';

type MenuItemProps = {
  icon: keyof typeof Feather.glyphMap;
  label: string;
  href: string;
};

const MenuItem: React.FC<MenuItemProps> = ({ icon, label, href }) => (
  <Link href={href as string} asChild>
    <TouchableOpacity 
      style={{
        backgroundColor: 'white',
        padding: 16,
        borderRadius: 8,
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        width: '48%',
        aspectRatio: 1,
        marginBottom: 16,
      }}
    >
      <Feather name={icon} size={24} color="black" style={{ marginBottom: 8 }} />
      <Text style={{ fontFamily: 'Inter_700Bold', fontSize: 12, textAlign: 'center' }}>
        {label}
      </Text>
    </TouchableOpacity>
  </Link>
);

export default function HomeScreen() {
  const [fontsLoaded] = useFonts({
    Inter_400Regular,
    Inter_700Bold,
  });

  if (!fontsLoaded) {
    return <ActivityIndicator size="large" color="#fff" />;
  }

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

    </View>
  );
}