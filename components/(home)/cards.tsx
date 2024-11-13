import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { Href, router } from 'expo-router'
import { useNavigation } from '@react-navigation/native';
import {
   widthPercentageToDP as wp,
   heightPercentageToDP as hp,
 } from "react-native-responsive-screen";
import { DrawerParamList } from '@/app/CustomDrawerContent';
import { NativeStackNavigationProp } from 'react-native-screens/lib/typescript/native-stack/types';
// router.push(`/search/${query}`)


const Cards = ({ label, img, redirect }: { label: string, img: any, redirect: keyof DrawerParamList}) => {
   const navigation = useNavigation<NativeStackNavigationProp<DrawerParamList>>();
  return (
    <TouchableOpacity
      // onPress={() => router.replace(`${redirect}` as Href<string>)}
      onPress={() => navigation.navigate(redirect)}
      activeOpacity={0.6}
      className='items-center justify-center bg-white rounded-md '
      style={{
         width: wp("44%"), // Ancho responsivo
         height: hp("21%"), // Altura responsiva
         marginHorizontal: wp("1%"), // Ajusta el margen horizontal al 2.5% del ancho de la pantalla
         marginVertical: hp("0.5%"), // Ajusta el margen vertical al 1% de la altura de la pantalla
       }}>
      <Image
        source={img}
        className=''
        resizeMode='contain'
        alt='not rendered at all'
        style={{
         width: wp("20%"), // Ancho responsivo
         height: hp("7%"), // Altura responsiva
       }}
      />
      <Text className=' font-plight'
              style={{
               fontSize: wp("5%"),
               marginTop: hp("2%"),
             }}
           >{label}</Text>
    </TouchableOpacity>
  )
}

export default Cards

const styles = StyleSheet.create({})