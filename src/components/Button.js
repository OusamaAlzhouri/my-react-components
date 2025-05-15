function Button(props) {
  return (
    <button className={props.variant === 'primary' ? 'primary' : 'secondary'}>
      {props.text}
    </button>
  );
}

export default Button;

