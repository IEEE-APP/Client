import { Image, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { images } from '@/constants'

const Info = () => {
  return (
    <View className='w-full bg-white min-h-[40px] rounded-md p-3 flex-row justify-between items-center'>
      <Image
        source={images.profesor}
        className='w-[80px] h-[50px]'
        resizeMode='contain'
      />
      <View>
        <Text>Fedor	Mikhaïlovitch	Dostoïevski</Text>
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