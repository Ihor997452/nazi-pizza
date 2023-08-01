'use client';

import { Carter_One } from 'next/font/google';
import { createContext, useContext, useState } from 'react';

type InputCartItem = {
    _id: string;
    name: string;
    imgUrl: string;
    option: string;
    unitPrice: number;
};

type CartItem = {
    _id: string;
    option: string;
    amount: number;
    name: string;
    imgUrl: string;
    unitPrice: number;
    totalPrice: number;
};

type Cart = {
    cart: { items: CartItem[]; totalPrice: number };
    add: (item: InputCartItem) => void;
};

const CartContext = createContext<Cart>({
    cart: { items: [], totalPrice: 0 },
    add: (item: InputCartItem) => {},
});

export const CartContextProvider = ({ children }: any) => {
    const [cart, setCart] = useState({
        items: [],
        totalPrice: 0,
    });

    const add = (item: InputCartItem) => {
        const cartCopy = structuredClone(cart);

        let itemExists = false;
        for (let i = 0; i < cartCopy.items.length; i++) {
            const element = cartCopy.items[i];

            if (item._id === element._id && item.option === element.option) {
                itemExists = true;

                element.amount += 1;
                element.totalPrice = element.amount * element.unitPrice;
                cartCopy.items[i] = element;

                break;
            }
        }

        if (!itemExists) {
            cartCopy.items.push({
                _id: item._id,
                option: item.option,
                amount: 1,
                unitPrice: item.unitPrice,
                totalPrice: item.unitPrice,
                imgUrl: item.imgUrl,
                name: item.name,
            });
        }

        let total = 0;

        for (let i = 0; i < cartCopy.items.length; i++) {
            const element = cartCopy.items[i];
            total += element.totalPrice;
        }

        cartCopy.totalPrice = total;
        setCart(cartCopy);
    };

    return (
        <CartContext.Provider value={{ cart, add }}>
            {children}
        </CartContext.Provider>
    );
};

export const useCartContext = () => {
    return useContext(CartContext);
};
