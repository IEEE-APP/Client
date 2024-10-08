import React from 'react';
import { View, Text, TextInput, TouchableOpacity, ActivityIndicator, Image } from 'react-native';
import { useForm, Controller } from 'react-hook-form';
import { useFonts, Tomorrow_400Regular, Tomorrow_700Bold } from '@expo-google-fonts/tomorrow';
import tailwind from '../../hooks/useTailwind';
// Icons
import Entypo from "@expo/vector-icons/Entypo";
import Ionicons from "@expo/vector-icons/Ionicons";

export default function LoginScreen({ navigation }: any) {
  const { control, handleSubmit } = useForm({
    defaultValues: {
      email: '', // Valores iniciales como cadenas vacías
      password: '', 
    }
  });

  // Cargar las fuentes Tomorrow
  const [fontsLoaded] = useFonts({
    Tomorrow_400Regular,
    Tomorrow_700Bold,
  });

  // Mostrar un indicador de carga mientras las fuentes no estén disponibles
  if (!fontsLoaded) {
    return <ActivityIndicator size="large" color="#fff" />;
  }

  const onSubmit = (data: any) => {
    console.log(data);
    navigation.navigate('Welcome');
  };

  return (
    <View style={tailwind`flex-1 items-center bg-[#2C36FF] px-10`}>
      <Image
        source={require('../../assets/images/logo1.png')} // Ruta de la imagen
        style={tailwind`w-28 mt-12 mb-16`} // Ajusta el tamaño de la imagen usando Tailwind
        resizeMode="contain" // Ajusta el modo de redimensionamiento
      />
      <Text style={[tailwind`text-white text-4xl mb-10`, { fontFamily: 'Tomorrow_700Bold' }]}>
        Iniciar Sesión
      </Text>
      
      {/* Input del Email */}
      <View style={tailwind`flex-row items-center bg-white w-full p-3 rounded-xl mb-6 shadow-lg`}>
        <Entypo name="mail" size={24} color="black" style={tailwind`mr-3 opacity-80`} />
        <Controller
          control={control}
          render={({ field: { onChange, onBlur, value } }) => (
            <TextInput
              style={[tailwind`flex-1 opacity-60`, { fontFamily: 'Tomorrow_400Regular' }]}
              onBlur={onBlur}
              onChangeText={onChange}
              value={value}
              placeholder="Email"
              keyboardType="email-address"
            />
          )}
          name="email"
          rules={{ required: true }}
        />
      </View>
      
      {/* Input de la Contraseña */}
      <View style={tailwind`flex-row items-center bg-white w-full p-3 rounded-xl mb-6 shadow-lg`}>
        <Ionicons name="key" size={24} color="black" style={tailwind`mr-3 opacity-80`} />
        <Controller
          control={control}
          render={({ field: { onChange, onBlur, value } }) => (
            <TextInput
              style={[tailwind`flex-1 opacity-60`, { fontFamily: 'Tomorrow_400Regular' }]}
              onBlur={onBlur}
              onChangeText={onChange}
              value={value}
              placeholder="Contraseña"
              secureTextEntry
            />
          )}
          name="password"
          rules={{ required: true }}
        />
      </View>
      
      {/* Botón de Ingresar */}
      <TouchableOpacity
        onPress={handleSubmit(onSubmit)}
        style={tailwind`bg-blue-700 p-4 rounded w-full items-center mb-3 mt-12 rounded-xl shadow-xl`}
      >
        <Text style={[tailwind`text-white font-bold`, { fontFamily: 'Tomorrow_700Bold' }]}>
          Ingresar
        </Text>
      </TouchableOpacity>
    </View>
  );
}
