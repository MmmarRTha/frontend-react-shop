import { Link } from "react-router-dom";

export default function Register() {
  return (
    <>
    <h1 className="text-4xl font-black">Create your Account</h1>
    <p>Create your account filling the form</p>

    <div className="px-5 py-10 mt-10 bg-white rounded-md shadow-lg">
        <form action="">
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
                />

                <input 
                    type="submit" 
                    value="Create Account"
                    className="w-full px-3 py-2 mt-5 font-bold text-white uppercase bg-blue-500 rounded-md cursor-pointer hover:bg-blue-700"
                />
            </div>
        </form>
    </div>
    </>

  )
}
