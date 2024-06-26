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

export type OrderItem = ProductT & {
    quantity: number
    // subtotal: number
} 

export type User = {
    name?: string
    email?: string
    password?: string
}