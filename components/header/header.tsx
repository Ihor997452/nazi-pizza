'use client';

import { useCartContext } from '@/contexts/cartContext';
import { useState } from 'react';
import Button from '../ui/button/button';
import P from '../ui/p/p';

const Header = () => {
    const [showCart, setShowCart] = useState(false);
    const { cart } = useCartContext();

    const getCartItemsAmount = () => {
        let amount = 0;
        for (const item of cart.items) {
            amount += item.amount;
        }
        return amount;
    };

    const handleOrder = () => {
        fetch('api/orders', { method: 'POST', body: JSON.stringify(cart) });
    };

    return (
        <header className="flex items-center justify-between md:justify-around p-5">
            <P className="text-3xl ">Nazi Pizza</P>
            <P
                onClick={() => setShowCart(true)}
                className="text-3xl transition-colors hover:text-red-600 cursor-pointer flex items-center">
                Cart
                {cart.items.length > 0 ? (
                    <P className="text-lg ml-3 text-white bg-red-600 rounded-full px-3">
                        {getCartItemsAmount()}
                    </P>
                ) : (
                    ''
                )}
            </P>

            <div
                className={
                    'overflow-y-scroll text-neutral-950 flex flex-col items-center absolute top-0 right-0 bg-slate-100 w-full lg:w-1/3 h-full ' +
                    (showCart ? '' : 'hidden')
                }>
                <P
                    onClick={() => setShowCart(false)}
                    className="self-end mr-10 mt-5 cursor-pointer text-red-600 text-3xl">
                    X
                </P>
                {cart.items.map((item, index) => {
                    return (
                        <div
                            className="mt-2 flex items-center justify-around max-h-36"
                            key={item._id}>
                            <div className="flex items-center h-full w-1/2">
                                <img
                                    src={item.imgUrl}
                                    alt={'pizza'}
                                    className="h-full"
                                />

                                <P className="text-2xl ml-3">{item.name}</P>
                            </div>

                            <P className="text-2xl">{item.amount}</P>

                            <P className="text-2xl">{item.totalPrice}$</P>
                        </div>
                    );
                })}

                {cart.items.length > 0 ? (
                    <Button text="order" onClick={handleOrder} />
                ) : (
                    ' '
                )}
            </div>
        </header>
    );
};

export default Header;
