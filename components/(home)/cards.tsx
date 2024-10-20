import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { images } from '@/constants'
import { router } from 'expo-router'

const Cards = ({ label, img, redirect }: { label: string, img: any, redirect: string }) => {
  return (
    <TouchableOpacity
      onPress={() => router.replace(`/(tabs)/create`)}
      activeOpacity={0.6}
      className='rounded-md my-2 mx-2 bg-white w-[180px] h-[195px] justify-center items-center '>
      <Image
        source={img}
        className='w-[80px] h-[50px]'
        resizeMode='contain'
        alt='not rendered at all'
      />
      <Text className='text-[15px] font-plight mt-5'>{label}</Text>
    </TouchableOpacity>
  )
}

export default Cards

const styles = StyleSheet.create({})