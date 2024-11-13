import { Button, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { TextInput } from 'react-native-paper'

export interface UserCodeUi {
  code: string,
  handleChangeText: (e: string) => void;

}

const UserCode = (props: UserCodeUi) => {
  return (
    <View className='w-full rounded-2xl flex-col'>
      <TextInput
        keyboardType='default'
        className='text-black shadow-md m-0 bg-[#f2f2f2] font-psemibold h-[30px] mt-2'
        value={props.code}
        onChangeText={(e) => props.handleChangeText(e)}
      />
      <View className='flex w-[37%] mt-3'>
        <TouchableOpacity
          className='bg-primary px-3 py-1  rounded-md'
        >
          <Text className='text-white block text-center'>Submit code</Text>
        </TouchableOpacity>
      </View>
    </View>
  )
}

export default UserCode

const styles = StyleSheet.create({})