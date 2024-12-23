const BASE_URL = "https://desafio-ecommerce-backend-nc.vercel.app/api/";

export async function fetchAPI(id) {
  let res;

  if (id.split("/")[0] == "me") {
    const response = await fetch(BASE_URL + id, {
      headers: {
        authorization:
          "bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySUQiOiJ4cUtiS0hoZWpweEJiT0JLdHdsaSIsImlhdCI6MTczMjcxMzYyNH0.3-Ku-Bbt4fzJeBltJuwJsDWothM2SjiEIDVdXVDfIQA",
      },
    });
    res = response;
  } else if (id.split("/")[0] == "products") {
    const response = await fetch(BASE_URL + id);
    res = response;
  } else if (id.split("/")[0] == "swr-auth") {
    const response = await fetch(BASE_URL + id, {
      method: "POST",
    });
    res = response;
  } else if (id.split("/")[0] == "auth" && id.split("/")[1] == "token") {
    const response = await fetch(BASE_URL + id, {
      method: "POST",
      body: JSON.stringify({
        email: "mario-navarro@fastmail.com",
        code: 43749,
      }),
    });
    res = response;
  }

  const status = res.status.toString();

  if (status.charAt(0) == "4") {
    throw new Error(`Error ${res.status}: ${res.statusText}`);
  } else if (status.charAt(0) == "2") {
    return res.json();
  }
}
