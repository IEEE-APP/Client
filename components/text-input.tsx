import { Image, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'
import React, { useState } from 'react'
import { icons } from '@/constants';

export interface FormFieldProps {
  title: "password" | 'email' | 'username' | any;
  value: string;
  handleChangeText: (e: string) => void;
  otherStyles: string;
  placeholder: string
  password: boolean
  textStyle?: string
  inputStyle?: string
  containerStyle?: string
}

const FormField = (props: FormFieldProps) => {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <View className={`${props.otherStyles}`}>
      <Text className={`text-base text-gray-100 font-pmedium ${props.textStyle}`}>{props.title}</Text>
      <View className={`shadow-md w-full h-16 px-4 rounded-2xl
    focus:border-secondary items-center  justify-center flex-row text-black ${props.containerStyle}`}>
        <TextInput
          className={`flex-1 text-black font-psemibold text-base ${props.inputStyle}`}
          value={props.value}
          placeholder={props.placeholder}
          placeholderTextColor="#7b7b8b"
          onChangeText={props.handleChangeText}
          secureTextEntry={props.password && !showPassword}
        />

        {props.password && (
          <TouchableOpacity onPress={() => setShowPassword(!showPassword)}>
            <Image
              source={!showPassword ? icons.eye : icons.eyeHide}
              className='w-6 h-6 text-black font-pbold'
              resizeMode='contain'
            />
          </TouchableOpacity>
        )}
      </View>
    </View>
  )
}

export default FormField

const styles = StyleSheet.create({})