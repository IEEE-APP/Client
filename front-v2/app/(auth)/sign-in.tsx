import { ScrollView, StyleSheet, Text, View, Image } from 'react-native'
import React, { useState } from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { images } from "@/constants"
import FormField from '@/components/text-input'
import { Link } from 'expo-router'

const SignIn = () => {

  const [form, setForm] = useState({
    email: '',
    password: ''
  })

  return (
    <SafeAreaView className='bg-primary h-full'>
      <ScrollView className='h-full'>
        <View className='w-full justify-center h-[85vh] px-4 my-4'>
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
          <FormField
            handleChangeText={(e) => { setForm({ ...form, email: e }) }}
            keyboardType='jordan@email.com'
            otherStyles='we'
            password={false}
            title="Email"
            value={form.email} />
          <FormField
            handleChangeText={(e) => { setForm({ ...form, password: e }) }}
            keyboardType='***'
            otherStyles='we'
            password={true}
            title="Password"
            value={form.password} />
            
          <View className='items-center'>
            <Text>No tienes una cueta todavia?</Text>
            <Link href={'/sign-up'}>Registrarse</Link>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  )
}

export default SignIn

const styles = StyleSheet.create({})