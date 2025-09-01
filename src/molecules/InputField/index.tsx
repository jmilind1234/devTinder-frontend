import Label from "../../atoms/Label";
import ErrorText from "../../atoms/ErrorText";
import type { inputField } from "./types";
import "./_input-field.scss";
import ForgotPassword from "../../atoms/ForgotPassword";

const InputField = ({
  classes,
  type,
  leftIcon,
  value,
  errorText,
  labelText,
  placeholder,
  error,
  forgotPassword,
  changeHandler,
  blurHandler,
  focusHandler
}: inputField) => {
  return (
    <div className={`input-field ${classes ? classes : ""}`}>
        <div className="label-forgotpassword-container">
            <Label>{labelText}</Label>
            {forgotPassword && <ForgotPassword text={"Forgot password?"}/>}
        </div>
        <div className={`left-icon-field-container ${error ? "__error" : ""}`}>
          {leftIcon && <span className={`left-icon-holder`}>{leftIcon}</span>}
          <div className={`field-container`}>
            <input
              className="field"
              type={type}
              value={value}
              placeholder={placeholder}
              onChange={changeHandler}
              onBlur={blurHandler}
              onFocus={focusHandler}
            />
          </div>
        </div>
      {error && <ErrorText>{errorText}</ErrorText>}
    </div>
  );
};

export default InputField;
