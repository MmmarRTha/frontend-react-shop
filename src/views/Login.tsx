import { createRef, useState } from "react";
import { Link } from "react-router-dom";
import Alert from "../components/Alert";
import { useAuth } from "../hooks/useAuth";

export default function Login() {

    const emailRef = createRef<HTMLInputElement>();
    const passwordRef = createRef<HTMLInputElement>();

    const [errors, setErrors] = useState<any>([]);
    const {login} = useAuth('guest', '/');

    const [isLoading, setIsLoading] = useState<boolean>(false);

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();

        setIsLoading(true);

        const loginData = {
            email: emailRef.current?.value,
            password: passwordRef.current?.value,
        }
        
        login(loginData, setErrors);

        setTimeout(() => {
            setIsLoading(false);
        }, 6000);
    }
    
  return (
    <>
        <h1 className="text-4xl font-black">Sign In</h1>
        <p>To Order now you must sing in</p>

        <div className="px-5 py-10 mt-10 bg-white rounded-md shadow-lg">
            <form
                onSubmit={handleSubmit}
                noValidate 
            >
                {errors ? errors.map((error: any, index: string) => <Alert key={index}>{error}</Alert>) : null }
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
                    <input 
                        type="submit" 
                        value={isLoading ? 'Loading ...' : 'Sign In'}
                        className="w-full px-3 py-2 mt-5 font-bold text-white uppercase bg-green-600 rounded-md cursor-pointer hover:bg-green-700"
                    />
            </form>
        </div>
        <nav className="px-2 py-2 mt-6 font-bold text-center text-white uppercase bg-pink-500 rounded-md md:w-2/4 hover:bg-pink-700">
            <Link to="/auth/register">
                Create Account
            </Link>
        </nav>
    </>
  )
}
