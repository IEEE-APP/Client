import { Image, ScrollView, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { images } from '@/constants'
import TextInputIcons from '@/components/text-input-icons'
import PickerRol from '@/components/picker-rol'
import CustomButton from '@/components/custom-button'
import { Link } from 'expo-router'

const SignUp = () => {
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
              className='text-[30px] mt-[20px] uppercase font-pbold text-white first-letter:tracking-tighter'>
              Registrate
            </Text>
          </View>
          <View className='justify-between'>
            <TextInputIcons placeholder='nombres' icon='person' type='default' />
            <TextInputIcons placeholder='apellidos' icon='person' type='default' />
            <TextInputIcons placeholder='correo electronico' icon='email' type='email-address' />
            <TextInputIcons placeholder='numero' icon='phone' type='numeric' />
            <PickerRol />
          </View>
          <CustomButton title='Registrar' containerStyle='mt-[20px]' handlePress={() => { }} isLoading={false} textStyle='' />
          <View className='items-center mt-[60px]'>
            <Text className='text-white text-sm tracking-tighter'>Ya tienes una cuenta?</Text>
            <Link href={'/(auth)/sign-in'} className='text-white text-lg underline font-pmedium'>Inicia sesion</Link>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  )
}

export default SignUp

const styles = StyleSheet.create({})