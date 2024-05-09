import { createContext, useState } from 'react';
import { categories as categoriesDB } from '../data/categories';

const ShopContext = createContext({});
const ShopProvider = ({children}: {children: any}) => {

    const [categories, setCategories] = useState(categoriesDB);
    const [actualCategory, setActualCategory] = useState(categoriesDB[0]);


    return (
        <ShopContext.Provider value={{
            categories,
            actualCategory
        }}>
            {children}
        </ShopContext.Provider>
    )
}

export {
    ShopProvider
}
export default ShopContext;