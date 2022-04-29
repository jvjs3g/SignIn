import React, { createContext, useCallback, useState, useContext, ReactNode } from 'react';

import api from '../service/api';

interface IUser {
  id: string;
  name: string;
  email: string;
}

interface IAuthState {
  token: string;
  user: IUser;
}

interface ISignInCredentials {
  email: string;
  password: string;
}

interface IAuthContext {
  user: IUser;
  signIn(credentials: ISignInCredentials): Promise<void>;
  signOut(): void;
}

interface type{
  children:ReactNode;
}



const AuthContext = createContext<IAuthContext>({} as IAuthContext);

const AuthProvider = ({ children }: type) => {
  const [data, setData] = useState<IAuthState>(() => {
    const token = localStorage.getItem('@Sign:token');
    const user = localStorage.getItem('@Sign:user');

    if (token && user) {
      api.defaults.headers.common['Authorization'] = `Bearer ${token}`;

      return { token, user: JSON.parse(user) };
    }

    return {} as IAuthState;
  });

  const signIn = useCallback(async ({ email, password } : ISignInCredentials) => {
    const response = await api.post('/users/auth', {
      email,
      password,
    });

    const { token, user } = response.data;

    localStorage.setItem('@Sign:token', token);
    localStorage.setItem('@Sign:user', JSON.stringify(user));

    api.defaults.headers.common['Authorization'] = `Bearer ${token}`;

    setData({ token, user });
  }, []);

  const signOut = useCallback(() => {
    localStorage.removeItem('@Sign:token');
    localStorage.removeItem('@Sign:user');

    setData({} as IAuthState);
  }, []);



  return (
    <AuthContext.Provider
      value={{ user: data.user, signIn, signOut }}
    >
      {children}
    </AuthContext.Provider>
  );
};

function useAuth(): IAuthContext {
  const context = useContext(AuthContext);

  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider');
  }

  return context;
}

export { AuthProvider, useAuth };
