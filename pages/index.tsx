import type { NextPage } from "next";
import MainLayout from "../components/main-layout";
import Product from "../components/product";
import Login from "components/login";

const Home: NextPage = () => {
  return (
    <MainLayout>
      <Product />
    </MainLayout>
  );
};

export default Home;
