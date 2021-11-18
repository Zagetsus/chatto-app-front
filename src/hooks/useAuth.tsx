import React, { useState, createContext, useContext } from 'react';
import { api } from '../services/api';
import { Form } from './useForm';
import {useToast} from "./useToast";
import {useNavigate} from "react-router-dom";
import secure from "../config/segureLS";

export const AuthContext = createContext<any>({} as any);

interface OwnProps {
    children?: React.ReactNode;
}

interface IUser {
    name: string;
    email: string;
    username: string;
    image: string;
}

interface IData {
    access_token: string;
    user: IUser;
}

export const AuthProvider: React.FC<OwnProps> = ({ children }): JSX.Element => {
    const getToken = () => {
        const token = secure.get('chatto@access-token')

        return token?.data
    }
    const getUser = () => {
        const user = secure.get('chatto@user')

        return user?.data
    }

    const [token, setToken] = useState(getToken());
    const [user, setUser] = useState<IUser>(getUser());

    const navigate = useNavigate();
    const { toast } = useToast();

    const saveToken = (userToken: string) => {
        secure.set('chatto@access-token', {data: userToken})
        setToken(userToken);
    };

    const saveUser = (user: IUser) => {
        secure.set('chatto@user', {data: user})
        setUser(user);
    };

    const logOut = async () => {
        secure.clear()
    }

    const signIn = async (form: Form) => {
        try {
            const response = await api.post<IData>('/auth/login', form);

            if (!response) {
                return;
            }

            const {
                data: { access_token, user },
            } = response;

            saveToken( access_token )
            saveUser( user );

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
                token,
                setToken: saveToken,
                user,
                setUser: saveUser,
                getUser,
                logOut,
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
