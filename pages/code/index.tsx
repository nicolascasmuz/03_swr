import type { NextPage } from "next";
import MainLayout from "../../components/main-layout";
import CodeForm from "../../components/code-form";

const Code: NextPage = () => {
  return (
    <MainLayout>
      <CodeForm />
    </MainLayout>
  );
};

export default Code;
