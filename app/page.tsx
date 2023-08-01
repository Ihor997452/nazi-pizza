'use client';

import Pizza from '@/components/pizza/pizza';
import { useEffect, useState } from 'react';

export default function Home() {
    const [pizzas, setPizzas] = useState<any[]>([]);

    useEffect(() => {
        fetch('api/pizzas')
            .then((r) => r.json().then((r) => setPizzas(r)))
            .catch((r) => console.log(r));
    }, []);

    return (
        <div className="flex container m-auto flex-wrap">
            {pizzas.map((item) => {
                return (
                    <Pizza
                        key={item._id}
                        item={{
                            _id: item._id,
                            name: item.name,
                            description: item.description,
                            imgUrl: item.imgUrl,
                            options: item.options,
                        }}
                    />
                );
            })}
        </div>
    );
}
