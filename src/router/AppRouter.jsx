import React, { useEffect } from 'react'
import { useState } from 'react';
import { useContext } from 'react';
import { createContext } from 'react'
import { useAuthContext } from '../contexts/AuthContext';
import { RouterProvider } from 'react-router-dom';
import OnlineRouter from './OnlineRouter';
import OfflineRouter from './OfflineRouter';

// creation d'un mini context pour la session 
const SessionContext = createContext({
    inSession: false
});
// création du book pour utliser le context de session

export const useSessionContext = () => useContext(SessionContext);





const AppRouter = () => {
    // on declare nos state session
    const [inSession, setInSession] = useState(null);
    // on recupere les infos de notre authcontext
    const { userId, setUserId, setEmail, setNickname } = useAuthContext();
    //  on va regarder si on a des infos dans le localstorage
    const getUserInfos = async () => {
        const user = JSON.parse(localStorage.getItem('userInfos'));
        if (user) {
            setUserId(user.userId);
            setEmail(user.email);
            setNickname(user.nickname);
            setInSession(true);
        } else {
            setInSession(false);
        }
    };

    // on vas appeler getUserInfos des que l'on monte dans le composant
    useEffect(() => {
        getUserInfos();

    }, [userId]);

    const value = {
        inSession
    }


    return (
        // on recupere le context de session
        <SessionContext.Provider value={value}>
            {/* ici on appelle le bon router suivant le context de session */}
            <RouterProvider router={inSession ? OnlineRouter : OfflineRouter} />
        </SessionContext.Provider>
    )
}

export default AppRouter