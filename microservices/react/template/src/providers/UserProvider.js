import {createContext, useEffect, useState} from 'react';
import BackendService from "../services/BackendService";
import * as React from "react";

export const UserContext = createContext([]);


export default function UserProvider({children}) {
    const [iam, setIam] = useState()
    const backendService = new BackendService()


    const getMe = async () => {
        try {
            const fetchedIam = await backendService?.getMe();
            setIam(fetchedIam)
        } catch (e) {

        }
    }


    useEffect(() => {
        getMe().then();
        // eslint-disable-next-line
    }, []);


    return (
        <UserContext.Provider
            value={{ iam }}>
            {children}
        </UserContext.Provider>
    )
}