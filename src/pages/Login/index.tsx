import Heading4 from "../../atoms/Heading4";
import TextLink from "../../atoms/Link";
import LoginForm from "../../organisms/LoginForm";
import "./_login.scss";

function LoginPage() {
  return (
    <div className="login-page">
        <Heading4>Sign in</Heading4>
        <p className="sign-in-text">Sign in to continue to MickeyDevTechnologies.</p>
        <LoginForm/>
        <div className="sign-up-text-container">
          <p className="sign-up-text">Don't have an acount ?</p>
          <TextLink to="/signup" text="Signup now"/>
        </div>
    </div>
  )
}

export default LoginPage;