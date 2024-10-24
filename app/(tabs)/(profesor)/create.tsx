import { Image, ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, { useState } from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import ProfrsorInfo from '@/components/(profesor_view)/info'
import { images } from '@/constants'
import FormField from '@/components/text-input'
import SetQuestions from '@/components/(profesor_view)/set-questions'

const Create = () => {

  const [form, setForm] = useState({
    materia: '',
    tema: '',
  })

  const [image, setImage] = useState('')

  const sendImageViw = (uri: string) => {
    setImage(uri)
  }

  return (
    <SafeAreaView className='bg-primary min-h-screen px-4 py-[40px]'>
      <View className='flex-1 relative'>
        <ProfrsorInfo />
        <View className='bg-white flex-1 mb-[10px] mt-[10px] rounded-md p-4'>
          <View className='flex-row items-center justify-between'>
            <Image
              source={images.create}
              className='w-[100px] h-[80px]'
              resizeMode='contain'
            />
            <Text className='text-[30px] tracking-tighter uppercase font-plight'>Crear Ejercicio</Text>
          </View>
          <View className='flex-1'>
            <FormField
              handleChangeText={(e) => setForm({ ...form, materia: e })}
              placeholder='geometry..'
              textStyle='text-black'
              inputStyle=''
              otherStyles='mt-[10px]'
              value={form.materia}
              title={'Materia'}
              password={false}
              containerStyle='bg-[#eeeeee] border border-1 border-black'
            />
            <FormField
              handleChangeText={(e) => setForm({ ...form, tema: e })}
              placeholder='tema 1..'
              textStyle='text-black'
              inputStyle=''
              otherStyles='mt-[10px]'
              value={form.tema}
              title={'Tema'}
              password={false}
              containerStyle='bg-[#eeeeee] border border-1 border-black'
            />
            <SetQuestions sendImageViw={sendImageViw} />
          </View>
          <View className='my-auto flex-row justify-between'>
            <TouchableOpacity className='bg-[#ff4d4d] rounded-md px-3 py-1'>
              <Text className='text-white'>Volver</Text>
            </TouchableOpacity>
            <TouchableOpacity className='bg-[#5d53e2] px-3 py-1 rounded-md'>
              <Text className='text-white'>Publicar</Text>
            </TouchableOpacity>
          </View>
        </View>
        {image === "" ? (
          null
        ) :
          (
            <TouchableOpacity
              onPress={() => setImage('')}
              className='absolute justify-center items-center h-full w-full'>
              <View className='h-full w-full opacity-[0.2] z-30 rounded-md bg-black'></View>
              <View className='absolute rounded-md'>
                <Image
                  source={{ uri: image }}
                  className='w-[200px] h-[200px] p-3 '
                  resizeMode='contain'
                />
              </View>
            </TouchableOpacity>
          )
        }
      </View>
    </SafeAreaView>
  )
}

export default Create

const styles = StyleSheet.create({})