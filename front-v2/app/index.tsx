import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { StatusBar } from 'expo-status-bar'
import { Href, Link } from 'expo-router'

const index = () => {
  return (
    <View className='flex-1 items-center justify-center bg-white'>
      <Text className='text-3xl font-pblack'>Aora!</Text>
      <StatusBar style='auto'/>
      <Link href={'/home' as Href} style={{color:'blue'}}>Go to Home</Link>
    </View>
  )
}

export default index

const styles = StyleSheet.create({})