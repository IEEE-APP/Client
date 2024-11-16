export interface GLobalContexrProps {
  isLoggedIn: boolean;
  changeLoggIn: (state: boolean) => void;
  user: any;
  changeUser: (state: any) => void
  isLoading: boolean;
  setCredentials: (credentials: CredentialsUI) => void;
  credentials: CredentialsUI | undefined;
  materiasStudent?:Array<any>;
  setMateriaStudent?:(e:any)=>void;
  materiaProfesor?:Array<any>;
  setMateriaProfesor?:(e:any)=>void;
}

export interface CredentialsUI {
  user_id: number,
  email: string,
  first_name: string,
  last_name: string,
  degree: string,
  phone_number: number
}