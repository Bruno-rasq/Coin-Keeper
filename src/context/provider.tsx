import  AppContext  from './AppContext';
import { ReactNode, useState } from 'react';

export const Provider = ({ children }: {children:ReactNode}) => {

  const [currentBalance, setCurrentBalance] = useState(0);

  const values = {
    currentBalance,
    setCurrentBalance
  }

  return(
    <AppContext.Provider value={values}>
      {children}
    </AppContext.Provider>
  )
}