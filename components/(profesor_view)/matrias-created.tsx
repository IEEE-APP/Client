import { FlatList, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { useGlobalContext } from '@/context/GlovalProvider'
import Cards from '../(home)/cards'
import MateriaCardProfesor from './materia-card'

const MateriasCreadas = () => {
  const { materiaProfesor } = useGlobalContext()
  return (
    <View className='mt-[20px]'>
      <Text>Hi 🤚🏻, here you can see yours materias created</Text>
      <FlatList
        data={materiaProfesor}
        renderItem={({ item }) => (
          <MateriaCardProfesor
            data={item}
          />
        )}
      />
    </View>
  )
}

export default MateriasCreadas

const styles = StyleSheet.create({})