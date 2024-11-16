import { FlatList, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { useGlobalContext } from '@/context/GlovalProvider'
import MateriaCard from './materia-card'

const MateriasView = () => {
  const { materiasStudent } = useGlobalContext()
  return (
    <View className='justify-center  px-[10px] mt-[20px]'>
      <Text className='text-[15px] tracking-tighter'>Hi 🖐🏻, here we list all materias that you have joined:</Text>
      <FlatList
      className='mt-[20px]'
        data={materiasStudent}
        renderItem={({ item }) => (
          <MateriaCard
            data={item}
          />
        )}
      />
    </View>
  )
}

export default MateriasView

const styles = StyleSheet.create({})