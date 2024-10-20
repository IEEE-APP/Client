import { KeyboardTypeOptions, StyleSheet, Text, TextInput, View } from 'react-native'
import React from 'react'
import MaterialIcons from '@expo/vector-icons/MaterialIcons';



interface UTextInputIcons {
  placeholder: string;
  icon?: "phone" | "person" | "email" | "control-point"
  type: inputType
}

type inputType = KeyboardTypeOptions


const TextInputIcons = (props: UTextInputIcons) => {
  return (
    <View className='space-y-2 mt-[20px]'>
      <View className='h-16 w-full px-4 shadow-md bg-white rounded-2xl flex-row justify-center items-center'>
        <MaterialIcons name={props.icon} size={20} color="black" />
        <TextInput
          keyboardType={props.type}
          className='flex-1 text-black font-psemibold text-[12px] ml-[10px]'
          placeholder={props.placeholder}
          placeholderTextColor={'#7b7b8b'}
        />
      </View>
    </View>
  )
}

export default TextInputIcons

const styles = StyleSheet.create({})