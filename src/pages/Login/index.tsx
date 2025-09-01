import LoginForm from "../../organisms/LoginForm";
import { LoginSignupTemplate } from "../../template/LoginSignupTemplate";

function LoginPage() {
  return (
    <LoginSignupTemplate
      headingText={"Sign in"}
      headingStatus={true}
      contentText={"Sign in to continue to MickeyDevTechnologies."}
      contentStatus={true}
      form={<LoginForm/>}
      formStatus={true}
      bottmText={"Don't have an acount ?"}
      bottomLinkText={" Signup now"}
      bottomLinkStatus={true}
      bottomLink={"/"}
      bottomSectionStatus={true}
      bottomLinkTextStatus={true}
    />
  )
}

export default LoginPage;