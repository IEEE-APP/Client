import { Image, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { images } from '@/constants'

const Cards = ({ label, img }: { label: string, img: any }) => {
  const imagen = `../../assets/images/${img}.png`
  return (
    <View className='rounded-md my-2 mx-2 bg-white w-[180px] h-[195px] justify-center items-center '>
      <Image
        source={img}
        className='w-[80px] h-[50px]'
        resizeMode='contain'
        alt='not rendered at all'
      />
      <Text className='text-[15px] font-plight mt-5'>{label}</Text>
    </View>
  )
}

export default Cards

const styles = StyleSheet.create({})