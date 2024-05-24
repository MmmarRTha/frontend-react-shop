import {useState} from 'react'
import useShop from '../hooks/useShop';
import { formatCurrency } from '../utils';

export default function ModalProduct() {
    const { product, handleClickModal, handleAddOrder, } = useShop();
    const [quantity, setQuantity] = useState(1);

    return (
        <div className="gap-10 md:flex bg-gradient-to-l from-pink-300 via-purple-200 to-indigo-">
            <div className="md:w-1/3">
                <img
                    src={`img/products/${product.image}.jpg`} 
                    alt={`Product Image ${product.name}`} 
                />
            </div>
            <div className="md:w-2/3">
                <div className="flex justify-end">
                    <button onClick={handleClickModal}>
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="size-6">
                            <path fillRule="evenodd" d="M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25Zm-1.72 6.97a.75.75 0 1 0-1.06 1.06L10.94 12l-1.72 1.72a.75.75 0 1 0 1.06 1.06L12 13.06l1.72 1.72a.75.75 0 1 0 1.06-1.06L13.06 12l1.72-1.72a.75.75 0 1 0-1.06-1.06L12 10.94l-1.72-1.72Z" clipRule="evenodd" />
                        </svg>

                    </button>
                </div>
                <h1 className="mt-8 text-3xl font-bold">
                    {product.name}
                </h1>
                <p className="mt-5 text-4xl font-black text-pink-500">
                    {formatCurrency(product.price)}
                </p>

                <div className="flex gap-4 mt-5">
                    <button
                        type='button'
                        onClick={() => {
                            if(quantity <= 1) return
                            setQuantity(quantity - 1)
                        }}
                    >
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="deepskyblue" className="size-6">
                            <path fillRule="evenodd" d="M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25Zm3 10.5a.75.75 0 0 0 0-1.5H9a.75.75 0 0 0 0 1.5h6Z" clipRule="evenodd" />
                        </svg>
                    </button>
                    <p className="p-1 text-3xl">{quantity}</p>
                    <button
                        type='button'
                        onClick={() => {
                            if(quantity >= 8) return
                            setQuantity(quantity + 1)
                        }}
                    >
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="deepskyblue" className="size-6">
                            <path fillRule="evenodd" d="M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25ZM12.75 9a.75.75 0 0 0-1.5 0v2.25H9a.75.75 0 0 0 0 1.5h2.25V15a.75.75 0 0 0 1.5 0v-2.25H15a.75.75 0 0 0 0-1.5h-2.25V9Z" clipRule="evenodd" />
                        </svg>
                    </button>
                </div>

                <button
                    type='button'
                    className='px-5 py-3 mt-5 font-bold text-white uppercase bg-pink-500 rounded-md hover:bg-pink-700' 
                    onClick={() => {
                        handleAddOrder({
                            id: product.id,
                            name: product.name,
                            price: product.price,
                            quantity
                        })
                        handleClickModal()
                    }}
                >
                    Add to Order
                </button>
            </div>
        </div>
    )
}
