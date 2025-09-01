import { LockKeyhole, ShieldQuestionMark, User } from "lucide-react";
import BoxContainer from "../../atoms/BoxContainer";
import InputField from "../../molecules/InputField";
import Button from "../../atoms/Button";
import "../LoginForm/_login-form.scss";
import React, { useState } from "react";
import type { FieldDataProps } from "../types/types";

const SignUpForm = () => {
  const [signupFieldData, setSignupFieldData] = useState([
    {
      type: "text" as "text" | "password" | "email",
      labelText: "Email / Phone Number",
      errorText: "Please Enter Your Email Id / Phone Number",
      value: "",
      leftIcon: ShieldQuestionMark ,
      error: false,
      placeholder: "Enter Your Email Id / Phone Number",
      blurHandler: (e: React.FocusEvent<HTMLInputElement, Element>) => {
        if (e?.target.value === "") {
          setSignupFieldData((prevState) => {
            const newState = [...prevState];
            newState[0].error = true;
            newState[0].errorText = "Email Id / Phone Number is required";
            return newState;
          });
        }
      },
      focusHandler: () => {
        setSignupFieldData((prevState) => {
          const newState = [...prevState];
          newState[0].error = false;
          newState[0].errorText = "";
          return newState;
        });
      },
      changeHandler: (e: React.ChangeEvent<HTMLInputElement>) => {
        setSignupFieldData((prevState) => {
          const newState = [...prevState];
          newState[0].value = e.target.value;
          return newState;
        });
      },
    },
    {
      type: "text" as "text" | "password" | "email",
      labelText: "Username",
      errorText: "Please Enter Your Username",
      value: "",
      leftIcon: User,
      error: false,
      placeholder: "Enter username",
      blurHandler: (e: React.FocusEvent<HTMLInputElement, Element>) => {
        if (e.target.value === "") {
          setSignupFieldData((prevState) => {
            const newState = [...prevState];
            newState[1].error = true;
            newState[1].errorText = "Username is required";
            return newState;
          });
        }
      },
      focusHandler: () => {
        setSignupFieldData((prevState) => {
          const newState = [...prevState];
          newState[1].error = false;
          newState[1].errorText = "";
          return newState;
        });
      },
      changeHandler: (e: React.ChangeEvent<HTMLInputElement>) => {
        setSignupFieldData((prevState) => {
          const newState = [...prevState];
          newState[1].value = e.target.value;
          return newState;
        });
      },
    },
    {
      type: "password" as "text" | "password" | "email",
      labelText: "Password",
      errorText: "Please Enter Your Password",
      value: "",
      leftIcon: LockKeyhole,
      error: false,
      placeholder: "Enter password",
      blurHandler: (e: React.FocusEvent<HTMLInputElement, Element>) => {
        if (e.target.value === "") {
          setSignupFieldData((prevState) => {
            const newState = [...prevState];
            newState[2].error = true;
            newState[2].errorText = "Password is required";
            return newState;
          });
        }
      },
      focusHandler: () => {
        setSignupFieldData((prevState) => {
          const newState = [...prevState];
          newState[2].error = false;
          newState[2].errorText = "";
          return newState;
        });
      },
      changeHandler: (e: React.ChangeEvent<HTMLInputElement>) => {
        setSignupFieldData((prevState) => {
          const newState = [...prevState];
          newState[2].value = e.target.value;
          return newState;
        });
      },
    },
    {
      type: "password" as "text" | "password" | "email",
      labelText: "Confirm Password",
      errorText: "Please Enter Your Confirm Password",
      value: "",
      leftIcon: LockKeyhole,
      error: false,
      placeholder: "Enter Confirm Password",
      blurHandler: (e: React.FocusEvent<HTMLInputElement, Element>) => {
        if (e.target.value === "") {
          setSignupFieldData((prevState) => {
            const newState = [...prevState];
            newState[3].error = true;
            newState[3].errorText = "Confirm Password is required";
            return newState;
          });
        }
      },
      focusHandler: () => {
        setSignupFieldData((prevState) => {
          const newState = [...prevState];
          newState[3].error = false;
          newState[3].errorText = "";
          return newState;
        });
      },
      changeHandler: (e: React.ChangeEvent<HTMLInputElement>) => {
        setSignupFieldData((prevState) => {
          const newState = [...prevState];
          newState[3].value = e.target.value;
          return newState;
        });
      },
    },
  ]);

  return (
    <BoxContainer>
      {signupFieldData?.map((data: FieldDataProps, index: number) => (
        <InputField
          key={index}
          type={data?.type as "text" | "password" | "email"}
          labelText={data.labelText}
          errorText={data?.errorText}
          value={data?.value}
          leftIcon={data?.leftIcon}
          error={data?.error}
          placeholder={data?.placeholder}
          changeHandler={data?.changeHandler}
          blurHandler={data?.blurHandler}
          focusHandler={data?.focusHandler}
        /> 
      ))}

      <Button btnText="Sign up" clickHandler={() => {}} />
    </BoxContainer>
  );
};
export default SignUpForm;
