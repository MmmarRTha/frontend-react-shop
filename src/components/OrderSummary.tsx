import { OrderItem } from '../types'
import { formatCurrency } from '../utils';

type OrderSummaryProps = {
    product: OrderItem
}

export default function OrderSummary({product} : OrderSummaryProps) {

    return (
        <div className="p-4 space-y-1 border rounded-md shadow-xl bg-slate-50">
            <div className="space-y-2">
                <p className="text-xl font-bold">{product.name}</p>
                <p className="text-lg font-bold">Quantity: {product.quantity}</p>
                <p className="text-lg font-bold text-pink-500">
                    Price: {formatCurrency(product.price)}
                </p>
                <p className="text-lg text-gray-700">
                    Subtotal: {formatCurrency(product.price * product.quantity)}
                </p>
            </div>
    
            <div className="flex justify-between gap-2 pb-4">
                <button
                    type="button"
                    className="p-2 font-bold text-center text-white uppercase bg-indigo-700 rounded-md shadow-md hover:bg-indigo-500"
                >
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="w-5 h-5"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                    >
                        <path d="M13.586 3.586a2 2 0 112.828 2.828l-.793.793-2.828-2.828.793-.793zM11.379 5.793L3 14.172V17h2.828l8.38-8.379-2.83-2.828z" />
                    </svg>
                </button>
                <button
                    type="button"
                    className="p-2 font-bold text-center text-white uppercase bg-red-600 rounded-md shadow-md hover:bg-red-400"
                >
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="w-5 h-5"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        strokeWidth={2}
                    >
                        <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"
                        />
                    </svg>
                </button>
            </div>
        </div>
      );
}
