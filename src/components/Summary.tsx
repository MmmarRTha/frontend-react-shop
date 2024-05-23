import useShop from "../hooks/useShop"

export default function Summary() {
    const  { order } = useShop();

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
                    <p>Si hay</p>
                )}
            </div>
            <p className="mt-10 text-xl">
                Total: {''}
            </p>
            <form className="w-full">
                <div className="mt-5">
                    <input 
                        type="submit"
                        className="w-full p-3 mt-5 font-bold text-white uppercase duration-300 bg-indigo-500 rounded-lg hover:-translate-y-1 hover:scale-110 hover:bg-indigo-400"
                        value="Confirm Order" 
                    />
                </div>
            </form>
        </aside>
    
    )
}
