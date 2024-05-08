export default function Product({product: {name, price, image, categoryId, id}}: {product: {name: string, price: number, image: string, categoryId: number, id: number}}) {
  return (
    <div key={id} className='p-3 bg-white border rounded-lg shadow-lg'>
                    <img
                        className='object-cover w-full'
                        src={`img/products/${image}.jpg`}
                        alt={`image ${name}`}
                    />
                    <div className='p-5'>
                        <h3 className='text-2xl font-semibold'>{name}</h3>
                        <p className='text-3xl font-black text-green-500'>${price}</p>
                    </div>
                </div>
  )
}
