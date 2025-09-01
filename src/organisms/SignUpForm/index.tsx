import { LockKeyhole, ShieldQuestionMark, User } from "lucide-react";
import BoxContainer from "../../atoms/BoxContainer";
import InputField from "../../molecules/InputField";
import Button from "../../atoms/Button";
import "../LoginForm/_login-form.scss";
import React,{ useState } from "react";

const SignUpForm = () => {
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
  }
  const handleSubmit = () => {
  }
  const blurHandler = (e: React.FocusEvent<HTMLInputElement>) => {
  }
  const focusHandler = () => {
  }
 
  const [signupFieldData, setSignupFieldData] = useState([
    {
      type:'text',
      labelText:'Email / Phone Number',
      errorText:'Please Enter Your Email Id / Phone Number',
      value:'',
      leftIcon:<ShieldQuestionMark size={14} />,
      error:false,
      placeholder:'Enter Your Email Id / Phone Number',
      identifier:'',
      identifierError:false,
      identifierErrorText:'',
      blurHandler: blurHandler,
      focusHandler: focusHandler,
      handleChange: handleChange,
    },
    {
      type:'text',
      labelText:'Username',
      errorText:'Please Enter Your Username',
      value:'',
      leftIcon:<User size={14} />,
      error:false,
      placeholder:'Enter username',
      identifier:'',
      identifierError:false,
      identifierErrorText:'',
      blurHandler: blurHandler,
      focusHandler: focusHandler,
      handleChange: handleChange,
    },
    {
      type:'password',
      labelText:'Password',
      errorText:'Please Enter Your Password',
      value:'',
      leftIcon:<LockKeyhole size={14} />,
      error:false,
      placeholder:'Enter password',
      identifier:'',
      identifierError:false,
      identifierErrorText:'',
      blurHandler: blurHandler,
      focusHandler: focusHandler,
      handleChange: handleChange,
    },
    {
      type:'password',
      labelText:'Confirm Password',
      errorText:'Please Enter Your Confirm Password',
      value:'',
      leftIcon:<LockKeyhole size={14} />,
      error:false,
      placeholder:'Enter Confirm Password',
      identifier:'',
      identifierError:false,
      identifierErrorText:'',
      blurHandler: blurHandler,
      focusHandler: focusHandler,
      handleChange: handleChange,
    },
  ]);

  return (
    <BoxContainer>
      {signupFieldData?.map((data:any,index:number)=>
        <InputField
          key={index}
          type={data?.type}
          labelText={data.labelText}
          errorText={data?.errorText}
          value={data?.value}
          leftIcon={data?.leftIcon}
          error={data?.error}
          changeHandler={data?.handleChange}
          placeholder={data?.placeholder}
          blurHandler={data?.blurHandler}
          focusHandler={data?.focusHandler}
        />
      )}
      
      <Button btnText="Sign up" clickHandler={() => handleSubmit}/>
    </BoxContainer>
  );
}
export default SignUpForm;