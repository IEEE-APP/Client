import React, { createContext, useContext, useEffect, useState } from 'react';
import { getCurrentUser, getToken } from '../lib/auth';

export interface GLobalContexrProps {
  isLoggedIn: boolean;
  changeLoggIn: (state: boolean) => void;
  user: any;
  changeUser: (state: any) => void
  isLoading: boolean;
}

const GlobalContext = createContext<GLobalContexrProps>({
  isLoggedIn: false,
  changeLoggIn: (state: boolean) => { },
  user: {},
  changeUser: (state: any) => { },
  isLoading: false,
});

export const GlobalProvider = ({ children }: { children: React.ReactNode }) => {

  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [user, setuser] = useState<any | null>(null);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    getCurrentUser()
      .then((res: any) => {
        if (res) {
          setIsLoggedIn(true);
          setuser(res);
        } else {
          setIsLoggedIn(false)
          setuser(null);
        }
      })
      .catch((error: any) => {
        console.log(error)
      })
      .finally(() => {
        setIsLoading(false);
      });
  }, [])

  const changeLoggIn = (state: boolean) => {
    setIsLoggedIn(state)
  }

  const changeUser = (state: any) => {
    setuser(state)
  }
  return (
    <GlobalContext.Provider
      value={{
        isLoggedIn:true,
        changeLoggIn,
        user,
        changeUser,
        isLoading
      }}
    >
      {children}
    </GlobalContext.Provider>
  )
}


export const useGlobalContext = () => {
  return useContext(GlobalContext);
}