import { CategoryT } from "../types"
import useShop from "../hooks/useShop"

export default function Category({category:{ slug, name, id }}: {category: CategoryT}) {
    const { handleClickCategory } = useShop() as { handleClickCategory: (id: number) => void };
    const { actualCategory } = useShop() as { actualCategory: CategoryT };

  return (
    <div className={`${actualCategory.id === id ? "bg-green-500 text-white" : 'bg-white'} flex items-center w-full gap-4 p-3 rounded-md cursor-pointer hover:bg-green-500 hover:text-white`}>
        <img 
             src={`img/icono_${slug}.svg`}
             alt="Image slug"
             className="w-12" 
        />
        <button
            className="text-lg font-bold truncate duration-150 ease-in-out cursor-pointer"
            type="button"
            onClick={() => handleClickCategory(id)}
        >
            {name}
        </button>
    </div>
  )
}
