import { StyleSheet, Text, View } from 'react-native'
import React, { useState } from 'react'
import { Picker } from '@react-native-picker/picker'
import MaterialIcons from '@expo/vector-icons/MaterialIcons';

export interface PickerRolUi {
  degree: string
  handleChangeText: (e: string) => void;

}

const PickerRol = (props: PickerRolUi) => {
  const [selectedLanguage, setSelectedLanguage] = useState("choose a value");
  return (
    <View className='space-y-2 mt-[20px] relative'>
      <Text className='text-white font-psemibold tracking-tighter text-[15px]'>Choose a rol:</Text>
      <View className='h-16 w-full px-4 shadow-md bg-white rounded-2xl flex-row items-center'>
        <MaterialIcons name="control-point" size={20} color="black" />
        <View className='flex-1'>
          <Picker
            selectedValue={selectedLanguage}
            onValueChange={(itemValue, itemIndex) => {
              props.handleChangeText(itemValue)
              setSelectedLanguage(itemValue)
            }
            }
            placeholder='choose a rol'
          >
            <Picker.Item label="Estudiante" value="estudiante" />
            <Picker.Item label="Profesor" value="profesor" />
          </Picker>
        </View>
      </View>
    </View>
  )
}

export default PickerRol

const styles = StyleSheet.create({})