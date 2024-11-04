import React, { createContext, useContext, useEffect, useState } from 'react';
import { clearToken, getCurrentUser, getData } from '../lib/auth';
import axios from 'axios';
import { Href, router } from 'expo-router';

export interface GLobalContexrProps {
  isLoggedIn: boolean;
  changeLoggIn: (state: boolean) => void;
  user: any;
  changeUser: (state: any) => void
  isLoading: boolean;
  getCredentias: (token: string) => void;
  credentials: any
}

const GlobalContext = createContext<GLobalContexrProps>({
  isLoggedIn: false,
  changeLoggIn: (state: boolean) => { },
  user: {},
  changeUser: (state: any) => { },
  isLoading: false,
  getCredentias: (token: string) => { },
  credentials: {}
});

export const GlobalProvider = ({ children }: { children: React.ReactNode }) => {

  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [user, setuser] = useState<any | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [credentials, setCredentials] = useState<any>({})

  const verifyIfExistToken = async () => {
    const data = await getData()
    return data;
  }

  useEffect(() => {
    // clearToken()
    verifyIfExistToken()
      .then(async (token: any) => {
        if (token) {
          const response = await getCredentias(token)
          router.replace(`/(tabs)/(${response})/home` as Href<string | object>)
        }
      })
      .catch((error: any) => {
        console.log('somethinf worn with the database')
      })
  }, [])

  const changeLoggIn = (state: boolean) => {
    setIsLoggedIn(state)
  }

  const changeUser = (state: any) => {
    setuser(state)
  }

  const getCredentias = async (token: string) => {
    const credentialsResponse = await axios.get(`http://192.168.10.3:4000/api/auth/login/${token}`)
    const data = credentialsResponse.data.jwtResponse.decode
    setCredentials({ email: data.email, userType: data.userType, nombre: data.nombre, apellido: data.apellidos })
    return data.userType === 0 ? "profesor" : "student"
  }

  return (
    <GlobalContext.Provider
      value={{
        isLoggedIn: true,
        changeLoggIn,
        user,
        changeUser,
        isLoading,
        getCredentias,
        credentials
      }}
    >
      {children}
    </GlobalContext.Provider>
  )
}


export const useGlobalContext = () => {
  return useContext(GlobalContext);
}