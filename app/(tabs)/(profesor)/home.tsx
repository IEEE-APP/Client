import { StyleSheet, Text, View, ScrollView, Image, FlatList } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import Cards from '@/components/(home)/cards'
import ProfrsorInfo from '@/components/(profesor_view)/info'
import provideCards from '@/lib/profesor/cards'


const Home = () => {
  const cards = provideCards();
  return (
    <SafeAreaView className='bg-primary min-h-screen'>
      <View className='h-full px-4 py-[40px]'>
        <ProfrsorInfo />
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