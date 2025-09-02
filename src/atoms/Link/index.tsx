import { Link } from "react-router-dom";
import "./_link.scss";

function TextLink({to,text}: {to: string, text: string}) {
    return <Link to={to} className="text-link">{text}</Link>
}

export default TextLink;