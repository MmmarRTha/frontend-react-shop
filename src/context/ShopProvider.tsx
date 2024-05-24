import { ReactNode, createContext, useEffect, useState } from 'react'
import { categories as categoriesDB} from '../data/categories'
import { CategoryT, OrderItem, ProductT } from '../types';
import { toast } from 'react-toastify';

type ShopContextProps = {
    categories: CategoryT[];
    actualCategory: CategoryT;
    handleClickCategory: (id: number) => void;
    modal: boolean;
    handleClickModal: () => void;
    product: ProductT;
    handleSetProduct: (product: ProductT) => void;
    order: OrderItem[];
    handleAddOrder: (product: OrderItem) => void;
    handleEditQuantity: (id: number) => void;
    handleDeleteProductOrder: (id: number) => void;
    total: number;
}

type ShopProviderProps = {
    children: ReactNode;
}
export const ShopContext = createContext<ShopContextProps>(null!)

export const ShopProvider = ({ children, }: ShopProviderProps) => {
    const [categories] = useState(categoriesDB);
    const [actualCategory, setActualCategory] = useState(categories[0]);
    const [modal, setModal] = useState(false);
    const [product, setProduct] = useState({} as ProductT)
    const [order, setOrder] = useState([] as OrderItem[])
    const [total, setTotal] = useState(0)

    useEffect(() => {
        const newTotal = order.reduce( (total, product) => (product.price * product.quantity) + total, 0)
        setTotal(newTotal)
    }, [order])

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

    const handleAddOrder = ( product: OrderItem) => {
        if(order.some(orderState => orderState.id === product.id)) {
            const orderUpdated = order.map(orderState => orderState.id === product.id ? product : orderState)
            setOrder(orderUpdated)
            toast.success('Your changes have been saved')
        } else {
            setOrder([...order, product])
            toast.success('Product added to your order')
        }
    }

    const handleEditQuantity = (id: number) => {
        const updateProduct = order.filter(editProduct => editProduct.id === id)[0]
        setProduct(updateProduct)
        setModal(!modal)
    }

    const handleDeleteProductOrder = (id: number) => {
        const UpdatedOrder = order.filter(editProduct => editProduct.id !== id)
        setOrder(UpdatedOrder)
        toast.error('Product removed from your order')
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
                order,
                handleAddOrder,
                handleEditQuantity,
                handleDeleteProductOrder,
                total
            }}
        >
            {children}
        </ShopContext.Provider>
    )
}