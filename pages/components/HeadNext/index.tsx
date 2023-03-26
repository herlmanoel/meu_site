import Head from "next/head";

export type HeadNextProps = {
  tituloOfPage: string;
}

export const HeadNext = ({ tituloOfPage }: HeadNextProps) => {
  return (
    <Head>
      <title>{tituloOfPage}</title>
      <meta name="description" content="Generated by create next app" />
      <link rel="icon" href="/favicon.ico" />
    </Head>
  );
};