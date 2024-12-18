import type { NextPage } from "next";
import MainLayout from "../components/main-layout";
import Product from "../components/product";

const Home: NextPage = () => {
  return (
    <MainLayout>
      <Product />
    </MainLayout>
  );
};

export default Home;
