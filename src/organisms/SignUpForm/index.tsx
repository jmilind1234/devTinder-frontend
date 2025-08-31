import React,{useState} from "react";
import InputField from "../../molecules/InputField";
import BoxContainer from "../../atoms/BoxContainer";
import { LockKeyhole, User, Mail, ShieldQuestionMark } from "lucide-react";
import Button from "../../atoms/Button";

export const SignUpForm = () => {
  const [emailPhone, setEmailPhone] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
  }
  return (
    <BoxContainer>
      <InputField
        type="text"
        labelText="Email / Phone Number "
        errorText="Please Enter Your Email Id / Phone Number"
        value={emailPhone}
        leftIcon={<ShieldQuestionMark size={14} />}
        error={false}
        handleChange={handleChange}
        placeholder={"Enter Your Email Id / Phone Number"}
      />

      <InputField
        type="text"
        labelText="Username"
        errorText="Please Enter Your Username"
        value={username}
        leftIcon={<User size={14} />}
        error={false}
        handleChange={handleChange}
        placeholder={"Enter username"}
      />

      <InputField
        type="password"
        labelText="Password"
        errorText="Please Enter Your Password"
        value={password}
        leftIcon={<LockKeyhole size={14} />}
        error={true}
        handleChange={handleChange}
        placeholder={"Enter password"}
      />
      <InputField
        type="password"
        labelText="Confirm Password"
        errorText="Please Enter Your Confirm Password"
        value={confirmPassword}
        leftIcon={<LockKeyhole size={14} />}
        error={true}
        handleChange={handleChange}
        placeholder={"Enter password"}
      />
      <Button btnText="Sign up" />
    </BoxContainer>
  );
}

export default SignUpForm;
