import { LockKeyhole, User } from "lucide-react";
import BoxContainer from "../../atoms/BoxContainer";
import InputField from "../../molecules/InputField";
import Button from "../../atoms/Button";
import "./_login-form.scss";
import CheckBox from "../../atoms/CheckBox";
import Label from "../../atoms/Label";
import React from "react";

function LoginForm() {
  const [identifier, setIdentifier] = React.useState("");
  const [password, setPassword] = React.useState("");

  const [identifierError, setIdentifierError] = React.useState(false);
  const [passwordError, setPasswordError] = React.useState(false);

  const [identifierErrorText, setIdentifierErrorText] = React.useState("");
  const [passwordErrorText, setPasswordErrorText] = React.useState("");

  async function handleLogin(identifier: string, password: string) {
    //firstly find out whether the identifier is phone number or username
    //than as per that prepare the payload and send the request to the server
    const isTenDigitNumber = /^\d{10}$/.test(identifier);
    if(isTenDigitNumber){
      //means payload will consist of phone number and password
      const payload = {
        phone: identifier,
        password: password
      }
    }else{
      
    }
  }
  return (
    <BoxContainer>
      <InputField
        type="text"
        labelText="Username / Phone"
        errorText={identifierErrorText}
        value={identifier}
        leftIcon={<User size={14} />}
        error={identifierError}
        placeholder={"Enter username / phone number"}
        changeHandler={(e) => {
          setIdentifier(e.target.value);
        }}
        blurHandler={(e) => {
          if (e.target.value === "") {
            setIdentifierError(true);
            setIdentifierErrorText("Phone number or username is required");
          }
        }}
        focusHandler={() => {
          setIdentifierError(false);
          setIdentifierErrorText("");
        }}
      />
      <InputField
        classes="mb-24"
        type="password"
        labelText="Password"
        errorText={passwordErrorText}
        value={password}
        leftIcon={<LockKeyhole size={14} />}
        error={passwordError}
        placeholder={"Enter password"}
        changeHandler={(e) => {
          setPassword(e.target.value);
        }}
        blurHandler={(e) => {
          if (e.target.value === "") {
            setPasswordError(true);
            setPasswordErrorText("Password is required");
          }
        }}
        focusHandler={() => {
          setPasswordError(false);
          setPasswordErrorText("");
        }}
        forgotPassword={true}
      />
      <div className="remember-me-container mb-24">
        <CheckBox /> <Label>Remember me</Label>
      </div>
      <Button btnText="Sign in" clickHandler={() => {
        
      }} />
    </BoxContainer>
  );
}

export default LoginForm;
