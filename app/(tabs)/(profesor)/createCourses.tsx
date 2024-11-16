/** @format */

import React, { useState } from "react";
import { Image, Text, TouchableOpacity, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import ProfrsorInfo from "@/components/(profesor_view)/info";
import { images } from "@/constants";
import FormField from "@/components/text-input";
import { router } from "expo-router";
import { useGlobalContext } from "@/context/GlovalProvider";
import { createMateria } from "@/lib/profesor/repository";
import { Chip } from "react-native-paper";

const createCourses = () => {

  const { credentials, setMateriaProfesor } = useGlobalContext()
  const [messageError, setmessageError] = useState('')
  const [messageErrorStatus, setMessageErrorStatus] = useState(false)

  const [form, setForm] = useState({
    materia: "",
    seccion: "",
    vacantes: "",
    descripcion: "",
  });

  const handleSubmit = async (id: number, class_name: string) => {
    const response = await createMateria(id, class_name)
    if (!response.status) {
      setmessageError(response.data)
      setMessageErrorStatus(true)
      setTimeout(() => {
        setmessageError('')
        setMessageErrorStatus(false)
      }, 1000)
      return;
    }
    setMateriaProfesor!(response.data)
    router.back()
    //TODO: almacenar en el context
  }

  return (
    <SafeAreaView className="bg-primary min-h-screen px-4 py-[40px]">
      <View className="relative flex-1">
        <ProfrsorInfo />
        <View className="bg-white flex-1 mb-[10px] mt-[10px] rounded-md p-4">
          <View className="flex-row items-center justify-between">
            <Image
              source={images.papel}
              className="w-[100px] h-[80px]"
              resizeMode="contain"
            />
            <View className="absolute top-0 left-[80px] right-0 bottom-0 justify-center items-center">
              <Text className="text-[30px] tracking-tighter uppercase font-plight">
                Crear materia {credentials?.user_id}
              </Text>
            </View>
          </View>
          <View className="flex-1">
            <FormField
              handleChangeText={(e) => setForm({ ...form, materia: e })}
              placeholder="geometry.."
              textStyle="text-black"
              inputStyle=""
              otherStyles="mt-[10px]"
              value={form.materia}
              title={"Materia"}
              password={false}
              containerStyle="bg-[#eeeeee] border border-1 border-black"
            />
            <FormField
              handleChangeText={(e) => setForm({ ...form, seccion: e })}
              placeholder="A.."
              textStyle="text-black"
              inputStyle=""
              otherStyles="mt-[10px]"
              value={form.seccion}
              title={"Seccion"}
              password={false}
              containerStyle="bg-[#eeeeee] border border-1 border-black"
            />
            <FormField
              handleChangeText={(e) => setForm({ ...form, vacantes: e })}
              placeholder="40..."
              textStyle="text-black"
              inputStyle=""
              otherStyles="mt-[10px]"
              value={form.vacantes}
              title={"Vacantes"}
              password={false}
              containerStyle="bg-[#eeeeee] border border-1 border-black"
            />
            <FormField
              handleChangeText={(e) => setForm({ ...form, descripcion: e })}
              placeholder="40..."
              textStyle="text-black"
              inputStyle=""
              otherStyles="mt-[10px]"
              value={form.descripcion}
              title={"Descripcion"}
              password={false}
              containerStyle="bg-[#eeeeee] border border-1 border-black"
            />
          </View>
          <View className="flex-row justify-between my-auto">
            <TouchableOpacity
              className="bg-[#ff4d4d] rounded-md px-3 py-1"
              onPress={() => router.push("/(profesor)/bookmark")} // Navegar a la ruta "create"
            >
              <Text className="text-white">Volver</Text>
            </TouchableOpacity>
            <TouchableOpacity
              className="bg-[#5d53e2] px-3 py-1 rounded-md"
              onPress={() => handleSubmit(credentials?.user_id as number, form.materia)}
              disabled={messageErrorStatus}
            >
              <Text className="text-white">Agregar</Text>
            </TouchableOpacity>
          </View>
          {messageErrorStatus && (
            <Chip
              className='mt-[10px] '
              icon="information"
              onPress={() => console.log('Pressed')}
            >
              {messageError}
            </Chip>
          )}
        </View>
      </View>
    </SafeAreaView>
  );
};

export default createCourses;
