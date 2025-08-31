export const handleLogin = async (identifier: string, password: string) => {
  const payload = /^\d{10}$/.test(identifier)
    ? { phone: identifier, password }
    : { username: identifier, password };

  const response = await fetch("http://localhost:7777/auth/login", {
    method: "POST",
    body: JSON.stringify(payload),
  });
  //if response is 200, than redirect to feed page
  //else show error notification
  const data = await response.text();
  console.log(data);
};