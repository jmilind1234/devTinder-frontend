import Heading4 from "../../atoms/Heading4";
import "./_loginSignupTemplate.scss";
import TextLink from "../../atoms/Link";
import type { LoginSignupTemplateProps } from "./types/types";
import Logo from "../../atoms/Logo";

export const LoginSignupTemplate = ({
  headingText,
  headingStatus,
  contentText,
  contentStatus,
  form,
  formStatus = false,
  bottomText,
  bottomLinkText,
  bottomLinkStatus = false,
  bottomSectionStatus = false,
  bottomLinkTextStatus = false,
  bottomLink,
}: LoginSignupTemplateProps) => {
  return (
    <div className="login-page">
      <Logo/>
      {headingStatus ? <Heading4>{headingText}</Heading4> : ""}
      {contentStatus ? <p className="sign-in-text">{contentText}</p> : ""}
      {formStatus ? form : ""}
      {bottomSectionStatus ? (
        <div className="sign-up-text-container">
          {bottomLinkTextStatus ? (
            <p className="sign-up-text">{bottomText}</p>
          ) : (
            ""
          )}
          {bottomLinkStatus ? (
            <TextLink
              to={bottomLink ? bottomLink : ""}
              text={bottomLinkText ? bottomLinkText : ""}
            />
          ) : null}
        </div>
      ) : null}
    </div>
  );
};
