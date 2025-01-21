import React, { ReactNode } from 'react';
import { SWRConfig } from 'swr';


// Define the props for the SWRProvider component
interface ISWRProviderProps {
  children: ReactNode; 
}

// we can put more config in here
const SWRProvider: React.FC<ISWRProviderProps> = ({ children}) => {
  return (
    <SWRConfig >
      {children}
    </SWRConfig>
  );
}

export default SWRProvider