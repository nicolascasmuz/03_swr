import { useRouter } from "next/router";

export default function Product() {
  const router = useRouter();

  const HandleSubmit = async (e) => {
    e.preventDefault();

    const idValue = e.target.id.value;

    if (idValue) {
      router.push(`/product/${idValue}`);
    }
  };

  return (
    <form onSubmit={HandleSubmit}>
      <input type="text" name="id"></input>
      <button>Buscar</button>
    </form>
  );
}
