import { StyleSheet, Text, View, TouchableOpacity } from 'react-native'
import React from 'react'
import { ActivityIndicator, MD2Colors } from 'react-native-paper';
import { isLoading } from 'expo-font';

export interface CustomButtonProps {
  title: string;
  handlePress: () => void;
  containerStyle: string;
  textStyle: string;
  isLoading: boolean
}

const CustomButton = (props: CustomButtonProps) => {
  return (
    <TouchableOpacity
      onPress={props.handlePress}
      activeOpacity={0.7}
      className={`bg-[#170ad6] flex-row rounded-xl shadow-sm min-h-[62px] justify-center items-center ${props.containerStyle} ${props.isLoading ? 'opacity-[0.5]' : ''}`}
      disabled={props.isLoading}
    >
      <Text
        className={`text-primary text-white font-psemibold text-lg ${props.textStyle}`}>{props.title}
      </Text>
      {props.isLoading && (
        <ActivityIndicator color={MD2Colors.white} />
      )
      }
    </TouchableOpacity>
  )
}

export default CustomButton

const styles = StyleSheet.create({})