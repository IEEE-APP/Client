import { Image, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import Info from '@/components/(student_view)/Info'
import { images } from '@/constants'
import MateriasAsignadas from '@/components/(student_view)/materias-asigned'

const ResolverExercices = () => {
  return (
    <SafeAreaView className='bg-primary min-h-screen px-4 py-[40px]'>
      <View className='flex-1 relative'>
        <Info />
        <View className='bg-white rounded-md mt-[20px] flex-1'>
          <View>
            <View className='flex-row px-[10px] justify-between items-center mx-auto'>
              <Image
                source={images.create}
                className='w-[20px] h-[30px]'
                resizeMode='contain'
              />
              <Text className='text-[30px] tracking-tighter uppercase font-plight'>Resolver Ejercicio</Text>
            </View>
          </View>
          <MateriasAsignadas />
        </View>
      </View>
    </SafeAreaView>
  )
}

export default ResolverExercices

const styles = StyleSheet.create({})