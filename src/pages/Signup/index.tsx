
import SignUpForm from "../../organisms/SignUpForm";
import { LoginSignupTemplate } from "../../template/LoginSignupTemplate";

const SignupPage = () =>{
  return (
    <LoginSignupTemplate
        headingText={"Register"}
        headingStatus={true}
        contentText={"Get your MickeyDevTechnologies account now."}
        contentStatus={true}
        form={<SignUpForm/>}
        formStatus={true}
        bottmText={"Already have an account ?"}
        bottomLinkText={" Signin "}
        bottomLinkStatus={true}
        bottomLink={"/signup"}
        bottomSectionStatus={true}
        bottomLinkTextStatus={true}
    />
  )
}

export default SignupPage;