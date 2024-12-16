import type { NextPage } from "next";
import useSWR from "swr";
import { useMe } from "../lib/hooks";

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
  // const data: any = useData();
  const data: any = useMe();

  if (data) {
    return <div>Data: {JSON.stringify(data)}</div>;
  } else {
    return <div>No data</div>;
  }
};

export default Home;
