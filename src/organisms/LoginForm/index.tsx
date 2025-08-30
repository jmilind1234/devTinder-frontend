import { LockKeyhole, User } from "lucide-react";
import BoxContainer from "../../atoms/BoxContainer";
import InputField from "../../molecules/InputField";
import Button from "../../atoms/Button";
import "./_login-form.scss";

function LoginForm() {
  return (
    <BoxContainer>
      <InputField
        type="text"
        labelText="Username"
        errorText="Please Enter Your Username"
        value=""
        leftIcon={<User size={14} />}
        error={false}
        placeholder={"Enter email id"}
      />
      <InputField
        classes="mb-24"
        type="password"
        labelText="Password"
        errorText="Please Enter Your Password"
        value=""
        leftIcon={<LockKeyhole size={14} />}
        error={true}
        placeholder={"Enter password"}
        forgotPassword={true}
      />
      <Button btnText="Sign in" />
    </BoxContainer>
  );
}

export default LoginForm;
