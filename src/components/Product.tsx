import { formatCurrency } from "../utils"
export default function Product({product: {name, price, image, categoryId, id}}: {product: {name: string, price: number, image: string, categoryId: number, id: number}}) {
  return (
    <div key={id} className='p-5 border rounded-lg shadow-xl bg-slate-100'>
        <img
            className='w-full'
            src={`img/products/${image}.jpg`}
            alt={`image ${name}`}
        />
        <div className='p-4 lg:p-3'>
            <h3 className='text-xl font-semibold'>{name}</h3>
            <p className='mt-5 text-3xl font-black text-pink-500'>{formatCurrency(price)}</p>

            <button type="button" className="w-full p-3 mt-5 font-bold text-white uppercase bg-indigo-500 rounded-lg hover:bg-indigo-600">
                Add
            </button>
        </div>
    </div>
  )
}
