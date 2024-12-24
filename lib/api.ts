/* const BASE_URL = "https://desafio-ecommerce-backend-nc.vercel.app/api/";
// const BASE_URL = "http://localhost:3000/";

export async function fetchAPI(id) {
  let res;

  if (id.split("/")[0] == "swr-auth") {
    const response = await fetch(BASE_URL + id, {
      method: "POST",
    });
    res = response;
  } else if (id.split("/")[0] == "swr-code") {
    console.log("id: ", id);
    const response = await fetch(BASE_URL + id, {
      method: "POST",
    });
    res = response;
  } else if (id.split("/")[0] == "me") {
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
  }

  const status = res.status.toString();

  if (status.charAt(0) == "4") {
    throw new Error(`Error ${res.status}: ${res.statusText}`);
  } else if (status.charAt(0) == "2") {
    return res.json();
  }
} */

const BASE_URL = "https://desafio-ecommerce-backend-nc.vercel.app/api";
// const BASE_URL = "http://localhost:3001";

export async function fetchAPI(input?: RequestInfo, options?) {
  const url = BASE_URL + input;

  const res = await fetch(url, options);

  if (res.status >= 200 && res.status < 300) {
    const data = await res.json();
    console.log("data: ", data);
    return data;
  } else {
    throw new Error(`Hubo un error ${res.status}: ${res.statusText}`);
  }
}

export async function sendCode(email: string) {
  if (email) {
    fetchAPI("/auth", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify({ email }),
    });
  }
}

export async function getToken(email: string, code: number) {
  if (email && code) {
    fetchAPI("/auth/token", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify({ email, code }),
    });
  }
}

/* export async function getToken(email: string, code: number) {
  return fetchAPI("/auth/token", {
    method: "POST",
    body: {
      email,
      code,
    },
  });
} */
