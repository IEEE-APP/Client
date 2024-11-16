import { Button, FlatList, Image, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'
import React, { useState } from 'react'
import * as ImagePicker from 'expo-image-picker';
import MaterialIcons from '@expo/vector-icons/MaterialIcons';
import { PreguntasUI2 } from '@/app/(tabs)/(profesor)/create';

interface PreguntaUI {
  question: string, image: boolean, uri: string
}

interface Pregunta extends PreguntaUI {
  id: number
}

interface SetQuestionsUi {
  sendImageViw: (uri: string) => void;
  changeQuestions: (question: PreguntasUI2) => void;
}

const SetQuestions = (props: SetQuestionsUi) => {

  // {questions:"", id:1}
  const [pregunta, setPregunta] = useState<PreguntaUI>()
  const [questions, setQuestions] = useState<Array<Pregunta>>([])
  const [viewImage, setViewImage] = useState(false)

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
      setPregunta({ image: true, question: result.assets[0].mimeType as string, uri: result.assets[0].uri })
      setImage(result.assets[0].uri);
    }
  };
  const addQuestion = () => {
    const newQuestion = { question: pregunta?.question as string, id: questions?.length + 1, image: pregunta?.image || false, uri: pregunta?.uri || '' }
    props.changeQuestions({ type: "Q2", questions: (pregunta?.question || image) as string })
    setQuestions([...questions, newQuestion])
    setPregunta(undefined)
  }

  const clearQuestions = ()=>{
    setPregunta(undefined)
  }
  return (
    <View className='mt-[20px]'>
      <Text>Preguntas</Text>
      <View className='shadow-md w-full mt-[10px] min-h-[64px] px-4 rounded-2xl focus:border-secondary relative bg-[#eeeeee] border border-1 border-black  text-black flex-col'>
        <TextInput
          className='flex-1 text-base'
          onChangeText={e => setPregunta({ image: false, question: e, uri: '' })}
          value={pregunta?.question}
          placeholder=''
        />

        <View className='absolute bottom-0 right-0 p-3 flex-row'>
          {/* 0f4e78 */}
          <TouchableOpacity
            disabled={pregunta === undefined ? true : false}
            className={`${pregunta ? '' : 'opacity-[0.8]'} bg-[#1a8cd8] rounded-lg px-3 py-1`}
            onPress={() => addQuestion()}
          >
            <Text className='text-white'>Post</Text>
          </TouchableOpacity>
          <MaterialIcons name='image' color={"blue"} size={25} onPress={pickImage} />
        </View>
        {/* {image && <Image source={{ uri: image }} className='w-[200px] h-[200px] p-3' resizeMode='contain' />} */}
      </View>
      <FlatList
        className='bg-[#eeeeee] rounded-md px-3 mt-3'
        data={questions}
        renderItem={({ item }) => (
          <View>
            {item.image ? (
              <TouchableOpacity
                className='flex-row'
                onPress={() => props.sendImageViw(item.uri)}
              >
                <Text>{item.id}.  </Text>
                <Text className='text-blue-600'>{item.question}</Text>
              </TouchableOpacity>
            ) :
              (
                <View>
                  <View className='flex-row'>
                    <Text>{item.id}. </Text>
                    <Text>{item.question}</Text>
                  </View>
                  <View>
                  </View>
                </View>
              )
            }
          </View>
        )}
        keyExtractor={(item) => item.id.toString()}
      />
    </View>
  )
}

export default SetQuestions

const styles = StyleSheet.create({})