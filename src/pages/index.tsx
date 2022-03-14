import type { NextPage } from "next";
import Head from "next/head";
import Main from "../components/Main";

const Home: NextPage = () => (
  <>
    <Head>
      <title>Dita Ateliê - Chinelos Havaianas Customizadas e Acessórios</title>
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <meta name="description" content="Harpoon" />
      <link rel="manifest" href="/manifest.json" />
    </Head>
    <Main />
  </>
);

export default Home;
