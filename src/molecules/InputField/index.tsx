import Label from "../../atoms/Label";
import ErrorText from "../../atoms/ErrorText";
import type { inputField } from "./types";
import "./_input-field.scss";
import ForgotPassword from "../../atoms/ForgotPassword";

const InputField = ({
  type,
  leftIcon,
  value,
  errorText,
  labelText,
  placeholder,
  error,
  forgotPassword
}: inputField) => {
  return (
    <div className="input-field">
        <div className="label-forgotpassword-container">
            <Label>{labelText}</Label>
            {forgotPassword && <ForgotPassword text={"Forgot password?"}/>}
        </div>
      <>
        <div className="left-icon-field-container">
          {leftIcon && <span className="left-icon-holder">{leftIcon}</span>}
          <div className={`field-container ${error ? "error" : ""}`}>
            <input
              className="field"
              type={type}
              value={value}
              placeholder={placeholder}
            />
          </div>
        </div>
      </>
      {error && <ErrorText>{errorText}</ErrorText>}
    </div>
  );
};

export default InputField;
