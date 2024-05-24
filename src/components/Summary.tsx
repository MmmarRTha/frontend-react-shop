import useShop from "../hooks/useShop"
import { formatCurrency } from "../utils";
import OrderSummary from "./OrderSummary";

export default function Summary() {
    const  { order, total } = useShop();
    const checkOrder = order.length === 0;

    return (
        <aside className="h-screen p-5 overflow-y-scroll w-72">
            <h1 className="text-4xl font-black">
                Summary
            </h1>
            <p className="my-5 text-lg">
                Order Summary and total order
            </p>

            <div className="py-10">
                {order.length === 0 ? (
                    <p className="text-2xl text-center">No products in the order</p>
                ) : (
                    order.map(product => (
                        <OrderSummary 
                            key={product.id}
                            product={product}
                        />
                    ))
                )}
            </div>
            <p className="mt-10 text-xl font-semibold">
                Total: {''}
                {formatCurrency(total)}
            </p>
            <form className="w-full">
                <div className="mt-5">
                    <input 
                        type="submit"
                        className={`${checkOrder ? 'bg-indigo-200' : 'bg-indigo-500 hover:-translate-y-1 hover:scale-110 hover:bg-indigo-400'} w-full p-3 mt-5 font-bold text-white uppercase duration-300 rounded-lg cursor-pointer `}
                        value="Confirm Order"
                        disabled={checkOrder} 
                    />
                </div>
            </form>
        </aside>
    
    )
}
