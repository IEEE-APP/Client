import { StyleSheet, Text, View, ScrollView, Image, FlatList } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { images } from '@/constants'
import Cards from '@/components/(home)/cards'


const Home = () => {
  const cards = [
    { label: "Crear ejercicio", id: 1, img: require('../../assets/images/create.png') },
    { label: "Materias", id: 2, img: require('../../assets/images/materias.png') },
    { label: "Consultas", id: 3, img: require('../../assets/images/questions.png') },
    { label: "Clasificacion", id: 4, img: require('../../assets/images/clasificacion.png') },
    { label: "Ajustes", id: 5, img:require('../../assets/images/settins.png') },
    { label: "Salir", id: 6, img: require('../../assets/images/salir.png') }
  ]
  return (
    <SafeAreaView className='bg-primary min-h-screen'>
      <View className='h-full px-4 py-[40px]'>
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
        <FlatList
          className='mt-[20px] mx-auto'
          data={cards}
          renderItem={({ item }) => (
            <Cards 
            label={item.label} 
            key={item.id}
            img={item.img}
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