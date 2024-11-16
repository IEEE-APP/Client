import { StyleSheet, Text, TextInput, View } from 'react-native'
import React, { useState } from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { StatusBar } from 'expo-status-bar'
import { useGlobalContext } from '@/context/GlovalProvider'
import FormField from '@/components/text-input'
import UserCode from '@/components/user-code-form'
import { ScrollView, TouchableOpacity } from 'react-native-gesture-handler'
import { joinClassRoom } from '@/lib/student/cards'
import { ActivityIndicator, Chip, MD2Colors } from 'react-native-paper'
import Info from '@/components/(student_view)/Info'
import NoMaterias from '@/components/(student_view)/no-materias'
import MateriasView from '@/components/(student_view)/materias-view'

const courses = () => {

  const { materiasStudent } = useGlobalContext()


  return (
    <SafeAreaView className='bg-primary text-white min-h-screen px-4 py-[40px]'>
      <Info />
      <View className='mt-[10px] bg-white flex-1  rounded-md'>
        <Text className='text-center text-[40px] font-bold tracking-tighter'>Materias</Text>
        {materiasStudent?.length === 0 ? (
          <NoMaterias />
        )
        :
        <MateriasView />
      }
      </View>
      <StatusBar backgroundColor='#282c34' style='light' />
    </SafeAreaView>
  )
}

export default courses

const styles = StyleSheet.create({})