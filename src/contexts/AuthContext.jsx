import { createContext, useContext, useState } from "react";

// création du context d'authentification
const AuthContext = createContext({
    userId: '', //state
    email: '', //state
    nickname: '', //state
    setUserId: () => { }, //méthode pour modifier le state userId
    setEmail: () => { }, //méthode pour modifier le state email
    setNickname: () => { }, //méthode pour modifier le state nickname
    signIn: async () => { }, //méthode pour se connecter
    signOut: async () => { }, //méthode pour se deconnecter
});

// on définit la mécanique qui permet de gérer l'authentification
const AuthContextProvider = ({ children }) => {
    const [userId, setUserId] = useState('');
    const [email, setEmail] = useState('');
    const [nickname, setNickname] = useState('');

    const signIn = async (user) => {
        try {
            setUserId(user.userId)
            setEmail(user.email)
            setNickname(user.nickname)
            localStorage.setItem('userInfos', JSON.stringify(user))
        } catch (error) {
            throw new Error(`Erreur lors de la connexion: ${error}`)
        }
    };
    const signOut = async () => {
        try {
            setUserId(user.userId)
            setEmail(user.email)
            setNickname(user.nickname)
            localStorage.removeItem('userInfos')
        } catch (error) {
            throw new Error(`Erreur lors de la deconnexion: ${error}`)
        }
    };
    const value = {
        userId,
        email,
        nickname,
        setUserId,
        setEmail,
        setNickname,
        signIn,
        signOut
    };
    return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>
}

// création de notre propre hook pour utiliser le context d'authentification
const useAuthContext = () => useContext(AuthContext)

export { AuthContext, AuthContextProvider, useAuthContext };