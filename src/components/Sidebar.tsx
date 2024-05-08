import Category from './Category';
import { categories } from '../data/categories';

export default function Sidebar() {
  return (
    <aside className="md:w-72">
        <div className="p-4">
            <img
                className="mx-auto w-60"
                src="img/cats&coffeeLogo.svg" 
                alt="logo coffee and cats" 
                />
        </div>

        <div className="mt-10">
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
                className='w-full p-3 font-bold text-center text-white bg-red-500 rounded-lg hover:bg-red-600'
            >
                Cancel Order
            </button>
        </div>
        
    </aside>
  )
}
