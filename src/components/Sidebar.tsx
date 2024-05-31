import useShop from '../hooks/useShop';
import Category from './Category';
import { CategoryT } from '../types';
import { useAuth } from '../hooks/useAuth';


export default function Sidebar() {

    const { categories } = useShop() as { categories: CategoryT[] };
    const { logout, user } = useAuth('auth', '/');

return (
    <aside className="md:w-72">
        <div className="p-4">
            <img
                className="mx-auto w-60"
                src="img/cats&coffeeLogo.svg" 
                alt="logo coffee and cats" 
            />
        </div>
        <div className='flex items-center justify-center my-10 text-xl text-center'>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="mr-2 size-5">
                <path fillRule="evenodd" d="M18 10a8 8 0 1 1-16 0 8 8 0 0 1 16 0Zm-5.5-2.5a2.5 2.5 0 1 1-5 0 2.5 2.5 0 0 1 5 0ZM10 12a5.99 5.99 0 0 0-4.793 2.39A6.483 6.483 0 0 0 10 16.5a6.483 6.483 0 0 0 4.793-2.11A5.99 5.99 0 0 0 10 12Z" clipRule="evenodd" />
            </svg>

           <p>Hello: {user?.name}</p>
        </div>

        <div className="px-4 mt-10">
            {categories.map( category => (
                <Category 
                    key={category.id}    
                    category={category}
                />
            ))}
        </div>

        <div className='px-5 my-5'>
            <button
                type='button'
                className='w-full p-3 text-lg font-bold text-center text-white bg-red-400 rounded-lg hover:bg-red-500'
                onClick={logout}
            >
                Cancel Order
            </button>
        </div>
        
    </aside>
  )
}
