import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, ActivityIndicator, Image, Alert } from 'react-native';
import { useForm, Controller } from 'react-hook-form';
import { useFonts, Tomorrow_400Regular, Tomorrow_700Bold } from '@expo-google-fonts/tomorrow';
import tailwind from '@/hooks/useTailwind';
// Icons
import FontAwesome from "@expo/vector-icons/FontAwesome";
import Entypo from "@expo/vector-icons/Entypo";
import Ionicons from "@expo/vector-icons/Ionicons";
import FontAwesome6 from "@expo/vector-icons/FontAwesome6";
import { registerUser } from '../../services/auth.services';
import { zodResolver } from '@hookform/resolvers/zod';
import { registerSchema } from '@/schema/user.schema';

export default function RegisterScreen({ navigation }: any) {
   const [visible, setVisible] = useState(false); 
   const ChangingVisible = () => {
      setVisible(!visible);
   }
   const { control, handleSubmit, formState: { errors } } = useForm({
     resolver: zodResolver(registerSchema),
     defaultValues: {
       name: '',
       age: 0,
       email: '',
       password: '',
       confirmPassword: '',
     },
   });

  const [loading, setLoading] = useState(false);

  const [fontsLoaded] = useFonts({
    Tomorrow_400Regular,
    Tomorrow_700Bold,
  });

  if (!fontsLoaded) {
    return <ActivityIndicator size="large" color="#fff" />;
  }

  const onSubmit = async (data: any) => {
   setLoading(true);
   try {
     data.age = Number(data.age);  // Convertir la edad a número si aún es string
     const response = await registerUser({
       nombre: data.name,
       edad: data.age,
       email: data.email,
       password: data.password,
     });
     
     if (response) {
       console.log('Registro ', response);
       //navigation.navigate('Login');
     }
   } catch (error) {
     console.error('Error en el registro:', error);
     Alert.alert('Error', 'No se pudo completar el registro.');
   } finally {
     setLoading(false);
   }
 };

  return (
    <View style={tailwind`flex-1 items-center bg-[#2C36FF] px-10`}>
      <Image
        source={require('../../assets/images/logo1.png')}
        style={tailwind`w-28 h-28 mt-12 mb-4`}
        resizeMode="contain"
      />
      <Text style={[tailwind`text-white text-4xl mb-4 `, { fontFamily: 'Tomorrow_700Bold' }]}>
        Registrarse
      </Text>

      {/* Nombre */}
      <View style={tailwind`w-full mb-2`}>
        <View style={[
          tailwind`flex-row items-center bg-white w-full p-3 rounded-xl shadow-lg`,
          errors.name ? tailwind`border border-red-500` : tailwind`border-0`
        ]}>
          <FontAwesome name="user" size={24} color="black" style={tailwind`mr-3 opacity-80`} />
          <Controller
            control={control}
            render={({ field: { onChange, onBlur, value } }) => (
              <TextInput
                style={[
                  tailwind`flex-1 opacity-60 text-base`,
                  { fontFamily: 'Tomorrow_400Regular' }
                ]}
                onBlur={onBlur}
                onChangeText={onChange}
                value={value}
                placeholder="Nombre"
              />
            )}
            name="name"
            rules={{ required: true }}
          />
        </View>
        <View style={tailwind`h-5`}>
          {errors.name && <Text style={tailwind`text-red-500 text-sm`}>{errors.name.message}</Text>}
        </View>
      </View>

      {/* Edad */}
      <View style={tailwind`w-full mb-2`}>
        <View style={[
          tailwind`flex-row items-center bg-white w-full p-3 rounded-xl shadow-lg`,
          errors.age ? tailwind`border border-red-500` : tailwind`border-0`
        ]}>
          <FontAwesome6 name="calendar-day" size={24} color="black" style={tailwind`mr-3 opacity-80`} />
          <Controller
            control={control}
            render={({ field: { onChange, onBlur, value } }) => (
              <TextInput
                style={[
                  tailwind`flex-1 opacity-60 text-base`,
                  { fontFamily: 'Tomorrow_400Regular' }
                ]}
                onBlur={onBlur}
                onChangeText={(text) => onChange(parseInt(text) || 0)} // Convierte el texto a número
                value={value ? value.toString() : ''} // Convierte el número a texto para mostrar en el input
                placeholder="Edad"
                keyboardType="numeric"
              />
            )}
            name="age"
            rules={{ required: true }}
          />
        </View>
        <View style={tailwind`h-5`}>
          {errors.age && <Text style={tailwind`text-red-500 text-sm`}>{errors.age.message}</Text>}
        </View>
      </View>

      {/* Email */}
      <View style={tailwind`w-full mb-2`}>
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
                  { fontFamily: 'Tomorrow_400Regular' }
                ]}
                onBlur={onBlur}
                onChangeText={onChange}
                value={value}
                placeholder="Correo electrónico"
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

      {/* Contraseña */}
      <View style={tailwind`w-full mb-2`}>
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
                  { fontFamily: 'Tomorrow_400Regular' }
                ]}
                onBlur={onBlur}
                onChangeText={onChange}
                value={value}
                placeholder="Contraseña"
                secureTextEntry={visible? false : true}
              />
            )}
            name="password"
            rules={{ required: true }}
          />
         <TouchableOpacity onPress={ChangingVisible}>
            <Ionicons name={visible? "eye" : "eye-off"} size={24} color="black" />
         </TouchableOpacity>
        </View>
        <View style={tailwind`h-5`}>
          {errors.password && <Text style={tailwind`text-red-500 text-sm`}>{errors.password.message}</Text>}
        </View>
      </View>



       {/* Confirmar contraseña */}
       <View style={tailwind`w-full mb-2`}>
         <View style={[
           tailwind`flex-row items-center bg-white w-full p-3 rounded-xl shadow-lg`,
           errors.confirmPassword ? tailwind`border border-red-500` : tailwind`border-0`
         ]}>
           <Ionicons name="key" size={24} color="black" style={tailwind`mr-3 opacity-80`} />
           <Controller
             control={control}
             render={({ field: { onChange, onBlur, value } }) => (
               <TextInput
                 style={[
                   tailwind`flex-1 opacity-60 text-base`,
                   { fontFamily: 'Tomorrow_400Regular' }
                 ]}
                 onBlur={onBlur}
                 onChangeText={onChange}
                 value={value}
                 placeholder="Confirmar contraseña"
                 secureTextEntry
               />
             )}
             name="confirmPassword"
             rules={{ required: true }}
           />
         </View>
         <View style={tailwind`h-5`}>
           {errors.confirmPassword && (
             <Text style={tailwind`text-red-500 text-sm`}>{errors.confirmPassword.message}</Text>
           )}
         </View>
       </View>
      <TouchableOpacity
        onPress={handleSubmit(onSubmit)}
        style={tailwind`bg-blue-700 p-4 rounded w-full items-center mb-3 mt-0 rounded-xl shadow-xl`}
        disabled={loading}
      >
        {loading ? (
          <ActivityIndicator color="#fff" />
        ) : (
          <Text style={[tailwind`text-white font-bold`, { fontFamily: 'Tomorrow_700Bold' }]}>
            Crear cuenta
          </Text>
        )}
      </TouchableOpacity>
    </View>
  );
}
