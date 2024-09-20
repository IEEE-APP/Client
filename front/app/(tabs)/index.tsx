import React from 'react';
import { View, Text, TextInput, TouchableOpacity, ActivityIndicator, Image, Alert } from 'react-native';
import { useForm, Controller } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { useFonts, Tomorrow_400Regular, Tomorrow_700Bold } from '@expo-google-fonts/tomorrow';
import tailwind from '../../hooks/useTailwind';
import Entypo from "@expo/vector-icons/Entypo";
import Ionicons from "@expo/vector-icons/Ionicons";
import { loginUser } from '@/services/auth.services';
import { loginSchema } from '@/schema/user.schema';


export default function LoginScreen({ navigation }: any) {
  const { control, handleSubmit, formState: { errors } } = useForm({
   resolver: zodResolver(loginSchema), 
    defaultValues: {
      email: '',
      password: '',
    },
  });

  const [fontsLoaded] = useFonts({
    Tomorrow_400Regular,
    Tomorrow_700Bold,
  });

  if (!fontsLoaded) {
    return <ActivityIndicator size="large" color="#fff" />;
  }

  const onSubmit = async (data: any) => {
    try {
      const response = await loginUser({
        email: data.email,
        password: data.password,
      });
      if (response) {
        console.log('login ', response);
        // Navegar a la siguiente pantalla
      }
    } catch (error) {
      console.error('Error en el login:', error);
      Alert.alert('Error', 'No se pudo completar el login.');
    }
  };

  return (
    <View style={tailwind`flex-1 items-center bg-[#2C36FF] px-10`}>
      <Image
        source={require('../../assets/images/logo1.png')}
        style={tailwind`w-28 mt-12 mb-16`}
        resizeMode="contain"
      />
      <Text style={[tailwind`text-white text-4xl mb-10`, { fontFamily: 'Tomorrow_700Bold' }]}>
        Iniciar Sesión
      </Text>

      {/* Input del Email */}
      <View style={tailwind`w-full mb-6`}>
        <View style={[
          tailwind`flex-row items-center bg-white w-full p-3 rounded-xl shadow-lg`,
          errors.email ? tailwind`border border-red-500` : tailwind`border-0`
        ]}>
          <Entypo name="mail" size={24} color="black" style={tailwind`mr-3 opacity-80`} />
          <Controller
            control={control}
            render={({ field: { onChange, onBlur, value } }) => (
              <TextInput
                style={[
                  tailwind`flex-1 opacity-60 text-base`,
                  { fontFamily: 'Tomorrow_400Regular'} // Ajuste de altura fija y padding
                ]}
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
        <View style={tailwind`h-5`}>
          {errors.email && <Text style={tailwind`text-red-500 text-sm`}>{errors.email.message}</Text>}
        </View>
      </View>

      {/* Input de la Contraseña */}
      <View style={tailwind`w-full mb-6`}>
        <View style={[
          tailwind`flex-row items-center bg-white w-full p-3 rounded-xl shadow-lg`,
          errors.password ? tailwind`border border-red-500` : tailwind`border-0`
        ]}>
          <Ionicons name="key" size={24} color="black" style={tailwind`mr-3 opacity-80`} />
          <Controller
            control={control}
            render={({ field: { onChange, onBlur, value } }) => (
              <TextInput
                style={[
                  tailwind`flex-1 opacity-60 text-base`,
                  { fontFamily: 'Tomorrow_400Regular'} // Ajuste de altura fija y padding
                ]}
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
        <View style={tailwind`h-5`}>
          {errors.password && <Text style={tailwind`text-red-500 text-sm`}>{errors.password.message}</Text>}
        </View>
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
