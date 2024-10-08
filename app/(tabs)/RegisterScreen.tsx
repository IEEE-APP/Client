import React from 'react';
import { View, Text, TextInput, TouchableOpacity, ActivityIndicator, Image } from 'react-native';
import { useForm, Controller } from 'react-hook-form';
import { useFonts, Tomorrow_400Regular, Tomorrow_700Bold } from '@expo-google-fonts/tomorrow';
import tailwind from '../../hooks/useTailwind';
//icons
import FontAwesome from "@expo/vector-icons/FontAwesome";
import Entypo from "@expo/vector-icons/Entypo";
import Ionicons from "@expo/vector-icons/Ionicons";
import FontAwesome6 from "@expo/vector-icons/FontAwesome6";

export default function RegisterScreen({ navigation }: any) {
   // Definir valores por defecto para los inputs
   const { control, handleSubmit } = useForm({
      defaultValues: {
         name: '', // Valor inicial para el nombre
         age: '', // Valor inicial para la edad
         email: '', // Valor inicial para el email
         password: '', // Valor inicial para la contraseña
      },
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
      navigation.navigate('Login');
   };

   return (
      <View style={tailwind`flex-1 items-center bg-[#2C36FF] px-10`}>

         <Image
            source={require('../../assets/images/logo1.png')} // Ruta de la imagen
            style={tailwind`w-28 h-28 mt-12 mb-16`} // Ajusta el tamaño de la imagen usando Tailwind
            resizeMode="contain" // Ajusta el modo de redimensionamiento
         />
         <Text style={[tailwind`text-white text-4xl mb-10 `, { fontFamily: 'Tomorrow_700Bold' }]}>
            Registrarse
         </Text>
         <View style={tailwind`flex-row bg-white w-full p-3 rounded-xl mb-6 shadow-lg`}>
            <FontAwesome
               name="user"
               size={24}
               color="black"
               style={tailwind`mr-3 opacity-80`}
            />
            <Controller
               control={control}
               render={({ field: { onChange, onBlur, value } }) => (
                  <TextInput
                     style={[tailwind`flex-1 opacity-60`, { fontFamily: 'Tomorrow_400Regular' }]}
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

         <View style={tailwind`flex-row bg-white w-full p-3 rounded-xl mb-6 shadow-lg`}>
            <FontAwesome6
               name="calendar-day"
               size={24}
               color="black"
               style={tailwind`mr-3 opacity-80`}
            />
            <Controller
               control={control}
               render={({ field: { onChange, onBlur, value } }) => (
                  <TextInput
                     style={[tailwind`flex-1 opacity-60`, { fontFamily: 'Tomorrow_400Regular' }]}
                     onBlur={onBlur}
                     onChangeText={onChange}
                     value={value}
                     placeholder="Edad"
                     keyboardType="numeric"
                  />
               )}
               name="age"
               rules={{ required: true }}
            />
         </View>
         <View style={tailwind`flex-row bg-white w-full p-3 rounded-xl mb-6 shadow-lg`}>
            <Entypo name="mail" size={24} color="black" style={tailwind`mr-3 opacity-80`} />
            <Controller
               control={control}
               render={({ field: { onChange, onBlur, value } }) => (
                  <TextInput
                     style={[tailwind`flex-1 opacity-60`, { fontFamily: 'Tomorrow_400Regular' }]}
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
         <View style={tailwind`flex-row bg-white w-full p-3 rounded-xl mb-6 shadow-lg`}>
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
         <TouchableOpacity
            onPress={handleSubmit(onSubmit)}
            style={tailwind`bg-blue-700 p-4 w-full items-center mb-3 mt-12 rounded-xl shadow-xl`}
         >
            <Text style={[tailwind`text-white font-bold`, { fontFamily: 'Tomorrow_700Bold' }]}>
               Registrarse
            </Text>
         </TouchableOpacity>
      </View>
   );
}
