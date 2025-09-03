import { useEffect } from "react";

const fetchSignUpData = async () => {
  const signupResponse = await fetch("http://localhost:7777/page/signup");
  const signupData = await signupResponse.json();
  return signupData;
};

export const useFetchSignUpData = (setSignUpPageData: React.Dispatch<any>) => {
  useEffect(() => {
    fetchSignUpData().then((signUpData) => setSignUpPageData(signUpData));
  }, []);
};
