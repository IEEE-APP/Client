/** @format */

import React, { useState } from "react";
import { View, Text, TextInput, TouchableOpacity, Image } from "react-native";
import * as ImagePicker from "expo-image-picker";
import MaterialIcons from "@expo/vector-icons/MaterialIcons";
import { router } from "expo-router";

interface AnswerFormProps {
  onSend: (answer: string, imageUri: string | null) => void;
}

const AnswerForm = ({ onSend }: AnswerFormProps) => {
  const [answer, setAnswer] = useState("");
  const [imageUri, setImageUri] = useState<string | null>(null);

  const pickImage = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });

    if (!result.canceled) {
      setImageUri(result.assets[0].uri);
      setAnswer(result.assets[0].mimeType || ""); // Set the image MIME type in the answer field
    }
  };

  const handleSend = () => {
    onSend(answer, imageUri);
    setAnswer("");
    setImageUri(null);
  };

  return (
    <View className="mt-4">
      <Text className="text-[14px] tracking-tighter  font-plight">
        Respuesta
      </Text>
      <View className="shadow-md w-full mt-[10px] min-h-[64px] px-4 rounded-2xl focus:border-secondary relative bg-[#eeeeee] border border-1 border-black text-black flex-col">
        <TextInput
          className="flex-1 text-base"
          placeholder="Escribe tu respuesta aquí"
          value={answer}
          onChangeText={setAnswer}
        />
        <View className="absolute bottom-0 right-0 flex-row p-3">
          <TouchableOpacity
            className="bg-[#5d53e2] rounded-md px-3 py-1"
            onPress={pickImage}
          >
            <MaterialIcons name="image" color="white" size={25} />
          </TouchableOpacity>
        </View>
      </View>
      {imageUri && (
        <Image
          source={{ uri: imageUri }}
          className="w-[200px] h-[200px] mt-4"
          resizeMode="contain"
        />
      )}
      <View className="flex-row justify-between mt-4">
        <TouchableOpacity
          className="bg-[#ff4d4d] rounded-md px-3 py-1"
          onPress={() => router.push("/(profesor)/queries")} // Navegar a la ruta anterior
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
  );
};

export default AnswerForm;
