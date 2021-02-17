const Button = (props) => {
  return (
    <button onClick={props.action} className={props.classes}>
      {props.name}
    </button>
  );
};
export default Button;
