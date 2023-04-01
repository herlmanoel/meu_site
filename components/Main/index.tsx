
type MainProps = {
    children: React.ReactNode;
};

export const Main = ({ children }: MainProps) => {
    return (
        <main className="container bg-white px-10 dark:bg-gray-900  md:px-20 lg:px-40">
            {children}
        </main>
    );
};
