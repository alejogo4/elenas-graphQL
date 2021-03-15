import React, {useState, createContext, useEffect} from 'react';

//import {setConfigApp, getConfigAppAttribute} from '../utils/storage';

//setConfigApp(newMinute, 'minutesLocal'); return await getConfigAppAttribute('minutesLocal');
export const ClientContext = createContext(null as any);

export const ClientProvider:React.FC = ({children}) => {
  const [clients, setClients] = useState(null);


  return (
    <ClientContext.Provider
      value={{
        clients,
      }}>
      {children}
    </ClientContext.Provider>
  );
};

