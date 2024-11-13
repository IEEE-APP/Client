import React, { createContext, useContext, useEffect, useState } from 'react';
import { clearToken, getCurrentUser, getData } from '../lib/auth';
import axios from 'axios';
import { Href, router } from 'expo-router';

import { GLobalContexrProps, CredentialsUI } from '@/lib/interfaces/useInterfaces';

const GlobalContext = createContext<GLobalContexrProps>({
  isLoggedIn: false,
  changeLoggIn: (state: boolean) => { },
  user: {},
  changeUser: (state: any) => { },
  isLoading: false,
  setCredentials: (credentials: CredentialsUI) => { },
  credentials: undefined,

});

export const GlobalProvider = ({ children }: { children: React.ReactNode }) => {

  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [user, setuser] = useState<any | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [credentials, setCredentials] = useState<CredentialsUI | undefined>(undefined)

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

  const getCredentias = async (credentials: CredentialsUI) => {
    setCredentials(credentials)
  }


  return (
    <GlobalContext.Provider
      value={{
        isLoggedIn: true,
        changeLoggIn,
        user,
        changeUser,
        isLoading,
        setCredentials: (e) => { getCredentias(e) },
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