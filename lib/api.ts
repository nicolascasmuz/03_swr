export async function fetchAPI(id) {
  const res = await fetch(
    "https://desafio-ecommerce-backend-nc.vercel.app/api/" + id,
    {
      headers: {
        authorization:
          "bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySUQiOiJ4cUtiS0hoZWpweEJiT0JLdHdsaSIsImlhdCI6MTczMjcxMzYyNH0.3-Ku-Bbt4fzJeBltJuwJsDWothM2SjiEIDVdXVDfIQA",
      },
    }
  );

  if (!res.ok) {
    throw new Error(`Error ${res.status}: ${res.statusText}`);
  } else {
    return res.json();
  }
}
