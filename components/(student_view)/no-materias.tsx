import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, { useState } from 'react'
import { TextInput } from 'react-native-gesture-handler'
import { ActivityIndicator, Chip, MD2Colors } from 'react-native-paper'
import { useGlobalContext } from '@/context/GlovalProvider'
import { joinClassRoom } from '@/lib/student/cards'

const NoMaterias = () => {

  const { credentials,setMateriaStudent } = useGlobalContext()


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
    console.log(response.data)
    setMateriaStudent!(response.data)
    setLoading(false)
    return;
  }

  return (
    <View className='rounded-md justify-center  px-[10px] mt-[20px]'>
      <Text className='font-bold tracking-tighter'>No materias yet</Text>
      <View className=''>
        <Text className='text-[20px] tracking-tighter font-pbold'>Please, insert the code to join one</Text>
      </View>
      <View className=' rounded-md px-3 py-1  bg-[#bbbbbb]'>
        <TextInput
          className='text-black '
          onChangeText={(e) => setcode(e)}
          value={code}
        />
      </View>
      <TouchableOpacity
        activeOpacity={0.6}
        className={`bg-primary px-3 mt-[5px] w-[35%] max-w-auto py-1 rounded-md flex-row`}
        onPress={() => handleSubmit(code, credentials?.user_id as number)}
        disabled={loading}
      >
        <Text className='text-white italic'>Submit code</Text>
        {loading && (
          <ActivityIndicator color={MD2Colors.white} />
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
    </View>
  )
}

export default NoMaterias

const styles = StyleSheet.create({})