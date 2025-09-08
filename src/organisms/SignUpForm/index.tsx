import {
  LockKeyhole,
  ShieldQuestionMark,
  User,
  Mail,
  Phone,
  type LucideProps,
} from "lucide-react";
import BoxContainer from "../../atoms/BoxContainer";
import InputField from "../../molecules/InputField";
import Button from "../../atoms/Button";
import "../LoginForm/_login-form.scss";
import React, { useEffect, useState } from "react";
import type { FieldDataProps } from "../types/types";
import validator from "validator";

const SignUpForm = ({content} :{content: any}) => {
  const [isEmail, setIsEmail] = useState(true);
  const [isPhone, setIsPhone] = useState(false);

  const [signupFieldData, setSignupFieldData] = useState([
    {
      type: "text" as "text" | "password" | "email",
      labelText: "Email / Phone Number",
      errorText: "Please Enter Your Email Id / Phone Number",
      value: "",
      leftIcon: ShieldQuestionMark,
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
          const enteredValue = e.target.value;
          if (!enteredValue) {
            setIsEmail(false);
            setIsPhone(false);
          } else if (validator.isEmail(enteredValue)) {
            setIsEmail(true);
            setIsPhone(false);
          } else if (
            enteredValue.length === 10 &&
            /^\d{10}$/.test(enteredValue)
          ) {
            setIsPhone(true);
            setIsEmail(false);
          } else {
            setIsEmail(false);
            setIsPhone(false);
          }
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

  //use effect to change the left icon of identifier field
  useEffect(() => {
    //based on recognized identifier update the signupFieldData
    setSignupFieldData((prevState) => {
      const newState = [...prevState];
      if (isEmail) {
        newState[0].leftIcon = Mail;
      } else if (isPhone) {
        newState[0].leftIcon = Phone;
      } else {
        newState[0].leftIcon = ShieldQuestionMark;
      }
      return newState;
    });
  }, [isEmail, isPhone]);

  async function handleSignUp(requestBody: any) {
    const response = await fetch("http://localhost:7777/auth/signup", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(requestBody),
    });
    const data = await response.json();
    console.log(data);
  }

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

      <Button
        btnText="Sign up"
        clickHandler={() => {
          //need to make signup api call here
          handleSignUp({});
        }}
      />
    </BoxContainer>
  );
};
export default SignUpForm;
