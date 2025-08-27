'use client';

import {
    createContext,
    useState,
    useContext,
    useEffect,
    ReactNode
} from 'react';


import {data as dataAM} from '../data/dataAM';
import {data as dataRU} from '../data/dataRU';
import {data as dataEN} from '../data/dataEN';


type DataType = typeof dataAM;

type LangContextType = {
    currentLang: string;
    data: DataType;
    setCurrentLang: (c: string)=> void;
};


const LangContext = createContext<LangContextType>({
    currentLang: '',
    data: dataAM,
    setCurrentLang: ()=> {},
});

export function LangProvider({ children }: { children: ReactNode }) {

    const [currentLang, setCurrentLang] = useState('am');
    const [data, setData] = useState(dataAM);


    useEffect(()=>{

        if(currentLang === 'am') setData(dataAM);
        if(currentLang === 'ru') setData(dataRU);
        if(currentLang === 'en') setData(dataEN);

    }, [currentLang]);
    

    return (
        <LangContext.Provider value={{ currentLang, setCurrentLang, data }}>
            {children}
        </LangContext.Provider>
    )
}

export const useLanguage = () => useContext(LangContext);