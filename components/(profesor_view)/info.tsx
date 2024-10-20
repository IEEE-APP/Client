import { Image, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { images } from '@/constants'

const ProfrsorInfo = () => {
  return (
    <View className='w-full bg-white min-h-[40px] rounded-md p-3 flex-row justify-between items-center'>
      <Image
        source={images.profesor}
        className='w-[80px] h-[50px]'
        resizeMode='contain'
      />
      <View>
        <Text>Fedor	Mikhaïlovitch	Dostoïevski</Text>
        <Text className='font-black'>Profesor</Text>
      </View>
      <Image
        source={images.logo2}
        className='w-[80px] h-[50px]'
        resizeMode='contain'
      />
    </View>
  )
}

export default ProfrsorInfo

const styles = StyleSheet.create({})