import { products } from '../data/products';
import Product from '../components/Product';

export default function Home() {
    console.log(products);
  return (
    <>
    <h1 className='text-4xl font-bold'>Home</h1>
    <p className='my-10 text-2xl'>Choose and personalize your order here</p>

    <div>
        <div className='grid items-start grid-cols-1 gap-4 xl:grid-cols-3 lg:grid-cols-2 2xl:grid-cols-4'>
            {products.map( product => (
                <Product
                    key={product.id}
                    product={product} 
                />
            ))}
        </div>
    </div>
    </>
  )
}
