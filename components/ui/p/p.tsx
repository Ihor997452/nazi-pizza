const P = ({ onClick, className, children }: any) => {
    return (
        <>
            <p onClick={onClick} className={'flex items-center ' + className}>
                {children}
                {typeof children === 'string' && children?.includes('1488') ? (
                    <svg
                        className="w-6 fill-red-600 ml-2 mb-1"
                        version="1.1"
                        id="_x32_"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 512 512">
                        <polygon points="183.514,0 81.732,40.092 29.301,345.446 129.448,305.998 94.072,512 195.854,471.899 248.285,166.553 148.147,206.01 "></polygon>{' '}
                        <polygon points="382.552,206.01 417.928,0 316.146,40.092 263.715,345.446 363.854,305.998 328.486,512 430.268,471.899 482.699,166.553 "></polygon>{' '}
                    </svg>
                ) : (
                    ''
                )}
            </p>
        </>
    );
};

export default P;
