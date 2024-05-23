import { ReactNode, createContext, useState } from 'react'
import { categories as categoriesDB} from '../data/categories'
import { CategoryT } from '../types';

type ShopContextProps = {
    categories: CategoryT[];
    actualCategory: CategoryT;
    handleClickCategory: (id: number) => void;
}

type ShopProviderProps = {
    children: ReactNode;
}
export const ShopContext = createContext<ShopContextProps>(null!)

export const ShopProvider = ({ children, }: ShopProviderProps) => {
    const [categories, setCategories] = useState(categoriesDB);
    const [actualCategory, setActualCategory] = useState(categories[0]);
    const handleClickCategory = (id: number) => {
        const category = categories.filter( category => category.id === id )[0]
        setActualCategory(category)
    }

    return (
        <ShopContext.Provider 
            value={{
                categories, 
                actualCategory, 
                handleClickCategory
            }}
        >
            {children}
        </ShopContext.Provider>
    )
}