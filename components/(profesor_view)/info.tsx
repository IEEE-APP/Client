import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { images } from '@/constants'
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";
import { useGlobalContext } from '@/context/GlovalProvider';
import { useNavigation } from '@react-navigation/native';


const Info = () => {
  const { credentials } = useGlobalContext()
  const navigation = useNavigation();


  return (
    <View className='flex-row items-center justify-between bg-white rounded-md '
      style={{
        width: "100%",
        minHeight: hp("5%"), // min-h-[40px]
        padding: wp("3%"), // p-3
      }}>
      <View className='flex-row items-center'>
        <TouchableOpacity
          onPress={()=>navigation.openDrawer()}
        >
          <Image
            source={images.profesor}
            className=''
            resizeMode='contain'
            style={{
              width: wp("10%"), // w-[40px]
              height: hp("6.25%"), // h-[50px]
            }}
          />
        </TouchableOpacity>
        <View className='ml-[10px]'>
          <Text>{credentials?.first_name}</Text>
          <Text className='font-black'>Profesor</Text>
        </View>
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