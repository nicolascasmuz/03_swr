import useSWR from "swr";
import { fetchAPI } from "./api";

export function useMe() {
  const { data, error } = useSWR("me", fetchAPI);

  if (error) {
    console.error("Failed to fetch:", error);
    return null;
  }

  return data;
}

// export function useProduct(productID: string) {}
