export type SubtitleProps = {
    children: React.ReactNode;
}

export const Subtitle = ({ children }: SubtitleProps) => {
    return (
        <h3 className="text-2xl py-2 dark:text-white md:text-3xl">
            {children}
        </h3>
    );
}