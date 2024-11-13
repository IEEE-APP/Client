import { Image, ScrollView, StyleSheet, Text, View } from 'react-native'
import React, { useState } from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { images } from '@/constants'
import TextInputIcons from '@/components/text-input-icons'
import PickerRol from '@/components/picker-rol'
import CustomButton from '@/components/custom-button'
import { Link } from 'expo-router'
import FormField from '@/components/text-input'
import { Modal, PaperProvider, Portal } from 'react-native-paper'
import UserCode from '@/components/user-code-form'
import { requestCodeNumber } from '@/lib/auth'

export interface FormUI {
  email: string,
  first_name: string,
  last_name: string,
  degree: string,
  user_password: string,
  phone_number: number | undefined,
  user_code: string
}

const SignUp = () => {
  const [modal, setmodal] = useState(false)
  const [form, setForm] = useState<FormUI>({
    first_name: "",
    degree: "estudiante",
    email: "",
    last_name: "",
    phone_number: undefined,
    user_code: "",
    user_password: ""
  })

  const handleButton = async() => {
    const response = await requestCodeNumber(form.email)
    setmodal(true)
  }

  return (
    <PaperProvider>
      <Portal>
        <Modal visible={modal} contentContainerStyle={{ padding: 20}} onDismiss={() => setmodal(false)}>
          <View className='w-[95%] bg-white rounded-sm p-[10px] mx-auto'>
            <Text>Enviamos un mensaje a {form.email}</Text>
            <UserCode code={form.user_code} handleChangeText={(e) => setForm({ ...form, user_code: e })} />
          </View>
        </Modal>
      </Portal>
      <SafeAreaView className='bg-primary h-full'>
        <ScrollView className='h-full'>
          <View className='w-full justify-center min-h-screen max-w-[90%] mx-auto flex-col'>
            <View className='items-center'>
              <Image
                source={images.logo1}
                className='w-[80px] h-[40px]'
                resizeMode='contain'
              />
              <Text
                className='text-[30px] mt-[10px] uppercase font-pbold text-white first-letter:tracking-tighter'>
                Registrate
              </Text>
            </View>
            <View className='justify-between'>
              <TextInputIcons
                value={form.first_name}
                placeholder='nombres'
                icon='person'
                type='default'
                handleChangeText={(e) => setForm({ ...form, first_name: e })}
              />
              <TextInputIcons
                value={form.last_name}
                placeholder='apellidos'
                icon='person'
                type='default'
                handleChangeText={(e) => setForm({ ...form, last_name: e })}
              />
              <TextInputIcons
                value={form.phone_number}
                placeholder='phone'
                icon='phone'
                type='numeric'
                handleChangeText={(e) => setForm({ ...form, phone_number: Number(e) })}
              />
              <TextInputIcons
                value={form.email}
                placeholder='correo electronico'
                icon='email'
                type='email-address'
                handleChangeText={(e) => setForm({ ...form, email: e })}
              />

              <FormField
                handleChangeText={(e) => { setForm({ ...form, user_password: e }) }}
                placeholder="*****"
                containerStyle='bg-white border border-1 border-black'
                otherStyles='mt-[15px]'
                password={true}
                title="Password"
                value={form.user_password}
              />
              <PickerRol
                degree={form.degree}
                handleChangeText={(e) => setForm({ ...form, degree: e })}
              />
            </View>
            <CustomButton
              title='Registrar'
              containerStyle='mt-[20px]'
              handlePress={() => handleButton()}
              isLoading={false}
              textStyle=''
            />
            <View className='items-center mt-[20px]'>
              <Text className='text-white text-sm tracking-tighter'>Ya tienes una cuenta?</Text>
              <Link href={'/(auth)/sign-in'} className='text-white text-lg underline font-pmedium'>Inicia sesion</Link>
            </View>
          </View>
        </ScrollView>
      </SafeAreaView>
    </PaperProvider>
  )
}

export default SignUp

const styles = StyleSheet.create({})