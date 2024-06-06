import { Link } from 'react-router-dom'
import { useAuth } from '../hooks/useAuth'

export default function AdminSidebar() {
    const {logout} = useAuth('auth', '/login');
    
    return (
        <aside className="h-screen md:w-72">
            <div className="flex justify-center md:justify-start">
                <img 
                    src="/img/cats&coffeeLogo.svg"
                    alt="image logo"
                    className="max-w-xs p-4" 
                />
            </div>

            <nav className='flex flex-col p-4'>
                <Link to="/admin" className="text-lg font-bold">Orders</Link>
                <Link to="/admin/products" className="text-lg font-bold">Products</Link>
            </nav>
            <div className='px-5 my-5'>
                <button
                    type='button'
                    className='w-full p-3 text-lg font-bold text-center text-white truncate bg-red-400 rounded-lg hover:bg-red-500'
                    onClick={logout}
                >
                    Close Session
                </button>
            </div>
        </aside>
    )
}