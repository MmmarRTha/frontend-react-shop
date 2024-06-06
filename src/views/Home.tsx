import useSWR from 'swr';
import { CategoryT, ProductT } from '../types';
import Product from '../components/Product';
import useShop from '../hooks/useShop';
import axiosClient from '../config/axios';

export default function Home() {

    const { actualCategory } = useShop() as { actualCategory: CategoryT };

    const fetcher = () => axiosClient('https://backend-shop-three.vercel.app/api/api/products').then(data => data.data);
    const { data, error, isLoading } = useSWR('https://backend-shop-three.vercel.app/api/api/products', fetcher,{ refreshInterval: 1000 });

    if (error) return <div>failed to load</div>;
    if (isLoading) return 'Loading...';
    const products: ProductT[] = data.data.filter((product: ProductT) => product.categoryId === actualCategory.id);

  return (
    <>
    <h1 className='text-4xl font-bold'>{actualCategory.name}</h1>
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
