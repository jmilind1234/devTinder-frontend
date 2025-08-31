import "./_button.scss";
import React from "react";

function Button({
  btnText,
  clickHandler,
}: {
  btnText: string;
  clickHandler: React.MouseEventHandler<HTMLButtonElement>;
}) {
  return (
    <button className="button" onClick={clickHandler}>
      {btnText}
    </button>
  );
}

export default Button;
