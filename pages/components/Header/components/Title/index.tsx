import React from 'react';

type TitleProps = {
    children: React.ReactNode;
}

export const Title = ({ children }: TitleProps) => {
    return (
        <h2 className="text-5xl py-2 text-teal-600 font-medium dark:text-teal-400 md:text-6xl">
            {children}
        </h2>
    );
}