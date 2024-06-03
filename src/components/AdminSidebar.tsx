import { Link } from 'react-router-dom'

export default function AdminSidebar() {
    return (
        <aside className="h-screen md:w-72">
            <div>
                <img 
                    src="/img/cats&coffeeLogo.svg"
                    alt="image logo"
                    className="p-4 m-w-xs" 
                />
            </div>

            <nav className='flex flex-col p-4'>
                <Link to="/admin" className="text-lg font-bold">Orders</Link>
                <Link to="/admin/products" className="text-lg font-bold">Products</Link>
            </nav>
            <div className='px-5 my-5'>
                <button
                    type='button'
                    className='w-full p-3 text-lg font-bold text-center text-white bg-red-400 rounded-lg hover:bg-red-500'
                >
                    Close Session
                </button>
            </div>
        </aside>
    )
}