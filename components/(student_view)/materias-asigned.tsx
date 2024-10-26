import { FlatList, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import MateriaCard from './materia-card'

const MateriasAsignadas = () => {
  // TODO query the db for get all materias matriculated
  const materias = [{ materia: "geometry", description: "Geometry Descriptive" }, { materia: "Algebra", description: "Funciones Lineales" }]
  return (
    <View className='px-5 mt-[20px]'>
      <FlatList
        className=''
        data={materias}
        renderItem={({ item }) => (
          <MateriaCard
            description={item.description}
            materia={item.materia}
            key={item.materia}
          />
        )}
      />
    </View>
  )
}

export default MateriasAsignadas

const styles = StyleSheet.create({})