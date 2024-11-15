import { StyleSheet, Text, TextInput, View } from 'react-native'
import React, { useState } from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { StatusBar } from 'expo-status-bar'
import { useGlobalContext } from '@/context/GlovalProvider'
import FormField from '@/components/text-input'
import UserCode from '@/components/user-code-form'
import { TouchableOpacity } from 'react-native-gesture-handler'
import { joinClassRoom } from '@/lib/student/cards'
import { ActivityIndicator, Chip, MD2Colors } from 'react-native-paper'

const courses = () => {
  const { credentials } = useGlobalContext()
  const [code, setcode] = useState('')
  const [loading, setLoading] = useState(false)
  const [messageErrorStatus, setMessageErrorStatus] = useState(false)
  const [messageError, setMessageError] = useState("")

  const handleSubmit = async (token: string, userId: number) => {
    setLoading(true)
    const response = await joinClassRoom(token, userId)
    if (!response.status) {
      setLoading(false)
      setMessageError(response.mensage)
      setMessageErrorStatus(true)
      setTimeout(() => {
        setMessageError('')
        setMessageErrorStatus(false)
      }, 1000)
      return;
    }
  }

  return (
    <SafeAreaView className='bg-primary text-white min-h-screen items-center justify-center'>
      <View className='items-center'>
        <Text className='text-white text-[20px] tracking-tighter font-pbold'>To join a materia, please insert the code:</Text>
      </View>
      <View className='bg-white rounded-md px-3 py-1 w-[70%]'>
        <TextInput
          className='text-black '
          onChangeText={(e) => setcode(e)}
          value={code}
        />
      </View>
      <TouchableOpacity
        className={`bg-white px-3 mt-[5px]  py-1 rounded-md flex-row`}
        onPress={() => handleSubmit(code, credentials?.user_id as number)}
        disabled={loading}
      >
        <Text>Submit code</Text>
        {loading && (
          <ActivityIndicator color={MD2Colors.black} />
        )
        }
      </TouchableOpacity>

      {messageErrorStatus && (
        <Chip
          className='mt-[5px] '
          icon="information"
          onPress={() => console.log('Pressed')}
        >
          {messageError}
        </Chip>
      )}
      <StatusBar backgroundColor='#282c34' style='light' />
    </SafeAreaView>
  )
}

export default courses

const styles = StyleSheet.create({})