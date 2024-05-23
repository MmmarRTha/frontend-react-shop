import { ReactNode, createContext, useState } from 'react'
import { categories as categoriesDB} from '../data/categories'
import { CategoryT, ProductT } from '../types';

type ShopContextProps = {
    categories: CategoryT[];
    actualCategory: CategoryT;
    handleClickCategory: (id: number) => void;
    modal: boolean;
    handleClickModal: () => void;
    product: ProductT;
    handleSetProduct: (product: ProductT) => void;
    order: ProductT[];
}

type ShopProviderProps = {
    children: ReactNode;
}
export const ShopContext = createContext<ShopContextProps>(null!)

export const ShopProvider = ({ children, }: ShopProviderProps) => {
    const [categories, setCategories] = useState(categoriesDB);
    const [actualCategory, setActualCategory] = useState(categories[0]);
    const [modal, setModal] = useState(false);
    const [product, setProduct] = useState({} as ProductT)
    const [order, setOrder] = useState([] as ProductT[])

    const handleClickCategory = (id: number) => {
        const category = categories.filter( category => category.id === id )[0]
        setActualCategory(category)
    }

    const handleClickModal = () => {
        setModal(!modal)
    }

    const handleSetProduct = (product: ProductT) => {
        setProduct(product)
    }

    return (
        <ShopContext.Provider 
            value={{
                categories, 
                actualCategory, 
                handleClickCategory,
                modal,
                handleClickModal,
                product,
                handleSetProduct,
                order
            }}
        >
            {children}
        </ShopContext.Provider>
    )
}