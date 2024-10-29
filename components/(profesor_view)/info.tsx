import { Image, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { images } from '@/constants'
import {
   widthPercentageToDP as wp,
   heightPercentageToDP as hp,
 } from "react-native-responsive-screen";
const Info = () => {
  return (
    <View className='flex-row items-center justify-between bg-white rounded-md ' 
    style={{
      width: "100%",
      minHeight: hp("5%"), // min-h-[40px]
      padding: wp("3%"), // p-3
    }}>
      <Image
        source={images.profesor}
        className=''
        resizeMode='contain'        
        style={{
         width: wp("10%"), // w-[40px]
         height: hp("6.25%"), // h-[50px]
       }}
      />
      <View>
        <Text>Fedor	Mikhaïlovitch	Dostoïevski</Text>
        <Text className='font-black'>Profesor</Text>
      </View>
      <Image
        source={images.logo2}
        className=''
        resizeMode='contain'
        style={{
         width: wp("20%"), // w-[80px]
         height: hp("6.25%"), // h-[50px]
       }}
      />
    </View>
  )
}

export default Info

const styles = StyleSheet.create({})