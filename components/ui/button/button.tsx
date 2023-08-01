'use client';

import P from '../p/p';

type ButtonProps = {
    text: string;
    isPrimary?: boolean;
    className?: string;
    onClick?: () => void;
};

const Button = ({
    text,
    isPrimary = true,
    className = '',
    onClick = () => {},
}: ButtonProps) => {
    if (isPrimary) {
        return (
            <button
                onClick={onClick}
                className={
                    'flex items-center border-white bg-white text-neutral-950 border px-10 py-1 text-xl transition-colors hover:bg-red-600 hover:border-red-600 hover:text-neutral-950 ' +
                    className
                }>
                <P>{text}</P>

                <svg
                    className="w-7 ml-2 bg-red-600 p-1 rounded-full hover:rotate-180 transition-all"
                    version="1.1"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 512 512">
                    <polygon points="465.209,302.804 511.996,256.009 360.602,104.624 256.004,209.213 198.176,151.394 302.782,46.795 256.004,0 104.602,151.394 209.217,256 151.398,313.838 46.782,209.213 0.004,256 151.398,407.394 256.004,302.787 313.832,360.606 209.217,465.214 256.004,512 407.398,360.606 302.782,256 360.602,198.18 "></polygon>{' '}
                </svg>
            </button>
        );
    } else {
        return (
            <button
                onClick={onClick}
                className={
                    'border-white border px-10 py-1 text-xl transition-colors hover:bg-white hover:border-white hover:text-neutral-950' +
                    className
                }>
                {text}
            </button>
        );
    }
};

export default Button;
