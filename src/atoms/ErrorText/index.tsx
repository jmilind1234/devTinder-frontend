import "./_error-text.scss";

function ErrorText({children}: {children :string}){
    return <div className="error-text">{children}</div>
}

export default ErrorText;