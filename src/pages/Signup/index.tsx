
import { useEffect, useState } from "react";
import SignUpForm from "../../organisms/SignUpForm";
import { LoginSignupTemplate } from "../../template/LoginSignupTemplate";
import { useFetchSignUpData } from "../../hooks/useFetchSignUpData";

const SignupPage = () =>{

  const [signUpPageData, setSignUpPageData] = useState<any>({});

  useFetchSignUpData(setSignUpPageData);

  return (
    <LoginSignupTemplate
        headingText={signUpPageData?.pageHeader?.title}
        headingStatus={true}
        contentText={signUpPageData?.pageHeader?.headerContent}
        contentStatus={true}
        form={<SignUpForm content={signUpPageData?.signUpForm?.formContent}/>}
        formStatus={true}
        bottomText={"Already have an account ?"}
        bottomLinkText={" Signin "}
        bottomLinkStatus={true}
        bottomLink={"/"}
        bottomSectionStatus={true}
        bottomLinkTextStatus={true}
    />
  )
}

export default SignupPage;