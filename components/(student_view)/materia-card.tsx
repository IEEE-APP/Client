import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import MaterialIcons from '@expo/vector-icons/MaterialIcons';


interface MateriaCard {
  materia: string
  description: string
}

const MateriaCard = ({ data }: { data: any }) => {
  return (
    <TouchableOpacity
      activeOpacity={0.4}
      className='bg-[#eeeeee] rounded-md px-5 py-2 border items-center border-black mb-2 flex-row justify-between'
      onPress={() => { }}
    >
      <View className='flex-row items-center'>
        <MaterialIcons name="library-books" size={30} color="black" />
        <View className='ml-[5px]'>
          <Text className='uppercase text-[20px] font-semibold'>{data.class_name}</Text>
          <Text className='text-[10px]'>Total Students: {data.students.length}</Text>
        </View>
      </View>
      <View className='w-[10px] h-[10px] bg-red-600 rounded-full' />
    </TouchableOpacity>
  )
}

export default MateriaCard

const styles = StyleSheet.create({})