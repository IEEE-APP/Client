import { StyleSheet, Text, View, ScrollView, Image, FlatList } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { images } from '@/constants'
import Cards from '@/components/(home)/cards'
import ProfrsorInfo from '@/components/(profesor_view)/info'


const Home = () => {
  const cards = [
    { label: "Crear ejercicio", id: 1, img: require('../../assets/images/create.png'), redirect:'create' },
    { label: "Materias", id: 2, img: require('../../assets/images/materias.png'), redirect:'create' },
    { label: "Consultas", id: 3, img: require('../../assets/images/questions.png'), redirect:'create' },
    { label: "Clasificacion", id: 4, img: require('../../assets/images/clasificacion.png'), redirect:'create' },
    { label: "Ajustes", id: 5, img:require('../../assets/images/settins.png'), redirect:'create' },
    { label: "Salir", id: 6, img: require('../../assets/images/salir.png'), redirect:'create' }
  ]
  return (
    <SafeAreaView className='bg-primary min-h-screen'>
      <View className='h-full px-4 py-[40px]'>
        <ProfrsorInfo/>
        <FlatList
          className='mt-[20px] mx-auto'
          data={cards}
          renderItem={({ item }) => (
            <Cards 
            label={item.label} 
            key={item.id}
            img={item.img}
            redirect={item.redirect}
            />
          )}
          keyExtractor={(item) => item.id.toString()}
          horizontal={false}
          numColumns={2}
        />
      </View>
    </SafeAreaView>
  )
}

export default Home

const styles = StyleSheet.create({})