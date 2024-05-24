export type CategoryT = {
    id: number;
    name: string;
    slug: string;
}

export type ProductT = {
    name: string;
    price: number;
    image: string;
    categoryId: number;
    id: number;
};

export type OrderItem = Pick<ProductT, 'id' | 'name' | 'price'> & {
    quantity: number
    // subtotal: number
} 