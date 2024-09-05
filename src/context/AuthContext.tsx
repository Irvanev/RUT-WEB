import React, {ReactNode, createContext, useContext, useState} from 'react';

interface AuthContextType {
    auth: string | null;
    login: (username: string, password: string) => void;
    logout: () => void;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

interface AuthProviderProps {
    children: ReactNode;
}

export const AuthProvider: React.FC<AuthProviderProps> = ({children}) => {
    const [auth, setAuth] = useState<string | null>(localStorage.getItem('auth'));

    const login = (username: string, password: string) => {
        const credentials = btoa(`${username}:${password}`);
        localStorage.setItem('auth', credentials);
        setAuth(credentials);
    };

    const logout = () => {
        localStorage.removeItem('auth');
        setAuth(null);
    };

    return <AuthContext.Provider value={{auth, login, logout}}>{children}</AuthContext.Provider>;
};

export const useAuth = () => {
    const context = useContext(AuthContext);
    if (!context) {
        throw new Error('useAuth must be used within an AuthProvider');
    }
    return context;
};
