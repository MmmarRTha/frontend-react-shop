import { createRef, useState } from "react";
import { Link } from "react-router-dom";
import axiosClient from "../config/axios";
import Alert from "../components/Alert";

export default function Register() {
    const nameRef = createRef<HTMLInputElement>();
    const emailRef = createRef<HTMLInputElement>();
    const passwordRef = createRef<HTMLInputElement>();
    const passwordConfirmationRef = createRef<HTMLInputElement>();

    const [errors, setErrors] = useState<any>([]);

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();

        const data = {
            name: nameRef.current?.value,
            email: emailRef.current?.value,
            password: passwordRef.current?.value,
            password_confirmation: passwordConfirmationRef.current?.value,
        }
        try {
            await axiosClient.post('/api/register', data);
        } catch (error: any) {
            setErrors(Object.values(error.response.data.errors) );   
        }
    }

    return (
        <>
            <h1 className="text-4xl font-black">Create your Account</h1>
            <p>Create your account filling the form</p>

            <div className="px-5 py-10 mt-10 bg-white rounded-md shadow-lg">
                <form
                    onSubmit={handleSubmit}
                    noValidate
                >
                    {errors ? errors.map((error: any, index: string) => <Alert key={index}>{error}</Alert>) : null }
                    <div className="mb-4">
                        <label
                            className="text-slate-800" 
                            htmlFor="name"
                        >
                            Name:
                        </label>
                        <input 
                            type="text"
                            id="name"
                            className="w-full px-3 py-2 mt-2 border border-gray-300 rounded-md bg-gray-50" 
                            name="name"
                            placeholder="Your name"
                            ref={nameRef}
                        />
                    </div>
                    <div className="mb-4">
                        <label
                            className="text-slate-800" 
                            htmlFor="email"
                        >
                            E-mail:
                        </label>
                        <input 
                            type="text"
                            id="email"
                            className="w-full px-3 py-2 mt-2 border border-gray-300 rounded-md bg-gray-50" 
                            name="email"
                            placeholder="Your e-mail"
                            ref={emailRef}
                        />
                    </div>
                    <div className="mb-4">
                        <label
                            className="text-slate-800" 
                            htmlFor="password"
                        >
                            Password:
                        </label>
                        <input 
                            type="password"
                            id="password"
                            className="w-full px-3 py-2 mt-2 border border-gray-300 rounded-md bg-gray-50" 
                            name="password"
                            placeholder="Your password"
                            ref={passwordRef}
                        />
                    </div>
                    <div className="mb-4">
                        <label
                            className="text-slate-800" 
                            htmlFor="password_confirmation"
                        >
                            Repet Password:
                        </label>
                        <input 
                            type="password"
                            id="password_confirmatio"
                            className="w-full px-3 py-2 mt-2 border border-gray-300 rounded-md bg-gray-50" 
                            name="password_confirmatio"
                            placeholder="Repet your password"
                            ref={passwordConfirmationRef}
                        />

                        <input 
                            type="submit" 
                            value="Create Account"
                            className="w-full px-3 py-2 mt-5 font-bold text-white uppercase bg-green-600 rounded-md cursor-pointer hover:bg-green-700"
                        />
                    </div>
                </form>
            </div>
            <nav className="px-5 py-2 mt-6 font-bold text-center text-white uppercase bg-pink-500 rounded-md md:w-1/4 hover:bg-pink-700">
                <Link to="/auth/login">
                    Sing In
                </Link>
            </nav>
        </>
    )
}
