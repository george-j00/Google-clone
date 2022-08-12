import React, { createContext, useContext, useState } from "react";

const ResultContext = createContext('');
const baseUrl = 'https://google-search3.p.rapidapi.com/api/v1';

export const ResultProvider = ({ children }) => {

    const [result, setResult] = useState([]);
    const [isLoading, setIsloading] = useState(false);
    const [searchTerm, setSearchTerm] = useState('');

    const getResult = async (type) => {

        //loading starts .
        setIsloading(true);
        //type is '/search /images /video /news'

        //await until result comes..

        const response = await fetch(`${baseUrl}${type}`, { //completes the url
            method: 'GET',
            headers: {
                'X-User-Agent': 'desktop',
                'X-Proxy-Location': 'EU',
                'X-RapidAPI-Key': '3d70a687eemsh4b430604a76a40dp17650ejsn187d8b18af99',//from rapid api/googleapi
                'X-RapidAPI-Host': 'google-search3.p.rapidapi.com'
            }

        });

        const data = await response.json(); //getting data as json.
        
        setResult(data); //set result into state.
        setIsloading(false) //stops loading.

    }




    return (

        //already defined above
        <ResultContext.Provider value={{ getResult, result, searchTerm, setSearchTerm, isLoading }}>
            {children}
        </ResultContext.Provider>
    )

}
// simplification making useResultContext function .(to call   )
export const useResultContext = () =>
    useContext(ResultContext);  