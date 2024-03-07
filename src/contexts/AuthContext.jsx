import { createContext, useContext, useState } from "react";

// creation du contexte d'authentification
const AuthContext = createContext({
    userId: '', //state
    email: '', // state
    nickname: '', // state
    setUserId: () => { }, // methode pour modifier le state userId
    setEmail: () => { },// methode pour modifier le state Email
    setNickname: () => { }, // methode pour modifier le state Nickname
    signIn: async () => { }, //methode pour se connecter
    signOut: async () => { }, //methode pour se déconnecter
});

// on definit tt la meca de notre Context
const AuthContextProvider = () => {
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
                throw new Error('Erreur lors de la connexion : ${error}')
            }
        }


        const signOut = async () => {
            try {
                setUserId('')
                setEmail('')
                setNickname('')
                localStorage.removeItem('userInfos')
            } catch (error) {
                throw new Error('Erreur lors de la déconnexion : ${error}')
            }

        }

    }

    const value = {
        userId,
        email,
        nickname,
        setUserId,
        setEmail,
        setNickname,
        signIn,
        signOut
    }

    return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>
}

// creation de notre propre hook pour utiliser le context d'authenfication
const useAuthContext = () => useContext(AuthContext)

export { AuthContext, AuthContextProvider, useAuthContext }