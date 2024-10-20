import { Image, ScrollView, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { StatusBar } from 'expo-status-bar'
import { SafeAreaView } from 'react-native-safe-area-context'
import { images } from '@/constants'
import CustomButton from '@/components/custom-button'
import { Redirect, router } from 'expo-router'
import { useGlobalContext } from '@/context/GlovalProvider'

const index = () => {

  const { isLoading, isLoggedIn } = useGlobalContext()

  if (!isLoading && isLoggedIn) return <Redirect href='/home' />
  return (
    <SafeAreaView className='bg-primary h-full'>
      <ScrollView contentContainerStyle={{ height: "100%" }}>
        <View className='w-full h-full justify-center items-center p-[35px]'>
          <Image
            source={images.logo1}
            className='w-[230px] h-[184px]'
            resizeMode='contain'
          />
          <Text
            className='text-sm font-pbold text-gray-100 mt-7 text-center'>
            Here, Where the students and teacheres are together to improve the sessions class
          </Text>
          <CustomButton
            title='Continue with Email'
            handlePress={() => router.push('/sign-in')}
            containerStyle='w-full mt-7'
            textStyle=''
            isLoading={false}
          />
        </View>
      </ScrollView>
      <StatusBar backgroundColor="#282c34" style="light" />
    </SafeAreaView>
  )
}

export default index

const styles = StyleSheet.create({})