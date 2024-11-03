import { ScrollView, StyleSheet, Text, View, Image } from 'react-native'
import React, { useState } from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { images } from "@/constants"
import FormField from '@/components/text-input'
import { Link, router } from 'expo-router'
import CustomButton from '@/components/custom-button'

import axios from 'axios'
import { getData, storeData } from '@/lib/auth'

const SignIn = () => {

  const [form, setForm] = useState({
    email: '',
    password: ''
  })

  const [loading, setLoading] = useState(false)

  const handleSignIn = async () => {
    console.log(form.email, form.password)
    try {
      setLoading(true)
      const sendBackend = await axios.post('http://192.168.10.3:4000/api/auth/login', {
        email: form.email,
        password: form.password
      })
      storeData(sendBackend.data.msg)
      router.replace('/(tabs)/(student)/home')
      getData()
      setLoading(false)
    } catch (error:any) {
      console.log(error.response.data)
    }
  }
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
              placeholder='jordan@email.com'
              containerStyle='bg-white border border-1 border-black'
              otherStyles=''
              password={false}
              title="Email"
              value={form.email}

            />
            <FormField
              handleChangeText={(e) => { setForm({ ...form, password: e }) }}
              placeholder="*****"
              containerStyle='bg-white border border-1 border-black'
              otherStyles='mt-[15px]'
              password={true}
              title="Password"
              value={form.password} />
            <CustomButton
              title='Iniciar Sesion'
              containerStyle='mt-[20px]'
              handlePress={async () => await handleSignIn()}
              isLoading={loading}
              textStyle=''
            />
          </View>

          <View className='items-center mt-[60px]'>
            <Text className='text-white text-sm tracking-tighter'>No tienes una cueta todavia?</Text>
            <Link href={'/(auth)/sign-up'} className='text-white text-lg underline font-pmedium'>Registrarse</Link>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  )
}

export default SignIn

const styles = StyleSheet.create({})