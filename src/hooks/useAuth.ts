import useSWR from "swr";
import axiosClient from "../config/axios";

export const useAuth = (middleware : string, url: string) => {

    type LoginDataProps = {
        email?: string;
        password?: string;
    }

    const token = localStorage.getItem('AUTH_TOKEN');

    const {data: user, error, mutate} = useSWR('api/user', () =>
        axiosClient('api/user', {
            headers: {
                Authorization: `Bearer ${token}`
            }
        })
        .then(res => res.data)
        .catch(error => {
            throw Error(error?.response?.data?.message)
        })
    )

    const login = async (loginData: LoginDataProps, setErrors: (arg0: unknown[]) => void) => {
        try {
            const {data} = await axiosClient.post('/api/login', loginData);
            localStorage.setItem('AUTH_TOKEN', data.token);
            setErrors([]);
            await mutate();
        } catch (error: any) {
            setErrors(Object.values(error.response.data.errors) );
        }
    }

    const register = () => {

    }

    const logout = () => {

    }

    console.log(user)
    console.log(error)

    return {
        login,
        register,
        logout
    }
}