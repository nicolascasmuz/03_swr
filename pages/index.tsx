import type { NextPage } from "next";
import MainLayout from "../components/main-layout";
import Login from "./login";

const Home: NextPage = () => {
  return (
    <MainLayout>
      <Login />
    </MainLayout>
  );
};

export default Home;
