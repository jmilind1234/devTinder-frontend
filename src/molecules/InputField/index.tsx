import Label from "../../atoms/Label";
import ErrorText from "../../atoms/ErrorText";
import type { inputField } from "./types";
import "./_input-field.scss";

const InputField = ({
  type,
  leftIcon,
  value,
  errorText,
  labelText,
  placeholder,
  error,
}: inputField) => {
  return (
    <div className="input-field">
      <Label>{labelText}</Label>
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
