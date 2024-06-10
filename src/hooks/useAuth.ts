import useSWR from "swr";
import axiosClient from "../config/axios";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { User } from "../types";

export const useAuth = (middleware : string, url: string) => {

    type LoginDataProps = {
        email?: string;
        password?: string;
    }

    const token = localStorage.getItem('AUTH_TOKEN');
    const navigate = useNavigate();

    const {data: user, error, mutate} = useSWR('/api/user', () =>
        axiosClient('https://wedvesu.nyc.dom.my.id/api/api/user', {
            headers: {
                Authorization: `Bearer ${token}`
            }
        })
        .then(res => res.data)
        .catch(error => {
            throw Error(error?.response?.data?.errors)
        })
    )

    const login = async (loginData: LoginDataProps, setErrors: (arg0: unknown[]) => void) => {
        try {
            const {data} = await axiosClient.post('https://wedvesu.nyc.dom.my.id/api/login', loginData);
            localStorage.setItem('AUTH_TOKEN', data.token);
            setErrors([]);
            await mutate();
        } catch (error: any) {
            setErrors(Object.values(error.response.data.errors) );
        }
    }

    const register = async (registerData: User, setErrors: (arg0: unknown[]) => void) => {
        try {
            const {data} = await axiosClient.post('https://wedvesu.nyc.dom.my.id/api/register', registerData);
            localStorage.setItem('AUTH_TOKEN', data.token);
            setErrors([]);
            await mutate();
        } catch (error: any) {
            setErrors(Object.values(error.response.data.errors) );   
        }
    }

    const logout = async () => {
        try {
            await axiosClient.post('https://wedvesu.nyc.dom.my.id/api/logout', null, {
                headers: {
                    Authorization: `Bearer ${token}`
                }
            });
            localStorage.removeItem('AUTH_TOKEN');
            await mutate(undefined);
        } catch (error: any) {
            throw Error(error?.response?.data?.errors)
        }
    }

    useEffect(() => {
        if (middleware === 'guest' && url && user) {
            navigate(url)
        }
        if (middleware === 'auth' && error) {
            navigate('/auth/login')
        }
    }, [user, error])

    return {
        login,
        register,
        logout,
        user,
        error,
    }
}