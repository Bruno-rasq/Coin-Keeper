import { createContext } from 'react';

interface ContextType {
  // Define your context type here
}

const AppContext = createContext<ContextType | undefined>(undefined);


export default AppContext;