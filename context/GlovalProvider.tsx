import React, { createContext, useContext, useEffect, useState } from 'react';
import { getSessionData } from '../lib/auth';
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
  materiasStudent: [],
  setMateriaStudent: (e:any) => { }
});

export const GlobalProvider = ({ children }: { children: React.ReactNode }) => {

  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [user, setuser] = useState<any | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [credentials, setCredentials] = useState<CredentialsUI | undefined>(undefined)
  const [materiasStudent, setMateriaStudent] = useState<any>([])

  const verifyIfExistToken = async () => {
    const getSession = await getSessionData()
    return getSession
  }

  const changeMateriaStudent = (materia: any) => {
    setMateriaStudent([...materiasStudent, materia])
  }

  useEffect(() => {
    // clearToken()
    verifyIfExistToken()
      .then(async (token: any) => {
        if (token) {
          // console.log(token.degree)
          setCredentials(token)
          if (token.degree === undefined) {
            router.replace(`/(tabs)/(profesor)/home` as Href<string | object>)
            return
          }
          router.replace(`/(tabs)/(estudiante)/home` as Href<string | object>)

        }
      })
      .catch((error: any) => {
        console.log('somethinf worn with the database', error)
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
        credentials,
        materiasStudent,
        setMateriaStudent:(e:any)=>{changeMateriaStudent(e)}
      }}
    >
      {children}
    </GlobalContext.Provider>
  )
}


export const useGlobalContext = () => {
  return useContext(GlobalContext);
}