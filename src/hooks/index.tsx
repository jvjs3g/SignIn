import React, { ReactNode } from 'react';

import { AuthProvider } from './auth';
interface type{
  children:ReactNode;
 }

const AppProvider = ({ children}: type) => {
  return(
    <AuthProvider>
      {children}
    </AuthProvider>
  );
} 


export default AppProvider;
