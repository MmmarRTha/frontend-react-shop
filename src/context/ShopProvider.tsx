import { ReactNode, createContext, useState } from 'react'
import { categories as categoriesDB} from '../data/categories'

const ShopContext = createContext()

export const ShopProvider = ({ children, }: {children: ReactNode}) => {

    const [categories, setCategories] = useState(categoriesDB);
    const [actualCategory, setActualCategory] = useState(categories[0]);

    const handleClickCategory = (id: number) => {
        const category = categories.filter( category => category.id === id)[0]
        setActualCategory(category)
    }

    return (
        <ShopContext.Provider value={{
            categories, actualCategory, handleClickCategory
          }}>
            {children}
        </ShopContext.Provider>
    )
}

export default ShopContext