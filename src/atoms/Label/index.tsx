import "./_label.scss";

function Label({ children }: { children: string }) {
  return <label className="input-field-label">{children}</label>;
}

export default Label;
