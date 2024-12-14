import type { NextPage } from "next";
import useSWR from "swr";

async function fetcher(id) {
  const res = await fetch(id);
  const user = await res.json();
  return user.username;
}

function useData() {
  const { data, error } = useSWR(
    "https://jsonplaceholder.typicode.com/users/1",
    fetcher
  );

  return data;
}

const Home: NextPage = () => {
  const data: any = useData();

  return <div>Data: {JSON.stringify(data)}</div>;
};

export default Home;
