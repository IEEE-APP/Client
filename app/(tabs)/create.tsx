import { Button, Image, ScrollView, StyleSheet, Text, View } from 'react-native'
import React, { useState } from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import ProfrsorInfo from '@/components/(profesor_view)/info'
import { images } from '@/constants'
import FormField from '@/components/text-input'
import * as ImagePicker from 'expo-image-picker';

const Create = () => {
  const [image, setImage] = useState<string | null>(null);
  const pickImage = async () => {
    // No permissions request is necessary for launching the image library
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });

    console.log(result);

    if (!result.canceled) {
      setImage(result.assets[0].uri);
    }
  };


  return (
    <SafeAreaView className='bg-primary min-h-screen px-4 py-[20px]'>
      <View className='flex-1'>
        <ProfrsorInfo />
        <View className='bg-white flex-1 mb-[10px] mt-[10px] rounded-md p-4'>
          <View className='flex-row items-center justify-between'>
            <Image
              source={images.create}
              className='w-[100px] h-[80px]'
              resizeMode='contain'
            />
            <Text className='text-[30px] tracking-tighter uppercase font-plight'>Crear Ejercicio</Text>
          </View>
          <View className='flex-1'>
            <FormField
              handleChangeText={() => { }}
              placeholder='geometry..'
              textStyle='text-black'
              inputStyle=''
              otherStyles='mt-[10px]'
              value=''
              title={'Materia'}
              password={false}
              containerStyle='bg-[#eeeeee] border border-1 border-black'
            />
            <FormField
              handleChangeText={() => { }}
              placeholder='tema 1..'
              textStyle='text-black'
              inputStyle=''
              otherStyles='mt-[10px]'
              value=''
              title={'Tema'}
              password={false}
              containerStyle='bg-[#eeeeee] border border-1 border-black'
            />
            <Button title="Pick an image from camera roll" onPress={pickImage} />
            {image && <Image source={{ uri: image }} className='w-[200px] h-[200px]' />}
          </View>
        </View>
      </View>
    </SafeAreaView>
  )
}

export default Create

const styles = StyleSheet.create({})