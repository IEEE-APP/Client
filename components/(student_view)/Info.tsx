import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { images } from '@/constants'
import { useGlobalContext } from '@/context/GlovalProvider'
import { useNavigation } from '@react-navigation/native'

const Info = () => {
  const { credentials } = useGlobalContext()
  const navigation = useNavigation();
  return (
    <View className='w-full bg-white min-h-[40px] rounded-md p-3 flex-row justify-between items-center'>
      <TouchableOpacity
        onPress={() => navigation.openDrawer()}
      >
        <Image
          source={images.profesor}
          className='w-[80px] h-[50px]'
          resizeMode='contain'
        />
      </TouchableOpacity>
      <View>
        <Text>{credentials?.first_name} {credentials?.last_name}</Text>
        <Text className='font-black'>Alumno</Text>
      </View>
      <Image
        source={images.logo2}
        className='w-[80px] h-[50px]'
        resizeMode='contain'
      />
    </View>
  )
}

export default Info

const styles = StyleSheet.create({})