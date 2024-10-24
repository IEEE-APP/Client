import { FlatList, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import provideCards from '@/lib/student/cards'
import { SafeAreaView } from 'react-native-safe-area-context'
import Info from '@/components/(student_view)/Info'
import Cards from '@/components/(home)/cards'

const Home = () => {
  const cards = provideCards();
  return (

    <SafeAreaView className='bg-primary min-h-screen'>
      <View className='h-full px-4 py-[40px]'>
        <Info />
        <FlatList
          className='mt-[20px] mx-auto'
          data={cards}
          renderItem={({ item }) => (
            <View>
              <Cards
                label={item.label}
                key={item.id}
                img={item.img}
                redirect={item.redirect}
              />
            </View>
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