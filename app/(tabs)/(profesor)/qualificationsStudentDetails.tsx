/** @format */

import React, { useState } from "react";
import {
  Image,
  Text,
  TouchableOpacity,
  View,
  ScrollView,
  TextInput,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { useRouter, useLocalSearchParams } from "expo-router";
import { images } from "@/constants";
import ProfrsorInfo from "@/components/(profesor_view)/info";

interface QualificationDetailProps {
  name: string;
  color: string;
  student: string;
  topic: string;
  question: string;
  answer: string;
  grade: string;
}

const qualificationsStudentDetails = () => {
  const router = useRouter();
  const params = useLocalSearchParams();

  const { name, color, student, topic, question, answer, grade } =
    params as unknown as QualificationDetailProps;
  const [newGrade, setNewGrade] = useState(grade);
  const [comment, setComment] = useState("");

  const handleSend = () => {
    // Aquí puedes manejar el envío de la calificación y el comentario
    alert(`Calificación enviada: ${newGrade}, Comentario: ${comment}`);
  };

  return (
    <SafeAreaView className="bg-primary min-h-screen px-4 py-[40px]">
      <ScrollView className="flex-1">
        <ProfrsorInfo />
        <View className="bg-white flex-1 mb-[12px] mt-[10px] rounded-md p-3">
          <View className="flex-row items-center justify-between mt-[0px] bg-[#ffffff] border border-1 border-black py-4 px-4">
            <Image
              source={images.lapiz}
              className="w-[50px] h-[50px]"
              resizeMode="contain"
            />
            <Text className="text-[24px] tracking-tighter  font-plight flex-1 text-center">
              {topic}
            </Text>
            <View
              className={`w-[20px] h-[20px] rounded-full`}
              style={{ backgroundColor: color }}
            />
          </View>
          <View
            className="mt-4 border-r border-black border-opacity-50 rounded-sm border-1"
            style={{ borderWidth: 0.5, opacity: 0.5 }}
          ></View>
          <View className="mt-4">
            <Text className="text-[14px] tracking-tighter  font-plight">
              Alumno
            </Text>
            <Text className="text-[16px] tracking-tighter font-plight bg-[#eeeeee] border border-1 border-black rounded-md text-center">
              {student}
            </Text>
          </View>
          <View className="mt-4">
            <Text className="text-[14px] tracking-tighter  font-plight">
              Pregunta
            </Text>
            <Text className="text-[16px] tracking-tighter font-plight bg-[#eeeeee] border border-1 border-black rounded-md text-center">
              {question}
            </Text>
          </View>
          <View className="mt-4">
            <Text className="text-[14px] tracking-tighter  font-plight">
              Respuesta del Alumno
            </Text>
            <Text className="text-[16px] tracking-tighter font-plight bg-[#eeeeee] border border-1 border-black rounded-md text-center">
              {answer}
            </Text>
          </View>
          <View className="flex-row items-center justify-between mt-4">
            <TouchableOpacity
              className="bg-[#00f6ff] rounded-md px-3 py-1 border border-1 border-black"
              onPress={() => alert("Ver solución")}
            >
              <Text className="text-white">Ver Solución</Text>
            </TouchableOpacity>
            <View className="flex-row items-center">
              <Text className="text-[14px] tracking-tighter  font-plight mr-2">
                Calificación
              </Text>
              <TextInput
                className="bg-[#eeeeee] border border-1 border-black rounded-md p-2 w-[50px] text-center"
                placeholder="00"
                value={newGrade}
                onChangeText={setNewGrade}
                keyboardType="numeric"
              />
            </View>
          </View>
          <View className="mt-4">
            <Text className="text-[14px] tracking-tighter  font-plight mr-2">
              Comentario
            </Text>
            <TextInput
              className="bg-[#eeeeee] border border-1 border-black rounded-md p-2"
              placeholder="Escribe tu comentario aquí"
              value={comment}
              onChangeText={setComment}
            />
          </View>
          <View className="flex-row justify-between my-auto mt-6">
            <TouchableOpacity
              className="bg-[#ff4d4d] rounded-md px-3 py-1"
              onPress={() => router.back()} // Navegar a la ruta anterior
            >
              <Text className="text-white">Volver</Text>
            </TouchableOpacity>
            <TouchableOpacity
              className="bg-[#5d53e2] rounded-md px-3 py-1"
              onPress={handleSend}
            >
              <Text className="text-white">Enviar</Text>
            </TouchableOpacity>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default qualificationsStudentDetails;
