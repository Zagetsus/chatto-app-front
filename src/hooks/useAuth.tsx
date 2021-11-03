import React, { useState, createContext, useContext } from 'react';
import { api } from '../services/api';
import { Form } from './useForm';
import {useToast} from "./useToast";
import {useNavigate} from "react-router-dom";

export const AuthContext = createContext<any>({} as any);

interface OwnProps {
    children?: React.ReactNode;
}

export const AuthProvider: React.FC<OwnProps> = ({ children }): JSX.Element => {
    const [user, setUser] = useState<any>();

    const navigate = useNavigate();
    const { toast } = useToast();

    const saveUser = (user: unknown) => {
        setUser(user);
    };

    const signIn = async (form: Form) => {
        try {
            const response = await api.post('/auth/login', form);

            if (!response) {
                return;
            }

            const {
                data,
            } = response;

            saveUser(data);

            navigate('/chat');

            return true;

        } catch (e: any) {
           if (e.response && e.response.data.type === "toast"){
               toast({
                   type: 'error',
                   description: e.response.data.message
               })

               return;
           }

            toast({
                type: 'error',
                description: "Verifique sua conexão!"
            })
        }
    };

    return (
        <AuthContext.Provider
            value={{
                user,
                setUser: saveUser,
                signIn,
            }}
        >
            {children}
        </AuthContext.Provider>
    );
};

export const useAuth = (): any => {
    const context = useContext(AuthContext);

    if (!context) {
        throw new Error('useAuth deve ser usado com o AuthProvider');
    }

    return context;
};
