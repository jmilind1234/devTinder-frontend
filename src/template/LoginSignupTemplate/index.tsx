import  Heading4  from '../../atoms/Heading4';
import { Link } from 'react-router-dom';
import "./_loginSignupTemplate.scss";
import './../../atoms/Link/_link.scss';


export const LoginSignupTemplate = ({
  headingText,
  headingStatus,
  contentText,
  contentStatus,
  form,
  formStatus=false,
  bottmText,
  bottomLinkText,
  bottomLinkStatus=false,
  bottomSectionStatus=false,
  bottomLinkTextStatus=false,
  bottomLink}:any) => {
  return (
    <div className="login-page">
        {headingStatus ? <Heading4>{headingText}</Heading4> :'' } 
        {contentStatus ? <p className="sign-in-text">{contentText}</p> : ''}
        {formStatus ? form : ''}
        {bottomSectionStatus ?
          <div className="sign-up-text-container">
            {bottomLinkTextStatus ? <p className="sign-up-text">{bottmText}</p> : ''}
            {bottomLinkStatus ? <Link to={bottomLink ? bottomLink :''} className="text-link">{bottomLinkText ? bottomLinkText : ''}</Link> : ''} 
          </div>
          : ''
        }
    </div>
  )
}
