import useShop from "../hooks/useShop";
import { ProductT } from "../types";
import { formatCurrency } from "../utils"

type ProductProps = {
    product: ProductT;
}

export default function Product({product} : ProductProps) {

    const { handleClickModal, handleSetProduct } = useShop();
  return (
    <div key={product.id} className='p-5 border rounded-lg shadow-xl bg-slate-100'>
        <img
            className='w-full'
            src={`img/products/${product.image}.jpg`}
            alt={`image ${product.name}`}
        />
        <div className='p-4 lg:p-3'>
            <h3 className='text-xl font-semibold'>{product.name}</h3>
            <p className='mt-5 text-3xl font-black text-pink-500'>{formatCurrency(product.price)}</p>

            <button 
                type="button"
                className="w-full p-3 mt-5 font-bold text-white uppercase bg-indigo-500 rounded-lg hover:bg-indigo-600"
                onClick={() => {
                    handleClickModal();
                    handleSetProduct(product);
                }}
            >
                Add
            </button>
        </div>
    </div>
  )
}
