'use client';

import { useState } from 'react';
import Button from '../ui/button/button';
import { useCartContext } from '@/contexts/cartContext';
import P from '../ui/p/p';

type PizzaProps = {
    item: {
        _id: string;
        imgUrl: string;
        name: string;
        description: string;
        options: Array<{
            name: string;
            price: number;
        }>;
    };
};

const Pizza = ({ item }: PizzaProps) => {
    const { add } = useCartContext();
    const [selectedOption, setSelectedOption] = useState(0);

    return (
        <div className="flex flex-col items-center justify-center  w-full lg:w-1/3 p-8">
            <img src={item.imgUrl} alt={'pizza'} className="w-full" />
            <P className="text-4xl">{item.name}</P>
            <P className="text-lg text-gray-500">{item.description}</P>
            <div className="flex justify-around items-center">
                {item.options.map((option, index) => {
                    return (
                        <Button
                            isPrimary={index === selectedOption ? true : false}
                            key={index}
                            text={option.name}
                            onClick={() => setSelectedOption(index)}
                        />
                    );
                })}
            </div>
            <P className="text-2xl my-2">
                {item.options[selectedOption].price + '$'}
            </P>
            <Button
                isPrimary={true}
                text={'order'}
                onClick={() => {
                    add({
                        _id: item._id,
                        unitPrice: item.options[selectedOption].price,
                        option: item.options[selectedOption].name,
                        name: item.name,
                        imgUrl: item.imgUrl,
                    });
                }}
            />
        </div>
    );
};

export default Pizza;
