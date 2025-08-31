export const handleLogin = async (identifier: string, password: string) => {
  const isTenDigitNumber = /^\d{10}$/.test(identifier);
  let payload;
  if (isTenDigitNumber) {
    payload = {
      phone: identifier,
      password: password,
    };
  } else {
    payload = {
      username: identifier,
      password: password,
    };
  }
  const response = await fetch("http://localhost:7777/auth/login", {
    method: "POST",
    body: JSON.stringify(payload),
  });
  //if response is 200, than redirect to feed page
  //else show error notification
  const data = await response.text();
  console.log(data);
};
