import { CategoryT } from "../types"
import useShop from "../hooks/useShop"

export default function Category({category:{ slug, name, id }}: {category: CategoryT}) {
    const { handleClickCategory } = useShop() as { handleClickCategory: (id: number) => void };
    const { actualCategory } = useShop() as { actualCategory: CategoryT };

  return (
    <div className={`${actualCategory.id === id ? "bg-indigo-500 text-white border border-indigo-500" : 'bg-slate-100'} flex items-center w-full gap-4 p-3 cursor-pointer hover:-translate-y-1 hover:scale-110 hover:bg-indigo-400 hover:border-indigo-400 duration-300 hover:rounded-lg rounded-md border`}>
        <img 
             src={`img/icono_${slug}.svg`}
             alt="Image slug"
             className="w-12" 
        />
        <button
            className="text-lg font-bold truncate cursor-pointer"
            type="button"
            onClick={() => handleClickCategory(id)}
        >
            {name}
        </button>
    </div>
  )
}
