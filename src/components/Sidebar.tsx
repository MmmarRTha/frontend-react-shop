import useShop from '../hooks/useShop';
import Category from './Category';
import { CategoryT } from '../types';


export default function Sidebar() {

    const { categories } = useShop() as { categories: CategoryT[] };

  return (
    <aside className="md:w-72">
        <div className="p-4">
            <img
                className="mx-auto w-60"
                src="img/cats&coffeeLogo.svg" 
                alt="logo coffee and cats" 
                />
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
            >
                Cancel Order
            </button>
        </div>
        
    </aside>
  )
}
