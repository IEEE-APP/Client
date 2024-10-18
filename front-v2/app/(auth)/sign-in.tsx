import { ScrollView, StyleSheet, Text, View, Image } from 'react-native'
import React, { useState } from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { images } from "@/constants"
import FormField from '@/components/text-input'
import { Link, router } from 'expo-router'
import CustomButton from '@/components/custom-button'

const SignIn = () => {

  const [form, setForm] = useState({
    email: '',
    password: ''
  })
  return (
    <SafeAreaView className='bg-primary h-full'>
      <ScrollView className='h-full'>
        <View className='w-full justify-center min-h-screen max-w-[90%] mx-auto flex-col'>
          <View className='items-center'>
            <Image
              source={images.logo1}
              className='w-[80px] h-[50px]'
              resizeMode='contain'
            />
            <Text
              className='text-[30px] mt-[30px] uppercase font-pbold text-white first-letter:tracking-tighter'>
              Inicio de Sesion
            </Text>
          </View>

          <View className='justify-center'>
            <FormField
              handleChangeText={(e) => { setForm({ ...form, email: e }) }}
              keyboardType='jordan@email.com'
              otherStyles=''
              password={false}
              title="Email"
              value={form.email} />
            <FormField
              handleChangeText={(e) => { setForm({ ...form, password: e }) }}
              keyboardType='***'
              otherStyles='mt-[15px]'
              password={true}
              title="Password"
              value={form.password} />
            <CustomButton title='Iniciar Sesion' containerStyle='mt-[20px]' handlePress={() => { router.replace('/home') }} isLoading={false} textStyle='' />
          </View>

          <View className='items-center mt-[60px]'>
            <Text className='text-white text-sm tracking-tighter'>No tienes una cueta todavia?</Text>
            <Link href={'/sign-up'} className='text-white text-lg underline font-pmedium'>Registrarse</Link>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  )
}

export default SignIn

const styles = StyleSheet.create({})