import { Link } from "react-router-dom";

export default function Login() {
  return (
    <>
        <h1 className="text-4xl font-black">Sign In</h1>
        <p>To Order now you must sing in</p>

        <div className="px-5 py-10 mt-10 bg-white rounded-md shadow-lg">
            <form action="">
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
                    />
                </div>
                    <input 
                        type="submit" 
                        value="sing in"
                        className="w-full px-3 py-2 mt-5 font-bold text-white uppercase bg-green-600 rounded-md cursor-pointer hover:bg-green-700"
                    />
            </form>
        </div>
        <nav className="mt-5">
            <Link to="/auth/register">
                Create Account
            </Link>
        </nav>
    </>
  )
}
