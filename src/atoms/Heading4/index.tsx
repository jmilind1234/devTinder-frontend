import "./_heading-four.scss";

function Heading4({children}: {children: string}) {
  return (
      <h4 className="heading-four">{children}</h4>
  );
}

export default Heading4;